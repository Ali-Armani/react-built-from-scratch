import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import FoodPage from "./pages/Food/FoodPage";
import ColorPage from "./pages/Color/ColorPage";
import StudentPage from "./pages/Student/StudentPage";
import PropsPage from "./pages/Props/PropsPage";

function App() {
  return (
    <BrowserRouter>
      <nav
        style={{
          display: "flex",
          gap: "20px",
          padding: "15px",
          borderBottom: "1px solid #ccc",
        }}
      >
        <Link to="/food">Food</Link>
        <Link to="/color">Color</Link>
        <Link to="/student">Student</Link>
        <Link to="/props">Props</Link>
      </nav>

      <Routes>
        <Route path="/food" element={<FoodPage />} />
        <Route path="/color" element={<ColorPage />} />
        <Route path="/student" element={<StudentPage />} />
        <Route path="/props" element={<PropsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;