import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Home from "./components/home/Home.jsx";
import ContactUs from "./components/contact-us/ContactUs.jsx";
import About from "./components/about/About.jsx";
import Login from "./components/login/LoginForm.jsx";
import Register from "./components/register/RegisterForm.jsx";
import LearnMore from "./components/learn-more/LearnMore.jsx";
import Gallery from "./components/gallery/Gallery.jsx";
import Stories from "./components/stories/Stories.jsx";
import HermitStories from "./components/hermit-stories/HermitStories.jsx";
import CruelStories from "./components/cruel-stories/CruelStories.jsx";
import BraveStories from "./components/brave-stories/BraveStories.jsx";
import CreateStory from "./components/create-story/CreateStory.jsx";

import "./App.css";


function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/contact-us" element={<ContactUs />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/learn-more" element={<LearnMore />}/>
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/stories/hermit-stories" element={<HermitStories />} />
            <Route path="/stories/cruel-stories" element={<CruelStories />} />
            <Route path="/stories/brave-stories" element={<BraveStories />} />
            <Route path="/stories/create" element={<CreateStory />} />
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
