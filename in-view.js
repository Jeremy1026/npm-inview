(function() {
	var inView = {};

	inView.selector = '';

	inView.visibleClass = '';

	inView.currentlyInView = {};

	inView.setSelector = function(selector) {
		inView.selector = selector;
		console.log("selector set");
		return inView;
	}

	inView.setVisibleClass = function(visibleClass) {
		inView.visibleClass = visibleClass;
		console.log("class set");
		return inView;
	}

	inView.updateVisibleClass = function(add, element) {
		if (add === true) {
			elements[i].classList.add(inView.visibleClass);
		}
		else if (add === false) {
			elements[i].classList.remove(inView.visibleClass);
		}
	}

	inView.check = function(){
		var win_height = window.innerHeight; // Window height
		var win_scroll = window.scrollY; // Window scroll
		var elements = $(inView.selector); // Gather elements into an array

		console.log(inView);
		console.log(this);

console.log(elements);
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
				var index = inview.currentlyInView.indexOf(elements[i]);

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

