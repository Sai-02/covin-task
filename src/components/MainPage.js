import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import DefaultPage from "./DefaultPage";
import Footer from "./Footer";
import User from "./User";
const MainPage = ({ data }) => {
  return (
    <Router>
      <div className="grow flex items-center justify-center">
        <Routes>
          <Route path="/user/:id" element={<User data={data} />} />
          <Route path="/" element={<DefaultPage />} />
        </Routes>
      </div>
      <Footer data={data} />
    </Router>
  );
};

export default MainPage;
