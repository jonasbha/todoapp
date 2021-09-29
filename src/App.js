import './App.css';
import Todos from './components/Todos';
import Form from './components/Form';
import Navigation from './components/Navigation';


const App = () => {
  
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Form />
        <Todos />
      </main>
    </>
  );
}

export default App;
