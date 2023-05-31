import React from "react";
import "./App.css";
import Search from "./Search";
import Footer from "./Footer";

export default function App() {
  return (
    <div>
      <div className="App">
        <Search city="London" />
      </div>
      <Footer />
    </div>
  );
}
