## What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById selects a single element by its unique ID. getElementsByClassName selects all elements with a specific class and returns a live HTMLCollection. querySelector selects the first element that matches any CSS selector, while querySelectorAll selects all matching elements and returns a static NodeList. querySelector and querySelectorAll are more flexible because they accept any valid CSS selector, whereas the other two are limited to ID or class.

## How do you create and insert a new element into the DOM?

Create a new element with document.createElement(), set its content or attributes, select a parent element, and insert it using appendChild(), prepend(), or insertBefore(). This adds the new element into the DOM at the desired location.

## What is Event Bubbling and how does it work?
Event Bubbling is when an event starts on the target element and then propagates upward through its parent elements to the <html> element. For example, clicking a button first triggers its event, then the parent’s event. Use event.stopPropagation() to stop the bubbling.

## What is Event Delegation in JavaScript? Why is it useful?
Event Delegation is a JavaScript technique where a single event listener is added to a parent element to handle events from its child elements. It works by checking event.target to identify which child triggered the event. This approach reduces memory usage, simplifies code, and supports dynamically added elements efficiently.

## What is the difference between preventDefault() and stopPropagation() methods?

preventDefault() and stopPropagation() are two event methods in JavaScript with different purposes. preventDefault() stops the browser’s default action for an event, like preventing a link from navigating or a form from submitting. stopPropagation() stops the event from bubbling up or capturing down the DOM, preventing parent or ancestor elements from receiving the event. They can be used together to control event behavior precisely.


