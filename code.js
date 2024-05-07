
import React from "react";
import VideoList from "./Component/VideoList";
import VideoPlayer from "./Component/VideoPlayer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<VideoList />} />
          <Route path="/video/:id" element={<VideoPlayer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
