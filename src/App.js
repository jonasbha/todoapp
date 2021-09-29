import './App.css';
import Todos from './components/Todos';
import Form from './components/Form';
import Navigation from './components/Navigation';
import { useState } from 'react';


const App = () => {
  
  const [todos, setTodos] = useState([{title : "Lorem Ipsum", 
  content : "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."}, {title : "Lorem Ipsum", 
  content : "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."}, {title : "Lorem Ipsum", 
  content : "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."}]);
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Form addTodos={setTodos}/>
        <Todos list={todos}/>
      </main>
    </>
  );
}

export default App;
