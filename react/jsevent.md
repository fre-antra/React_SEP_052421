Terminology
From quirksmode.org:

Event capturing
When you use event capturing

               | |
---------------| |-----------------
| element1     | |                |
|   -----------| |-----------     |
|   |element2  \ /          |     |
|   -------------------------     |
|        Event CAPTURING          |
-----------------------------------
the event handler of element1 fires first, the event handler of element2 fires last.

Event bubbling
When you use event bubbling

               / \
---------------| |-----------------
| element1     | |                |
|   -----------| |-----------     |
|   |element2  | |          |     |
|   -------------------------     |
|        Event BUBBLING           |
-----------------------------------
the event handler of element2 fires first, the event handler of element1 fires last.

Any event taking place in the W3C event model is first captured until it reaches the target element and then bubbles up again.

                 | |  / \
-----------------| |--| |-----------------
| element1       | |  | |                |
|   -------------| |--| |-----------     |
|   |element2    \ /  | |          |     |
|   --------------------------------     |
|        W3C event model                 |
------------------------------------------
Interface
From w3.org, for event capture:

If the capturing EventListener wishes to prevent further processing of the event from occurring it may call the stopPropagation method of the Event interface. This will prevent further dispatch of the event, although additional EventListeners registered at the same hierarchy level will still receive the event. Once an event's stopPropagation method has been called, further calls to that method have no additional effect. If no additional capturers exist and stopPropagation has not been called, the event triggers the appropriate EventListeners on the target itself.

For event bubbling:

Any event handler may choose to prevent further event propagation by calling the stopPropagation method of the Event interface. If any EventListener calls this method, all additional EventListeners on the current EventTarget will be triggered but bubbling will cease at that level. Only one call to stopPropagation is required to prevent further bubbling.

For event cancelation:

Cancelation is accomplished by calling the Event's preventDefault method. If one or more EventListeners call preventDefault during any phase of event flow the default action will be canceled.

Examples
In the following examples, a click on the hyperlink in the web browser triggers the event's flow (the event listeners are executed) and the event target's default action (a new tab is opened).

HTML:

<div id="a">
  <a id="b" href="http://www.google.com/" target="_blank">Google</a>
</div>
<p id="c"></p>
JavaScript:

var el = document.getElementById("c");

function capturingOnClick1(ev) {
    el.innerHTML += "DIV event capture<br>";
}

function capturingOnClick2(ev) {
    el.innerHTML += "A event capture<br>";
}

function bubblingOnClick1(ev) {
    el.innerHTML += "DIV event bubbling<br>";
}

function bubblingOnClick2(ev) {
    el.innerHTML += "A event bubbling<br>";
}

// The 3rd parameter useCapture makes the event listener capturing (false by default)
document.getElementById("a").addEventListener("click", capturingOnClick1, true);
document.getElementById("b").addEventListener("click", capturingOnClick2, true);
document.getElementById("a").addEventListener("click", bubblingOnClick1, false);
document.getElementById("b").addEventListener("click", bubblingOnClick2, false);
Example 1: it results in the output

DIV event capture
A event capture
A event bubbling
DIV event bubbling
Example 2: adding stopPropagation() to the function

function capturingOnClick1(ev) {
    el.innerHTML += "DIV event capture<br>";
    ev.stopPropagation();
}
results in the output

DIV event capture
The event listener prevented further downward and upward propagation of the event. However it did not prevent the default action (a new tab opening).

Example 3: adding stopPropagation() to the function

function capturingOnClick2(ev) {
    el.innerHTML += "A event capture<br>";
    ev.stopPropagation();
}
or the function

function bubblingOnClick2(ev) {
    el.innerHTML += "A event bubbling<br>";
    ev.stopPropagation();
}
results in the output

DIV event capture
A event capture
A event bubbling
This is because both event listeners are registered on the same event target. The event listeners prevented further upward propagation of the event. However they did not prevent the default action (a new tab opening).

Example 4: adding preventDefault() to any function, for instance

function capturingOnClick1(ev) {
    el.innerHTML += "DIV event capture<br>";
    ev.preventDefault();
}
prevents a new tab from opening.
