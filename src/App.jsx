import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./mainlayout/MainLayout";
import Home from "./pages/home/Home";
import Programs from "./pages/programs/Programs";
import Pricing from "./pages/pricing/Pricing";
import Contact from "./pages/contact/Contact";
import Leaderboard from "./pages/leaderboard/Leaderboard"; 
import Error from "./pages/error/Error";
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton";
import LandingPage from "./pages/landing/LandingPage"; // <--- Naya Import: Aapka Landing Page Component

function App() {
  return (
    <BrowserRouter>
      {/* WhatsAppFloatingButton: Agar aap isse landing page par bhi dikhana chahte hain,
          toh isse <Routes> ke bahar yahan hi rehne dein.
          Agar sirf main website par, toh isse <Route element={<MainLayout />}> ke andar move karein. */}
      <WhatsAppFloatingButton /> 

      <Routes>
        {/* Existing Routes jo MainLayout ke andar hain */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="programs" element={<Programs />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="leaderboard" element={<Leaderboard />} />
          <Route path="contact" element={<Contact />} />
          {/* Error page bhi MainLayout ke andar reh sakta hai, ya bahar bhi move kar sakte hain */}
          <Route path="error" element={<Error />} /> 
        </Route>

        {/* --- Naya Landing Page Route --- */}
        {/* Yeh route MainLayout ke bahar hai, isliye is par MainLayout render nahi hoga. */}
        <Route path="/promo-offer" element={<LandingPage />} /> 
        {/* IMPORTANT: "/promo-offer" ko aap koi bhi unique aur memorable URL de sakte hain,
            jaise "/free-webinar", "/trading-masterclass", ya client ke ad campaign ke hisaab se.
            Yehi URL aap Meta Ads mein target URL ke roop mein use karenge. */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;