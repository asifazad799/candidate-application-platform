import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

//pages
const LandingPage = lazy(() => import("./pages/landing-page/LandingPage"));

function App() {
  return (
    <div className="app-container">
      <div className="app">
        <Suspense fallback={<div>Loading...</div>}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LandingPage />} />
            </Routes>
          </BrowserRouter>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
