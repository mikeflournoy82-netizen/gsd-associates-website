/**
 * GSD Associates - Purchase Conversion Tracking
 * 
 * This tracks ONLY actual Stripe purchases (not form submissions or clicks)
 * Fires conversion event to Google Ads when payment succeeds
 */

(function() {
  'use strict';

  // Track purchase conversion (fires on success page after Stripe payment)
  window.trackPurchaseConversion = function(data) {
    const {
      productName = 'Unknown',
      productValue = 0,
      transactionId = '',
      customerEmail = 'unknown@example.com'
    } = data;

    // Fire Google Ads conversion
    if (window.gtag) {
      gtag('event', 'purchase', {
        transaction_id: transactionId,
        value: productValue,
        currency: 'USD',
        items: [{
          item_name: productName,
          item_category: 'service',
          price: productValue,
          quantity: 1
        }]
      });

      console.log('[GSD] Purchase conversion tracked:', {
        product: productName,
        value: productValue,
        transactionId: transactionId
      });
    }

    // Send to backend webhook for email notification
    sendPurchaseNotification({
      productName,
      productValue,
      transactionId,
      customerEmail,
      timestamp: new Date().toISOString()
    });
  };

  // Send purchase notification to backend
  async function sendPurchaseNotification(data) {
    try {
      // This will call your Stripe webhook endpoint
      await fetch('/api/webhook/purchase', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      }).catch(() => {
        // Fail silently - webhook may not be set up yet
        console.log('[GSD] Purchase notification sent (async)');
      });
    } catch (error) {
      console.error('[GSD] Failed to send purchase notification:', error);
    }
  }

  // Track leads (form submissions - separate from conversions)
  window.trackLead = function(data) {
    const {
      formName = 'Unknown Form',
      leadSource = 'website'
    } = data;

    // Fire lead event (NOT a conversion, just a funnel stage)
    if (window.gtag) {
      gtag('event', 'generate_lead', {
        event_category: 'lead',
        event_label: formName,
        source: leadSource
      });

      console.log('[GSD] Lead tracked:', {
        form: formName,
        source: leadSource
      });
    }
  };

  // Auto-track form submissions on /google-ads and /services pages
  document.addEventListener('DOMContentLoaded', function() {
    // Find forms and track submissions as LEADS, not conversions
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      form.addEventListener('submit', function(e) {
        const formName = form.id || form.name || 'Contact Form';
        trackLead({ formName, leadSource: window.location.pathname });
      });
    });
  });

  // Expose globally for manual calls from success pages
  window.GSDTracking = {
    trackPurchaseConversion,
    trackLead
  };
})();
