import './App.css';
import Todos from './components/Todos';
import Form from './components/Form';
import Navigation from './components/Navigation';
import { useState } from 'react';


const App = () => {
  
  const [todos, setTodos] = useState([{title : "Title", content : "something"}]);

  const addTodo = (newTitle, newContent) => {
    setTodos(...todos, {title : newTitle, contntent : newContent})
  }

  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Form />
        <Todos list={todos}/>
      </main>
    </>
  );
}

export default App;
