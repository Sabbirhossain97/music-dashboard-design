import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Chat from "./components/Chat/Chat";
import Earnings from "./components/Earnings/Earnings";
import Dashboard from "./components/Dashboard/Dashboard";
import NoPage from "./components/NoPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/earnings" element={<Earnings />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
