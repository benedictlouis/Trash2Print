import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// Notice BrowserRouter is no longer imported here
import { Routes, Route } from "react-router-dom"; 
import Home from "./pages/Home";
import DaftarMitra from "./pages/DaftarMitra";
import BuyFilaments from "./pages/BuyFilaments";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* The <BrowserRouter> has been removed from here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/daftar-mitra" element={<DaftarMitra />} />
        <Route path="/buy-filaments" element={<BuyFilaments />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;