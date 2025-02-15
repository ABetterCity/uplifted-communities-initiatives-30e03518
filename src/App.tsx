
import { Route, Routes } from "react-router-dom";
import Index from "@/pages/Index";
import ReachOut from "@/pages/ReachOut";
import BulletinBoard from "@/pages/BulletinBoard";
import Roadmap from "@/pages/Roadmap";
import Admin from "@/pages/Admin";
import Auth from "@/pages/Auth";
import Volunteer from "@/pages/Volunteer";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/reach-out" element={<ReachOut />} />
      <Route path="/bulletin-board" element={<BulletinBoard />} />
      <Route path="/roadmap" element={<Roadmap />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/volunteer" element={<Volunteer />} />
    </Routes>
  );
}

export default App;
