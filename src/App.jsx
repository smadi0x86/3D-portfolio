/*
 ! This is the main component of the app.
 ! It contains all the other components.
 ! It's used to render the app.
*/

import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  StarsCanvas,
  Tech,
  Works,
} from "./components";
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <StarsCanvas />
        <Contact />
      </div>
    </BrowserRouter>
  );
};

export default App;
