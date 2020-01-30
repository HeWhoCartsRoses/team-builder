import React, { useState } from 'react';
import logo from './logo.svg';
import Form from './Form';
import FormMaker from './FormMaker';
import './App.css';

function App() {
  const [member, setMembers] = useState([
    {
      id: 1,
      title: 'Name: whatever',
      body:
        'Role: whatever',
      body2: 'Email: whatever'
    }

  ]);
  const addNewMember = person => {
    const newPerson = {
      id: Date.now(),
      title: person.title,
      body: person.body,
      body2: person.body2

    };
    setMembers([...member, newPerson]);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>My Notes</h1>
        <Form newGuy={addNewMember} />
        <FormMaker members ={member}/>
      </header>
    </div>
  );
}
//<Notes guy={member} />
export default App;
