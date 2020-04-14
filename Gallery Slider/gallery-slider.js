<script>
    var pageUrl = '/product-merge-draft'; //put tha page url

    var sliderSectionNum = 1; //the order number of the slider section
    var contentSectionNum = 2; //the order number of the text section

    document.querySelectorAll('body')[0].setAttribute('data-url', window.location.pathname);
    if (pageUrl == document.querySelectorAll('body')[0].getAttribute('data-url')) {
        sliderSectionNum -= 1;
        contentSectionNum -= 1;
        var bannerSlider = document.querySelectorAll('#page .sections section')[sliderSectionNum];
        var sliderContent = document.querySelectorAll('#page .sections section')[contentSectionNum];
        document.querySelectorAll('body')[0].classList.add('page-with-slider');
        bannerSlider.classList.add('images-for-slider');
        sliderContent.classList.add('text-for-slider');
        bannerSlider.appendChild(sliderContent);
    } 
</script>
