// Calendly Conversion Tracking for Google Ads & GA4
// Fires when user completes a Calendly booking

(function() {
  // Listen for Calendly booking completion events
  window.addEventListener('message', function(e) {
    // Calendly sends event_scheduled message when booking completes
    if (e.data.source === 'calendly.com' && e.data.action === 'calendly.event_scheduled') {
      console.log('✅ Calendly booking detected:', e.data);
      
      // Fire Google Ads conversion
      // Using the conversion ID for "Book Appointment" conversion action
      if (typeof gtag !== 'undefined') {
        gtag('event', 'conversion', {
          'send_to': 'AW-17945394532/YnkdCJ3G75ccEOT6g-1C',
          'value': 500,
          'currency': 'USD',
          'transaction_id': 'calendly_' + Date.now()
        });
        console.log('✅ Google Ads conversion event fired');
      }
      
      // Fire GA4 event for custom tracking
      if (typeof gtag !== 'undefined') {
        gtag('event', 'book_appointment', {
          'booking_source': 'calendly',
          'event_category': 'conversion',
          'event_label': 'calendly_booking_completed',
          'value': 500
        });
        console.log('✅ GA4 book_appointment event fired');
      }
      
      // Also track in GA4 as explicit conversion
      gtag('event', 'purchase', {
        'value': 500,
        'currency': 'USD',
        'items': [{
          'item_id': 'book_appointment',
          'item_name': 'Calendly Booking',
          'quantity': 1,
          'price': 500
        }]
      });
      console.log('✅ GA4 purchase event fired');
    }
  });
  
  // Also handle direct Calendly iFrame embeds on page
  if (window.Calendly) {
    window.Calendly.initBadgeWidget({
      url: 'https://calendly.com/michael-flournoy/30min',
      text: 'Book Call',
      color: '#ff6b35'
    });
  }
})();
