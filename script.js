$(function() {
  var mode = "neutral";
  $(".y-btn").click(function() {
    mode = "y";
    $(".y-btn,.g-btn").css({"transform":"scale(1)","opacity":"0.6"});
    $(".y-btn").css({"transform":"scale(1.15)","opacity":"1"});
  });
  $(".g-btn").click(function() {
    mode = "g";
    $(".y-btn,.g-btn").css({"transform":"scale(1)","opacity":"0.6"});
    $(".g-btn").css({"transform":"scale(1.15)","opacity":"1"});
  });

  var colorY = "rgba(249, 136, 204, 0.52)";
  var colorG = "rgba(76, 235, 163, 0.65)";

  $(".item").click(function() {
    $(".item").css("background-color","transparent");
    if ($(this).hasClass("clicked")) {
      $(this).removeClass("clicked clicked-y clicked-g");
    } else {
      if (mode == "y") {
        $(this).addClass("clicked clicked-y") ;
      } else if (mode == "g") {
        $(this).addClass("clicked clicked-g") ;
      }
    }
    $(".clicked-y").css("background-color",colorY);
    $(".clicked-g").css("background-color",colorG);
  });

  $(".all-y").click(function() {
    $(".item").css("background-color","transparent");
    $(this).parents(".item-container").find(".all").removeClass("clicked-all");
    if ($(this).hasClass("clicked-all")) {
      $(this).removeClass("clicked-all");
      $(this).parents(".item-container").find(".item").removeClass("clicked clicked-y");
    } else {
      $(this).addClass("clicked-all");
      $(this).parents(".item-container").find(".item").removeClass("clicked-g");
      $(this).parents(".item-container").find(".item").addClass("clicked clicked-y");
    }
    $(".clicked-y").css("background-color",colorY);
    $(".clicked-g").css("background-color",colorG);
  });
  $(".all-g").click(function() {
    $(".item").css("background-color","transparent");
    $(this).parents(".item-container").find(".all").removeClass("clicked-all");
    if ($(this).hasClass("clicked-all")) {
      $(this).removeClass("clicked-all");
      $(this).parents(".item-container").find(".item").removeClass("clicked clicked-g");
    } else {
      $(this).addClass("clicked-all");
      $(this).parents(".item-container").find(".item").removeClass("clicked-y");
      $(this).parents(".item-container").find(".item").addClass("clicked clicked-g");
    }
    $(".clicked-y").css("background-color",colorY);
    $(".clicked-g").css("background-color",colorG);
  });
  $(".all-d").click(function() {
    $(".item").css("background-color","transparent");
    $(this).parents(".item-container").find(".item").removeClass("clicked clicked-y clicked-g");
    $(".clicked-y").css("background-color",colorY);
    $(".clicked-g").css("background-color",colorG);
  });

  $(".top-btn").click(function() {
    $("html, body").animate({"scrollTop":0}, "100");
  });

});
