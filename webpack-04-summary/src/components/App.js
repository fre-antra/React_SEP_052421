import React, { useState, useEffect, Fragment } from 'react';

const App = ({ message }) => {
  const [user, setUser] = useState({});
  const [es6User, setEs6User] = useState({});

  useEffect(async () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => setUser(json));

    const res = await fetch('https://jsonplaceholder.typicode.com/todos/2');
    const data = await res.json();
    setEs6User(data);
  });

  const { userId, id, title, completed } = user;

  return (
    <div>
      <Fragment>
        <h2>Props message from index.js file</h2>
        <h3>{message} success!</h3>
      </Fragment>
      <Fragment>
        <h2>Async request data from jsonPlaceholder</h2>
        <div>
          <h4>Fetch call: User1</h4>
          <ul>
            <li>User id:{userId}</li>
            <li>Id:{id}</li>
            <li>Title:{title}</li>
            <li>Completed:{completed ? `Yes` : `No`}</li>
          </ul>
        </div>
        <div>
          <h4>Async call: User2</h4>
          <ul>
            <li>User id:{es6User.userId}</li>
            <li>Id:{es6User.id}</li>
            <li>Title:{es6User.title}</li>
            <li>Completed:{es6User.completed ? `Yes` : `No`}</li>
          </ul>
        </div>
      </Fragment>
    </div>
  );
};

export default App;
