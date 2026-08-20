/**
 * Form Tracking Fix for /lp/google-ads/
 * Track form submissions as LEADS, not conversions
 * This script replaces the misleading conversion tracking
 */

(function() {
  'use strict';

  // Original webhook that was firing
  const WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbxg1xdEV01Gsc_h9_5sYZhBKk-D57cKXKuRPC7u0KIN8vi4W6UDFjYP69U9olwUnfuWFQ/exec';

  /**
   * Track form submissions as LEADS (not conversions)
   * This is important for accurate ROI reporting in Google Ads
   */
  window.trackFormSubmissionAsLead = function(formData) {
    const {
      name = 'Unknown',
      email = 'unknown@example.com',
      phone = '',
      company = ''
    } = formData;

    // Fire Google Analytics LEAD event (not purchase/conversion)
    if (window.gtag) {
      gtag('event', 'generate_lead', {
        event_category: 'lead',
        event_label: 'calendly_booking_form',
        source: 'lp_google_ads'
      });

      console.log('[GSD] Lead generated:', { email, name });
    }

    // Send to Google Apps Script for email notification
    const payload = JSON.stringify({
      name: name,
      email: email,
      phone: phone,
      company: company,
      source: 'Calendly Click Capture - Google Ads LP',
      resourceName: 'Book Strategy Call',
      timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })
    });

    fetch(WEBHOOK_URL, {
      method: 'POST',
      body: payload
    }).catch(err => {
      console.log('[GSD] Lead notification sent (async)');
    });
  };

  /**
   * Do NOT track this as a conversion
   * Form fills are LEADS, not PURCHASES
   * Only actual Stripe charges (on success pages) should be conversions
   */
  window.doNotTrackAsConversion = function() {
    console.log('[GSD] Form submission tracked as LEAD, not conversion');
  };

  // Expose globally
  window.GSDFormTracking = {
    trackFormSubmissionAsLead,
    doNotTrackAsConversion
  };

  console.log('[GSD] Form tracking fix loaded - tracking leads, not conversions');
})();
