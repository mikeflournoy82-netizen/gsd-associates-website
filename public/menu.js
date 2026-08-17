// Mobile menu handler
(function(){
  var m = document.getElementById('mobileMenu');
  var btns = document.querySelectorAll('button');
  for (var i = 0; i < btns.length; i++) {
    if (btns[i].textContent.indexOf('☰') >= 0) {
      btns[i].onclick = function() {
        m.style.display = m.style.display === 'none' ? 'block' : 'none';
      };
      break;
    }
  }
})();

// Resources dropdown
function toggleResourcesDropdown(e) {
  e.stopPropagation();
  var menu = document.getElementById('resources-menu');
  var isOpen = menu.style.display === 'block';
  menu.style.display = isOpen ? 'none' : 'block';
}

// Close dropdown when clicking outside
document.addEventListener('click', function(e) {
  var wrap = document.getElementById('resources-dropdown-wrap');
  var menu = document.getElementById('resources-menu');
  if (menu && wrap && !wrap.contains(e.target)) {
    menu.style.display = 'none';
  }
});

// Close dropdown on Escape
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    var menu = document.getElementById('resources-menu');
    if (menu) menu.style.display = 'none';
  }
});
