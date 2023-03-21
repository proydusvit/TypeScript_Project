import { Routes, Route } from "react-router";
import { Container } from "react-bootstrap";

import { Home } from "./pages/Home/Home";
import { Store } from "./pages/Store/Store";
import { About } from "./pages/About/About";

import { Navbar } from "./components/Navbar";
import { ShoppingCardProvaider } from "./context/ShoppingCardContext";

function App() {
  return (
    <ShoppingCardProvaider>
      <Navbar/>
    <Container>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/store" element={<Store/>}/>
        <Route path="/about" element={<About/>}/>
        
     </Routes>
      </Container>
      </ShoppingCardProvaider>
  );
}

export default App;
