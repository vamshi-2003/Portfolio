import React, { useState, useEffect } from "react";
import Home from "./routes/home";
import About from "./routes/about";
import DarkModeToggle from "./buttons/darkmodetoggle";
import DraggableNavbarToggle from "./buttons/navbartoggle";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router  basename="/portfolio/">
      {/* <Preloader load={load} /> */}
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <DraggableNavbarToggle />
        {/* <ScrollToTop /> */}
        <DarkModeToggle />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/project" element={<Projects />} /> */}
          <Route path="/about" element={<About />} />
          {/* <Route path="/resume" element={<Resume />} /> */}
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
