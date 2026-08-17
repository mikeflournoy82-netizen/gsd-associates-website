/**
 * GSD Associates — Centralized Tracking & Analytics
 * ===================================================
 * 
 * TODO: Replace the placeholder IDs below with your actual IDs:
 * 
 * 1. GA4_MEASUREMENT_ID  → Go to Google Analytics > Admin > Data Streams > Web
 *    Copy the Measurement ID (format: G-XXXXXXXXXX) and paste it below.
 * 
 * 2. GOOGLE_ADS_ID       → Go to Google Ads > Tools & Settings > Conversions
 *    Your account ID is in the top right (format: AW-XXXXXXXXXX).
 * 
 * 3. ADS_CONVERSION_LABEL → In Google Ads, create a "Website" conversion action
 *    for "Book a call" or "Schedule meeting". The label is in the event snippet
 *    (format: XXXXXXXXXXXXXXXXXXX).
 * 
 * After replacing the IDs, remove the console.warn() lines and set TRACKING_LIVE = true.
 */

(function() {
  'use strict';

  // ============================================================
  // CONFIGURATION — Update these values with your real IDs
  // ============================================================
  var GA4_MEASUREMENT_ID   = 'G-Q5BN79LCM6';          // GSD Associates GA4 — configured 2026-04-07
  var GOOGLE_ADS_ID        = 'AW-17945394532';          // GSD Associates Google Ads account
  var ADS_CONVERSION_LABEL = '60bMCLKG75ccEOT6g-1C';    // Submit lead form conversion
  var TRACKING_LIVE        = true;                       // LIVE — IDs configured 2026-04-07

  // Google Sheet webhook for resource downloads
  // TODO: Replace with a Google Apps Script web app URL for production.
  // To create one:
  //   1. Open the Google Sheet: https://docs.google.com/spreadsheets/d/1AY5AzFU-LItnU3XXSg7QPnKdxRk_daX9XckQTvjtUMQ/edit
  //   2. Go to Extensions > Apps Script
  //   3. Paste the script from google-apps-script-webhook.js (in this repo)
  //   4. Deploy as Web App (execute as: Me, access: Anyone)
  //   5. Copy the URL and paste it below
  var GOOGLE_SHEET_WEBHOOK = 'https://script.google.com/macros/s/AKfycbxg1xdEV01Gsc_h9_5sYZhBKk-D57cKXKuRPC7u0KIN8vi4W6UDFjYP69U9olwUnfuWFQ/exec';

  // ============================================================
  // LOAD GTAG.JS
  // ============================================================
  // Load gtag.js via Google Ads ID (Tag Assistant requires this specific ID)
  var gtagScript = document.createElement('script');
  gtagScript.async = true;
  gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + GOOGLE_ADS_ID;
  document.head.appendChild(gtagScript);

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;

  gtag('js', new Date());

  // Google Ads config (loaded first for Tag Assistant detection)
  gtag('config', GOOGLE_ADS_ID);

  // GA4 config
  gtag('config', GA4_MEASUREMENT_ID);

  if (!TRACKING_LIVE) {
    console.warn('[GSD Tracking] Running in PLACEHOLDER mode. Replace GA4_MEASUREMENT_ID, GOOGLE_ADS_ID, and ADS_CONVERSION_LABEL in tracking.js with real values.');
  }

  // ============================================================
  // CONVERSION TRACKING FUNCTIONS
  // ============================================================

  /**
   * Track a Calendly booking click as a conversion event
   */
  window.gsdTrackBookingClick = function(linkUrl) {
    // GA4 custom event
    gtag('event', 'booking_click', {
      event_category: 'conversion',
      event_label: linkUrl || 'calendly_click',
      value: 1
    });

    // Tag for Google Ads remarketing — builds "Calendly Clickers" audience
    gtag('event', 'calendly_intent', {
      send_to: GOOGLE_ADS_ID,
      value: 1,
      items: [{ item_id: 'strategy_call', item_name: 'Free Strategy Call', item_category: 'Leads' }]
    });

    // Google Ads conversion
    if (TRACKING_LIVE) {
      gtag('event', 'conversion', {
        send_to: GOOGLE_ADS_ID + '/' + ADS_CONVERSION_LABEL,
        value: 1.0,
        currency: 'USD',
        event_callback: function() {
          // Conversion recorded
        }
      });
    }
  };

  /**
   * Track a resource download as a conversion event
   */
  window.gsdTrackResourceDownload = function(resourceName, email) {
    // GA4 custom event
    gtag('event', 'resource_download', {
      event_category: 'conversion',
      event_label: resourceName,
      value: 1
    });

    // Google Ads conversion
    if (TRACKING_LIVE) {
      gtag('event', 'conversion', {
        send_to: GOOGLE_ADS_ID + '/' + ADS_CONVERSION_LABEL,
        value: 1.0,
        currency: 'USD'
      });
    }
  };

  /**
   * Log to Google Sheet (for resource downloads and exit-intent signups)
   */
  window.gsdLogToSheet = function(data) {
    // Enrich with timestamp if missing
    if (!data.timestamp) data.timestamp = new Date().toLocaleString('en-US', {timeZone:'America/New_York'});
    if (!data.source) data.source = 'Resource Download';

    fetch(GOOGLE_SHEET_WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).catch(function(e) {
      console.log('[GSD Tracking] Sheet log error (non-blocking):', e);
    });
  };

  // ============================================================
  // AUTO-TRACK CALENDLY LINK CLICKS
  // ============================================================
  document.addEventListener('click', function(e) {
    var link = e.target.closest('a[href*="calendly.com"]');
    if (link) {
      window.gsdTrackBookingClick(link.href);
    }
  });

  // ============================================================
  // TRACK CALENDLY INLINE EMBED EVENTS (if Calendly widget is present)
  // ============================================================
  window.addEventListener('message', function(e) {
    if (e.data && e.data.event) {
      if (e.data.event === 'calendly.event_scheduled') {
        // Someone actually booked a meeting via inline embed
        gtag('event', 'booking_completed', {
          event_category: 'conversion',
          event_label: 'calendly_embed_scheduled',
          value: 10
        });
        if (TRACKING_LIVE) {
          gtag('event', 'conversion', {
            send_to: GOOGLE_ADS_ID + '/' + ADS_CONVERSION_LABEL,
            value: 1.0,
            currency: 'USD'
          });
        }
      }
    }
  });

})();
