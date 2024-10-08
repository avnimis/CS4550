import Labs from "./Labs";
import Kanbas from "./Kanbas";
//import './App.css'; 
import { HashRouter, Link, Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element = {<Navigate to = "Kanbas"/>}/>
          <Route path="/Kanbas/*" element = {<Kanbas />}/>
          <Route path="/Labs/*" element = {<Labs />}/>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
