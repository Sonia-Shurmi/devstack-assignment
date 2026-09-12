<!-- Name -->
DevStack

<!-- Description -->
DevStack is a simple web application that helps developers explore different technologies and build their ideal development stack by selecting technologies from different categories.

<!-- Technologies Used -->
React, TypeScript, Vite, Tailwind CSS, React Icons, React Toastify

<!-- Features -->
1. Explore technologies by category with detailed information.
2. Add technologies to a personal stack and remove them anytime.
3. Prevent duplicate selections with interactive toast notifications.

<!-- React Questions -->

i. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript. It makes React components easier to create and understand.

ii. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. State is data managed inside a component that can change over time.

iii. What does the useState hook do, and where did you use it in this project?

useState lets a component store and update data. I used it in the Technology component to keep track of the selected technologies in the stack.

iv. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect runs side effects after a component renders, such as fetching data. In this project, however, I used a Promise with React's use() and Suspense to load the JSON data, so I did not need useEffect.

v. Why does every item in a .map() list need a unique key prop?

A unique key helps React identify each item when the list changes. It allows React to update the list efficiently.

vi. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition. I used it in the Stack component to show "Your stack is empty" when no technology has been selected.

vii. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child through props. To send something back, the parent can pass a function as a prop, and the child can call that function with the required data.
