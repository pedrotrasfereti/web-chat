import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

import { Chat, Join } from "./components";

function App() {
  const name = useSelector((state: RootState) => state.session.name);
  const room = useSelector((state: RootState) => state.session.roomId);

  return (
    <Router>
      <Routes>
        <Route path="/chat" element={<Chat name={name} room={room} />} />
        <Route path="/" element={<Join />} />
      </Routes>
    </Router>
  );
}

export default App;
