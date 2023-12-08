import { Routes, Route } from "react-router-dom";

import AuthGuard from "./components/guards/AuthGuard.jsx";

import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Home from "./components/home/Home.jsx";
import ContactUs from "./components/contact-us/ContactUs.jsx";
import About from "./components/about/About.jsx";
import Login from "./components/login/LoginForm.jsx";
import Register from "./components/register/RegisterForm.jsx";
import LearnMore from "./components/learn-more/LearnMore.jsx";

import Gallery from "./components/gallery/Gallery.jsx";
import ImageDetails from "./components/image-details/ImageDetails.jsx";

import Stories from "./components/stories/Stories.jsx";
import HermitStories from "./components/hermit-stories/HermitStories.jsx";
import CruelStories from "./components/cruel-stories/CruelStories.jsx";
import BraveStories from "./components/brave-stories/BraveStories.jsx";
import CreateStory from "./components/create-story/CreateStory.jsx";
import StoryDetails from "./components/story-details/StoryDetails.jsx";

import UserDashboard from "./components/user-components/profile/dashboard/UserDashboard.jsx";
import UserProfile from "./components/user-components/profile/UserProfile.jsx";
import EditProfile from "./components/user-components/profile/profile-edit/EditProfile.jsx";

import "./App.css";

function App() {

  return (
  
    <div className="App">
      <Header/>

      <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/contact-us" element={<ContactUs />}/>
            <Route path="/about" element={<About />}/>

            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>

            <Route path="/learn-more" element={<LearnMore />}/>

            <Route path="/gallery" element={<Gallery />} />
            <Route path="/gallery/:objectId" element={<ImageDetails />} />

            <Route path="/stories" element={<Stories />} />
            <Route path="/stories/:objectId" element={<StoryDetails />} />
            <Route path="/stories/create" element={<AuthGuard><CreateStory /></AuthGuard>} />

            <Route path="/stories/hermit-stories" element={<HermitStories />} />
            <Route path="/stories/cruel-stories" element={<CruelStories />} />
            <Route path="/stories/brave-stories" element={<BraveStories />} />
            
            <Route path="/user/dashboard" element={<AuthGuard><UserDashboard /></AuthGuard>} />
            <Route path="/user/profile" element={<AuthGuard><UserProfile /></AuthGuard>} />
            <Route path="/user/profile/edit" element={<AuthGuard><EditProfile /></AuthGuard>} />
      </Routes>

      <Footer />

    </div>
   
  );
}

export default App;
