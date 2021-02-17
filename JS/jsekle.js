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
    else if (sessionStorage.kategori == 4) {
      var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item'
      });

      $("#portfolio-flters li").removeClass('filter-active');
      $("#kategori4").addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $("#kategori4").data('filter')
      });
      aos_init();


      // Initiate venobox (lightbox feature used in portofilo)
      $(document).ready(function () {
        $('.venobox').venobox();
      });
    }
    else if (sessionStorage.kategori == 5) {
      var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item'
      });

      $("#portfolio-flters li").removeClass('filter-active');
      $("#kategori5").addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $("#kategori5").data('filter')
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