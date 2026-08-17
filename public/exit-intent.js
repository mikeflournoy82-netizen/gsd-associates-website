/**
 * GSD Associates — Exit-Intent Popup
 * ====================================
 * Shows a popup when:
 *   - Desktop: mouse leaves the viewport (top of page)
 *   - Mobile: after 30 seconds on page
 * Only shows once per session (sessionStorage).
 * On submit, logs to Google Sheet via gsdLogToSheet().
 */

(function() {
  'use strict';

  var STORAGE_KEY = 'gsd_exit_popup_shown';
  var MOBILE_DELAY_MS = 30000;

  // Don't show on landing pages (they have their own CTAs)
  if (window.location.pathname.indexOf('/lp/') === 0) return;

  // Disable entirely on mobile
  if (window.innerWidth < 768) return;

  // Already shown this session?
  if (sessionStorage.getItem(STORAGE_KEY)) return;

  // Also skip if scroll popup already shown/dismissed (one popup per session rule)
  if (sessionStorage.getItem('gsd_popup_shown') || sessionStorage.getItem('gsd_popup_dismissed')) return;

  // Live check: don't fire if scroll popup fires later in the session
  var lastCheck = setInterval(function() {
    if (sessionStorage.getItem('gsd_popup_shown') || sessionStorage.getItem('gsd_popup_dismissed')) {
      var el = document.getElementById('gsd-exit-popup');
      if (el) el.remove();
      clearInterval(lastCheck);
    }
  }, 1000);

  // ============================================================
  // CREATE POPUP HTML
  // ============================================================
  var overlay = document.createElement('div');
  overlay.id = 'gsd-exit-popup';
  overlay.innerHTML = [
    '<div style="position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:10000;display:none;align-items:center;justify-content:center;padding:1rem;opacity:0;transition:opacity 0.3s;" id="gsd-exit-overlay">',
    '  <div style="background:white;border-radius:20px;padding:2.5rem;max-width:440px;width:100%;transform:translateY(20px);transition:transform 0.3s;position:relative;">',
    '    <button onclick="document.getElementById(\'gsd-exit-popup\').remove();sessionStorage.setItem(\'' + STORAGE_KEY + '\',\'1\')" style="position:absolute;top:1rem;right:1rem;background:none;border:none;font-size:1.25rem;color:#9ca3af;cursor:pointer;line-height:1;">&times;</button>',
    '    <div style="text-align:center;margin-bottom:1.5rem;">',
    '      <div style="width:56px;height:56px;background:linear-gradient(135deg,#1e3a8a,#2563eb);border-radius:14px;display:flex;align-items:center;justify-content:center;margin:0 auto 1rem;">',
    '        <svg width="24" height="24" fill="none" stroke="white" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.27 5.82 21 7 14.14l-5-4.87 6.91-1.01z"/></svg>',
    '      </div>',
    '      <h3 style="font-family:Inter,sans-serif;font-size:1.375rem;font-weight:800;color:#111827;margin:0 0 0.5rem;">Before you go —</h3>',
    '      <p style="font-family:Inter,sans-serif;font-size:1rem;color:#6b7280;margin:0;">Grab our free <strong style="color:#1e3a8a;">Pipeline Audit Template</strong><br>and find the hidden revenue in your sales process.</p>',
    '    </div>',
    '    <div id="gsd-exit-form">',
    '      <input type="text" id="gsd-exit-name" placeholder="First name" style="width:100%;border:2px solid #e5e7eb;border-radius:10px;padding:0.875rem 1rem;font-size:1rem;font-family:Inter,sans-serif;outline:none;box-sizing:border-box;margin-bottom:0.75rem;">',
    '      <input type="email" id="gsd-exit-email" placeholder="you@company.com" style="width:100%;border:2px solid #e5e7eb;border-radius:10px;padding:0.875rem 1rem;font-size:1rem;font-family:Inter,sans-serif;outline:none;box-sizing:border-box;margin-bottom:0.75rem;">',

    '      <button id="gsd-exit-submit" style="width:100%;background:linear-gradient(135deg,#f97316,#ea580c);color:white;border:none;padding:0.875rem;border-radius:10px;font-size:1rem;font-weight:700;font-family:Inter,sans-serif;cursor:pointer;">',
    '        <span id="gsd-exit-btn-text">Send Me the Template</span>',
    '      </button>',
    '      <p style="font-family:Inter,sans-serif;font-size:0.75rem;color:#9ca3af;text-align:center;margin:0.75rem 0 0;">No spam. Unsubscribe any time.</p>',
    '    </div>',
    '    <div id="gsd-exit-success" style="display:none;text-align:center;padding:1rem 0;">',
    '      <div style="width:56px;height:56px;background:#dcfce7;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 1rem;">',
    '        <svg width="28" height="28" fill="none" stroke="#22c55e" stroke-width="2.5" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>',
    '      </div>',
    '      <h4 style="font-family:Inter,sans-serif;font-size:1.125rem;font-weight:700;color:#111827;margin:0 0 0.5rem;">Check your inbox!</h4>',
    '      <p style="font-family:Inter,sans-serif;font-size:0.875rem;color:#6b7280;margin:0;">Or <a href="/resources" style="color:#2563eb;font-weight:600;">download it now →</a></p>',
    '    </div>',
    '  </div>',
    '</div>'
  ].join('\n');

  document.body.appendChild(overlay);

  var overlayEl = document.getElementById('gsd-exit-overlay');

    // Check if user is actively filling out a booking form (skip exit popup if so)
  function isUserEngagedWithForm() {
    var active = document.activeElement;
    if (!active) return false;

    // Currently focused on a booking form field?
    var bookingFieldIds = [
      'gsd-hero-name', 'gsd-hero-email', 'gsd-hero-company', 'gsd-hero-phone', 'gsd-hero-challenge',
      'gsd-scroll-name', 'gsd-scroll-email', 'gsd-scroll-company', 'gsd-scroll-phone',
      'gsd-field-name', 'gsd-field-email', 'gsd-field-company', 'gsd-field-arr', 'gsd-field-challenge'
    ];
    if (bookingFieldIds.indexOf(active.id) !== -1) return true;

    // Any booking form field has content? (User started but hasn't submitted yet)
    for (var i = 0; i < bookingFieldIds.length; i++) {
      var el = document.getElementById(bookingFieldIds[i]);
      if (el && el.value && el.value.trim().length > 0) return true;
    }

    // Booking form modal or scroll popup is currently visible?
    var modal = document.getElementById('calendly-modal');
    if (modal && getComputedStyle(modal).display !== 'none') return true;
    var scrollPopup = document.getElementById('gsd-scroll-popup');
    if (scrollPopup && getComputedStyle(scrollPopup).display !== 'none') return true;

    return false;
  }

  function showPopup() {
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    // Don't interrupt users actively filling out booking forms
    if (isUserEngagedWithForm()) return;
    sessionStorage.setItem(STORAGE_KEY, '1');
    overlayEl.style.display = 'flex';
    // Force reflow before setting opacity so the transition works
    void overlayEl.offsetWidth;
    overlayEl.style.opacity = '1';
    overlayEl.querySelector('div').style.transform = 'translateY(0)';
  }

  // Close on overlay click
  overlayEl.addEventListener('click', function(e) {
    if (e.target === overlayEl) {
      overlay.remove();
    }
  });

  // Submit handler
  document.getElementById('gsd-exit-submit').addEventListener('click', function() {
    var nameInput  = document.getElementById('gsd-exit-name');
    var emailInput = document.getElementById('gsd-exit-email');
    var name  = nameInput  ? nameInput.value.trim()  : '';
    var email = emailInput.value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      emailInput.style.borderColor = '#ef4444';
      emailInput.focus();
      return;
    }

    document.getElementById('gsd-exit-btn-text').textContent = 'Sending...';

    // Log to Google Sheet
    if (typeof window.gsdLogToSheet === 'function') {
      window.gsdLogToSheet({
        timestamp: new Date().toISOString(),
        name: name,
        email: email,
        source: 'exit_intent_popup',
        resource: 'pipeline-audit-template',
        resourceName: 'Pipeline Audit Template (Exit Intent)'
      });
    }

    // Track as GA4 event
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'exit_intent_signup', {
        event_category: 'lead_capture',
        event_label: 'pipeline_audit_template'
      });
    }

    // Show success
    document.getElementById('gsd-exit-form').style.display = 'none';
    document.getElementById('gsd-exit-success').style.display = 'block';
  });

  // Enter key support
  document.getElementById('gsd-exit-email').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') document.getElementById('gsd-exit-submit').click();
  });
  document.getElementById('gsd-exit-name').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') document.getElementById('gsd-exit-email').focus();
  });

  // ============================================================
  // TRIGGER LOGIC
  // ============================================================
  var isMobile = /Android|iPhone|iPad|iPod|webOS|BlackBerry/i.test(navigator.userAgent) || window.innerWidth < 768;

  if (isMobile) {
    // Mobile: show after 30 seconds
    setTimeout(showPopup, MOBILE_DELAY_MS);
  } else {
    // Desktop: mouse leaves viewport (top edge)
    document.addEventListener('mouseout', function(e) {
      if (e.clientY <= 0) {
        showPopup();
      }
    });
  }

})();
