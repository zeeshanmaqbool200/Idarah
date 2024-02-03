(function($) {
  $(function() {

    //  open and close nav 
    $('#navbar-toggle').click(function() {
      $('nav ul').slideToggle();
    });


    // Hamburger toggle
    $('#navbar-toggle').on('click', function() {
      this.classList.toggle('active');
    });


    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.navbar-dropdown').slideToggle("slow");

      // Close dropdown when select another dropdown
      $('.navbar-dropdown').not($(this).siblings()).hide("slow");
      e.stopPropagation();
    });


    // Click outside the dropdown will remove the dropdown class
    $('html').click(function() {
      $('.navbar-dropdown').hide();
    });
  });
})(jQuery);

// navigation end
// typed start
new Typed('#typed', {
  strings: ['دین میں تعلیم یافتہ شخص کے لیے شیطان کے لیے ہزار عبادت گزاروں کی عبادت سے زیادہ مشکل ہے۔ <br><span>امام محمد ابن علي (ع) </span> ',
  'ہر چیز کا سہارا ہے اور اس دین کا سہارا تعلیم ہے۔ <br> <span> حضرت محمد (ص)</span>'],
  typeSpeed: 100,
  delaySpeed: 100,
  backSpeed: 20,
  loop: true,
  showCursor: false,
  smartBackspace: true
});
// typed end