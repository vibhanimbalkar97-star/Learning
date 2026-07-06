🟢 Basic Props Interview Questions
Q1. What are props in React?
Answer

Props (short for Properties) are read-only values passed from a parent component to a child component. They allow components to receive data and make them reusable.

Props help components display different data without changing their internal logic.

Example
function App() {
return <Welcome name="John" />;
}

function Welcome(props) {
return <h1>Hello, {props.name}</h1>;
}

Output

Hello, John
Q2. Why are props used?
Answer

Props are used to:

Pass data from parent to child.
Make components reusable.
Customize component behavior.
Pass functions, objects, arrays, and JSX.

Without props, every component would display the same static content.

Q3. What does "props" stand for?
Answer

Props stands for Properties.

They are similar to HTML attributes.

Example:

<img src="image.jpg" alt="Profile">

Similarly in React:

<User name="John" age={25} />

Here, name and age are props.

Q4. How do you pass props from parent to child?
Answer

Props are passed as attributes when rendering a component.

Example
function App() {
return <Student name="Alice" age={22} />;
}

function Student(props) {
return (
<>
<h2>{props.name}</h2>
<p>{props.age}</p>
</>
);
}
Q5. How do you access props inside a component?
Answer

You can access props using the props object.

Example
function User(props) {
return <h1>{props.name}</h1>;
}

Or using destructuring:

function User({ name }) {
return <h1>{name}</h1>;
}

Destructuring is generally preferred because it makes the code cleaner.

Q6. Can a component receive multiple props?
Answer

Yes.

A component can receive any number of props.

Example
function User(props) {
return (
<>
<h2>{props.name}</h2>
<p>{props.city}</p>
<p>{props.age}</p>
</>
);
}

Usage

<User name="John" city="Pune" age={24} />
Q7. What is the difference between props and state?
Answer
Props	State
Passed from parent	Managed inside component
Read-only	Can be updated
Used for communication	Used for local data
Parent controls it	Component controls it

Example:

<User name="John" />

name is a prop.

const [count, setCount] = useState(0);

count is state.

Q8. Are props read-only?
Answer

Yes.

Props are immutable, meaning a child component should never modify them.

Only the parent component should change the values passed as props.

Q9. Why are props immutable?
Answer

Props are immutable because React follows one-way data flow (Parent → Child).

If child components could modify props, it would make the application's data flow unpredictable and harder to debug.

Instead, the child should notify the parent (using a callback prop) if data needs to change.

Q10. Can we modify props inside a child component?
Answer

No.

Props should never be modified.

Incorrect:

function User(props) {
props.name = "Alice"; // ❌ Never do this
return <h1>{props.name}</h1>;
}

Correct:

function User({ name }) {
return <h1>{name}</h1>;
}

If the value needs to change, update it in the parent component.

Q11. What happens if we try to modify props?
Answer

React expects props to be treated as read-only.

Mutating props can lead to unexpected behavior, bugs, and makes your code harder to maintain. In development, React may also warn about improper patterns depending on the situation.

Always create new values instead of modifying props directly.

Q12. How do you pass a string prop?
Answer

Strings are passed inside quotes.

<User name="John" />

Access:

function User({ name }) {
return <h1>{name}</h1>;
}
Q13. How do you pass a number prop?
Answer

Numbers are passed using curly braces.

<User age={25} />
Q14. How do you pass a boolean prop?
Answer
<Button disabled={true} />

Short form:

<Button disabled />

Both mean:

disabled={true}
Q15. How do you pass an object as a prop?
Answer

Objects are passed inside curly braces.

const user = {
name: "John",
age: 24
};

<User user={user} />

Access:

function User({ user }) {
return <h1>{user.name}</h1>;
}
Q16. How do you pass an array as a prop?
Answer
const fruits = ["Apple", "Mango", "Banana"];

<List items={fruits} />

Child:

function List({ items }) {
return (
<ul>
{items.map(item => (
<li key={item}>{item}</li>
))}
</ul>
);
}
Q17. How do you pass a function as a prop?
Answer

Functions are commonly passed so a child component can notify its parent about an event.

function App() {
function greet() {
alert("Hello");
}

return <Button onClick={greet} />;
}

Child:

function Button({ onClick }) {
return <button onClick={onClick}>Click</button>;
}
Q18. How do you pass JSX as a prop?
Answer

JSX can be passed just like any other value.

<Card header={<h2>Welcome</h2>} />

Child:

function Card({ header }) {
return (
<div>
{header}
</div>
);
}
Q19. How do you pass components as props?
Answer

You can pass a component and render it inside another component.

function Icon() {
return <span>⭐</span>;
}

<Card icon={Icon} />

Child:

function Card({ icon: Icon }) {
return (
<div>
<Icon />
</div>
);
}
Q20. What is the children prop?
Answer

children is a special prop that contains whatever is placed between a component's opening and closing tags.

Example:

<Card>
  <h2>Hello</h2>
  <p>Welcome!</p>
</Card>

Child:

function Card({ children }) {
return (
<div className="card">
{children}
</div>
);
}

children makes components highly reusable because the parent decides what content goes inside.

🚀 Quick Revision
Props = Properties.
Used to pass data from Parent → Child.
Props are read-only (immutable).
Components become reusable through props.
Props can be string, number, boolean, object, array, function, JSX, or even another component.
children is a special prop for nested content.
Use destructuring (function User({ name })) for cleaner code.
If data needs to change, update it in the parent, not in the child.

Q21. How do you render children?
Answer

The children prop is rendered by placing {children} inside the component's JSX.

Example

Parent Component

function App() {
  return (
    <Card>
      <h2>Welcome</h2>
      <p>This is React.</p>
    </Card>
  );
}

Child Component

function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}
Output
<div class="card">
    <h2>Welcome</h2>
    <p>This is React.</p>
</div>

Interview Tip

children makes components flexible because the parent decides what content appears inside them.

Q22. What are default props?
Answer

Default props are fallback values used when a prop is not passed by the parent.

They prevent values from becoming undefined.

Example
function User({ name = "Guest" }) {
  return <h2>{name}</h2>;
}

function App() {
  return <User />;
}
Output
Guest
Interview Tip

In modern React functional components, default parameter values are preferred over defaultProps.

Q23. How do you provide default values for props?
Answer

Using JavaScript default parameters.

Example
function Button({ text = "Submit" }) {
  return <button>{text}</button>;
}

Usage

<Button />

Output

Submit

Another example

function User({
  name = "Guest",
  age = 18
}) {
  return (
    <>
      <h2>{name}</h2>
      <p>{age}</p>
    </>
  );
}
Q24. What is props destructuring?
Answer

Props destructuring means extracting required properties directly from the props object.

Instead of writing

function User(props) {
  return <h1>{props.name}</h1>;
}

we write

function User({ name }) {
  return <h1>{name}</h1>;
}
Advantages
Cleaner code
Less typing
Easier to read
Better for large components
Q25. Why do developers destructure props?
Answer

Developers destructure props because it:

Improves readability.
Avoids repeatedly writing props..
Makes code cleaner.
Makes components easier to maintain.

Instead of

props.name
props.age
props.city
props.salary

we write

function User({
  name,
  age,
  city,
  salary
}) {}
Q26. Can props have any data type?
Answer

Yes.

Props can contain any JavaScript value.

Examples:

<User
    name="John"          // String
    age={24}             // Number
    isAdmin={true}       // Boolean
    skills={["React"]}   // Array
    user={{id:1}}        // Object
    greet={sayHello}     // Function
    header={<h1>Hello</h1>} // JSX
/>
Interview Question

Can a component be passed as a prop?

Yes.

<Card icon={StarIcon} />
Q27. What is prop drilling?
Answer

Prop drilling means passing props through multiple intermediate components just to reach a deeply nested child.

Example

App
 ↓
Parent
 ↓
Child
 ↓
GrandChild

If only GrandChild needs the data, the prop must still pass through Parent and Child.

<App user={user} />

↓

<Parent user={user} />

↓

<Child user={user} />

↓

<GrandChild user={user} />
Problem

It makes code:

Harder to maintain
Difficult to read
More tightly coupled
Solution

Use:

Context API
Redux
Zustand
Other state management libraries
Q28. What happens if a required prop is not passed?
Answer

React does not throw an error automatically.

The prop becomes undefined.

Example

function User({ name }) {
  return <h2>{name}</h2>;
}

<User />

Output

undefined
Better Solution

Provide a default value.

function User({
  name = "Guest"
}) {
  return <h2>{name}</h2>;
}
Q29. What are optional props?
Answer

Optional props are props that do not have to be passed by the parent.

Example

function User({
  city = "Pune"
}) {
  return <h2>{city}</h2>;
}

Usage

<User />

Output

Pune
Q30. Can props be null?
Answer

Yes.

<User name={null} />

Inside component

console.log(name);

Output

null

Difference

null

means

The value was intentionally set to "nothing."

Q31. Can props be undefined?
Answer

Yes.

Example

<User name={undefined} />

or

<User />

if name wasn't passed.

Output

undefined
Difference

undefined

means

No value was provided.

Interview Difference
null	undefined
Intentionally empty	Value not provided
Assigned manually	Default when missing
Q32. How do you pass multiple props?
Answer

Simply pass multiple attributes.

<User
    name="John"
    age={25}
    city="Pune"
    isAdmin={true}
/>

Child

function User({
    name,
    age,
    city,
    isAdmin
}) {
    return (
        <>
            <h2>{name}</h2>
            <p>{age}</p>
            <p>{city}</p>
            <p>{isAdmin ? "Admin" : "User"}</p>
        </>
    );
}
Q33. What is the spread operator (...props)?
Answer

The spread operator (...) copies all properties from one object into another or passes all props to another component.

Example

const user = {
    name: "John",
    age: 25
};

<User {...user} />

Equivalent to

<User
    name="John"
    age={25}
/>

Another example

function Button(props) {
    return <button {...props}>Click</button>;
}

Usage

<Button
    disabled
    className="btn"
/>

Output

<button disabled class="btn">
    Click
</button>
Interview Tip

Spread operator is commonly used in reusable components to forward props to underlying elements.

Q34. How do you rename props while destructuring?
Answer

Use the : syntax.

Example

function User({
    name: userName
}) {
    return <h2>{userName}</h2>;
}

Here,

name

is renamed to

userName

Another example

function Card({
    title: heading
}) {
    return <h1>{heading}</h1>;
}
Q35. How do props help make components reusable?
Answer

Props allow the same component to display different data without changing its implementation.

Without props

function User() {
    return <h2>John</h2>;
}

Only displays

John

With props

function User({ name }) {
    return <h2>{name}</h2>;
}

Usage

<User name="John" />
<User name="Alice" />
<User name="Bob" />

Output

John

Alice

Bob

The same component is reused with different data.

⭐ Interview Summary (Must Remember)
Props flow in one direction: Parent → Child.
Props are immutable: Never modify them in the child.
children is a special prop: It represents content placed between opening and closing tags.
Use default parameter values: Prevent undefined when props are missing.
Destructure props: Improves readability and reduces repetitive props. access.
Props can hold any JavaScript value: Strings, numbers, booleans, objects, arrays, functions, JSX, and even components.
Prop drilling: Passing props through intermediate components; use Context API or state management when it becomes excessive.
Missing props: Become undefined unless a default value is provided.
Spread operator (...props): Conveniently forwards or copies props, especially in reusable components.
Props make components reusable: The same component can render different content based on the values it receives.

🟡 Intermediate Props Interview Questions (Q36–Q45)
Q36. How does React pass props internally?
Answer

When a parent component renders a child component, React creates a JavaScript object containing all the props and passes that object as the first argument to the child component.

Example:

function App() {
  return <User name="John" age={25} />;
}

Internally, React behaves roughly like this:

const props = {
  name: "John",
  age: 25
};

User(props);

The child receives:

function User(props) {
  console.log(props);
}

Output:

{
  name: "John",
  age: 25
}
Interview Tip

Props are not magic. They are simply a JavaScript object passed from the parent to the child.

Q37. Are props passed by value or reference?
Answer

It depends on the type of the prop.

Data Type	How it's Passed
String	By value
Number	By value
Boolean	By value
Object	Reference to the object
Array	Reference to the array
Function	Reference to the function

Example:

const user = {
  name: "John"
};

<User user={user} />

React passes a reference to the object, not a copy.

Interview Tip

A common interview answer is:

Primitive values are passed by value, while objects, arrays, and functions are passed as references to the same underlying value.

Q38. What happens when an object prop changes?
Answer

If the reference of the object changes, React considers it a new prop and the child component re-renders.

Example:

const user = {
  name: "John"
};

<User user={user} />

Later:

const user = {
  name: "Alice"
};

<User user={user} />

Since this is a new object, React detects that the prop has changed.

Incorrect Approach
user.name = "Alice";

The object reference remains the same.

Although mutating props or state like this is discouraged, if the parent doesn't create a new object and trigger a render, React won't detect a prop change based on reference alone.

Correct Approach
setUser({
  ...user,
  name: "Alice"
});

This creates a new object reference.

Interview Tip

React compares references, not object contents.

Q39. What happens when an array prop changes?
Answer

Arrays behave the same way as objects.

Example:

const fruits = ["Apple", "Mango"];

<List fruits={fruits} />

Updating like this:

const newFruits = [...fruits, "Banana"];

creates a new array, so React sees it as changed.

Wrong
fruits.push("Banana");

This mutates the existing array.

Correct
setFruits([...fruits, "Banana"]);
Interview Tip

Never mutate arrays in React. Always create a new array.

Q40. What happens if a parent re-renders?
Answer

By default, when a parent component re-renders, all of its child components also re-render.

Example:

function App() {

  const [count, setCount] = useState(0);

  return (
    <>
      <User />
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}

Every click causes:

App renders

↓

User renders

even if <User /> doesn't use count.

Why?

React renders the parent again, which means it also evaluates its children.

Can this be prevented?

Yes.

Use:

React.memo()
Interview Tip

Parent render → Child render (by default).

Q41. Do child components always re-render?
Answer

No.

Normally they do when the parent re-renders, but React can skip re-rendering in some situations.

Example:

const User = React.memo(function User() {
  return <h1>Hello</h1>;
});

If the props don't change, React skips rendering User.

Interview Tip

Without React.memo()

Parent render

↓

Child render

With React.memo()

Parent render

↓

Child skipped (if props are unchanged)
Q42. When does React compare props?
Answer

React compares props when a component is memoized using React.memo() (or when you provide a custom comparison function).

Without memoization:

<User />

React simply re-renders the child whenever the parent renders.

With memoization:

const User = React.memo(UserComponent);

React compares the previous props with the new props.

If they're considered equal, it skips rendering.

Interview Tip

React doesn't perform prop comparison for every component automatically. Prop comparison is mainly used for memoized components.

Q43. What is shallow comparison?
Answer

Shallow comparison checks only the top-level values or references, not nested object contents.

Example:

const obj1 = {
  name: "John"
};

const obj2 = {
  name: "John"
};

Comparison:

obj1 === obj2

Output:

false

because they are different objects in memory.

Another example:

const obj1 = {
  name: "John"
};

const obj2 = obj1;

obj1 === obj2;

Output:

true

because both variables reference the same object.

Interview Tip

React uses shallow comparison, not deep comparison.

Common Mistake

Many developers think React compares object contents.

It doesn't.

It compares references.

Q44. How does React.memo() work with props?
Answer

React.memo() is a Higher-Order Component (HOC) that prevents unnecessary re-renders.

It compares the previous props and new props using shallow comparison.

If the props are the same, React skips rendering the component.

Example:

const User = React.memo(function User({ name }) {
  console.log("Rendered");

  return <h1>{name}</h1>;
});

If:

<User name="John" />

is rendered repeatedly with the same name, React skips re-rendering User.

Interview Tip

React.memo() is useful when:

The component renders frequently.
Rendering is expensive.
Props don't change often.
Common Mistake

React.memo() is not a guarantee of better performance. It also performs a comparison, so using it everywhere can add unnecessary overhead.

Q45. Why does passing a new object cause re-rendering?
Answer

React compares object references, not their contents.

Example:

<User user={{ name: "John" }} />

Every time the parent renders, a new object is created.

Even though it contains the same data, the reference is different.

Old Object

↓

New Object

↓

Different reference

↓

React thinks props changed

↓

Child re-renders
Better Approach
const user = useMemo(() => ({
  name: "John"
}), []);

<User user={user} />

Now the object reference stays the same across renders (until dependencies change).

Interview Tip

Two objects with identical values are still different if they have different references.

{} === {}

Output:

false

This is one of the most common reasons memoized components re-render unexpectedly.

🚀 Quick Revision (Q36–Q45)
Props are passed as a JavaScript object from parent to child.
Primitives (string, number, boolean) compare by value; objects, arrays, and functions are compared by reference.
React detects changes in objects and arrays by reference, not by their contents.
By default, parent re-render → child re-render.
React.memo() can skip child renders if props are shallowly equal.
React performs shallow comparison, not deep comparison.
Creating a new object or array inside JSX ({} or []) creates a new reference every render, which can cause unnecessary re-renders.
Use immutable updates (e.g., spread syntax) instead of mutating objects or arrays.
Use useMemo() to memoize expensive objects/arrays and React.memo() for components that receive stable props.

Q46. Why does passing an inline function cause re-rendering?
Answer

Every time a component renders, an inline function creates a new function object.

Since React compares function props by reference, it treats the new function as a changed prop.

Example
function App() {
  return (
    <Button onClick={() => console.log("Clicked")} />
  );
}

Every render creates a new function:

() => console.log("Clicked")

Even though the code looks the same, it's a new function reference.

If Button is wrapped with React.memo(), it still re-renders because the onClick prop changed.

Better Approach
function App() {
  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []);

  return <Button onClick={handleClick} />;
}

Now the function reference stays the same until dependencies change.

Interview Tip

Functions are objects in JavaScript, so React compares their references, not their code.

Q47. How does useCallback() help with props?
Answer

useCallback() memoizes a function and returns the same function reference between renders (unless its dependencies change).

This helps prevent unnecessary re-renders of memoized child components.

Without useCallback
function Parent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button onClick={() => alert("Hello")} />
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}

Each render creates a new onClick function.

With useCallback
function Parent() {
  const handleClick = useCallback(() => {
    alert("Hello");
  }, []);

  return <Button onClick={handleClick} />;
}

The function reference remains stable.

Interview Tip

Use useCallback() mainly when:

Passing functions to React.memo() components.
Passing functions as dependencies to hooks.

Don't use it everywhere—it has its own overhead.

Q48. How does useMemo() help with props?
Answer

useMemo() memoizes the result of a computation (such as an object or array) so that the same reference is reused until dependencies change.

Problem
function Parent() {
  const user = {
    name: "John"
  };

  return <User user={user} />;
}

A new object is created on every render.

Solution
function Parent() {
  const user = useMemo(() => ({
    name: "John"
  }), []);

  return <User user={user} />;
}

Now user keeps the same reference across renders.

Difference

useCallback()

const handleClick = useCallback(() => {}, []);

Memoizes a function.

useMemo()

const user = useMemo(() => ({ name: "John" }), []);

Memoizes a value.

Interview Tip
useCallback → Function
useMemo → Value
Q49. Difference between primitive props and reference props?
Answer

Primitive props contain actual values.

Reference props contain references to objects in memory.

Primitive Props	Reference Props
String	Object
Number	Array
Boolean	Function
BigInt	Date
Symbol	Map, Set
Primitive Example
<User age={25} />

React compares:

25 === 25

Result:

true
Reference Example
<User user={{ name: "John" }} />

React compares:

{} === {}

Result:

false

because each object has a different reference.

Interview Tip

React compares:

Primitive props → by value.
Reference props → by reference.
Q50. What are callback props?
Answer

A callback prop is a function passed from a parent to a child so the child can notify the parent when something happens.

This enables Child → Parent communication.

Parent
function App() {
  function handleClick() {
    alert("Button clicked!");
  }

  return <Button onClick={handleClick} />;
}
Child
function Button({ onClick }) {
  return <button onClick={onClick}>Click</button>;
}

The child calls the function, but the function belongs to the parent.

Interview Tip

Callback props are one of the most common patterns in React.

Q51. Why do we pass functions as props?
Answer

Functions are passed as props to allow child components to communicate with or trigger actions in their parent.

This maintains React's one-way data flow.

Example
function Parent() {
  function showMessage() {
    alert("Hello");
  }

  return <Child greet={showMessage} />;
}

Child:

function Child({ greet }) {
  return <button onClick={greet}>Click</button>;
}

The child doesn't know what the function does—it simply calls it.

Interview Tip

Passing functions as props is the standard way for a child to notify its parent about events.

Q52. How can a child send data to its parent?
Answer

A child cannot directly modify the parent's state.

Instead, the parent passes a callback function, and the child calls it with data.

Parent
function Parent() {
  const [message, setMessage] = useState("");

  function receiveData(data) {
    setMessage(data);
  }

  return (
    <>
      <Child sendData={receiveData} />
      <p>{message}</p>
    </>
  );
}
Child
function Child({ sendData }) {
  return (
    <button onClick={() => sendData("Hello Parent")}>
      Send
    </button>
  );
}
Flow
Parent

↓

passes callback

↓

Child

↓

calls callback

↓

Parent receives data
Interview Tip

React data flow is always:

Parent → Child through props.
Child → Parent through callback props.
Q53. What is lifting state up?
Answer

Lifting state up means moving shared state to the closest common parent so multiple child components can use and update the same data.

Before
Child A (Own State)

Child B (Own State)

The children cannot share data.

After
Parent (Shared State)

↓

Child A

↓

Child B

The parent owns the state and passes it to both children.

Example
function Parent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Counter count={count} />
      <Button increment={() => setCount(count + 1)} />
    </>
  );
}
Interview Tip

Whenever multiple components need the same state, lift it up to their nearest common parent.

Q54. Difference between prop drilling and Context API?
Answer
Prop Drilling

Passing props through intermediate components.

App
↓

Parent
↓

Child
↓

GrandChild

Even if only GrandChild needs the data, every component passes it down.

Context API

Creates a shared data source that any descendant can access directly.

Context

↓

Any Component

No need to pass props through every intermediate component.

Comparison
Prop Drilling	Context API
Pass props manually	Share data globally within a tree
Suitable for small apps	Better for deeply nested data
More boilerplate	Cleaner for shared state
Intermediate components pass props	Intermediate components don't need to know about the data
Interview Tip

Context API reduces prop drilling, but it is not a full replacement for state management libraries like Redux or Zustand.

Q55. What problems does prop drilling create?
Answer

Prop drilling can make applications harder to maintain.

Problems
Too many props passed through unrelated components.
Intermediate components receive props they don't use.
Code becomes difficult to read.
Refactoring becomes harder.
Increased coupling between components.
Example
App

↓

Header

↓

Navbar

↓

Menu

↓

Profile

If only Profile needs the user data, every component above must pass it along.

Solution

For deeply shared data, use:

Context API
Redux
Zustand
Other state management libraries

Choose the solution based on the complexity of your application.

🚀 Quick Revision (Q46–Q55)
Inline functions create a new function reference on every render.
useCallback() memoizes a function, keeping its reference stable.
useMemo() memoizes a computed value (object, array, etc.).
Primitive props are compared by value; reference props (objects, arrays, functions) are compared by reference.
Callback props let children notify parents about events.
Child → Parent communication is achieved by invoking a callback function passed from the parent.
Lifting state up means moving shared state to the nearest common parent.
Prop drilling involves passing props through multiple intermediate components.
Context API helps eliminate unnecessary prop drilling for widely shared data.
Use Context API or a state management library when prop drilling becomes excessive, rather than passing the same props through many unrelated components.


Q56. How do props work in functional components?
Answer

In functional components, React passes all props as the first argument to the function.

Example:

function App() {
  return <User name="John" age={25} />;
}

Child Component

function User(props) {
  return (
    <>
      <h2>{props.name}</h2>
      <p>{props.age}</p>
    </>
  );
}

Internally React does something similar to:

const props = {
  name: "John",
  age: 25
};

User(props);
Using Destructuring
function User({ name, age }) {
  return (
    <>
      <h2>{name}</h2>
      <p>{age}</p>
    </>
  );
}

This is the preferred approach.

Interview Tip

Functional components are simply JavaScript functions that receive a props object as their first parameter.

Q57. How did props work in class components?
Answer

In class components, props are available through this.props.

Example

class User extends React.Component {
  render() {
    return (
      <>
        <h2>{this.props.name}</h2>
        <p>{this.props.age}</p>
      </>
    );
  }
}

Usage

<User name="John" age={25} />
Functional vs Class
Functional	Class
props.name	this.props.name
No this keyword	Uses this
Simpler syntax	More boilerplate
Recommended today	Mostly used in legacy code
Interview Tip

Most modern React projects use functional components with Hooks.

Q58. What are rest props?
Answer

Rest props collect the remaining properties into a single object using the rest operator (...).

Example

function Button({ text, ...rest }) {
  return (
    <button {...rest}>
      {text}
    </button>
  );
}

Usage

<Button
  text="Save"
  disabled
  className="btn"
/>

Here,

text

contains

Save

and

rest

contains

{
  disabled: true,
  className: "btn"
}
Why use it?

It makes reusable components flexible because they can accept additional props without explicitly listing every one.

Q59. Difference between spread props and rest props?
Answer

Although both use ..., they serve different purposes.

Rest Props

Collect remaining properties.

function User({ name, ...rest }) {
  console.log(rest);
}

Output

{
  age: 25,
  city: "Pune"
}
Spread Props

Expand an object into individual props.

const user = {
  name: "John",
  age: 25
};

<User {...user} />

Equivalent to

<User
  name="John"
  age={25}
/>
Difference Table
Rest	Spread
Collects properties	Expands properties
Used in destructuring	Used when passing props
Creates an object	Breaks object into props
Interview Tip

Rest collects. Spread expands.

Q60. How do you validate props?
Answer

Props can be validated using PropTypes.

Example

import PropTypes from "prop-types";

function User({ name }) {
  return <h2>{name}</h2>;
}

User.propTypes = {
  name: PropTypes.string
};

If someone passes

<User name={123} />

React displays a warning in development mode.

Interview Tip

PropTypes provide runtime validation, not compile-time validation.

Q61. What is PropTypes?
Answer

PropTypes is a library used to validate the types of props passed to React components.

It helps catch mistakes during development.

Example

import PropTypes from "prop-types";

function User({ age }) {
  return <p>{age}</p>;
}

User.propTypes = {
  age: PropTypes.number
};
Common Types
PropTypes.string
PropTypes.number
PropTypes.bool
PropTypes.array
PropTypes.object
PropTypes.func
PropTypes.node
PropTypes.element
Interview Tip

PropTypes only show warnings in development—they do not stop the application from running.

Q62. Why use PropTypes?
Answer

PropTypes help by:

Detecting incorrect prop types.
Making components easier to understand.
Improving documentation.
Reducing bugs during development.

Example

<User age="Twenty Five" />

Expected

PropTypes.number

React shows a warning because a string was passed instead of a number.

Interview Tip

PropTypes improve developer experience but are not a replacement for TypeScript.

Q63. What are custom prop validators?
Answer

You can write your own validation function for special requirements.

Example

import PropTypes from "prop-types";

function User({ age }) {
  return <p>{age}</p>;
}

User.propTypes = {
  age(props, propName, componentName) {
    if (props[propName] < 18) {
      return new Error(
        `${componentName}: age must be at least 18`
      );
    }
  }
};

If

<User age={15} />

React displays a warning in development.

Interview Tip

Custom validators are useful when built-in PropTypes are not enough.

Q64. Difference between PropTypes and TypeScript?
Answer
PropTypes	TypeScript
Runtime validation	Compile-time type checking
Works in JavaScript	Requires TypeScript
Shows warnings	Shows compiler errors
No IDE type inference	Excellent IDE support
Doesn't prevent build	Can prevent compilation if types are incorrect
PropTypes Example
User.propTypes = {
  age: PropTypes.number
};
TypeScript Example
type UserProps = {
  age: number;
};

function User({ age }: UserProps) {
  return <p>{age}</p>;
}
Which is better?

For new projects, TypeScript is generally preferred because it catches errors earlier, offers better tooling, and improves maintainability.

Interview Tip

Many companies still use PropTypes in JavaScript projects, while TypeScript is increasingly common in modern React applications.

Q65. How do props affect rendering performance?
Answer

Props determine whether a child component receives new input.

When props change, React re-renders the child component.

Example
function Parent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Child count={count} />
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}

Each time count changes:

Parent renders

↓

Child receives new props

↓

Child renders
Performance Problems

Passing new object, array, or function references on every render can cause unnecessary re-renders.

Example

<Child user={{ name: "John" }} />

A new object is created every render.

Better Approach
const user = useMemo(() => ({
  name: "John"
}), []);

<Child user={user} />

Now the object reference remains stable.

Optimization Tools
React.memo()
useMemo()
useCallback()
Interview Tip

Props themselves are not slow. Frequent changes to prop references (especially objects, arrays, and functions) can lead to unnecessary re-renders if components are memoized.

🚀 Quick Revision (Q56–Q65)
Functional components receive props as the first function parameter.
Class components access props using this.props.
Rest props (...rest) collect the remaining properties during destructuring.
Spread props (...obj) expand an object's properties into individual props.
PropTypes validate props at runtime and display warnings in development.
Common PropTypes include string, number, bool, array, object, func, node, and element.
Custom PropTypes allow you to implement your own validation logic.
TypeScript performs compile-time type checking and is generally preferred for new projects.
Child components re-render when they receive new props.
Unstable object, array, or function references can negatively affect rendering performance; use React.memo(), useMemo(), and useCallback() where appropriate.

Q66. What happens if props don't change?
Answer

If props don't change, React's behavior depends on whether the component is memoized.

Case 1: Normal Component
function Child({ name }) {
  console.log("Child Rendered");

  return <h1>{name}</h1>;
}
function Parent() {

  const [count, setCount] = useState(0);

  return (
    <>
      <Child name="John" />

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}

Clicking Increment

Parent Render

↓

Child Render

Even though

name = "John"

never changed.

Case 2: Using React.memo()
const Child = React.memo(function Child({ name }) {
  console.log("Child Render");

  return <h1>{name}</h1>;
});

Now

Parent Render

↓

Props Compared

↓

Same?

↓

Yes

↓

Child Skipped
Interview Tip

Without React.memo(), child components normally re-render whenever the parent re-renders.

With React.memo(), React skips the render if the props are shallowly equal.

Q67. Can props trigger re-render?
Answer

Yes.

When a component receives new props, React re-renders that component.

Example

function Parent() {

  const [count, setCount] = useState(0);

  return <Child count={count} />;
}

Initially

count = 0

Later

setCount(1);

Now

count prop changed

↓

Child receives new props

↓

Child re-renders
Important

A child component re-renders when:

Its parent re-renders (by default).
It receives different props.
Its own state changes.
Its consumed context value changes.
Interview Tip

Props themselves don't "trigger" rendering. A parent render causes React to provide updated props to the child, and React decides whether the child should render.

Q68. Does changing props recreate Virtual DOM?
Answer

Yes.

Whenever props change, React renders the component again.

During this render:

New Props

↓

Component Function Executes

↓

New Virtual DOM Created

↓

Diffing

↓

Real DOM Updated (only if needed)

Example

function User({ name }) {
  return <h1>{name}</h1>;
}

Initially

<User name="John" />

Virtual DOM

<h1>John</h1>

Later

<User name="Alice" />

React creates a new Virtual DOM

<h1>Alice</h1>

Then compares it with the previous Virtual DOM.

Only the changed text node is updated in the Real DOM.

Interview Tip

React does not recreate the Real DOM.

It creates a new Virtual DOM, performs diffing, and updates only the necessary parts of the Real DOM.

Q69. How does React know props changed?
Answer

React compares the previous props with the new props.

For memoized components (React.memo()), React performs a shallow comparison.

Primitive Example

Old

age={25}

New

age={25}

Comparison

25 === 25

Result

true

React considers the prop unchanged.

Object Example

Old

user={{ name: "John" }}

New

user={{ name: "John" }}

Comparison

{} === {}

Result

false

Although the contents are the same, they are different objects in memory.

React considers the prop changed.

Interview Tip

React compares references, not object contents.

Common Mistake

Many candidates say:

React compares objects.

Correct answer:

React compares object references, not their contents.

Q70. Why shouldn't props contain huge objects?
Answer

Large objects can hurt performance because:

Creating them repeatedly is expensive.
They often get a new reference every render.
Memoized components may re-render unnecessarily.
More memory is allocated.

Example

<Dashboard
    data={{
        users: [...],
        products: [...],
        orders: [...]
    }}
/>

Every render creates a new object.

React sees

Old Object

↓

New Object

↓

Different Reference

↓

Props Changed

↓

Child Render
Better Approach
const dashboardData = useMemo(() => ({
    users,
    products,
    orders
}), [users, products, orders]);

<Dashboard data={dashboardData} />

Now the object reference stays the same unless one of its dependencies changes.

Better Design

Instead of

<User user={hugeObject} />

Prefer

<User
    id={user.id}
    name={user.name}
/>

Pass only the data the child actually needs.

Interview Tip

Avoid passing large objects if only a few fields are required. This keeps components easier to understand and can reduce unnecessary re-renders.

⭐ Most Asked Interview Follow-up Questions
Q1. Does React compare props deeply?

Answer

No.

React performs a shallow comparison.

Q2. Does React compare object values?

Answer

No.

It compares object references.

Q3. Does every parent render cause child render?

Answer

Yes, by default.

React.memo() can skip child renders when props haven't changed.

Q4. Does React recreate Virtual DOM after every render?

Answer

Yes.

A new Virtual DOM representation is created on every render.

Q5. Does React recreate the Real DOM?

Answer

No.

Only the changed parts are updated after diffing.

🚀 2-Minute Revision (Props - Intermediate)
Parent
   │
   │ passes props
   ▼
Child

State Change
      │
      ▼
Parent Re-render
      │
      ▼
Child Re-render (default)

React.memo()
      │
      ▼
Compare Props
      │
Same? ───► Skip Render
Different? ─► Render
Remember These Rules
✅ Props are passed as a JavaScript object.
✅ Primitive props are compared by value.
✅ Objects, arrays, and functions are compared by reference.
✅ React uses shallow comparison, not deep comparison.
✅ React.memo() skips renders when props are shallowly equal.
✅ useCallback() memoizes functions.
✅ useMemo() memoizes values (objects, arrays, computed results).
✅ Callback props enable Child → Parent communication.
✅ Context API helps reduce prop drilling.
✅ Every render creates a new Virtual DOM.
✅ Only changed parts of the Real DOM are updated.
✅ Avoid creating inline objects, arrays, and functions unnecessarily when optimizing memoized components.

🔴 Tricky Props Interview Questions
Q71. Can props be changed inside the child component?
Answer

No.

Props are read-only (immutable).

A child component should never modify the props it receives.

Example

function User(props) {
    props.name = "John";   // ❌ Wrong

    return <h1>{props.name}</h1>;
}

Always treat props as read-only.

Correct Way

If the value needs to change:

Update the parent's state.
Parent passes the updated prop to the child.
Interview Tip

Remember:

Parent owns props.

Child only uses props.
Q72. Why are props immutable?
Answer

Props are immutable because React follows one-way data flow.

Parent

↓

Child

If children could change props:

Data flow becomes unpredictable.
Components become tightly coupled.
Debugging becomes difficult.
UI may become inconsistent.

Only the parent should control its data.

Interview Tip

State belongs to the component.

Props belong to the parent.

Q73. Can we assign a prop to another variable and modify it?

Example

const user = props.user;

user.name = "Alice";
Answer

Technically yes, JavaScript allows it.

But you should never do it.

Why?

Because:

user

↓

points to

↓

same object

You're modifying the original object.

Example

const user = props.user;

user.name = "Alice";

This changes

props.user.name

too.

Correct Way
const newUser = {
    ...props.user,
    name: "Alice"
};

Creates a new object.

Interview Tip

Assigning an object prop to another variable does not create a copy.

Q74. Is this allowed?
props.name = "John";
Answer

❌ No.

React expects props to be read-only.

Example

function User(props){

props.name="John";

}

Never do this.

Instead

setName("John");

inside parent.

Interview Tip

Modifying props directly breaks React's design principles.

Q75. Is this allowed?
const { name } = props;

name = "John";
Answer

❌ No.

This produces an error because

const

variables cannot be reassigned.

Example

const { name } = props;

name="John";

Error

Assignment to constant variable.
Interview Tip

Even if it were declared with let, changing the local variable would not change the prop.

Q76. Why does changing nested object properties sometimes work?

Example

props.user.name = "John";
Answer

Because JavaScript objects are passed by reference.

Example

const user = {
    name:"Alice"
};

Passing

<User user={user}/>

Both parent and child reference the same object.

Changing

props.user.name="John";

changes

user.name

too.

But...

React may not detect this as a prop change because the object reference didn't change.

This can lead to stale or inconsistent UI.

Interview Tip

Just because JavaScript allows mutation doesn't mean React expects it.

Q77. Why is mutating object props dangerous?
Answer

Because React relies on immutable updates.

Mutating objects can cause:

Unexpected bugs.
Inconsistent UI.
Incorrect memoization.
Missed updates.
Difficult debugging.

Wrong

user.name="John";

Correct

const updatedUser={
    ...user,
    name:"John"
};
Interview Tip

Always create a new object instead of modifying an existing one.

Q78. Does React freeze props?
Answer

Generally, no.

React does not freeze props in production.

However, in development you may encounter warnings or additional checks (especially with tools, strict mode, or certain libraries), but you should not rely on React to prevent mutations.

Interview Tip

React expects you to treat props as immutable.

Q79. Can props contain state?
Answer

Yes.

State from the parent can be passed as props.

Example

function Parent(){

const [count,setCount]=useState(0);

return <Child count={count}/>

}

Here

count

is

State inside Parent.
Prop inside Child.
Interview Tip

The same data can be:

State

↓

Parent

↓

Props

↓

Child
Q80. Can props contain another component?
Answer

Yes.

Components can be passed as props.

Example

function Star(){

return <span>⭐</span>

}

Passing

<Card icon={Star}/>

Child

function Card({icon:Icon}){

return <Icon/>

}

Output

⭐
Interview Tip

Passing components as props is common in reusable UI libraries.

Q81. Can components be passed as props?
Answer

Yes.

This is the same concept as the previous question but is often asked directly.

Example

<Layout
header={Header}
footer={Footer}
/>

Inside

function Layout({
header:Header,
footer:Footer
}){

return(

<>

<Header/>

<Footer/>

</>

)

}
Interview Tip

Don't confuse:

<Component/>

and

Component

Passing a component means passing the component itself, not rendering it immediately.

Q82. Difference between component props and children?
Answer
Component Props

Passed as attributes.

<Card title="React"/>

Access

props.title
Children

Passed between opening and closing tags.

<Card>

<h1>Hello</h1>

</Card>

Access

props.children
Difference
Props	Children
Passed as attributes	Passed between tags
Explicitly named	Automatically available as children
Multiple custom props	One special prop that can contain any renderable content
Q83. Is children also a prop?
Answer

Yes.

Many beginners think

children

is something special.

Actually

props.children

is simply another property on the props object.

Example

<Card>

Hello

</Card>

Internally

{
children:"Hello"
}
Interview Tip

children is just another prop automatically supplied by React.

Q84. Why is children special?
Answer

It is special because React automatically collects everything placed between a component's opening and closing tags into the children prop.

Example

<Card>

<h1>Hello</h1>

<p>Welcome</p>

</Card>

React creates something similar to:

{
children:[
<h1/>,
<p/>
]
}

This allows components such as Card, Modal, and Layout to be highly reusable.

Interview Tip

children is not a different type of data—it is a convention React uses to pass nested content.

Q85. What happens if the parent passes new props but the value remains the same?
Answer

It depends on the type of prop.

Primitive
<Child age={25}/>

Again

<Child age={25}/>

The value is the same.

For a memoized component, React's shallow comparison sees no change, so it can skip rendering.

Object
<Child user={{name:"John"}}/>

Every render creates a new object.

Even though

name="John"

the reference is different.

React considers it changed.

Interview Tip

Same value ≠ Same reference.

Objects, arrays, and functions are compared by reference.

Q86. Does React compare deeply?
Answer

No.

React performs shallow comparison, not deep comparison, when comparing props in memoized components.

Example

const obj1 = {
    name: "John"
};

const obj2 = {
    name: "John"
};

obj1 === obj2;

Result

false

because they are different objects in memory.

Interview Tip

Deep comparison would be much more expensive, especially for large nested objects.

Q87. What is shallow equality?
Answer

Shallow equality means comparing only the first level of values or references.

Example

const a = { name: "John" };
const b = { name: "John" };

a === b;

Result

false

because they are different references.

Example

const a = { name: "John" };
const b = a;

a === b;

Result

true

because both variables reference the same object.

Interview Tip

Shallow equality checks whether references are equal, not whether nested contents are identical.

Q88. Why does React use shallow comparison?
Answer

React uses shallow comparison because it is fast and efficient.

A deep comparison would require checking every nested property, which can become expensive for large objects and arrays.

By comparing only top-level references:

React performs comparisons quickly.
Memoization (React.memo) stays efficient.
Rendering performance is improved.

If you update data immutably (creating new objects instead of mutating existing ones), shallow comparison accurately detects changes.

Interview Tip

React's rendering model is built around immutable updates. Shallow comparison works well because a changed object should have a new reference.

🚀 Quick Revision (Tricky Questions)
❌ Never modify props directly.
✅ Props belong to the parent; state belongs to the component that owns it.
✅ Objects and arrays passed as props share the same underlying reference.
❌ Mutating nested properties can lead to bugs because React relies on immutable updates.
✅ React does not freeze props in production.
✅ Parent state can become child props.
✅ Components can be passed as props.
✅ children is a special prop automatically populated by React.
✅ React uses shallow comparison, not deep comparison.
✅ Same value does not always mean same reference for objects, arrays, and functions.

Q89. What is the difference between?
<Person user={user} />

and

<Person user={{ ...user }} />
Answer
First Example
<Person user={user} />

React passes the existing object reference.

Example

const user = {
    name: "John"
};

<Person user={user} />

The child receives the same object reference.

Second Example
<Person user={{ ...user }} />

The spread operator creates a new object.

Even if the contents are identical,

{
name:"John"
}

React sees

Old Object

↓

New Object

↓

Different Reference

The prop is considered changed.

Interview Tip
user

↓

Same reference

vs

{...user}

↓

New reference
Q90. Why does this re-render?
<Button onClick={() => save()} />
Answer

Because

() => save()

creates a new function every time the parent renders.

Example

Render 1

↓

Function A

Next render

Render 2

↓

Function B

Different references

↓

React thinks props changed.

↓

Button re-renders.

Interview Tip

Inline functions create a new function object on every render.

Q91. Why is this better?
const handleClick = useCallback(save, []);
Answer

useCallback() returns the same function reference unless its dependencies change.

Example

const handleClick = useCallback(save, []);

Now

Render 1

↓

Function A

Render 2

↓

Same Function A

No new function created.

Benefit

If Button is wrapped with React.memo(),

React sees

Old Function

↓

Same Function

↓

Skip Render
Interview Tip

useCallback() is mainly useful when passing functions to memoized child components.

Q92. Why should keys not be passed as props?
Answer

Because key is a special prop reserved for React.

Example

<User
key={1}
name="John"
/>

React uses

key

internally for reconciliation.

It is not passed to the component.

Interview Tip

key helps React identify list items.

It is not part of the component's props.

Q93. Can key be accessed using props.key?
Answer

No.

Example

function User(props){

console.log(props.key);

}

Output

undefined
Why?

Because React removes

key

before passing props to the component.

If You Need It

Pass another prop.

<User

key={1}

id={1}

/>

Then

props.id

works.

Interview Tip

Remember

key

↓

React only

id

↓

Developer
Q94. What happens if a prop value is a Promise?
Answer

A Promise is just another JavaScript object, so it can technically be passed as a prop.

Example

<User data={fetch("/api/users")} />

Here, data is a Promise object.

However, the child component cannot directly render the Promise.

function User({ data }) {
  return <p>{data}</p>;
}

This won't display the resolved data.

Instead, the Promise must be handled (for example, with await inside an async function or by using state after it resolves).

Better Approach
const data = await fetchUsers();

<User data={data} />

Pass the resolved data instead of the Promise.

Interview Tip

Passing a Promise is valid JavaScript, but React components usually expect resolved values, not pending Promises.

Q95. Can props contain async functions?
Answer

Yes.

An async function is still a function.

Example

async function save(){

}

<Button onSave={save}/>

Child

function Button({onSave}){

<button onClick={onSave}>

Save

</button>

}

Perfectly valid.

Interview Tip

React treats async functions like any other function prop.

Q96. What happens if props are missing?
Answer

If a prop isn't passed,

it becomes

undefined

Example

<User/>

Child

function User({name}){

console.log(name);

}

Output

undefined
Better
function User({

name="Guest"

}){}

Output

Guest
Q97. What happens when default props are used?
Answer

Default values are used only when the prop is undefined.

Example

function User({

name="Guest"

}){

return <h1>{name}</h1>

}

Usage

<User/>

Output

Guest
But
<User name={null}/>

Output

null

because

null

≠

undefined
Interview Tip

Default values replace undefined, not null.

Q98. Difference between
name || "Guest"

and

name ?? "Guest"
Answer
OR Operator
name || "Guest"

Uses "Guest" when the left side is falsy.

Falsy values include:

false

0

""

null

undefined

NaN

Example

0 || "Guest"

Output

Guest
Nullish Coalescing
name ?? "Guest"

Uses "Guest" only when the value is:

null
undefined

Example

0 ?? "Guest"

Output

0
Comparison

| Value | || | ?? |
|---------|------|------|
| 0 | "Guest" | 0 |
| false | "Guest" | false |
| "" | "Guest" | "" |
| null | "Guest" | "Guest" |
| undefined | "Guest" | "Guest" |

Interview Tip

For React props,

?? is usually safer because valid values like 0 or false won't be replaced.

Q99. Why is destructuring inside parameters preferred?
Answer

Instead of

function User(props){

}

write

function User({

name,

age

}){

}

Advantages

Cleaner
Less typing
Easier to read
No repeated
props.name
Interview Tip

Modern React code almost always destructures props in the parameter list.

Q100. Can props cause infinite rendering?
Answer

Props alone do not cause infinite rendering.

Infinite rendering usually happens when a render cycle repeatedly triggers a state update.

Example

function Child({ setCount }) {
  setCount(1); // ❌ Runs during render
  return <p>Child</p>;
}

Here:

Parent renders
↓

Child renders
↓

setCount()
↓

Parent renders again
↓

Child renders again

This creates an infinite loop.

The issue is calling a state update during rendering, not the props themselves.

Correct Approach

Call state updates in response to events or inside useEffect when appropriate.

Q101. Can props create memory leaks?
Answer

No.

Props themselves do not create memory leaks.

Memory leaks are usually caused by resources that aren't cleaned up, such as:

Timers (setInterval)
Event listeners
WebSocket connections
Uncancelled network requests

Example

useEffect(() => {
  const id = setInterval(() => {
    console.log("Running...");
  }, 1000);

  return () => clearInterval(id);
}, []);

The cleanup function prevents a memory leak.

Interview Tip

Props carry data. They do not manage resources, so they don't inherently cause memory leaks.

Q102. What happens when the parent updates unrelated state?
Answer

By default, the parent re-renders.

That means its child components also re-render.

Example

function Parent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Child name="John" />
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}

Even though Child only receives name, it still re-renders because the parent rendered.

If Child is wrapped with React.memo() and its props haven't changed, React can skip the child render.

Interview Tip

Parent render → Child render is the default behavior.

Q103. Why do memoized children still re-render sometimes?
Answer

React.memo() only skips rendering when props are shallowly equal.

Common reasons a memoized child still re-renders:

1. New object
<Child user={{ name: "John" }} />

A new object is created every render.

2. New array
<Child items={[1, 2, 3]} />

A new array is created every render.

3. New function
<Child onClick={() => save()} />

A new function is created every render.

4. Props actually changed
<Child count={count} />

If count changes, the child should re-render.

5. Context updates

If the child consumes a context value that changes, it will re-render even if its props are unchanged.

How to Optimize
Use useMemo() for objects and arrays.
Use useCallback() for functions.
Avoid creating new references unnecessarily.
Keep props stable when possible.
🚀 Final Revision (Most Asked Tricky Points)
✅ user={user} passes the existing object reference.
✅ user={{ ...user }} creates a new object reference.
✅ Inline functions create a new function on every render.
✅ useCallback() keeps function references stable.
✅ key is reserved for React and isn't available via props.
✅ Async functions can be passed as props.
✅ Missing props become undefined.
✅ Default values apply only to undefined, not null.
✅ Prefer ?? over || when 0, false, or "" are valid values.
✅ Props don't cause infinite rendering or memory leaks by themselves.
✅ React.memo() can still re-render if object, array, or function props receive new references, or if context values change.


⭐ Most Asked Questions
What are props?
Difference between props and state?
Why are props immutable?
What is prop drilling?
What is lifting state up?
What is callback props?
How does child send data to parent?
What is children prop?
How does React.memo() work?
What is shallow comparison?
Difference between
<Component />

and

<Component></Component>
What are default props?
Difference between default props and default parameters?
How do props trigger re-render?
Difference between passing primitive and object props?
Why does passing inline functions affect performance?
What is spread operator in props?
Difference between
<Component {...props} />

and

<Component name="John" />
How do you optimize props performance?
💻 Coding Questions
Beginner

Pass a string prop.

Pass multiple props.

Display user information using props.

Pass an object prop.

Pass an array prop.

Pass a boolean prop.

Pass a function prop.

Use destructuring.

Render children.

Use default values.

Intermediate

Create a reusable Button component.

Create a Card component using children.

Pass event handlers.

Create a User component.

Build a Product Card.

Build a Navbar.

Pass styles as props.

Pass icons as props.

Pass components as props.

Pass JSX as props.

Implement callback props.

Lift state up.

Build Parent → Child communication.

Build Child → Parent communication.

Use spread props.

Advanced

Create a Modal using children.

Create Tabs component.

Build Accordion.

Create reusable Form component.

Build reusable Table component.

Build reusable Input component.

Create Pagination component.

Implement Higher Order Component passing props.

Build Theme Provider.

Implement Context replacing prop drilling.

Optimize using React.memo().

Optimize using useCallback().

Optimize using useMemo().

Prevent unnecessary renders.

Debug unnecessary prop updates.

🚀 2-Minute Revision
Props = Inputs to a component.
Props are read-only (immutable).
Parent → Child communication.
Child → Parent = Callback function prop.
Props can contain any JavaScript value.
Objects and arrays are passed by reference.
Changing props triggers a re-render.
React.memo() skips re-renders if props are shallowly equal.
children is a special prop.
Prop drilling = Passing props through many intermediate components.
Context API helps reduce prop drilling.
Inline objects/functions create new references and can cause unnecessary re-renders.



❓ Frequently Forgotten Points
key is not available inside props.
ref is not a normal prop.
Props should never be mutated.
children is just another prop provided by React.
React performs shallow comparison, not deep comparison.
New object/array/function references can trigger re-renders even if their contents are unchanged.
Default parameter values are generally preferred over defaultProps for modern functional components.
Props flow in one direction only: Parent → Child.
Callback props enable Child → Parent communication.
React.memo() only helps when props remain shallowly equal.
Passing large objects as props can impact performance if they change frequently.