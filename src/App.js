import './App.css';
import './assets/styles/components.css';
import {
  Routes,
  Route
} from "react-router-dom";
import Nav from './components/Nav';
import Home from './pages/Home';
import Training from './pages/Training';
import PhishGPT from './pages/PhishGPT';
import Footer from './components/Footer';

function App() {
    return (
      <div>
        <Nav/>
        <Routes>
          <Route path='/' index element={<><Home/></>}/>
          <Route path='/training' element={<Training/>}/>
          <Route path='/phishgpt' element={<><PhishGPT/></>}/>
        </Routes>
        <Footer/>
      </div>
    );
}

export default App;