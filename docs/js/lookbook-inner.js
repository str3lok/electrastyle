var lookbook = document.querySelector('.lookbook-inner');
if (lookbook) {

  var lbSlider = $('.lb-slider');

  var makeLbSlick = function () {
      $(lbSlider).slick({
          responsive: [
              {
                  breakpoint: 4000,
                  settings: 'unslick'
              },
              {
                  breakpoint: 920,
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      arrows: true,
                      fade: false,
                      dots: false,
                      autoplay: false,
                      speed: 500
                  }
              }
          ]
      });
  };

  makeLbSlick();

    currentWidth = $(window).width();

    $(window).on('resize', function () {
      var newWidth = $(window).width();
      if (newWidth !== currentWidth) {
          if(newWidth < 920 && currentWidth > 919 ) {
              $(lbSlider).slick('unslick');
              makeLbSlick();
          }
      }
        currentWidth = $(window).width();
    });
}