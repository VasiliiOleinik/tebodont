// Parallax Mouse

var width = $(window).width(),
  height = $(window).height(),
  iconParams = [];

$(".js-parallax").each(function() {
  var $me = $(this);

  iconParams.push({
    left: parseInt($(this).css("left")),
    top: parseInt($(this).css("top")),
    size: $me.data("size")
  });
});

$("body").mousemove(function(e) {
  var pageY = e.pageY,
      pageX = e.pageX;

  $(".js-parallax").each(function(index) {
    var size = iconParams[index].size,
        left = iconParams[index].left,
        top = iconParams[index].top;

    if ($(this).data("direction") == "horizontal") {
      $(this).css({
        left: left + (pageX / height - 0.5) * size
      });
    } else {
      $(this).css({
        top: top + (pageY / width - 0.5) * size,
        left: left + (pageX / height - 0.5) * size
      });
    }
  });
});
