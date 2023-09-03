
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Urlshorter from './Urlshorter';
import Dsaquestions from './Dsaquestions';
import  Pagination  from './Pagination';    

function App() {
  return (  
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Urlshorter />} />
          <Route path="/dsa" element={<Dsaquestions />} />
          <Route path="/pagination" element={<Pagination />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
