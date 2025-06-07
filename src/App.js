// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PortfolioHomePage from "./pages/home";
import NotFoundPage from "./pages/NotFoundPage";
import AdminPage from "./pages/admin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PortfolioHomePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
