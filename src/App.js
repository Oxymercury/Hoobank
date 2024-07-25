
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import React from 'react'
import Record from "./components/Record";
import Achievement from "./components/Achievement";
import Downloads from "./components/Downloads"
import Deal from "./components/Deal";
import Review from "./components/Review";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
        <Navbar />
        <Hero />
        <Record />
        <Achievement />
        <Downloads />
        <Deal />
        <Review />
        <Footer />
    </div>
  );
}

export default App;
