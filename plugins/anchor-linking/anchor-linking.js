/** * * Created by Borbás Geri on 12/17/13 * Copyright (c) 2013 eppz! development, LLC. * * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. * */  var EPPZScrollTo =      {        /**     * Helpers.     */        documentVerticalScrollPosition: function()        {          if (self.pageYOffset) return self.pageYOffset; /* Firefox, Chrome, Opera, Safari.*/          if (document.documentElement && document.documentElement.scrollTop) return document.documentElement.scrollTop; /* Internet Explorer 6 (standards mode).*/          if (document.body.scrollTop) return document.body.scrollTop; /* Internet Explorer 6, 7 and 8.*/          return 0; /* None of the above.*/        },        viewportHeight: function()        { return (document.compatMode === "CSS1Compat") ? document.documentElement.clientHeight : document.body.clientHeight; },        documentHeight: function()        { return (document.height !== undefined) ? document.height : document.body.offsetHeight; },        documentMaximumScrollPosition: function()        { return this.documentHeight() - this.viewportHeight(); },        elementVerticalClientPositionById: function(id)        {          var element = document.getElementById(id);          var rectangle = element.getBoundingClientRect();          return rectangle.top;        },        /**     * Animation tick.     */        scrollVerticalTickToPosition: function(currentPosition, targetPosition)        {          var filter = 0.2;          var fps = 60;          var difference = parseFloat(targetPosition) - parseFloat(currentPosition);          /* Snap, then stop if arrived.*/          var arrived = (Math.abs(difference) <= 0.5);          if (arrived)          {            /*Apply target.*/            scrollTo(0.0, targetPosition);            return;          }          /* Filtered position. */          currentPosition = (parseFloat(currentPosition) * (1.0 - filter)) + (parseFloat(targetPosition) * filter);          /* Apply target. */          scrollTo(0.0, Math.round(currentPosition));          /* Schedule next tick. */          setTimeout("EPPZScrollTo.scrollVerticalTickToPosition("+currentPosition+", "+targetPosition+")", (1000 / fps));        },        /**     * For public use.     *     * @param id The id of the element to scroll to.     * @param padding Top padding to apply above element.     */        scrollVerticalToElementById: function(id, padding)        {          var element = document.getElementById(id);          if (element == null)          {            console.warn('Cannot find element with id \''+id+'\'.');            return;          }          var targetPosition = this.documentVerticalScrollPosition() + this.elementVerticalClientPositionById(id) - padding;          var currentPosition = this.documentVerticalScrollPosition();          /* Clamp.*/          var maximumScrollPosition = this.documentMaximumScrollPosition();          if (targetPosition > maximumScrollPosition) targetPosition = maximumScrollPosition;          /* Start animation.*/          this.scrollVerticalTickToPosition(currentPosition, targetPosition);        }      };  /* Apply event handlers. Example of firing the scrolling mechanism.*/  /*  document.querySelectorAll("[href='/#free-guide']").forEach(function(elem) {    elem.addEventListener("click", function(e) {
EPPZScrollTo.scrollVerticalToElementById('free-guide', 20);    });  });  */    


(function(){   
	function clickFire(elem){    
		if (elem.onclick) {        
			elem.onclick();  
		} else if (elem.click) {

			elem.click();    
		}  
	} 

	function simulateMenuClick(closeSecetor){     
		clickFire(closeSecetor);  
	}    
	document.querySelectorAll('[data-section-anchor]').forEach(function(sectionAnchor) {   
		var parentSection =  sectionAnchor.closest("section");  
		sectionAnchor.closest(".sqs-block-code").classList.add('code-block-with-anchor');
		parentSection.setAttribute('id', sectionAnchor.getAttribute('data-section-anchor'));     
		parentSection.setAttribute('data-scroll-offset', sectionAnchor.getAttribute('data-offset'));   
	}); 
	document.querySelectorAll('a[href*="-anchor"]').forEach(function(anchorLink) {      
		anchorLink.addEventListener("click", function(event) { 

			var sectionId = anchorLink.getAttribute('href').split('#')[1]; 


			var $section = document.querySelectorAll('[data-section-anchor="'+sectionId+'"]')[0];
			console.log($section);  
			if($section){
				event.preventDefault();
				event.stopPropagation(); 
				var scrollOffset = $section.getAttribute('data-offset') || 0;   
				EPPZScrollTo.scrollVerticalToElementById(sectionId, scrollOffset);   
			}else{

			}

		})    
	});    
	document.querySelectorAll(".header-menu-nav-item a[href*='#']").forEach(function(thisLink){        
		thisLink.addEventListener("click", function() {      
			simulateMenuClick(document.querySelectorAll(".header-burger-btn.burger .burger-inner")[0]);  
			//document.querySelectorAll('body')[0].classList.remove('header--menu-open');
			//document.querySelectorAll('.header-burger-btn.burger')[0].classList.remove('.burger--active');

		});  
	}) 
}());
