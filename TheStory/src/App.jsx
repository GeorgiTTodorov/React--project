import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Home from "./components/home/Home.jsx";
import About from "./components/about/About.jsx";
import Contacts from "./components/contacts/Contacts.jsx";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contacts" element={<Contacts />}/>
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
