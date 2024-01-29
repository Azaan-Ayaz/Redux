import React from "react";
import { Routes, Route } from "react-router";
import PageOne from "./pages/pageOne";
import PageTwo from "./pages/pageTwo";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PageOne />} />
        <Route path="/two" element={<PageTwo />} />
      </Routes>
    </>
  );
};

export default Router;
