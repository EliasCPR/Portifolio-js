import { Route, Routes } from "react-router-dom";

import React from "react";
import HomePage from "./pages/HomePage";
import InformationPage from "./pages/InformationPage";
import ServicesPage from "./pages/ServicesPage";
import KnowledgePage from "./pages/KnowledgePage";

export default function Router() {
  return (
    <Routes>
      <Route path="/projects" element={<HomePage />} />
      <Route exact path="/" element={<InformationPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/know" element={<KnowledgePage />} />
    </Routes>
  );
}
