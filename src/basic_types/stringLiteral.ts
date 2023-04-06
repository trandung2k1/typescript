let click: 'click';
click = 'click';
// click = 'dbclick' //error

//Example
// let mouseEvent: 'click' | 'dblclick' | 'mousemove' | 'mousedown';
// mouseEvent = 'click'; // valid
// mouseEvent = 'dblclick'; // valid
// mouseEvent = 'mousedown'; // valid

//Example
type Mouse = 'click' | 'dblclick' | 'mouseup' | 'mousedown';
let mouseEvent: Mouse;
mouseEvent = 'click'; // valid
mouseEvent = 'dblclick'; // valid
mouseEvent = 'mouseup'; // valid
mouseEvent = 'mousedown'; // valid
// mouseEvent = 'mouseover'; // compiler error
let anotherEvent: Mouse;
