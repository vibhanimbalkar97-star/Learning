DOM:

1. What is the DOM?

Answer:

The DOM (Document Object Model) is a tree-like representation of an HTML page created by the browser.

Example:

<body>
    <h1>Hello</h1>
    <button>Click</button>
</body>

Browser creates

Document
|
body
/ \
h1 button

JavaScript can manipulate this tree.

Example

document.getElementById("title").innerText = "Welcome"; 
===============================================================
2. What is the Real DOM?

Answer

The Real DOM is the actual DOM maintained by the browser.

Whenever JavaScript changes something,

document.getElementById("name").innerText = "John";

the browser updates the real DOM.

Updating the real DOM is relatively expensive because the browser may need to:

Recalculate styles
Recalculate layout
Repaint
Re-render parts of the page 
============================================================================================
3. What is Virtual DOM?

Answer

Virtual DOM is a lightweight JavaScript copy of the Real DOM maintained by React.

Instead of directly changing the browser DOM, React first updates the Virtual DOM.

Then React compares the old and new Virtual DOM and updates only the changed parts in the Real DOM.
========================================================================================================

4. Why was Virtual DOM introduced?

Answer

Updating the Real DOM frequently is expensive.

Imagine changing 1000 list items.

Without Virtual DOM:

1000 DOM updates

With Virtual DOM:

React checks changes
Only changed elements updated

This improves performance.
=========================================================================================================

5. Real DOM vs Virtual DOM
   Real DOM                       Virtual DOM
   Actual browser DOM              JavaScript object
   Slow updates                     Faster updates
   Browser manages it               React manages it
   Every change affects browser     Changes happen in memory first
   Expensive                        Efficient
   Causes layout & repaint          No immediate browser repaint
========================================================================================================
6. What happens when state changes?

Example

function App() {

const [count, setCount] = useState(0);

return (
<>

<h1>{count}</h1>

<button onClick={() => setCount(count+1)}>
Increment
</button>

</>
)

}

When

setCount(1)

is called

React does

State changes

↓

Creates new Virtual DOM

↓

Compares with previous Virtual DOM

↓

Finds differences

↓

Updates only changed node

↓

Browser updates Real DOM 
================================================================================================================================

7. Does React recreate the whole Virtual DOM?

Answer

Yes.

React creates a new Virtual DOM representation after every state update.

But this is just JavaScript objects, which is much cheaper than updating the browser DOM.

Then React compares it with the previous Virtual DOM.
=============================================================================================================================

8. What is Diffing?

Answer

Diffing is the process of comparing

Old Virtual DOM

vs

New Virtual DOM

to find differences.

Example

Old

<h1>Hello</h1>

New

<h1>Welcome</h1>

React detects only the text changed.

Only

Hello

↓

Welcome

gets updated.
=============================================================================================================

9. What is Reconciliation?

Answer

Reconciliation is the complete process React follows after state changes.

It includes:

Creating new Virtual DOM
Comparing (Diffing)
Updating Real DOM

Many people think reconciliation = diffing.

Actually,

Diffing

is one step of

Reconciliation. 
===================================================================================================================

10. Does React update the whole page?

Answer

No.

React updates only the changed elements.

Example

<>

<h1>Hello</h1>

<p>Welcome</p>

<button>Click</button>
</>

Only

<p>

changes.

React updates only

<p>

not

h1

button 
=================================================================================================================

11. Why is Virtual DOM faster?

Because

Changes happen in memory.
Only necessary DOM updates happen.
Less layout calculation.
Less repaint.
Less browser work. 
=============================================================================================================

12. Is Virtual DOM the same as Shadow DOM?

Answer

No.

Virtual DOM
React feature
JavaScript object
Used for efficient rendering

Shadow DOM
Browser feature
Encapsulates HTML and CSS
Used in Web Components 
==============================================================================================================

13. Does Virtual DOM replace Real DOM?

No.

Real DOM always exists.

Virtual DOM only helps React decide what to update.
================================================================================================================

14. Is Virtual DOM inside browser?

No.

It exists inside JavaScript memory.

Browser never sees it directly.
===================================================================================================================

15. What is React Element?

Example

<h1>Hello</h1>

becomes

{
type:"h1",
props:{
children:"Hello"
}
}

This object is called a React Element.

Virtual DOM is made up of React Elements.
======================================================================================================================

16. Is Virtual DOM an actual DOM?

No.

It is just JavaScript objects.
=====================================================================================================================

17. What is the biggest advantage of Virtual DOM?

Answer

Efficient UI updates.

Not

No DOM updates.

DOM updates still happen.

They are minimized.
=========================================================================================================================

18. Does every state update cause re-render?

Yes.

Component function executes again.

React creates a new Virtual DOM.

Then compares it.
==========================================================================================================================

19. Does re-render mean browser re-render?

No.

React re-render

↓

Creates new Virtual DOM

Browser re-render

↓

Only if something actually changed
===================================================================================================================

20. Can Virtual DOM make React always faster?

No.

Virtual DOM itself has overhead.

React is faster because it minimizes expensive browser DOM operations.

21. Why are JavaScript object comparisons cheaper than DOM updates?

JavaScript object comparison happens in memory and is computationally inexpensive.

DOM updates involve browser work such as layout calculation, painting, and compositing, which are much more expensive.

22. What is batching in React?

React groups multiple state updates together and performs a single render, reducing unnecessary work.

Example:

setCount(c => c + 1);
setName("John");
setAge(25);

Instead of rendering three times, React batches these updates into one render (in most cases).

23. What role does the key prop play in Virtual DOM?

Keys help React identify which list items have changed, been added, or removed during reconciliation.

Example:

{users.map(user => (

  <li key={user.id}>{user.name}</li>
))}

Without stable keys, React may recreate more DOM elements than necessary.

24. Does React compare every node in the Virtual DOM?

React uses an optimized diffing algorithm based on assumptions, such as:

Elements of different types produce different trees.
Stable key values help efficiently compare lists.

This avoids comparing every node in the most expensive way.

25. What happens if you change an element's type?

Example:

Old:

<h1>Hello</h1>

New:

<p>Hello</p>

Since the element type changed, React destroys the old <h1> and creates a new <p> instead of updating it.

Tricky Interview Questions
Q1. Does Virtual DOM eliminate Real DOM?

Answer:

No. React still updates the Real DOM. The Virtual DOM only decides what needs to change.

Q2. Is Virtual DOM always faster?

Answer:

No. Virtual DOM adds some overhead. Its advantage is reducing expensive browser DOM updates, especially in complex UIs.

Q3. Does React compare the Real DOM with the Virtual DOM?

Answer:

No. React compares the previous Virtual DOM with the new Virtual DOM, then applies the necessary changes to the Real DOM.

Q4. Does every state update update the Real DOM?

Answer:

Not necessarily. Every state update creates a new Virtual DOM, but if the UI output hasn't changed, React may not need to update the Real DOM.

Q5. If a parent component re-renders, do all child components re-render?

Answer:

By default, yes. However, React can skip unnecessary renders using techniques such as React.memo, useMemo, and useCallback when appropriate.

Q6. Does changing props trigger the Virtual DOM process?

Answer:

Yes. When props change, the component re-renders, React creates a new Virtual DOM, performs diffing, and updates the Real DOM if needed.

Q7. Is the Virtual DOM stored in the browser's DOM tree?

Answer:

No. It is stored as JavaScript objects in memory, not in the browser's DOM tree.

Q8. Why is directly manipulating the DOM discouraged in React?

Answer:

Direct DOM manipulation bypasses React's rendering process, which can cause inconsistencies between React's Virtual DOM and the actual DOM. Instead, update state or props and let React manage the DOM.

| Question                                     | Short Answer                                                      |
| -------------------------------------------- | ----------------------------------------------------------------- |
| What is DOM?                                 | Browser's tree representation of HTML.                            |
| What is Real DOM?                            | The actual DOM managed by the browser.                            |
| What is Virtual DOM?                         | A lightweight JavaScript representation of the Real DOM.          |
| Why use Virtual DOM?                         | To reduce expensive DOM updates.                                  |
| What is Diffing?                             | Comparing old and new Virtual DOM trees.                          |
| What is Reconciliation?                      | The overall process of updating the UI after state/props changes. |
| Does React recreate the Virtual DOM?         | Yes, on every render.                                             |
| Does React recreate the Real DOM?            | No, only the parts that changed.                                  |
| What are keys used for?                      | To efficiently identify changes in lists.                         |
| Does every state update change the Real DOM? | No, only if the rendered output changes.                          |

Complete DOM + Virtual DOM Interview Checklist
A. Basic DOM Questions

What is DOM? → Tree representation of HTML.

Who creates the DOM? → Browser.

What is a DOM node? → Every element, text, comment, etc.

Difference between HTML and DOM?

HTML = source code.

DOM = live object model created by browser.

How to select elements in DOM?

getElementById

querySelector

querySelectorAll

Difference between innerHTML and innerText?

innerHTML reads/writes HTML.

innerText reads visible text only.

Difference between textContent and innerText?

textContent is faster.

Includes hidden text.

How to create an element dynamically?

document.createElement()

appendChild()

What is Event Bubbling? Event travels child → parent.

What is Event Capturing? Event travels parent → child.

What is Event Delegation? Attach one listener to parent instead of many children.

Difference between preventDefault() and stopPropagation()?

preventDefault() stops default browser action.

stopPropagation() stops event bubbling.

B. Real DOM Questions

What is Real DOM? Actual browser DOM.

Why are Real DOM updates expensive?

Reflow (layout calculation)

Repaint

Rendering

What is Reflow? Recalculating layout.

What is Repaint? Redrawing pixels.

Which is more expensive: Reflow or Repaint? Reflow.

C. Virtual DOM Questions

What is Virtual DOM?

Why was it introduced?

How does React use it?

What is Diffing?

What is Reconciliation?

Does React recreate Virtual DOM every render?

Does React recreate Real DOM every render?

What is the role of key?

What happens when element type changes?

Is Virtual DOM inside browser?

Is Virtual DOM always faster?

Can React work without Virtual DOM?

D. Tricky React DOM Questions
Most Asked

These are the questions that often confuse candidates.

1. Does state update directly change the DOM?

No. It triggers re-render → Virtual DOM → Diffing → Real DOM update.

2. Does React compare Virtual DOM with Real DOM?

No. It compares old Virtual DOM vs new Virtual DOM.

3. Does every re-render mean DOM update?

No. Re-render only creates a new Virtual DOM.

4. Why are key props important?

They help React identify list items efficiently.

5. Why avoid direct DOM manipulation in React?

It can make React's Virtual DOM and the actual DOM inconsistent.

E. One 2-Minute Interview Revision

Question

Answer

DOM

Browser representation of HTML

Real DOM

Actual DOM used by browser

Virtual DOM

JS copy of Real DOM

Diffing

Compare old vs new Virtual DOM

Reconciliation

Complete update process

Reflow

Layout recalculation

Repaint

Redrawing screen

Keys

Identify list items efficiently

State update

Triggers re-render

Direct DOM manipulation

Generally discouraged in React

Final Answer

Yes — combined with this checklist, you now have a very strong coverage of React DOM interview questions (basic + intermediate + tricky) that are commonly asked for frontend developers with around 1–2 years of experience.

The only remaining area interviewers may add is React rendering optimization (React.memo, useMemo, useCallback), which is often asked immediately after Virtual DOM questions.
