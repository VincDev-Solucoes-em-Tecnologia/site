import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main>
        <Hero />
        <About />
        {/* <Services /> */}
        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
