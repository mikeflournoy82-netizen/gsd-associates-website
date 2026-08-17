/*!
 * GSD Book Call Modal — shared across all pages
 * Renders a qualification-gated booking modal.
 * Loads on any page with <div id="calendly-modal"> or when window.gsdOpenBookModal() is called.
 */
(function(){
  if (window.gsdBookModalLoaded) return;
  window.gsdBookModalLoaded = true;

  var WEBHOOK = 'https://script.google.com/macros/s/AKfycbzVNSA9bdc2KiUjG6xwG-XqJFPJNM3dIuY_e4_5TONkv_fqq3s6JEPrgU-PkJlEeRQ/exec';
  var CALENDLY_BASE = 'https://calendly.com/gsdassociatesllc/30min';
  var CONV_LABEL = 'AW-17945394532/60bMCLKG75ccEOT6g-1C';

  var QUALIFIED_ROLES = ['founder', 'sales_leader', 'exec'];
  var LOW_ARR_TIERS = ['pre_revenue', 'under_500k'];

  function getMessageForRole(role) {
    if (role === 'sales_rep') return "GSD Associates works directly with founders and sales leaders to build sales teams. If you're an individual contributor looking to level up, our free resources will help more than a call would.";
    if (role === 'job_seeker') return "GSD Associates isn't a recruiting firm — we work with companies as a fractional sales leader. Michael has written extensively about breaking into sales leadership. The links below will be more valuable than a call.";
    if (role === 'student') return "Awesome that you're learning about sales leadership. We can't do research calls — but Michael has written the equivalent of a small book on the topic. Everything below is free.";
    return "GSD Associates works with founders and sales leaders. But we'd love to still help you learn.";
  }

  // Expose shared helper if not already loaded
  if (!window.gsdQualifyLead) {
    window.gsdQualifyLead = function(role, arr) {
      var isQualifiedRole = QUALIFIED_ROLES.indexOf(role) !== -1;
      var isLowArr = LOW_ARR_TIERS.indexOf(arr) !== -1;
      if (!isQualifiedRole) return { route: 'not_fit', message: getMessageForRole(role), role: role };
      if (isLowArr) return { route: 'low_arr', role: role };
      return { route: 'qualified', role: role };
    };
  }

  function isEmail(e){ return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e); }
  function isGarbage(t){
    var s = (t || '').toLowerCase();
    if (/^(test|asdf|qwer|abcd|xxxx|aaaa|1234|none|na|n\/a)$/i.test(s)) return true;
    if (/(.)\1{3,}/.test(s)) return true;
    return false;
  }

  function buildModalHTML(){
    return '' +
      '<div id="gsd-book-modal" style="display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.7);z-index:100000;align-items:center;justify-content:center;overflow-y:auto;padding:20px;font-family:-apple-system,BlinkMacSystemFont,\'Segoe UI\',Roboto,sans-serif;">' +
        '<div style="background:white;border-radius:20px;max-width:520px;width:100%;position:relative;box-shadow:0 25px 60px rgba(0,0,0,0.25);max-height:95vh;overflow-y:auto;">' +
          '<div style="background:#1e3a8a;padding:20px 24px;border-radius:20px 20px 0 0;display:flex;align-items:center;justify-content:space-between;">' +
            '<div>' +
              '<div style="color:white;font-weight:800;font-size:18px;">Book Your Free Strategy Call</div>' +
              '<div style="color:#93c5fd;font-size:13px;margin-top:2px;">Michael Flournoy · 30 Minutes · No pitch</div>' +
            '</div>' +
            '<button type="button" onclick="window.gsdCloseBookModal()" style="background:rgba(255,255,255,0.15);border:none;color:white;width:32px;height:32px;border-radius:50%;font-size:22px;cursor:pointer;line-height:1;display:flex;align-items:center;justify-content:center;padding:0;flex-shrink:0;">&times;</button>' +
          '</div>' +

          // FORM STEP
          '<div id="gsd-bm-form-step" style="padding:24px;">' +
            '<form id="gsd-bm-form" novalidate>' +
              '<div style="margin-bottom:12px;"><input type="text" id="gsd-bm-name" placeholder="Your name *" required style="width:100%;padding:12px 14px;border:2px solid #e5e7eb;border-radius:10px;font-size:14px;box-sizing:border-box;outline:none;font-family:inherit;" onfocus="this.style.borderColor=\'#1e3a8a\'" onblur="this.style.borderColor=\'#e5e7eb\'"></div>' +
              '<div style="margin-bottom:12px;"><input type="email" id="gsd-bm-email" placeholder="Work email *" required style="width:100%;padding:12px 14px;border:2px solid #e5e7eb;border-radius:10px;font-size:14px;box-sizing:border-box;outline:none;font-family:inherit;" onfocus="this.style.borderColor=\'#1e3a8a\'" onblur="this.style.borderColor=\'#e5e7eb\'"></div>' +
              '<div style="margin-bottom:12px;"><input type="text" id="gsd-bm-company" placeholder="Company *" required style="width:100%;padding:12px 14px;border:2px solid #e5e7eb;border-radius:10px;font-size:14px;box-sizing:border-box;outline:none;font-family:inherit;" onfocus="this.style.borderColor=\'#1e3a8a\'" onblur="this.style.borderColor=\'#e5e7eb\'"></div>' +
              '<div style="margin-bottom:12px;">' +
                '<select id="gsd-bm-role" required style="width:100%;padding:12px 14px;border:2px solid #e5e7eb;border-radius:10px;font-size:14px;box-sizing:border-box;outline:none;background:white;font-family:inherit;" onfocus="this.style.borderColor=\'#1e3a8a\'" onblur="this.style.borderColor=\'#e5e7eb\'">' +
                  '<option value="" disabled selected>Your role *</option>' +
                  '<option value="founder">Founder / CEO / Owner</option>' +
                  '<option value="sales_leader">Head of Sales / VP / Sales Leader</option>' +
                  '<option value="exec">Other C-Level / Executive</option>' +
                  '<option value="sales_rep">Sales Rep / IC</option>' +
                  '<option value="job_seeker">Looking for a Job / Career Advice</option>' +
                  '<option value="student">Student / Researcher</option>' +
                  '<option value="other">Other</option>' +
                '</select>' +
              '</div>' +
              '<div style="margin-bottom:12px;">' +
                '<select id="gsd-bm-arr" required style="width:100%;padding:12px 14px;border:2px solid #e5e7eb;border-radius:10px;font-size:14px;box-sizing:border-box;outline:none;background:white;font-family:inherit;" onfocus="this.style.borderColor=\'#1e3a8a\'" onblur="this.style.borderColor=\'#e5e7eb\'">' +
                  '<option value="" disabled selected>Current ARR *</option>' +
                  '<option value="pre_revenue">Pre-revenue</option>' +
                  '<option value="under_500k">Under $500K</option>' +
                  '<option value="500k_1m">$500K – $1M</option>' +
                  '<option value="1m_3m">$1M – $3M</option>' +
                  '<option value="3m_5m">$3M – $5M</option>' +
                  '<option value="5m_10m">$5M – $10M</option>' +
                  '<option value="10m_plus">$10M+</option>' +
                '</select>' +
              '</div>' +
              '<div style="margin-bottom:12px;"><input type="tel" id="gsd-bm-phone" placeholder="Phone (optional)" style="width:100%;padding:12px 14px;border:2px solid #e5e7eb;border-radius:10px;font-size:14px;box-sizing:border-box;outline:none;font-family:inherit;" onfocus="this.style.borderColor=\'#1e3a8a\'" onblur="this.style.borderColor=\'#e5e7eb\'"></div>' +
              '<div style="margin-bottom:14px;"><textarea id="gsd-bm-challenge" placeholder="Biggest sales challenge right now *" rows="2" required style="width:100%;padding:12px 14px;border:2px solid #e5e7eb;border-radius:10px;font-size:14px;box-sizing:border-box;outline:none;resize:none;font-family:inherit;" onfocus="this.style.borderColor=\'#1e3a8a\'" onblur="this.style.borderColor=\'#e5e7eb\'"></textarea></div>' +
              '<div id="gsd-bm-error" style="display:none;background:#fef2f2;border:1px solid #fecaca;color:#b91c1c;padding:10px 14px;border-radius:8px;font-size:13px;margin-bottom:12px;text-align:center;font-weight:500;"></div>' +
              // Honeypot
              '<div style="position:absolute;left:-9999px;top:-9999px;opacity:0;pointer-events:none;" aria-hidden="true"><input type="text" id="gsd-bm-hp" name="website" tabindex="-1" autocomplete="off"></div>' +
              '<button type="submit" id="gsd-bm-submit" style="width:100%;background:linear-gradient(135deg,#f97316,#ea580c);color:white;font-weight:800;font-size:16px;padding:14px;border:none;border-radius:10px;cursor:pointer;">Reserve My Free Strategy Call →</button>' +
              '<div style="display:flex;justify-content:center;gap:14px;margin-top:12px;flex-wrap:wrap;"><span style="color:#6b7280;font-size:12px;">🔒 Private &amp; secure</span><span style="color:#6b7280;font-size:12px;">🚫 No spam</span><span style="color:#6b7280;font-size:12px;">📅 Pick your time next</span></div>' +
            '</form>' +
          '</div>' +

          // LOADING STEP
          '<div id="gsd-bm-loading-step" style="display:none;text-align:center;padding:60px 24px;">' +
            '<div style="width:44px;height:44px;border:4px solid #e5e7eb;border-top-color:#ea580c;border-radius:50%;animation:gsdBmSpin 0.8s linear infinite;margin:0 auto 20px;"></div>' +
            '<div style="font-weight:700;color:#1e3a8a;font-size:17px;margin-bottom:8px;">Great! Now pick your time on the next screen →</div>' +
            '<div style="color:#6b7280;font-size:14px;">Redirecting to Calendly...</div>' +
          '</div>' +

          // NOT-A-FIT STEP
          '<div id="gsd-bm-notfit-step" style="display:none;padding:24px;">' +
            '<div style="font-size:44px;text-align:center;margin-bottom:10px;">🙏</div>' +
            '<div style="font-weight:800;color:#1e3a8a;font-size:20px;margin-bottom:12px;text-align:center;">Thanks, <span id="gsd-bm-nf-name">friend</span> — not the right fit.</div>' +
            '<div id="gsd-bm-nf-msg" style="color:#4b5563;font-size:14px;line-height:1.55;margin-bottom:18px;">GSD Associates works with founders and sales leaders.</div>' +
            '<div style="display:flex;flex-direction:column;gap:10px;">' +
              '<a href="/playbook/" style="display:flex;align-items:center;gap:12px;padding:12px;background:#f9fafb;border-radius:10px;text-decoration:none;color:#111827;border:1px solid #e5e7eb;"><span style="font-size:22px;">📘</span><div><div style="font-weight:700;font-size:14px;">The 0-to-$100M Playbook</div><div style="color:#6b7280;font-size:12px;">Free PDF from Michael</div></div></a>' +
              '<a href="/blog/" style="display:flex;align-items:center;gap:12px;padding:12px;background:#f9fafb;border-radius:10px;text-decoration:none;color:#111827;border:1px solid #e5e7eb;"><span style="font-size:22px;">✍️</span><div><div style="font-weight:700;font-size:14px;">The Blog</div><div style="color:#6b7280;font-size:12px;">Sales leadership deep-dives</div></div></a>' +
              '<a href="/resources/" style="display:flex;align-items:center;gap:12px;padding:12px;background:#f9fafb;border-radius:10px;text-decoration:none;color:#111827;border:1px solid #e5e7eb;"><span style="font-size:22px;">🛠️</span><div><div style="font-weight:700;font-size:14px;">Free Templates</div><div style="color:#6b7280;font-size:12px;">Pipeline audit, checklists</div></div></a>' +
            '</div>' +
          '</div>' +

          // LOW-ARR STEP
          '<div id="gsd-bm-lowarr-step" style="display:none;padding:24px;">' +
            '<div style="font-size:44px;text-align:center;margin-bottom:10px;">🌱</div>' +
            '<div style="font-weight:800;color:#1e3a8a;font-size:20px;margin-bottom:12px;text-align:center;">Hey <span id="gsd-bm-la-name">friend</span> — love that you\'re building.</div>' +
            '<div style="color:#4b5563;font-size:14px;line-height:1.55;margin-bottom:16px;">Honest answer: a fractional VP isn\'t the right investment yet. At your stage you need to sell it yourself. When you\'re ready, these WILL help:</div>' +
            '<div style="display:flex;flex-direction:column;gap:10px;margin-bottom:14px;">' +
              '<a href="/products/sales-os/" style="display:flex;align-items:center;gap:12px;padding:14px;background:linear-gradient(135deg,#1e3a8a,#2563eb);border-radius:10px;text-decoration:none;color:white;"><span style="font-size:26px;">🚀</span><div style="flex:1;"><div style="font-weight:800;font-size:15px;">Sales OS — $47/mo</div><div style="color:#dbeafe;font-size:12px;">Templates + community. Cancel anytime.</div></div><span>→</span></a>' +
              '<a href="/products/sales-audit/" style="display:flex;align-items:center;gap:12px;padding:14px;background:white;border-radius:10px;text-decoration:none;color:#111827;border:2px solid #f97316;"><span style="font-size:26px;">🔍</span><div style="flex:1;"><div style="font-weight:800;font-size:15px;color:#111827;">Sales Audit — $497</div><div style="color:#6b7280;font-size:12px;">Custom 10-page report on where deals die</div></div><span style="color:#f97316;">→</span></a>' +
            '</div>' +
            '<div style="background:#fef3c7;border-radius:8px;padding:12px;"><div style="color:#78350f;font-size:12px;">💡 Or start free: <a href="/playbook/" style="color:#1e3a8a;font-weight:700;">The 0-to-$100M Sales Playbook</a></div></div>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<style>@keyframes gsdBmSpin{to{transform:rotate(360deg);}}</style>';
  }

  function ensureModal(){
    if (document.getElementById('gsd-book-modal')) return;
    var container = document.createElement('div');
    container.innerHTML = buildModalHTML();
    // Move all children into body
    while (container.firstChild) {
      document.body.appendChild(container.firstChild);
    }
    wireForm();
    wireCloseHandlers();
  }

  function wireCloseHandlers(){
    var modal = document.getElementById('gsd-book-modal');
    if (!modal) return;
    modal.addEventListener('click', function(e){
      if (e.target === this) window.gsdCloseBookModal();
    });
    document.addEventListener('keydown', function(e){
      if (e.key === 'Escape') {
        var m = document.getElementById('gsd-book-modal');
        if (m && m.style.display !== 'none') window.gsdCloseBookModal();
      }
    });
  }

  function showError(msg){
    var err = document.getElementById('gsd-bm-error');
    if (!err) return;
    err.textContent = msg;
    err.style.display = 'block';
    setTimeout(function(){ err.style.display = 'none'; }, 5000);
  }

  function wireForm(){
    var form = document.getElementById('gsd-bm-form');
    if (!form) return;

    form.addEventListener('submit', function(e){
      e.preventDefault();

      var n = document.getElementById('gsd-bm-name').value.trim();
      var em = document.getElementById('gsd-bm-email').value.trim();
      var co = document.getElementById('gsd-bm-company').value.trim();
      var ro = document.getElementById('gsd-bm-role').value;
      var ar = document.getElementById('gsd-bm-arr').value;
      var ph = document.getElementById('gsd-bm-phone').value.trim();
      var ch = document.getElementById('gsd-bm-challenge').value.trim();
      var hp = document.getElementById('gsd-bm-hp').value.trim();

      // Honeypot — silent fail for bots
      if (hp) {
        document.getElementById('gsd-bm-form-step').style.display = 'none';
        document.getElementById('gsd-bm-loading-step').style.display = 'block';
        return;
      }

      // Reset borders
      ['gsd-bm-name','gsd-bm-email','gsd-bm-company','gsd-bm-role','gsd-bm-arr','gsd-bm-challenge'].forEach(function(id){
        var el = document.getElementById(id);
        if (el) el.style.borderColor = '#e5e7eb';
      });

      // Required field check
      if (!n || !em || !co || !ro || !ar || !ch) {
        ['gsd-bm-name','gsd-bm-email','gsd-bm-company','gsd-bm-role','gsd-bm-arr','gsd-bm-challenge'].forEach(function(id){
          var el = document.getElementById(id);
          var val = el.tagName === 'SELECT' ? el.value : el.value.trim();
          if (!val) el.style.borderColor = '#ef4444';
        });
        showError('Please fill out all required fields.');
        return;
      }

      // Length checks
      if (n.length < 2) { document.getElementById('gsd-bm-name').style.borderColor='#ef4444'; showError('Please enter your full name.'); return; }
      if (co.length < 2) { document.getElementById('gsd-bm-company').style.borderColor='#ef4444'; showError('Please enter your company name.'); return; }
      if (ch.length < 10) { document.getElementById('gsd-bm-challenge').style.borderColor='#ef4444'; showError('Tell us a bit more about your sales challenge (at least 10 characters).'); return; }
      if (!isEmail(em)) { document.getElementById('gsd-bm-email').style.borderColor='#ef4444'; showError('Please enter a valid email address.'); return; }
      if (isGarbage(n) || isGarbage(co)) {
        if (isGarbage(n)) document.getElementById('gsd-bm-name').style.borderColor='#ef4444';
        if (isGarbage(co)) document.getElementById('gsd-bm-company').style.borderColor='#ef4444';
        showError('Please enter real information so we can help you.');
        return;
      }

      var q = window.gsdQualifyLead(ro, ar);
      var firstName = (n.split(' ')[0] || n);
      var pageSource = 'BookModal — ' + (document.title || window.location.pathname);

      // Log to webhook
      try {
        fetch(WEBHOOK, {
          method: 'POST', mode: 'no-cors',
          body: JSON.stringify({
            name: n, email: em, company: co, role: ro, arr: ar, phone: ph, challenge: ch,
            routing: q.route, source: pageSource, page: window.location.pathname,
            timestamp: new Date().toLocaleString('en-US', {timeZone:'America/New_York'})
          })
        });
      } catch(err){}

      // ROUTE 1: Not a fit
      if (q.route === 'not_fit') {
        document.getElementById('gsd-bm-form-step').style.display = 'none';
        document.getElementById('gsd-bm-nf-name').textContent = firstName;
        document.getElementById('gsd-bm-nf-msg').textContent = q.message;
        document.getElementById('gsd-bm-notfit-step').style.display = 'block';
        return;
      }

      // ROUTE 2: Low ARR
      if (q.route === 'low_arr') {
        document.getElementById('gsd-bm-form-step').style.display = 'none';
        document.getElementById('gsd-bm-la-name').textContent = firstName;
        document.getElementById('gsd-bm-lowarr-step').style.display = 'block';
        try { if (window.gtag) gtag('event','generate_lead',{event_category:'lead_capture',event_label:'book_modal_low_arr',value:50,currency:'USD'}); } catch(err){}
        return;
      }

      // ROUTE 3: Qualified
      document.getElementById('gsd-bm-submit').disabled = true;
      document.getElementById('gsd-bm-form-step').style.display = 'none';
      document.getElementById('gsd-bm-loading-step').style.display = 'block';

      var cu = CALENDLY_BASE + '?name=' + encodeURIComponent(n) +
        '&email=' + encodeURIComponent(em) +
        '&a1=' + encodeURIComponent(co) +
        '&a2=' + encodeURIComponent(ph) +
        '&a3=' + encodeURIComponent(ch);

      try {
        if (window.gtag) {
          gtag('event','conversion',{'send_to': CONV_LABEL, 'value':500.0, 'currency':'USD', 'transaction_id': em + '-' + Date.now()});
          gtag('event','book_appointment',{event_category:'conversion',event_label:'book_modal',value:500});
          gtag('event','generate_lead',{event_category:'conversion',event_label:'book_modal',value:500,currency:'USD'});
        }
        if (window.fbq) fbq('track','Lead',{content_name:'Strategy Call Booking',value:500,currency:'USD'});
      } catch(err){}

      setTimeout(function(){ window.location.href = cu; }, 1200);
    });
  }

  function resetModal(){
    var form = document.getElementById('gsd-bm-form');
    if (form) form.reset();
    var steps = ['gsd-bm-form-step','gsd-bm-loading-step','gsd-bm-notfit-step','gsd-bm-lowarr-step'];
    steps.forEach(function(id){
      var el = document.getElementById(id);
      if (el) el.style.display = id === 'gsd-bm-form-step' ? 'block' : 'none';
    });
    var submit = document.getElementById('gsd-bm-submit');
    if (submit) submit.disabled = false;
  }

  // Public API
  window.gsdOpenBookModal = function(source){
    ensureModal();
    resetModal();
    var m = document.getElementById('gsd-book-modal');
    if (m) {
      m.style.display = 'flex';
      document.body.style.overflow = 'hidden';
      if (window.gtag) {
        try { gtag('event','book_modal_opened',{event_category:'engagement',event_label: source || document.title}); } catch(err){}
      }
    }
  };

  window.gsdCloseBookModal = function(){
    var m = document.getElementById('gsd-book-modal');
    if (m) { m.style.display = 'none'; document.body.style.overflow = 'auto'; }
  };

  // Auto-wire: intercept clicks on legacy calendly-modal openers
  document.addEventListener('DOMContentLoaded', function(){
    ensureModal();

    // Intercept any anchor/button that references calendly-modal or the iframe
    document.body.addEventListener('click', function(e){
      var el = e.target.closest('a, button');
      if (!el) return;
      var onc = el.getAttribute('onclick') || '';
      var href = el.getAttribute('href') || '';
      // Legacy pattern: onclick opens calendly-modal / calendly-iframe
      var opensLegacyModal = onc.indexOf('calendly-modal') !== -1 || onc.indexOf('calendly-iframe') !== -1;
      // Direct Calendly link
      var directCalendly = href.indexOf('calendly.com/gsdassociatesllc') !== -1;

      if (opensLegacyModal || directCalendly) {
        e.preventDefault();
        e.stopImmediatePropagation();
        window.gsdOpenBookModal(el.textContent.trim().slice(0, 40));
      }
    }, true); // capture phase to beat inline onclick
  });

  // If DOM already loaded, run now
  if (document.readyState !== 'loading') {
    ensureModal();
    document.body && document.body.addEventListener('click', function(e){
      var el = e.target.closest('a, button');
      if (!el) return;
      var onc = el.getAttribute('onclick') || '';
      var href = el.getAttribute('href') || '';
      var opensLegacyModal = onc.indexOf('calendly-modal') !== -1 || onc.indexOf('calendly-iframe') !== -1;
      var directCalendly = href.indexOf('calendly.com/gsdassociatesllc') !== -1;
      if (opensLegacyModal || directCalendly) {
        e.preventDefault();
        e.stopImmediatePropagation();
        window.gsdOpenBookModal(el.textContent.trim().slice(0, 40));
      }
    }, true);
  }
})();
