"use strict";

$(document).ready(function () {
  // start sidebar toggle menu
  $(".hamburger-icon").click(function () {
    $(".sidebar").toggleClass("show");
    $(".totop").removeClass("active");

    if ($(".sidebar").hasClass("show")) {
      $("body").append("<div class='back-container'></div>");
    } else {
      $(".back-container").remove();
    }

    $(".back-container").click(function () {
      $(".back-container").remove();
      $(".sidebar").toggleClass("show");
    });
  }); // end sidebar toggle menu

  window.addEventListener("scroll", function () {
    //start totop
    if ($(".sidebar").hasClass("show")) {
      $(".totop").removeClass("active");
    } else {
      if (window.pageYOffset > 200) {
        $(".totop").addClass("active");
      } else {
        $(".totop").removeClass("active");
      }
    } //end totop
    //start top scroll


    var width = window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight) * 100 + "%";
    $(".top-scroll-bar").width(width); //end top scroll
  });
});