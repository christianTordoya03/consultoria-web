import React from "react";
import Card from "./components/card/Card";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Welcome from "./components/welcome/Welcome";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
