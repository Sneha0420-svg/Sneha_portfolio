import { BrowserRouter, Route, Routes } from "react-router-dom";
import DrawerAppBar from "./components/DrawerAppBar";
import Home from "./components/Home";
import { Resume } from "./components/Resume";





function App() {
  return (
   <> 
 
  <BrowserRouter basename="/Sneha_portfolio">
  <DrawerAppBar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path="/resume" element={<Resume/>}/>
  </Routes>
  </BrowserRouter>
  </>
    
  );
}

export default App;
