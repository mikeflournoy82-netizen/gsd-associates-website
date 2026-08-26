// RESOURCE DOWNLOAD TRACKING & EMAIL ALERT SYSTEM
// Captures all downloads and sends immediate email to Michael

// Configuration
const TRACKING_CONFIG = {
  owner_email: 'gsdassociatesllc@gmail.com',
  enable_ga4: true,
  enable_email_alerts: true,
};

// Track resource download and send immediate email
window.gsdTrackResourceDownload = async function(resourceName, email, name = '') {
  console.log('🔍 Tracking download:', { resourceName, email, name });

  // 1. Log to Google Analytics 4
  if (TRACKING_CONFIG.enable_ga4 && typeof gtag !== 'undefined') {
    gtag('event', 'resource_download', {
      event_category: 'engagement',
      event_label: resourceName,
      user_email: email,
      user_name: name,
      timestamp: new Date().toISOString()
    });
    console.log('✅ GA4 event logged');
  }

  // 2. Send immediate email alert to Michael
  if (TRACKING_CONFIG.enable_email_alerts) {
    try {
      const response = await fetch('https://rkcizziq.gensparkclaw.com/api/send-download-alert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          resource_name: resourceName,
          email: email,
          name: name || 'Unknown',
          timestamp: new Date().toISOString(),
          user_agent: navigator.userAgent,
          referrer: document.referrer || 'direct',
          page_url: window.location.href,
        })
      });

      if (response.ok) {
        console.log('✅ Email alert sent to', TRACKING_CONFIG.owner_email);
      } else {
        console.error('❌ Failed to send email alert:', response.statusText);
      }
    } catch (error) {
      console.error('❌ Error sending email alert:', error);
    }
  }

  // 3. Log to Google Sheet (if available)
  if (typeof window.gsdLogToSheet === 'function') {
    window.gsdLogToSheet({
      timestamp: new Date().toISOString(),
      name: name || '',
      email: email,
      resource: resourceName,
      type: 'resource_download',
      source: 'resources_page'
    });
    console.log('✅ Logged to Google Sheet');
  }

  return true;
};

// Monitor all downloads via link clicks
window.gsdMonitorDownloads = function() {
  document.addEventListener('click', function(e) {
    if (e.target.href && e.target.href.includes('.pdf')) {
      const fileName = e.target.href.split('/').pop().replace('.pdf', '');
      console.log('📥 PDF download detected:', fileName);
      
      if (typeof gtag !== 'undefined') {
        gtag('event', 'file_download', {
          file_name: fileName,
          file_type: 'pdf',
          timestamp: new Date().toISOString()
        });
      }
    }
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', window.gsdMonitorDownloads);
} else {
  window.gsdMonitorDownloads();
}

window.TRACKING_CONFIG = TRACKING_CONFIG;
console.log('✅ Download tracking system loaded');
