var showBullets = true; // set false if you wnat to remove the dots
  
document.querySelectorAll('.sqs-gallery-design-list .summary-item-list')[0].classList.add("custom-slider");
  
var sliderDetail = tns({
  container: '.custom-slider',
  items: 1,
  gutter: 20,
  nav: showBullets,
  controls: false,
  loop: true,
  mouseDrag: true,
  controlsPosition: 'bottom',
  prevButton: false,
  autoplayButton: false,
  autoplayHoverPause: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayButtonOutput: false,
  controlsText: ['', ''],
  edgePadding: 0,
  navPosition: 'bottom',
  preventScrollOnTouch: 'force'
});
