1.Ans:  Difference between getElemetnById and getElementByClass: getElemetnById selects only one element which has a unique id and getElementByClass selects all elements with given class.

querySelector selects the first element that matches a CSS selector and querySelectorAll selects all elements that matching with CSS selector.

2.Ans:  Firstly, create a new element by using document.createElement().
Secondly, Modify the div like add text, attributes, or styles to it.
Finally, add the child elements to the parent elements  use methods like appendChild(), prepend(), or insertBefore() to place it into the DOM tree.

3.Ans:  Event Bubbling is a process in the DOM where an event starts from the target element and then move forward its parent elements until it reaches the root.

4.Ans:  Event Delegation is a technique where we add an event listener to a parent element instead of multiple child elements. It is useful because it increase the performance by reducing event listener.

5.Ans:  preventDefault() stops what the element does by default.
stopPropagation() stops the event from spreading to other listeners.
