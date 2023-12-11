import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Pages
import LandingPage from "./Pages/LandingPage";
import JobPage from "./Pages/JobPage";
import ApplicantForm from "./Pages/ApplicantForm";
import SuccessPage from "./Pages/SuccessPage";
class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<JobPage />} />
              {/* <Route path="/job" element={<JobPage />} /> */}
              <Route path="/application" element={<ApplicantForm />} />
              <Route path="/success" element={<SuccessPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
