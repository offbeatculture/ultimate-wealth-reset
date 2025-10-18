import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Thanks from "./pages/Thanks";
import NotFound from "./pages/NotFound";
import IndexSn from "./pages/IndexSn";
import IndexAn from "./pages/IndexAn";
import ThanksSn from "./pages/ThanksSn";
import ThanksAn from "./pages/ThanksAn";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sn" element={<IndexSn/>} />
          <Route path="/an" element={<IndexAn/>} />
          <Route path="/ty" element={<Thanks />} />
          <Route path="/ty-sn" element={<ThanksSn />} />
          <Route path="/ty-an" element={<ThanksAn />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
