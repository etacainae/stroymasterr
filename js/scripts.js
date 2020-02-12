
  $(document).ready(function(){
    var button = $('.header__burger');
    var form = $('.menu-header');
    var overlay = $('.overlay');
    var link = $('.menu-header li a');
    var body = $('body');

    button.click(function(){
      form.addClass("active");
      overlay.css("display", "block");
      body.css("overflow", "hidden");
    });
    link.click(function(){
      form.removeClass("active");
      overlay.css("display", "none");
      body.css("overflow", "scroll");
    });
    overlay.click(function(){
      form.removeClass("active");
      overlay.css("display", "none");
      body.css("overflow", "scroll");
    });
  });


  $('.kinds-slider__item').on('click', function(){
    $('.kinds-slider__item').removeClass('kinds-active');
    $(this).addClass('kinds-active');
  });

 var links = document.querySelectorAll('.kinds-slider__item');
 var content = document.querySelectorAll('.kinds-content__item');
 for(var i=0; i <links.length; i++) {
     (function(i) {
        var link = links[i];
        link.onclick = function() {
            for(var j=0; j <content.length; j++) {
               var display = window.getComputedStyle(content[j]).display;
               if(display == "block") {
                  content[j].style.display = "none";
               }
            }
         content[i].style.display = "block";
         }
     })(i);
 } 

    (function($){
        $(window).on("load",function(){
            $(".mCustomScrollbar").mCustomScrollbar();
        });
    })(jQuery);


 $(function() {
   $('.portfolio__wrap').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      dots: true,
      arrows: true,
      lazyLoad: 'ondemand',
      responsive: [
         {
           breakpoint: 1024,
           settings: {
             slidesToShow: 3,
             slidesToScroll: 3,
             infinite: true,
             dots: true
           }
         },
         {
           breakpoint: 600,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 2
           }
         }
       ],
      prevArrow: '<img class="portfolio-prevArrow" src="img/portfolio/portfolio-arrow.png">',
      nextArrow: '<img class="portfolio-nextArrow" src="img/portfolio/portfolio-arrow.png">'
     });

   $(".portfolio__nav-item").on('click', function(){
       var filter = $(this).data('filter');
       $(".portfolio__wrap").slick('slickUnfilter');
       
       if(filter == 'bedroom'){
         $(".portfolio__wrap").slick('slickFilter','.bedroom');
       }
       else if(filter == 'kitchen'){
         $(".portfolio__wrap").slick('slickFilter','.kitchen');
       }
       else if(filter == 'toalet'){
         $(".portfolio__wrap").slick('slickFilter','.toalet');
       }
       else if(filter == 'design-projects'){
         $(".portfolio__wrap").slick('slickFilter','.design-projects');
       }
       else if(filter == 'all'){
         
         $(".portfolio__wrap").slick('slickUnfilter');
       }   
   })
 });

  $('.portfolio__nav-item').on('click', function(){
    $('.portfolio__nav-item').removeClass('portfolio__nav-active');
    $(this).addClass('portfolio__nav-active');
  });


  $('img[src=""]').parent().remove()


  


  $(document).ready(function() {
    $('.portfolio__wrap').magnificPopup({
      delegate: 'a',
      type: 'image',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1]
      }
    });
  });

  $(document).ready(function() {
    $('.sertificate-wrap').magnificPopup({
      delegate: 'a',
      type: 'image',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1]
      }
    });
  });

  $('.faqs-wrap__item').on('click', function(){
    $('.faqs-wrap__item').removeClass('faqs-active');
    $(this).toggleClass('faqs-active');
  });


  $(function () {
      $('a[href*="#"]:not([href="#"])').click(function () {
          if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              if (target.length) {
                  $('html, body').animate({
                      scrollTop: target.offset().top - 50
                  }, 500);
                  return false;
              }
          }
      });
  });


  $(document).ready(function(){
    var button = $('.request-btn');
    var form = $('.request-popup');
    var overlay = $('.overlay');
    var close = $('.request-close');
    var body = $('body');

    button.click(function(){
      form.css("display", "block");
      overlay.css("display", "block");
      body.css("overflow", "hidden");
    });
    close.click(function(){
      form.css("display", "none");
      overlay.css("display", "none");
      body.css("overflow", "scroll");
    });
    overlay.click(function(){
      form.css("display", "none");
      overlay.css("display", "none");
      body.css("overflow", "scroll");
    });
  });


  $(document).ready(function(){
    var button = $('.calc-btn');
    var form = $('.calc-popup');
    var overlay = $('.overlay');
    var close = $('.calc-close');
    var body = $('body');

    button.click(function(){
      form.css("display", "flex");
      overlay.css("display", "block");
      body.css("overflow", "hidden");
    });
    close.click(function(){
      form.css("display", "none");
      overlay.css("display", "none");
      body.css("overflow", "scroll");
    });
    overlay.click(function(){
      form.css("display", "none");
      overlay.css("display", "none");
      body.css("overflow", "scroll");
    });
  });


  $(document).ready(function(){
    var form = $('.formresult');
    var close = $('.formresult-close');
    close.click(function(){
      form.css("display", "none");
    });
  });
  


  $(document).ready(function() {

    $("#review-form").submit(function() {
      $.ajax({
        type: "POST",
        url: "mailers/review-form.php",
        data: $(this).serialize()
      }).done(function() {
        $(this).find("input").val("");
        $(".formresult").css("display", "block");
        $("#review-form").trigger("reset");
      });
      return false;
    });
  });

  $(document).ready(function() {

    $("#call-request").submit(function() {
      $.ajax({
        type: "POST",
        url: "mailers/call-request.php",
        data: $(this).serialize()
      }).done(function() {
        $(this).find("input").val("");
        $(".formresult").css("display", "block");
        $("#call-request").trigger("reset");
      });
      return false;
    });
  });

  $(document).ready(function() {

    $("#calc-form").submit(function() {
      $.ajax({
        type: "POST",
        url: "mailers/calc-form.php",
        data: $(this).serialize()
      }).done(function() {
        $(this).find("input").val("");
        $(".formresult").css("display", "block");
        $("#calc-form").trigger("reset");
      });
      return false;
    });
  });
