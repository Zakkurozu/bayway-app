import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Home from "./pages/Home";
import Course from "./pages/Course";
import Courses from "./pages/Courses";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/courses"} element={<Courses />} />
        <Route path={"/course/:slug"} element={<Course />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
