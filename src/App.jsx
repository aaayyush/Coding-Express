import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./screens/About/About";
import Contact from "./screens/Contact/Contact";

import SignIn from "./screens/SignIn/Signin";
import Enroll from "./screens/Enroll/Enroll.jsx";
import Button from "./Components/Button/Button";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Button />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />

          <Route path="/Enroll" element={<Enroll />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
