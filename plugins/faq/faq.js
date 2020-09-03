var $squareAddonsFaq = $('.squareaddons-faq-start');

if ($squareAddonsFaq.length){
  $squareAddonsFaq.each(function(){
    $(this).closest('.sqs-col-12').addClass('section-contain-faq');
  });

  $('.squareaddons-faq-start').each(function(){
    $(this).closest('.code-block').addClass('start-faq-section');
  });

  $('.squareaddons-faq-end').each(function(){
    $(this).closest('.code-block').addClass('end-faq-section');
  });



  $('.start-faq-section').each(function(){
    $(this).nextUntil($('.end-faq-section')).wrapAll('<div class="faq-wrapper-item"></div>');
  });


  $('.faq-wrapper-item h3').each(function(){
    $(this).addClass('faq-title-sqaddons');
    $('<div class="end-faq-sqaddons-item"></div>').insertBefore($(this));
    $('<div class="start-faq-sqaddons-item"></div>').insertBefore($(this));
    $('<div class="plusminus-wrapper"><div class="plusminus"></div></div>').insertBefore($(this));

    // $(this).nextUntil($('p')).wrapAll('<div class="faq-item"></div>');
  });
  $('.faq-wrapper-item p').each(function(){
    $(this).addClass('faq-body-sqaddons');
    //      $('<div class="end-faq-sqaddons-item"></div>').insertAfter($(this));
  });

  $('.start-faq-sqaddons-item').each(function(){
    $(this).nextUntil($('.end-faq-sqaddons-item')).wrapAll('<div class="faq-item"></div>');
  });


  $('.faq-item').click(function(){
    $(this).toggleClass('active-faq-item');
    $(this).find('.faq-body-sqaddons').slideToggle();
  });

}
