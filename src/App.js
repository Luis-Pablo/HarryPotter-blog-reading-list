import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Details from './views/detail';
import Home from './views/home';
import Navbar from './components/navbar';
function App() {
  return (
    <div>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/description/:id" element = {<Details/>}/>

      </Routes>
    </BrowserRouter>
   </div>

  );
}

export default App;
