(function () {
  // Single source of truth for the site header. Edit here once and it updates
  // on every page that includes <div id="site-header"></div>.
  var file = (location.pathname.split('/').pop() || 'index.html');
  if (file === '' || file === '/') file = 'index.html';

  var nav = [
    ['index.html', 'Home'],
    ['events.html', 'Events'],
    ['about.html', 'About'],
    ['contact.html', 'Visit Us']
  ].map(function (l) {
    var on = (l[0] === file) ? ' class="active" aria-current="page"' : '';
    return '<li><a' + on + ' href="' + l[0] + '">' + l[1] + '</a></li>';
  }).join('');

  var fb = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15.12 5.32H17V2.14A26.11 26.11 0 0 0 14.26 2c-2.72 0-4.58 1.66-4.58 4.7v2.6H6.61v3.56h3.07V22h3.68v-9.14h3.06l.46-3.56h-3.52V7.05c0-1.03.28-1.73 1.76-1.73z"/></svg>';
  var dc = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.317 4.3698a19.7913 19.7913 0 0 0-4.8851-1.5152.0741.0741 0 0 0-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 0 0-.0785-.037 19.7363 19.7363 0 0 0-4.8852 1.515.0699.0699 0 0 0-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 0 0 .0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 0 0 .0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 0 0-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 0 1-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 0 1 .0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 0 1 .0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 0 1-.0066.1276 12.2986 12.2986 0 0 1-1.873.8914.0766.0766 0 0 0-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 0 0 .0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 0 0 .0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 0 0-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>';

  var html =
    '<a class="skip-link" href="#main">Skip to content</a>' +
    '<div class="announce">Shop our full singles inventory online — free shipping on qualifying orders at our <a href="https://cardtropolistcg.tcgplayerpro.com/" target="_blank" rel="noopener">TCGplayer Pro store</a></div>' +
    '<header><div class="nav-wrap">' +
      '<a class="logo" href="index.html"><img class="logo-img" src="assets/logo.png" alt="Cardtropolis TCG logo"><div class="logo-text">Cardtropolis <span>TCG</span></div></a>' +
      '<input type="checkbox" id="nav-toggle" class="nav-toggle-box" aria-label="Toggle navigation menu">' +
      '<label for="nav-toggle" class="nav-toggle" aria-hidden="true"><span></span><span></span><span></span></label>' +
      '<nav aria-label="Main"><ul>' + nav +
        '<li class="social-nav">' +
          '<a class="social-ico fb" href="https://www.facebook.com/cardtropolistcg" target="_blank" rel="noopener" aria-label="Cardtropolis TCG on Facebook" title="Facebook">' + fb + '</a>' +
          '<a class="social-ico dc" href="https://discord.gg/FfGNFpCng9" target="_blank" rel="noopener" aria-label="Cardtropolis TCG on Discord" title="Discord">' + dc + '</a>' +
        '</li>' +
        '<li><a class="shop-btn" href="https://cardtropolistcg.tcgplayerpro.com/" target="_blank" rel="noopener">Shop Online</a></li>' +
      '</ul></nav>' +
    '</div></header>';

  var mount = document.getElementById('site-header');
  if (mount) { mount.outerHTML = html; }
})();
