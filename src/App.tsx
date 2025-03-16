import "../src/styles/App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Contact from "./components/Contact";

function App() {
  return (
    <div id="root">
      <Navbar />
      <Intro />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
