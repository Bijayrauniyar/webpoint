import $ from "jquery"

$.fn.visible = function (partial) {
  var $t = $(this),
    $w = $(window),
    viewTop = $w.scrollTop(),
    viewBottom = viewTop + $w.height(),
    _top = $t.offset().top,
    _bottom = _top + $t.height(),
    compareTop = partial === true ? _bottom : _top,
    compareBottom = partial === true ? _top : _bottom

  return compareBottom <= viewBottom && compareTop >= viewTop
}

var animate = $(".animate")
var win = $(window)
$(document).ready(function () {
  //animate while visible
  animate.each(function (i, el) {
    var el = $(el)
    if (el.visible(true)) {
      el.addClass("fadeIn")
    }
  })

  //follow mouse
  // $(".media-container").mousemove(function (e) {
  //   console.log("moved")
  //   $(".open-case").animate(
  //     {
  //       left: e.pageX + "px",
  //       top: e.pageY + "px",
  //     },
  //     0
  //   )
  // })
})

//animate while visible on scroll
win.scroll(function () {
  animate.each(function (i, el) {
    var el = $(el)
    if (el.visible(true)) {
      el.addClass("fadeIn")
    }
  })
})
