
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import ReachOut from "@/pages/ReachOut";
import BulletinBoard from "@/pages/BulletinBoard";
import Roadmap from "@/pages/Roadmap";
import Admin from "@/pages/Admin";
import Auth from "@/pages/Auth";
import Volunteer from "@/pages/Volunteer";

import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/reach-out" element={<ReachOut />} />
            <Route path="/bulletin-board" element={<BulletinBoard />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/volunteer" element={<Volunteer />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
