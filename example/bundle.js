(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var inView = require('../in-view.js');

console.log(inView);

inView.selector = '.visibility-check';
inView.visibleClass = "visible";

console.log(inView);

window.addEventListener("scroll", inView.check);


},{"../in-view.js":2}],2:[function(require,module,exports){
(function() {
	var inView = {};

	inView.currentlyInView = [];
	inView.selector = '';
	inView.visibleClass = '';

	// inView.selector = function(selector) {
	// 	// inView.selector = selector;
	// 	// console.log("selector set");
	// 	return inView;
	// }

	// inView.visibleClass = function(visibleClass) {
	// 	// inView.visibleClass = visibleClass;
	// 	// console.log("class set");
	// 	return inView;
	// }

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


},{}]},{},[1]);
