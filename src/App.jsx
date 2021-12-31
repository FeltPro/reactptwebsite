import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Testimonials from "./components/testimonials/Testimonials";
import Topbar from "./components/topbar/Topbar";
import Works from "./components/works/Works";
import About from "./components/about/About";
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} menuClose={setMenuOpen}/>
      <Menu menuOpen={menuOpen} menuClose={setMenuOpen}/>
      <div className="sections">
        <Intro />
        <About />
        <Testimonials />
        <Works />
        <Contact />
      </div>
    </div>
  );
}

export default App;
