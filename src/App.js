import './App.css';
import Todos from './components/Todos';
import Form from './components/Form';
import Navigation from './components/Navigation';
import { useState } from 'react';


const App = () => {
  
  const [todos, setTodos] = useState([{title : "Lorem Ipsum", 
  content : "Neque porro quisquam est qui dolorem ipsum qsuia dolor sit amet, consectetur, adipisci velit..."}, {title : "Lorem Ipsum", 
  content : "Neque porro quisquam est qui dolorem ipssum quia dolor sit amet, consectetur, adipisci velit..."}, {title : "Lorem Ipsum", 
  content : "Neque porro quisquam est qui dolorem ipsum quia doslor sit amet, consectetur, adipisci velit..."}]);

  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Form addTodos={setTodos}/>
        <Todos list={todos} deleteTodos={setTodos}/>
      </main>
    </>
  );
}

export default App;
