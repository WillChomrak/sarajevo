$(document).ready(function() {

  /* STICKY NAV */

  $('.js--sights-section').waypoint(function(direction) {
    if (direction == 'down') {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  }, {offset: '60px'});

  /* SCROLL ON BUTTON + NAV */

  $('.js--scroll-to-sights').click(function() {
    $('html, body').animate({scrollTop: $('.js--sights-section').offset().top}, 500);
    return false;
  });

  $('.js--scroll-to-food').click(function() {
    $('html, body').animate({scrollTop: $('.js--food-section').offset().top}, 500);
    return false;
  });

  $('.js--scroll-to-pictures').click(function() {
    $('html, body').animate({scrollTop: $('.js--pictures-section').offset().top}, 500);
    return false;
  });

  $('.js--scroll-to-contact').click(function() {
    $('html, body').animate({scrollTop: $('.js--contact-section').offset().top}, 500);
    return false;
  });

  /* OPEN/CLOSE MENU */
  $('.js--nav-icon').click(function() {
    const nav = $('.js--main-nav');
    const icon = $('.js--nav-icon > i');
    nav.slideToggle(250);

    if (icon.hasClass('fa-bars')) {
      icon.addClass('fa-times');
      icon.removeClass('fa-bars');
    } else {
      icon.addClass('fa-bars');
      icon.removeClass('fa-times');
    }

  });

  /* ANIMATIONS */
  $('.js--animate-1').waypoint(function(direction) {
    $('.js--animate-1').addClass('animated fadeIn');
  }, {offset: '50%'});

  $('.js--animate-2').waypoint(function(direction) {
    $('.js--animate-2').addClass('animated fadeIn');
  }, {offset: '50%'});
  
  /* CONTACT FORM */
  $('.submit-btn').click(function(event) {
    event.preventDefault();
    console.log('button click');
  })
  
});

