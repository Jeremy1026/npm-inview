(function() {
	var inView = {};

	inView.currentlyInView = [];

	inView.selector = '';

	inView.visibleClass = '';

	inView.updateVisibleClass = function(add, element) {
		if (add === true) {
			element.classList.add(inView.visibleClass);
		}
		else if (add === false) {
			element.classList.remove(inView.visibleClass);
		}
	}

	inView.check = function(){
		var win_height = window.innerHeight; // Window height
		var win_scroll = window.scrollY; // Window scroll
		var elements = $(inView.selector); // Gather elements into an array

		for(i=0; i<elements.length; i++) {
			var position_top = elements[i].offsetTop; // Element offset top
			var position_bot = position_top - win_height; // Element offset bottom

			// Check if the element is on screen
			if(win_scroll > position_bot && win_scroll < position_top) {
				inView.currentlyInView.push(elements[i]);
				if (inView.visibleClass !== '') {
					inView.updateVisibleClass(true, elements[i]);
				}
			} else {
				var index = inView.currentlyInView.indexOf(elements[i]);

				if (index) {
					inView.currentlyInView.splice(index,1);
					if (inView.visibleClass !== '') {
						inView.updateVisibleClass(false, elements[i]);
					}
				}
			}
		}
	}

	module.exports = inView;
}())

