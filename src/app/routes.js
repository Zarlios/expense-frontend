import { Route, Routes } from "react-router-dom";

import Index from "../pages/HomePage";
import ExpensesPage from "../pages/ExpensesPage";
import RegisterPage from "../pages/RegisterPage";

const ApplicationRoutes = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route
      path="/expenses"
      element={<ExpensesPage />}
    />
  </Routes>
);

export default ApplicationRoutes;
