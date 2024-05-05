import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";

//pages
const LandingPage = lazy(() => import("./pages/landing-page/LandingPage"));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
