import React, { useState } from 'react';

// Challenge 1: Fix the button click handler
const Challenge1 = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // Fix this line to increment the count
    setCount(count + 1);
  };

  return (
    <div>
      <h3>Challenge 1: Fix the button click handler</h3>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

// Challenge 2: Render a list of items
const Challenge2 = () => {
  const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];

  return (
    <div>
      <h3>Challenge 2: Render a list of items</h3>
      <ul>
        {fruits.map((fruit) => {
          return <li key={fruit}>{fruit}</li>;
        })}{' '}
      </ul>
    </div>
  );
};

// Challenge 3: Conditional rendering
const Challenge3 = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h3>Challenge 3: Conditional rendering</h3>
      {/* Render "Welcome, User!" if isLoggedIn is true, otherwise render "Please log in" */}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>{isLoggedIn ? 'Log out' : 'Log in'}</button>
    </div>
  );
};

// Challenge 4: Handle form input
const Challenge4 = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`You entered: ${inputValue}`);
  };

  return (
    <div>
      <h3>Challenge 4: Handle form input</h3>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={inputValue}
          // Add onChange handler to update inputValue
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

// Challenge 5: Use effect to fetch data
const Challenge5 = () => {
  const [data, setData] = useState(null);

  // Use useEffect to fetch data from 'https://api.example.com/data' and update the state
  // Remember to add error handling

  return (
    <div>
      <h3>Challenge 5: Use effect to fetch data</h3>
      {data ? <p>{JSON.stringify(data)}</p> : <p>Loading...</p>}
    </div>
  );
};

// Challenge 6: Implement a toggle switch
const Challenge6 = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <h3>Challenge 6: Implement a toggle switch</h3>
      <button
        onClick={() => {
          /* Toggle isOn state */
        }}
      >
        {isOn ? 'ON' : 'OFF'}
      </button>
    </div>
  );
};

// Challenge 7: Pass props to a child component
const ChildComponent = (/* Add props here */) => {
  return <p>Hello, {/* Use the name prop here */}!</p>;
};

const Challenge7 = () => {
  return (
    <div>
      <h3>Challenge 7: Pass props to a child component</h3>
      <ChildComponent /* Pass a 'name' prop here */ />
    </div>
  );
};

// Challenge 8: Implement a simple counter with increment and decrement
const Challenge8 = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>Challenge 8: Implement a simple counter</h3>
      <p>Count: {count}</p>
      <button
        onClick={() => {
          /* Implement increment */
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          /* Implement decrement */
        }}
      >
        Decrement
      </button>
    </div>
  );
};

// Challenge 9: Create a controlled input component
const Challenge9 = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div>
      <h3>Challenge 9: Create a controlled input component</h3>
      <input
        type='text'
        value={inputValue}
        // Add onChange handler to update inputValue
      />
      <p>You typed: {inputValue}</p>
    </div>
  );
};

// Challenge 10: Implement a simple todo list
const Challenge10 = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    // Implement adding a new todo to the list
  };

  return (
    <div>
      <h3>Challenge 10: Implement a simple todo list</h3>
      <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={addTodo}>Add Todo</button>
      <ul>{/* Render the list of todos here */}</ul>
    </div>
  );
};

const ReactChallenges = () => {
  return (
    <div>
      <h2>React Challenges</h2>
      <Challenge1 />
      <Challenge2 />
      <Challenge3 />
      <Challenge4 />
      <Challenge5 />
      <Challenge6 />
      <Challenge7 />
      <Challenge8 />
      <Challenge9 />
      <Challenge10 />
    </div>
  );
};

export default ReactChallenges;
