import StyleModule from "./styles/index.module.css";

const SideMenu = ({ scrollToSection, sidemenuController }) => {
  const navItems = [
    { id: 1, title: "Home", val: "hero" },
    { id: 2, title: "Products", val: "products" },
    { id: 3, title: "About Us", val: "about" },
    { id: 4, title: "Contact Us", val: "contact" },
  ];

  const scrollToItem = (item) => {
    if (scrollToSection) {
      scrollToSection(item.val);
      sidemenuController(false);
    }
  };

  const handleSidemenuController = (val) => {
    if (sidemenuController) sidemenuController(val);
  };

  return (
    <div className={`${StyleModule.sideMenuContainer}`}>
      <div
        className={`${StyleModule.menuContent} slide-right flex flex-column`}
      >
        <div className="w-full flex justify-end ">
          <img
            src="icons/close.svg"
            alt="close.svg"
            onClick={() => handleSidemenuController(false)}
          />
        </div>

        <div className={`h-full flex flex-column justify-center align-center`}>
          {navItems.map((item) => (
            <span
              className={`${StyleModule.menuItem}`}
              onClick={() => scrollToItem(item)}
              key={item.id}
            >
              {item.title}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
