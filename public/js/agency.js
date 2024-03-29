function triggerScroll(targetId,triggerNavBarble = true){
  var target = $(targetId);
  triggerNavBar(triggerNavBarble);
  // target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
  if (target.length) {
    $('html, body').animate({
      scrollTop: (target.offset().top - 54)
    }, 1000, "easeInOutExpo");
    return false;
  }

}

function triggerNavBar(triggerNavBarble){
  if(!triggerNavBarble) return;
  const toggleDisplay = $('.js-fh5co-nav-toggle').css('display');
  console.log('toggleDisplay='+toggleDisplay);
  if(toggleDisplay == "none" ){
    console.log("toggleDisplay is null");
    return;
  }
  if ( $('body').hasClass('fh5co-offcanvas') ) {
    $('body').removeClass('fh5co-offcanvas');
  } else {
    $('body').addClass('fh5co-offcanvas');
  }
}

(function($) {
    "use strict"; // Start of use strict
  
    // Smooth scrolling using jQuery easing
    $('.js-scroll-trigger').click(function() {
      var t = $(this).data("go");
      // alert(t);
      // if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(t);
        // target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 54)
          }, 1000, "easeInOutExpo");
          return false;
        }
      // }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    // $('body').scrollspy({
    //   target: '#mainNav',
    //   offset: 56
    // });
  
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  
    // Hide navbar when modals trigger
    $('.portfolio-modal').on('show.bs.modal', function(e) {
      $('.navbar').addClass('d-none');
    })
    $('.portfolio-modal').on('hidden.bs.modal', function(e) {
      $('.navbar').removeClass('d-none');
    })
  
  })(jQuery); // End of use strict