import { BrowserRouter, Route, Routes } from "react-router-dom";

//components
import Footer from "./components/Footer";

//pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="w-[90%] md:w-[80%] flex flex-col m-auto font-body">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
