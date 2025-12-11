/*
* MOBILE MENU
*/
(function($){
  $(function() {
    $('.menu__icon').on('click', function() {
	   $(".menu__links").slideToggle("slow");
       $(this).closest('#menu').toggleClass('menu_state_open');
 //           return false;
    });
	
    $('.menu_one').on('click', function() {
	   $(".menu__links").slideToggle("slow");		
      $(this).closest('#menu').toggleClass('menu_state_open');
    });

  });
})(jQuery);


/*
* jQuery liScrollToTop v 2.0
*/
(function($)
  {
// скроллинг на верх экрана
    $.fn.liScrollToTop = function(params) {
      return this.each(function()
        {
          var scrollUp = $(this);
          scrollUp.hide();
          if ($(window).scrollTop() > 0) scrollUp.fadeIn("slow")
            $(window).scroll(function()
              {
                if ($(window).scrollTop() <= 0) scrollUp.fadeOut("slow")
                  else scrollUp.fadeIn("slow")
              }
            );
          scrollUp.click(function()
            {
              $("html, body").animate({scrollTop: 0}, "slow")
            }
          )
        }
      );
    };
	})(jQuery);