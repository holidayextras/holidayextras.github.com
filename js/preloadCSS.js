;(function(){

var addStylesheets = function() {
  var stylesheets = [
    '/css/styles.min.css',
    '//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css',
    '//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.5/styles/github.min.css'
  ];

  for(var i=0; i < stylesheets.length; i++) {
    insertStylesheet(stylesheets[i]);
  }
};

var insertStylesheet = function(href) {
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  var head = document.getElementsByTagName('head')[0];
  head.insertBefore(link, head.firstChild);
};

var raf = requestAnimationFrame || mozRequestAnimationFrame || webkitRequestAnimationFrame || msRequestAnimationFrame;

if (raf) {
  raf(addStylesheets);
} else {
  window.addEventListener('load', addStylesheets);
}

}());
