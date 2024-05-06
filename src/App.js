import "./index.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Chat from "./components/Chat/Chat";
import Earnings from "./components/Earnings/Earnings";
import Dashboard from "./components/Dashboard/Dashboard";
import NoPage from "./components/NoPage/NoPage";
import { SidebarContext } from "./context/sidebarContext";

function App() {

  const [openSideBar, setOpenSideBar] = useState(false)

  return (
    <SidebarContext.Provider value={{ sidebar: [openSideBar, setOpenSideBar]}}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/earnings" element={<Earnings />} />
          <Route exact path="/chat" element={<Chat />} />
          <Route exact path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </SidebarContext.Provider>
  );
}

export default App;
