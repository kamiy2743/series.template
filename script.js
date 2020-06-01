$(function() {

  $(".save-btn").click(function() {
    $("html, body").scrollTop(0);
    html2canvas(document.querySelector("#capture-container")).then(canvas => {
    document.body.appendChild(canvas)
    $("canvas").attr("id","target");
    });
  });

  $(".convert-btn").click(function() {
    var canvas = document.getElementById("target");
    var dataURI = canvas.toDataURL();
    var image = document.getElementById("output");
    image.src = dataURI;
  });

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
    var index = $(".item").index(this);
    $(".item").eq(index + 270).removeClass("clicked-y clicked-g");
    if ($(this).hasClass("clicked")) {
      $(this).removeClass("clicked clicked-y clicked-g");
    } else {
      if (mode == "y") {
        $(this).addClass("clicked clicked-y");
        $(".item").eq(index + 270).addClass("clicked-y");
      } else if (mode == "g") {
        $(this).addClass("clicked clicked-g");
        $(".item").eq(index + 270).addClass("clicked-g");
      }
    }
  });

  $(".all-y").click(function() {
    var indexAll = $(this).parents(".item-container").index();
    $(this).parents(".item-container").find(".item").removeClass("clicked-g");
    $(this).parents(".item-container").find(".item").addClass("clicked clicked-y");
    $(".item-container").eq(indexAll + 6).find(".item").removeClass("clicked-g");
    $(".item-container").eq(indexAll + 6).find(".item").addClass("clicked-y");
  });
  $(".all-g").click(function() {
    var indexAll = $(this).parents(".item-container").index();
    $(this).parents(".item-container").find(".item").removeClass("clicked-y");
    $(this).parents(".item-container").find(".item").addClass("clicked clicked-g");
    $(".item-container").eq(indexAll + 6).find(".item").removeClass("clicked-y");
    $(".item-container").eq(indexAll + 6).find(".item").addClass("clicked-g");
  });
  $(".all-d").click(function() {
    var indexAll = $(this).parents(".item-container").index();
    $(this).parents(".item-container").find(".item").removeClass("clicked clicked-y clicked-g");
    $(".item-container").eq(indexAll + 6).find(".item").removeClass("clicked-y clicked-g");
  });

  $(".top-btn").click(function() {
    $("html, body").animate({"scrollTop":0}, "100");
  });

});
