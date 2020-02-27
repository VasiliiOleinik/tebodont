$(function() {
  // Cart product counter
    $('.cart--item__checbox input').on('change', function(){
      if($(this).prop("checked") == true) {
        $('.cart--footer__count').text(Number.parseInt(totalText) + 1);
      } else if($(this).prop("checked") == false){
        $('.cart--footer__count').text(Number.parseInt(totalText) - 1);
    }
    });
    // Remove products
    $('.item--btn.minus').on('click', function() {
      var inpVal = $(this).siblings('.item--input').val();
      var price = $(this).parent().siblings('.cart--item__price').find('.price--value').text();
      var total = $(this).parent().siblings('.cart--item__total').find('.price--value');
      var totalText = $('.cart--footer__count').text();
      if(inpVal == 1) {
        $(this).siblings('.item--input').val(1);
      } else {
        $(this).siblings('.item--input').val(--inpVal);
      }
    });
    // Add products
    $('.item--btn.plus').on('click', function() {
      var inpVal = $(this).siblings('.item--input').val();
      var price = $(this).parent().siblings('.cart--item__price').find('.price--value').text();
      var total = $(this).parent().siblings('.cart--item__total').find('.price--value');
      var totalText = $('.cart--footer__count').text();
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
});
