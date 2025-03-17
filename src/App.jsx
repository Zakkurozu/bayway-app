import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Course from "./pages/Course";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/courses"} element={<Category />} />
        <Route path={"/course/:id/:name"} element={<Course />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
