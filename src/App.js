import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Shows from "./components/Shows";
import About from "./components/About";
import Summary from "./components/Summary";
import Form from "./components/Form";
import Notfound from "./components/Notfound";

import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/footer.scss";
import "./styles/home.scss";
import "./styles/about.scss";
import "./styles/shows.scss";
import "./styles/summary.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/about" element={<About />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/form" element={<Form />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
