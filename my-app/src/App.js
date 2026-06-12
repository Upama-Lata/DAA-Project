import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/navbar";

import Home from "./pages/home";
import Help from "./pages/help";
import Contact from "./pages/contact";

import "./App.css";

function App() {
  const [result, setResult] = useState({
    mst: [],
    totalCost: 0,
  });

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              result={result}
              setResult={setResult}
            />
          }
        />

        <Route path="/help" element={<Help />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;