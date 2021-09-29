import './App.css';
import Todos from './components/Todos';
import Form from './components/Form';
import Navigation from './components/Navigation';
import { useState } from 'react';


const App = () => {
  
  const [todos, setTodos] = useState([]);

  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Form setTodos={setTodos}/>
        <Todos list={todos}/>
      </main>
    </>
  );
}

export default App;
