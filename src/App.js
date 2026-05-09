import { useRef, useState } from "react";

import AppNavabr from "./components/app/navbar";
import SideMenu from "./components/app/navbar/components/sidemenu/index";

import Hero from "./components/app/hero/index";
import Products from "./components/app/products/index";
import AboutUs from "./components/app/about-us/index";
import ContactUs from "./components/app/contact-us/index";

function App() {
  const [sideMenuState, setSideMenuState] = useState(false);

  const heroRef = useRef(null);
  const productsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const handleScrollToSection = (val) => {
    const sections = {
      hero: heroRef,
      products: productsRef,
      about: aboutRef,
      contact: contactRef,
    };

    sections[val]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const handleSidemenuController = (val) => {
    setSideMenuState(val);
  };
  return (
    <div className="w-100 flex flex-column">
      <AppNavabr
        scrollToSection={handleScrollToSection}
        sidemenuController={handleSidemenuController}
      />
      {sideMenuState ? (
        <SideMenu
          sidemenuController={handleSidemenuController}
          scrollToSection={handleScrollToSection}
        />
      ) : (
        ""
      )}
      <div ref={heroRef}>
        <Hero />
      </div>
      <div ref={productsRef}>
        <Products />
      </div>
      <div ref={aboutRef}>
        <AboutUs />
      </div>
      <div ref={contactRef}>
        <ContactUs />
      </div>
    </div>
  );
}

export default App;
