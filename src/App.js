import React from "react";
import "./App.css";
import Search from "./Search";
import Result from "./Result";
import Footer from "./Footer";

export default function App() {
  return (
    <div>
      <div className="App">
        <Search />
        <Result />
      </div>
      <Footer />
    </div>
  );
}
