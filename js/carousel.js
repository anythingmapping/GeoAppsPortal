var Carousel = (function () {
  
  var _duration = 500,
      _delay = 5000;
  
  var behavior = {
    slideLeft: function (list, duration) {
      $(list).animate(
        { 'margin-left': '-' + $(list).css('width') },
        duration,
        function () {
          $(this).find('li:last').after($(this).find('li:first'));
          $(this).css({ 'margin-left': '0px' });
        }
      );
    },
    slideRight: function (list, duration) {
      $(list).find('li:first').before($(list).find('li:last'));
      $(list).css('margin-left', 620);
      $(list).animate(
        { 'margin-left': 0 },
        duration,
        function () {
          $(this).css({ 'margin-left': '0' });
        }
      );
    }
  }
  
  function setup(duration, delay) {
    _duration = duration || _duration;
    _delay = delay || _delay;
  }
  
  function make(element, duration, delay) {
    
    var list = $(element).find('ul');
    
    if (list.length == 0) {
      console.error('Element is not parent to unordered list');
      return;
    }
    
    var listWidth = $(list).css('width');
    
    $(element).find('.control-left').click(function () { console.log('clicked left'); });
    
    setInterval(
      function () {
        behavior.slideLeft(list, duration);
      },
      delay || _delay
    );
  }
  
  return {
    make : make,
    setup : setup
  }
  
})();

Carousel.setup(500, 5000);
Carousel.make($('.news-carousel'));