$(function() {
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

    // var particles = Particles.init({
    //   selector: '#background',
    //   connectParticles: true,
    //   maxParticles: 150,
    //   color: ['#9C9C9C'],
    // });

  // Cart product counter
  var totalText = $(".cart--footer__count");
  var chk = $(".cart--body").find("input[type=checkbox]:checked").length;
  totalText.text(chk);
  $(".cart--item__checbox input").on("change", function() {
    var chk = $(".cart--body").find("input[type=checkbox]:checked").length;
    totalText.text(chk);
  });
  totalSUmm();
  // Remove products
  $(".item--btn.minus").on("click", function() {
    var price = $(this)
      .parent()
      .siblings(".cart--item__price")
      .find(".price--value")
      .text();
    var total = $(this)
      .parent()
      .siblings(".cart--item__total")
      .find(".price--value");
    var inpVal = $(this)
      .siblings(".item--input")
      .val();
    if (inpVal == 1) {
      $(this)
        .siblings(".item--input")
        .val(1);
    } else {
      $(this)
        .siblings(".item--input")
        .val(--inpVal);
    }
    total.text(price * inpVal);
    totalSUmm();
  });
  // Add products
  $(".item--btn.plus").on("click", function() {
    var price = $(this)
      .parent()
      .siblings(".cart--item__price")
      .find(".price--value")
      .text();
    var total = $(this)
      .parent()
      .siblings(".cart--item__total")
      .find(".price--value");
    var inpVal = $(this)
      .siblings(".item--input")
      .val();
    $(this)
      .siblings(".item--input")
      .val(++inpVal);
    total.text(price * inpVal);
    totalSUmm();
  });

  // Change currency
  $(".header--currency__active").on("click", function() {
    $(this)
      .siblings(".header--currency_list")
      .slideToggle();
  });
  $(".header--currency_list li").on("click", function() {
    $(".header--currency__active").text(
      $(this)
        .find("a")
        .text()
    );
  });
  $(".footer--currency__active").on("click", function() {
    console.log('true');
    $(this)
      .siblings(".footer--currency_list")
      .slideToggle();
  });
  $(".footer--currency_list li").on("click", function() {
    $(".footer--currency__active").text(
      $(this)
        .find("a")
        .text()
    );
  });
  // Change lang
  $(".header--lang__active").on("click", function() {
    $(this)
      .siblings(".header--lang_list")
      .slideToggle();
  });
  $(".header--lang_list li").on("click", function() {
    $(".header--lang__active").text(
      $(this)
        .find("a")
        .text()
    );
  });
  $(".footer--lang__active").on("click", function() {
    $(this)
      .siblings(".footer--lang_list")
      .slideToggle();
  });
  $(".footer--lang_list li").on("click", function() {
    $(".footer--lang__active").text(
      $(this)
        .find("a")
        .text()
    );
  });

  // Toggle delivery adress
  $(".right--form-field .input--checkbox").on("change", function() {
    if ($(this).val() == "np") {
      $(this)
        .parent()
        .parent()
        .find(".additionalInput")
        .slideDown();
    } else {
      $(".additionalInput").slideUp();
    }
  });

  // Hover product card
  if (screen.width > 767) {
    $(".catalog--product").hover(
      function() {
        $(this).css({ "z-index": "999" });
        $(this)
          .find(".catalog--product__content")
          .addClass("active");
        $(this)
          .find(".catalog--product__discount")
          .css({ display: "flex" });
        $(this)
          .find(".catalog--product__oldprice")
          .slideDown(100);
        $(this)
          .find(".link--btn")
          .slideDown(100);
      },
      function() {
        $(this).css({ "z-index": "1" });
        $(this)
          .find(".catalog--product__content")
          .removeClass("active");
        $(this)
          .find(".catalog--product__discount")
          .css({ display: "none" });
        $(this)
          .find(".catalog--product__oldprice")
          .slideUp(100);
        $(this)
          .find(".link--btn")
          .slideUp(100);
      }
    );
  }
  // Slider
  $(".reviews--carousel").slick({
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $(".slide-prev"),
    nextArrow: $(".slide-next"),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  });
  $(".partners--carousel").slick({
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false
        }
      }
    ]
  });
  $(".product--card__slider").slick({
    dots: true,
    autoplay: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $(".prouct-card__prev-slide"),
    nextArrow: $(".prouct-card__next-slide")
  });

  // Tabs
  $(".product--tab__header").on("click", function() {
    $(this).toggleClass("active");
    $(this)
      .siblings(".product--tab__body")
      .slideToggle();
  });
  $(".lifehucks--list__item span").on("click", function() {
    $(this).toggleClass("active");
    $(this)
      .siblings(".lifehucks--list__content")
      .slideToggle();
  });

  // Adaptive
  if (screen.width < 768) {
    $(".cart--item").each(function(index, item) {
      var adaptPrice = $(item).find(".cart--item__price");
      var adaptName = $(item).find(".cart--item__name");
      var adaptConter = $(item).find(".cart--item__counter");
      var adaptDel = $(item).find(".item--remove");
      adaptName.append(adaptPrice);
      adaptConter.append(adaptDel);
    });
    $(".product--adaptive--box-js").append($(".product--param__price"));
    $(".product--adaptive--box-js").append($(".product--tabs"));
    $(".product--adaptive--box-js").append($(".product--box__body .link--btn"));
  }
  // Download img
  $("#user-photo").change(function() {
    readURL(this);
  });

  // Add to cart modal
  $(".add-toCart--js").on("click", function() {
    var prodName = $(this)
      .siblings(".catalog--product__name")
      .text();
    var prodPrice = $(this)
      .siblings(".catalog--product__price")
      .find(".price--value")
      .text();
    var prodCurrency = $(this)
      .siblings(".catalog--product__price")
      .find(".price--currency")
      .text();
    var prodImg = $(this)
      .parent()
      .siblings(".catalog--product__img")
      .find("img")
      .attr("src");
    $("#add-toCart")
      .find(".product--item__img img")
      .attr("src", prodImg);
    $("#add-toCart")
      .find(".selected--prod__name")
      .text(prodName);
    $("#add-toCart")
      .find(".price--value")
      .text(prodPrice);
    $("#add-toCart")
      .find(".price--currency")
      .text(prodCurrency);
    $("#add-toCart").each(function(index, item) {
      var howMutchProd = $(item).find(".product--item").length;
      var totalSumm = $("#add-toCart").find(
        ".productsInCart__pay  .cart--footer__summ"
      );
      var sale = $("#add-toCart")
        .find(".productsInCart__sale  .cart--footer__summ")
        .text();
      $("#add-toCart")
        .find(" .cart--footer__count")
        .text(howMutchProd);
      totalSumm.text(prodPrice - Number.parseInt(sale));

      $("#add-toCart .item--btn.minus, #add-toCart .item--btn.plus").on(
        "click",
        function() {
          var count = $(item)
            .find(".item--input")
            .val();
          $(item)
            .find(".price--value")
            .text(count * prodPrice);
          totalSumm.text(count * prodPrice - Number(sale));
        }
      );
    });
  });

  if (screen.width < 992) {
    $('#waterwheel-carousel').remove();
    $('.brand-paralax').remove();
    $('.main--carousel__brands').remove();
  }
});

function totalSUmm() {
  var text = $(".cart--body")
    .find("input[type=checkbox]:checked")
    .parent()
    .parent()
    .find(".cart--item__total .price--value");
  var sum = 0;
  var sale = $(".cart--footer__sale .cart--footer__summ").text();
  for (var i = 0; i < text.length; i++) {
    $(".cart--footer__pay .cart--footer__summ").text(
      (sum += Number(text[i].innerHTML)) - Number(sale)
    );
  }
}

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function(e) {
      $(".download--img__image p").hide();
      $(".download--img__image img").attr("src", e.target.result);
    };
    reader.readAsDataURL(input.files[0]);
  }
}
