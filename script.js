$(function() {
  for (var i = 0; i <= 541; i++) {
    var jsonObj = localStorage.getItem(`Key${i}`);
    var jsObj = JSON.parse(jsonObj);
    console.log(jsObj);
    $(".item").eq(jsObj.index).attr("class", jsObj.class);
  }

  $(".save-btn").click(function() {
    for (var i = 0; i <= 541; i++) {
      var obj = {index: i, class: $(".item").eq(i).attr("class")}
      console.log(obj);
      localStorage.setItem(`Key${i}`, JSON.stringify(obj));
    }
    $("html, body").scrollTop(0);
    $("canvas").remove();
    $("#capture-container").removeClass("none");
    html2canvas(document.querySelector("#capture-container")).then(canvas => {
    document.body.appendChild(canvas)
    $("canvas").attr("id","target");
    $("canvas").addClass("none");
    $("#capture-container").addClass("none");
    });
    $("#error").addClass("none");
    $(".save-btn").removeClass("not-saved");
  });
  $("#for-android").click(function() {
    $("#for-android").toggleClass("fa-android-active");
    $(".save-btn").toggleClass("save-btn-android");
    $("#capture").toggleClass("capture-android");
  });

  $(".convert-btn").click(function() {
    if ($(".save-btn").hasClass("not-saved")) {
      $("#error").removeClass("none");
    } else {
      $("#capture-result").removeClass("none");
    }
    var canvas = document.getElementById("target");
    var dataURI = canvas.toDataURL();
    var image = document.getElementById("output");
    image.src = dataURI;
  });

  var mode = "neutral";
  $(".o-btn").click(function() {
    mode = "o";
    $(".o-btn,.y-btn,.g-btn").css({"transform":"scale(1)","opacity":"0.6"});
    $(".o-btn").css({"transform":"scale(1.15)","opacity":"1"});
  });
  $(".y-btn").click(function() {
    mode = "y";
    $(".o-btn,.y-btn,.g-btn").css({"transform":"scale(1)","opacity":"0.6"});
    $(".y-btn").css({"transform":"scale(1.15)","opacity":"1"});
  });
  $(".g-btn").click(function() {
    mode = "g";
    $(".o-btn,.y-btn,.g-btn").css({"transform":"scale(1)","opacity":"0.6"});
    $(".g-btn").css({"transform":"scale(1.15)","opacity":"1"});
  });
  $(".item").click(function() {
    $("#error").removeClass("none");
    var index = $(".item").index(this);
    $(".item").eq(index + 271).removeClass("clicked-o clicked-y clicked-g");
    if ($(this).hasClass("clicked")) {
      $(this).removeClass("clicked clicked-o clicked-y clicked-g");
    } else {
      if (mode == "y") {
        $(this).addClass("clicked clicked-y");
        $(".item").eq(index + 271).addClass("clicked-y");
      } else if (mode == "g") {
        $(this).addClass("clicked clicked-g");
        $(".item").eq(index + 271).addClass("clicked-g");
      } else {
        $(this).addClass("clicked clicked-o");
        $(".item").eq(index + 271).addClass("clicked-o");
      }
    }
  });

  $(".all-o").click(function() {
    $("#error").removeClass("none");
    var indexAll = $(this).parents(".item-container").index();
    $(this).parents(".item-container").find(".item").removeClass("clicked-y clicked-g");
    $(this).parents(".item-container").find(".item").addClass("clicked clicked-o");
    $(".item-container").eq(indexAll + 6).find(".item").removeClass("clicked-y clicked-g");
    $(".item-container").eq(indexAll + 6).find(".item").addClass("clicked-o");
  });
  $(".all-y").click(function() {
    $("#error").removeClass("none");
    var indexAll = $(this).parents(".item-container").index();
    $(this).parents(".item-container").find(".item").removeClass("clicked-o clicked-g");
    $(this).parents(".item-container").find(".item").addClass("clicked clicked-y");
    $(".item-container").eq(indexAll + 6).find(".item").removeClass("clicked-o clicked-g");
    $(".item-container").eq(indexAll + 6).find(".item").addClass("clicked-y");
  });
  $(".all-g").click(function() {
    $("#error").removeClass("none");
    var indexAll = $(this).parents(".item-container").index();
    $(this).parents(".item-container").find(".item").removeClass("clicked-o clicked-y");
    $(this).parents(".item-container").find(".item").addClass("clicked clicked-g");
    $(".item-container").eq(indexAll + 6).find(".item").removeClass("clicked-o clicked-y");
    $(".item-container").eq(indexAll + 6).find(".item").addClass("clicked-g");
  });
  $(".all-d").click(function() {
    $("#error").removeClass("none");
    var indexAll = $(this).parents(".item-container").index();
    $(this).parents(".item-container").find(".item").removeClass("clicked clicked-o clicked-y clicked-g");
    $(".item-container").eq(indexAll + 6).find(".item").removeClass("clicked-o clicked-y clicked-g");
  });

  $(".top-btn").click(function() {
    $("html, body").animate({"scrollTop":0}, "100");
  });

});
