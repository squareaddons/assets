 // RESTYLE THE DROPDOWN MENU
 $('#google_translate_element').on("click", function () {
  
      // Change menu's height
      /*
      $("iframe").css({
        'height':'calc(50% - 100px)'
      });
      */  

      // Change font family and color
      $("iframe").contents().find(".goog-te-menu2-item div, .goog-te-menu2-item:link div, .goog-te-menu2-item:visited div, .goog-te-menu2-item:active div, .goog-te-menu2 *")
        .css({
        'color': '#544F4B',
        'font-family': 'Roboto',
        'width':'100%'
      });
      $("iframe").contents().find(".goog-te-menu2-item").css({
       'overflow': 'hidden'
      });
      // Change menu's padding
      $("iframe").contents().find('.goog-te-menu2-item-selected').css ('display', 'none');

      // Change menu's padding
      $("iframe").contents().find('.goog-te-menu2').css ('padding', '0px');

      // Change the padding of the languages
      $("iframe").contents().find('.goog-te-menu2-item div').css('padding', '20px');

      // Change the width of the languages
      $("iframe").contents().find('.goog-te-menu2-item').css('width', '100%');
      $("iframe").contents().find('td').css('width', '100%');

      // Change hover effects
      $("iframe").contents().find(".goog-te-menu2-item div").hover(function () {
        $(this).css('background-color', '#4385F5').find('span.text').css('color', 'white');
      }, function () {
        $(this).css('background-color', 'white').find('span.text').css('color', '#544F4B');
      });

      // Change Google's default blue border
      $("iframe").contents().find('.goog-te-menu2').css('border', 'none');

      // Change the iframe's box shadow
      $(".goog-te-menu-frame").css('box-shadow', '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.3)');



      // Change the iframe's size and position?
      $(".goog-te-menu-frame").css({
        'height': 'calc(100% - 100px)',
        'width': '300px',
        'top': '17px',
        'overflow': 'scroll',
        'right': '17px',
        'left': 'auto'
      });
   
      $("iframe.goog-te-menu-frame").contents().find('body *:not(.indicator)').css({
        'display': 'block',
        'overflow': 'scroll'
      });
      
      $("iframe.goog-te-menu-frame").contents().find('.goog-te-menu2-item-selected > div').css({
        'padding': '20px'
      });
      
      $("iframe.goog-te-menu-frame").contents().find('.indicator').css({
        'display': 'none'
      });
      
      // Change iframes's size
      $("iframe").contents().find('.goog-te-menu2').css({
        'height': '100%',
        'width': '300px',
        'overflow': 'auto',
        'overflow-x': 'hidden'
      });
  
      //Overflow hidden for item
      $("iframe").contents().find(".goog-te-menu2-item").css({
        'overflow': 'hidden'
      });
  
      $("iframe").contents().find('.goog-te-menu2 *').css({
        'overflow': 'hidden'
      });

      $("iframe").contents().find('.goog-te-menu2-item div').css({
        'box-sizing': 'border-box'
      });
          
});
