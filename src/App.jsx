import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Browser ko bola ke apna default scroll restore na kare
    window.history.scrollRestoration = "manual";
    // Har reload pe top se start karna
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
