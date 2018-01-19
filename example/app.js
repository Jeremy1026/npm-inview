var inView = require('../in-view.js');

console.log(inView);

inView.selector = '.visibility-check';
inView.visibleClass = "visible";

console.log(inView);

window.addEventListener("scroll", inView.check);

