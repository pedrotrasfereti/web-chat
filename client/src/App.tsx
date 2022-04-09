import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Chat, Join } from "./components";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/chat" element={<Chat />} />
        <Route path="/" element={<Join />} />
      </Routes>
    </Router>
  );
}

export default App;
