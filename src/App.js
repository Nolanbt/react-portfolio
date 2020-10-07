import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Header />
          <Route exact path={["/", "/about"]} component={About}/>
          <Route exact path={"/projects"} component={Projects}/>
          {/* <Route exact path={"/contact"} component={Contact}/> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
