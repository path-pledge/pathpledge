import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./mainlayout/MainLayout";
import Home from "./pages/home/Home";
import Programs from "./pages/programs/Programs";
import Pricing from "./pages/pricing/Pricing";
import Contact from "./pages/contact/Contact";
import Leaderboard from "./pages/leaderboard/Leaderboard"; 
import Error from "./pages/error/Error";
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton";
import LandingPage from "./pages/landing/LandingPage"; 
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <WhatsAppFloatingButton />
      <Routes>
       
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="programs" element={<Programs />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="leaderboard" element={<Leaderboard />} />
          <Route path="contact" element={<Contact />} />
          <Route path="error" element={<Error />} /> 
        </Route>
          <Route path="/promo-offer" element={<LandingPage />} /> 

    
       
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;