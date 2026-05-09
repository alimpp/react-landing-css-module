import Styled from "./styles/index.module.css";
import BaseButton from "../../base/button/index";

const AppNavabr = ({ scrollToSection, sidemenuController }) => {
  const navItems = [
    { id: 1, title: "Home", val: "hero" },
    { id: 2, title: "Products", val: "products" },
    { id: 3, title: "About Us", val: "about" },
    { id: 4, title: "Contact Us", val: "contact" },
  ];

  const scrollToItem = (item) => {
    if (scrollToSection) scrollToSection(item.val);
  };

  const handleSidemenuController = (val) => {
    if (sidemenuController) sidemenuController(val);
  };
  return (
    <div className={`${Styled.appNavbar} flex w-full align-center`}>
      <div className={`${Styled.logoContent} flex flex-column`}>
        <span className={`${Styled.logoTitle} flex flex-column`}>React JS</span>
        <span className={`${Styled.logoSubTitle} flex flex-column`}>
          Css Module Sample
        </span>
      </div>
      <div className={`${Styled.navItems} flex`}>
        {navItems.map((item) => (
          <span onClick={() => scrollToItem(item)} key={item.id}>
            {item.title}
          </span>
        ))}
      </div>
      <div className={`${Styled.menuContent}`}>
        <img
          src="icons\menu.svg"
          alt="menu.svg"
          onClick={() => handleSidemenuController(true)}
        />
      </div>
    </div>
  );
};

export default AppNavabr;
