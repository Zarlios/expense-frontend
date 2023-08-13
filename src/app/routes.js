import { Route, Routes } from "react-router-dom";

import Index from "../pages/Index";
import LoginPage from "../pages/LoginPage";
import ExpensesPage from "../pages/ExpensesPage";
import RegisterPage from "../pages/RegisterPage";

const ApplicationRoutes = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route
      path="/login"
      element={<LoginPage />}
    />
    <Route
      path="/expenses"
      element={<ExpensesPage />}
    />
  </Routes>
);

export default ApplicationRoutes;
