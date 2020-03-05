$(function() {
  // Cart product counter
    $('.cart--item__checbox input').on('change', function(){
      var totalText = $('.cart--footer__count').text();
      if($(this).prop("checked") == true) {
        $('.cart--footer__count').text(Number.parseInt(totalText) + 1);
      } else if($(this).prop("checked") == false){
        $('.cart--footer__count').text(Number.parseInt(totalText) - 1);
    }
    });
    // Remove products
    $('.item--btn.minus').on('click', function() {
      var inpVal = $(this).siblings('.item--input').val();
      if(inpVal == 1) {
        $(this).siblings('.item--input').val(1);
      } else {
        $(this).siblings('.item--input').val(--inpVal);
      }
    });
    // Add products
    $('.item--btn.plus').on('click', function() {
      var inpVal = $(this).siblings('.item--input').val();
      $(this).siblings('.item--input').val(++inpVal);
    });

  // Change currency
  $('.header--currency__active').on('click', function() {
    $(this).siblings('.header--currency_list').slideToggle();
  });
  $('.header--currency_list li').on('click', function() {
    $('.header--currency__active').text($(this).find('a').text());
  });
  // Change lang
  $('.header--lang__active').on('click', function() {
    $(this).siblings('.header--lang_list').slideToggle();
  });
  $('.header--lang_list li').on('click', function() {
    $('.header--lang__active').text($(this).find('a').text());
  });

  // Toggle delivery adress
  $('.right--form-field .input--checkbox').on('change', function() {
    if($(this).val() == 'np'){
      $(this).parent().parent().find('.additionalInput').slideDown();
    } else {
      $(this).parent().parent().find('.additionalInput').slideDown();
    }
  });

  // Hover product card
  $('.catalog--product').hover(function(){
    $(this).css({'z-index': '999'});
    $(this).find('.catalog--product__content').addClass('active');
    $(this).find('.catalog--product__discount').css({'display':'flex'});
    $(this).find('.catalog--product__oldprice').slideDown(100);
    $(this).find('.link--btn').slideDown(100);
  }, function() {
    $(this).css({'z-index': '1'});
    $(this).find('.catalog--product__content').removeClass('active');
    $(this).find('.catalog--product__discount').css({'display':'none'});
    $(this).find('.catalog--product__oldprice').slideUp(100);
    $(this).find('.link--btn').slideUp(100);
  });
  // Slider
  $('.reviews--carousel').slick({
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.slide-prev'),
    nextArrow: $('.slide-next'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });
});
