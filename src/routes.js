import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import StudentsPage from "./pages/StudentsPage";
import AuthGuard from "./components/AuthGuard";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/students"
          element={
            <AuthGuard>
              <StudentsPage />
            </AuthGuard>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
