$(function() {
  var particles = Particles.init({
    selector: "#background",
    connectParticles: true,
    maxParticles: 150,
    color: ["#9C9C9C"]
  });
  // Main 3D slider
  var carousel = $("#waterwheel-carousel").waterwheelCarousel({
    horizon: 1500,
    horizonOffset: 0,
    horizonOffsetMultiplier: .7,
    activeClassName: "active",
    separation: 150,
    flankingItems: 1,
    keyboardNav: true,
    edgeFadeEnabled: true,
    speed: 1500,
    animationEasing: 'linear',
    quickerForFurther: true,
    carouselRotationsLeft: 1000,
  });
  var counter = 1;
  $('.main--carousel--info').first().fadeIn();
  $('.brand-paralax').first().css({'opacity':1, 'transition': 'all 1.5s linear'});
  setInterval(function() {
    $('#waterwheel-next').click();
  }, 5000);

  $('#waterwheel-next').bind('click', function () {
    carousel.next();
    if(counter === 3) {
      counter = 1;
    } else {
      counter++;
    }
    $('.main--carousel--info').fadeOut(500);
    $('.brand-paralax').css({'opacity':0, 'transition': 'all .5s linear'});
    $('.main--carousel--info.brand-' + counter).fadeIn(1500);
    $('.brand-paralax.brand-' + counter).css({'opacity':1, 'transition': 'all 1.5s linear'});
    return false;
  });
});
