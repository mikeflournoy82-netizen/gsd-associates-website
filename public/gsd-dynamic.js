/*!
 * GSD Dynamic Content — auto-updates month names, countdowns, spots-left values
 * Include site-wide with: <script src="/gsd-dynamic.js" defer></script>
 *
 * Usage in HTML:
 *   <span data-gsd-month></span>            → "August", "September", etc.
 *   <span data-gsd-month-short></span>      → "Aug", "Sep", etc.
 *   <span data-gsd-year></span>             → "2026"
 *   <span data-gsd-days-left-in-month></span> → days remaining in current month
 *   <span data-gsd-sprint-countdown></span>   → "starts in 33 days" (until Sept 8, 2026)
 *   <span data-gsd-sprint-days></span>        → "33" (just the number)
 *   <span data-gsd-sprint-status></span>      → "Enrollment open", "Cohort in progress", "Waitlist open"
 */
(function(){
  if (window.gsdDynamicLoaded) return;
  window.gsdDynamicLoaded = true;

  var MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  var MONTHS_SHORT = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

  // Next cohort start date (update here when scheduling new cohorts)
  var NEXT_COHORT = new Date(2026, 8, 8); // September 8, 2026 (JS months are 0-indexed)
  var NEXT_COHORT_END = new Date(2026, 9, 3); // October 3, 2026

  function apply() {
    var now = new Date();
    var monthName = MONTHS[now.getMonth()];
    var monthShort = MONTHS_SHORT[now.getMonth()];
    var year = now.getFullYear();

    // Days left in the current calendar month
    var lastDayOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    var daysLeftInMonth = lastDayOfMonth - now.getDate();

    // Days until cohort start (or 0/negative if it's started/ended)
    var msPerDay = 1000 * 60 * 60 * 24;
    var daysUntilCohort = Math.ceil((NEXT_COHORT - now) / msPerDay);

    // Fill month/year
    document.querySelectorAll('[data-gsd-month]').forEach(function(el){ el.textContent = monthName; });
    document.querySelectorAll('[data-gsd-month-short]').forEach(function(el){ el.textContent = monthShort; });
    document.querySelectorAll('[data-gsd-year]').forEach(function(el){ el.textContent = year; });
    document.querySelectorAll('[data-gsd-days-left-in-month]').forEach(function(el){
      el.textContent = daysLeftInMonth;
    });

    // Sprint countdown
    document.querySelectorAll('[data-gsd-sprint-days]').forEach(function(el){
      el.textContent = Math.max(0, daysUntilCohort);
    });
    document.querySelectorAll('[data-gsd-sprint-countdown]').forEach(function(el){
      if (daysUntilCohort > 1) {
        el.textContent = 'starts in ' + daysUntilCohort + ' days';
      } else if (daysUntilCohort === 1) {
        el.textContent = 'starts tomorrow';
      } else if (daysUntilCohort === 0) {
        el.textContent = 'starts today';
      } else if (now < NEXT_COHORT_END) {
        el.textContent = 'cohort in progress';
      } else {
        el.textContent = 'waitlist open';
      }
    });
    document.querySelectorAll('[data-gsd-sprint-status]').forEach(function(el){
      if (daysUntilCohort > 7) {
        el.textContent = 'Enrollment open · ' + daysUntilCohort + ' days until start';
      } else if (daysUntilCohort > 0) {
        el.textContent = '⚡ Enrollment closes soon · ' + daysUntilCohort + ' days until start';
      } else if (now < NEXT_COHORT_END) {
        el.textContent = 'Cohort in progress · Join waitlist for next cohort';
      } else {
        el.textContent = 'Next cohort TBD · Join waitlist for updates';
      }
    });

    // Compose full month strings
    document.querySelectorAll('[data-gsd-current-month-year]').forEach(function(el){
      el.textContent = monthName + ' ' + year;
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', apply);
  } else {
    apply();
  }
})();
