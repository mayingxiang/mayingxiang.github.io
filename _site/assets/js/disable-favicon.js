// Disable favicon requests
(function() {
  var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  link.href = 'data:image/x-icon;,';
  document.getElementsByTagName('head')[0].appendChild(link);
})();