$(function(){


  var header_items = $("#header_items"),
      headerH = $("#header").innerHeight(),
      logo = $("#logo"),
      nav = $("#nav a"),
      toggle_item = $("#toggle_item"),
      nav_toggle = $("#nav_toggle"),
      scrollOffset = 0;


  $(window).on("scroll", function() {

    scrollOffset = $(this).scrollTop();

    if( scrollOffset >= 0.1 ) {
      header_items.addClass("header_fixed"),
      logo.addClass("logo_fixed"),
      nav.addClass("links_fixed"),
      toggle_item.addClass("nav_toggle_item_fixed");
    } else {
      header_items.removeClass("header_fixed"),
      logo.removeClass("logo_fixed"),
      nav.removeClass("links_fixed"),
      toggle_item.removeClass("nav_toggle_item_fixed");
    }

  });

   /*Scroll*/
  $("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    var $this = $(this),
        blockId = $this.data('scroll'),
        blockOffset = $(blockId).offset().top;

    $this.addClass("active");

    $("html, body").animate({
      scrollTop: blockOffset
    }, 900);

  });


  /* Toggle */
  $("#nav_toggle").on("click", function(event) {
    event.preventDefault();

    $(this).toggleClass("active");
    $("#nav").toggleClass("active");
    $("#header_items").toggleClass("header_fixed");
    $("#logo").toggleClass("logo_fixed");

  });


  /*Collapse*/
  $("[data-collapse]").on("click", function(event) {
    event.preventDefault();


    var $this = $(this),
        blockId = $this.data('collapse');

    $this.toggleClass("active");
    $(blockId).slideToggle();
  });





})
























