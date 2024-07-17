import "../src/styles/App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Intro from "./components/Intro";

function App() {
  return (
    <div id="root">
      <Navbar />
      <Intro />
      <Footer />
    </div>
  );
}

export default App;
