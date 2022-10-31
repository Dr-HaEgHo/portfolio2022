import { Route, Routes } from "react-router-dom";
import "./App.css"
// import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";



function App() {


  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/skills" element={<Home/>} />
        <Route path="/showcase" element={<Home/>} />
        <Route path="/contact" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
