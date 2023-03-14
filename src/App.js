import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Card from './components/card';
import CardHouse from './components/house';
import Characters from './components/characters';
function App() {
  return (
    <div className="App">

      <Navbar />
      <Hero />
      <h1>hola</h1>
      <Card />
      <CardHouse />
      <Characters />
    </div>
  );
}

export default App;
