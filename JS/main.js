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
    } else {
      $('#header').removeClass('header-scrolled');
      $('#topbar').removeClass('topbar-scrolled');
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
        src: "images/metalport3.jpg"
      },
      {
        src: "images/urun6.jpg"
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

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function () {
      $('.venobox').venobox();
    });
  });

  // Portfolio details carousel




  //sa

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
  });

  $("#btn-kategori-2").click(function () {
    sessionStorage.setItem('kategori', 2);
  });
  $("#btn-kategori-3").click(function () {
    sessionStorage.setItem('kategori', 3);
  });


})(jQuery);
