/* @slider-text-color: #fff; */

.page-with-slider .page-section.gallery-section.images-for-slider {
  padding-top: 0px !important;
}
.page-with-slider .page-section.gallery-section.images-for-slider .gallery-fullscreen-slideshow-bullet {
  border-color: #fff;
}
.page-with-slider .page-section.gallery-section.images-for-slider .gallery-fullscreen-slideshow-bullet.active {
  background-color: #fff;
}
@media only screen and (max-width: 1000px) and (orientation: landscape) {
  .page-with-slider .page-section.gallery-section.images-for-slider .gallery-fullscreen-slideshow {
    height: 160vh !important;
  }
  .page-with-slider .page-section.gallery-section.images-for-slider .text-for-slider {
    margin-top: 0px;
  }
}
@media only screen and (max-width: 330px) {
  .page-with-slider .page-section.gallery-section.images-for-slider {
    height: 100vh !important;
  }
}
.page-with-slider .text-for-slider {
  position: absolute;
  background: transparent;
  z-index: 100;
}
.page-with-slider .text-for-slider .section-background {
  background: transparent !important;
}
.page-with-slider .text-for-slider p,
.page-with-slider .text-for-slider h1,
.page-with-slider .text-for-slider h2,
.page-with-slider .text-for-slider h3,
.page-with-slider .text-for-slider h4,
.page-with-slider .text-for-slider h5,
.page-with-slider .text-for-slider a:not(.sqs-block-button-element--medium) {
  color: #ffffff;
}
@media only screen and (min-width: 640px) {
  .page-with-slider .text-for-slider {
    margin-top: 5vh;
  }
}
