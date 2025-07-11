import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./mainlayout/MainLayout";
import Home from "./pages/home/Home";
import Programs from "./pages/programs/Programs";
import Pricing from "./pages/pricing/Pricing";
import Contact from "./pages/contact/Contact";
import Leaderboard from "./pages/leaderboard/Leaderboard"; 
import Error from "./pages/error/Error";
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton";

function App() {
  return (
    <BrowserRouter>
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
