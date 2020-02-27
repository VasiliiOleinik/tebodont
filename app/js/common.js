$(function() {
  // Cart product counter
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
      total.text(price * inpVal);
      $('.cart--footer__count').text(Number.parseInt(totalText) - 1);
    });
    // Add products
    $('.item--btn.plus').on('click', function() {
      var inpVal = $(this).siblings('.item--input').val();
      var price = $(this).parent().siblings('.cart--item__price').find('.price--value').text();
      var total = $(this).parent().siblings('.cart--item__total').find('.price--value');
      var totalText = $('.cart--footer__count').text();
      $(this).siblings('.item--input').val(++inpVal);
      total.text(price * inpVal);
      $('.cart--footer__count').text(Number.parseInt(totalText) + 1);
    });
    // Total products
    $('.item--input').each(function(index, item) {
      $('.cart--footer__count').text(index+1);
    });
});
