var val123 = 1;

(function ($) {

  "use strict";



 

  $(window).on('load', function () {
    if (sessionStorage.kategori == NaN) {
      sessionStorage.kategori = 1
    }
    if (sessionStorage.kategori == 2) {
      var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item'
      });

      $("#portfolio-flters li").removeClass('filter-active');
      $("#kategori2").addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $("#kategori2").data('filter')
      });
      aos_init();


      // Initiate venobox (lightbox feature used in portofilo)
      $(document).ready(function () {
        $('.venobox').venobox();
      });
    }
    else if (sessionStorage.kategori == 3) {
      var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item'
      });

      $("#portfolio-flters li").removeClass('filter-active');
      $("#kategori3").addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $("#kategori3").data('filter')
      });
      aos_init();


      // Initiate venobox (lightbox feature used in portofilo)
      $(document).ready(function () {
        $('.venobox').venobox();
      });
    }
    else  {
      var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item'
      });

      $("#portfolio-flters li").removeClass('filter-active');
      $("#kategori1").addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $("#kategori1").data('filter')
      });
      aos_init();


      // Initiate venobox (lightbox feature used in portofilo)
      $(document).ready(function () {
        $('.venobox').venobox();
      });
    }
  });

  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item'
    });
  
    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');
  
      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
      aos_init();
    });
  
    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
      $('.venobox').venobox();
    });
  });

  // Smooth scroll for the navigation menu and links with .scrollto classes
  var scrolltoOffset = $('#header').outerHeight() - 21;
  if (window.matchMedia("(max-width: 991px)").matches) {
    scrolltoOffset += 20;
  }
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function (e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        e.preventDefault();

        var scrollto = target.offset().top - scrolltoOffset;

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function () {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  // Navigation active state on scroll
  // var nav_sections = $('section');
  // var main_nav = $('.nav-menu, .mobile-nav');

  // $(window).on('scroll', function() {
  //   var cur_pos = $(this).scrollTop() + 200;

  //   nav_sections.each(function() {
  //     var top = $(this).offset().top,
  //       bottom = top + $(this).outerHeight();

  //     if (cur_pos >= top && cur_pos <= bottom) {
  //       if (cur_pos <= bottom) {
  //         main_nav.find('li').removeClass('active');
  //       }
  //       main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
  //     }
  //     if (cur_pos < 300) {
  //       $(".nav-menu ul:first li:first, .mobile-menu ul:first li:first").addClass('active');
  //     }
  //   });
  // });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="fas fa-bars"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function (e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function (e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function (e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
      $('#topbar').addClass('topbar-scrolled');
      $('.nav-itemabout').css("color", "black");
    } else {
      $('#header').removeClass('header-scrolled');
      $('#topbar').removeClass('topbar-scrolled');
      $('.nav-itemabout').css("color", "white");
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
    $('#topbar').addClass('topbar-scrolled');
  }

  /* --------------------------------------------------- */
  /*  Vegas Slideshow
  ------------------------------------------------------ */
  $("#hero").vegas({
    transition: 'fade',
    transitionDuration: 2500,
    delay: 5000,
    slides: [{
        src: "images/metal2.jpg"
      },
      {
        src: "images/me4.jpg"
      },
	     {
        src: "images/bato.jpg"
      },
      {
        src: "images/shutterstock_1839722281.jpg"
      }
    ],

  });

  $('#previous').on('click', function () {
    // $elmt
    $("#hero").vegas('options', 'transition', 'slideRight2').vegas('previous');
  });

  $('#next').on('click', function () {
    // $elmt.vegas('options', 'transition', 'slideLeft2').vegas('next');
    //$elmt
    $("#hero").vegas('options', 'transition', 'slideLeft2').vegas('next');
  });

  // Porfolio isotope and filter

  $(window).load(function(){
    if ($(this).scrollTop() > 100) {
      $('.nav-itemabout').css("color", "black");
    } 
    else {
      $('.nav-itemabout').css("color", "white");
    }
  });

  // Porfolio isotope and filter
  $(window).on('load', function () {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item'
    });

    $('#urunlerli li').on('click', function () {
      $("#urunlerli li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
      aos_init();
    });

    
  });

  // Portfolio details carousel
  //sa

  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
     dots: true,
     center: true,
    loop: true,

    responsive : {
      // breakpoint from 0 up
      0 : {
        stagePadding: 0,
        loop: true,
        responsiveClass: true,
        dots: false,
        nav: true,
        autoHeight: true,
        //vertical:true,
        items: 1
      },
      // breakpoint from 992 up
      992 : {
        items: 3,
        //autoplayHoverPause:true
      }
    }
    
   //items: 3
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  //Init AOS
  function aos_init() {
    AOS.init({
      duration: 500,
      once: true
    });
  }
  $(window).on('load', function () {
    aos_init();
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  $("#btn-kategori-1").click(function () {
    sessionStorage.setItem('kategori', 1);
    $("#portfolio-flters li").removeClass('filter-active');
      $("#kategori1").addClass('filter-active');
  });

  $("#btn-kategori-2").click(function () {
    sessionStorage.setItem('kategori', 2);
    $("#portfolio-flters li").removeClass('filter-active');
      $("#kategori2").addClass('filter-active');
  });
  $("#btn-kategori-3").click(function () {
    sessionStorage.setItem('kategori', 3);
    $("#portfolio-flters li").removeClass('filter-active');
      $("#kategori3").addClass('filter-active');
  });

  //infopart kismi
  $(window).scroll(function () {
    //   $( ".infopartt" ).css( "top", "20%" );
    // });
    if ($(this).scrollTop() > 50) {
      $('.infopartt').css("bottom", "0%");
    } else {
      $('.infopartt').css("bottom", "-24%");
    }
  });


  $(window).load(function(){
    $('.infopartt').css("bottom", "-24%");
  });
//doviz

$(function(){
typeof $.fn.paraceviriciWidget == "function" && 
$("#W7653").paraceviriciWidget({
	widget:"slideline",
	wData:{
		category:1,
		currency:"USD-EUR-JPY-RUB-CNY-CHF-PKR"
	},
	wSize:{
		wWidth:"100%",
		wHeight:50
	},
	wBase: {
		wLanguage: "tr"
	},
	wColumn: {
		cL: 1
	},
	wContent: {
		cFlag: 2
	},
	wTop: {
		tStat: 2,
		tB: "rgba(0,158,232,255)",
		tT: "Döviz",
		tC: "#ffffff"
	},
	wLeft: {
		lStat: 3
	},
	wCode: {
		cS: 22
	},
	wPrice: {
		pS: 26,
		pB: "normal"
	},
	wChange: {
		cS: 15
	},
	wArrow: {
		aS: 11
	}
});
});



$(window).on('load', function () {

  if (sessionStorage.kategori == NaN) {
    sessionStorage.kategori = 1
  }
  if (sessionStorage.kategori == 2) {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item'
    });

    $("#portfolio-flters li").removeClass('filter-active');
    $("#kategori2").addClass('filter-active');

    portfolioIsotope.isotope({
      filter: $("#kategori2").data('filter')
    });
    aos_init();

  } else if (sessionStorage.kategori == 3) {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item'
    });

    $("#portfolio-flters li").removeClass('filter-active');
    $("#kategori3").addClass('filter-active');

    portfolioIsotope.isotope({
      filter: $("#kategori3").data('filter')
    });
    aos_init();


  } else if (sessionStorage.kategori == 4) {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item'
    });

    $("#portfolio-flters li").removeClass('filter-active');
    $("#kategori4").addClass('filter-active');

    portfolioIsotope.isotope({
      filter: $("#kategori4").data('filter')
    });
    aos_init();



  } else if (sessionStorage.kategori == 5) {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item'
    });

    $("#portfolio-flters li").removeClass('filter-active');
    $("#kategori5").addClass('filter-active');

    portfolioIsotope.isotope({
      filter: $("#kategori5").data('filter')
    });
    aos_init();

  } else {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item'
    });

    $("#portfolio-flters li").removeClass('filter-active');
    $("#kategori1").addClass('filter-active');

    portfolioIsotope.isotope({
      filter: $("#kategori1").data('filter')
    });
    aos_init();

  }
});


$(window).on('load', function() {
  var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-item'
  });

  $('#portfolio-flters li').on('click', function() {
    $("#portfolio-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    portfolioIsotope.isotope({
      filter: $(this).data('filter')
    });
    aos_init();
  });

  // Initiate venobox (lightbox feature used in portofilo)
  $(document).ready(function() {
    $('.venobox').venobox();
  });
});

///////////////////////////////////////////////////////////////////////////////////////////

$(".btn-kategori-1").click(function () {

  sessionStorage.setItem('kategori', 1);

  var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-item'
  });
  $("#portfolio-flters li").removeClass('filter-active');
  $("#kategori1").addClass('filter-active');
  portfolioIsotope.isotope({
    filter: $("#kategori1").data('filter')
  });
  aos_init();
});

$(".btn-kategori-2").click(function () {

  sessionStorage.setItem('kategori', 2);

  var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-item'
  });
  $("#portfolio-flters li").removeClass('filter-active');
  $("#kategori2").addClass('filter-active');
  portfolioIsotope.isotope({
    filter: $("#kategori2").data('filter')
  });
  aos_init();
});
$(".btn-kategori-3").click(function () {

  sessionStorage.setItem('kategori', 3);

  var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-item'
  });
  $("#portfolio-flters li").removeClass('filter-active');
  $("#kategori3").addClass('filter-active');
  portfolioIsotope.isotope({
    filter: $("#kategori3").data('filter')
  });
  aos_init();
});

$(".btn-kategori-4").click(function () {

  sessionStorage.setItem('kategori', 4);

  var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-item'
  });
  $("#portfolio-flters li").removeClass('filter-active');
  $("#kategori4").addClass('filter-active');
  portfolioIsotope.isotope({
    filter: $("#kategori4").data('filter')
  });
  aos_init();
});

$(".btn-kategori-5").click(function () {

  sessionStorage.setItem('kategori', 5);

  var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-item'
  });
  $("#portfolio-flters li").removeClass('filter-active');
  $("#kategori5").addClass('filter-active');
  portfolioIsotope.isotope({
    filter: $("#kategori5").data('filter')
  });
  aos_init();
});


//////////////////////////////////////////////////////////////////////////////////

$(window).on('load', function () {
  var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-item'
  });

  $('#urunlerli li').on('click', function () {
    $("#urunlerli li").removeClass('filter-active');
    $(this).addClass('filter-active');

    portfolioIsotope.isotope({
      filter: $(this).data('filter') 
    });
    aos_init();
  });

  // Initiate venobox (lightbox feature used in portofilo)
  $(document).ready(function () {
    $('.venobox').venobox();
  });
});


  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });



})(jQuery);



