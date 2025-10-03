import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/Pages/Home/HomePage";
import About from "./Components/Pages/About";

import ScrollToTopButton from "./Components/Scroll/ScrollToTopButton";
import TermsAndConditions from "./Components/Pages/TermsAndConditions";
import PrivatePolicy from "./Components/Pages/PrivatePolicy";
import WhatsappButton from "./Components/Scroll/WhatsappButton";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />{" "}
        <Route path="/term-conditions" element={<TermsAndConditions />} />
        <Route path="/private-policy" element={<PrivatePolicy />} />
      </Routes>
      <WhatsappButton />
      <ScrollToTopButton />
    </div>
  );
};

export default App;
