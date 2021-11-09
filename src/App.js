import "./App.css";
import React, {useState} from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import JobData from "./component/JobData";
function App() {
  return (
    <>
      <Header/>
      <div className="heading text-center font-weight-bold mt-2 mb-2">
        <h1>FIND LATEST JOBS AND APPLY QUICKLY TO BE CONSIDERED FASTER!</h1>
      </div>
      <JobData/>
      <Footer />
    </>
  );
}
export default App;
