import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Mapping from './MappingAndFiltering/Mapping';
import Nav from "./Nav";
import Home from "./Home"

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/mapping" element={<Mapping/>}></Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
