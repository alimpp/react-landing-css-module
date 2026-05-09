import StyleModule from "./styles/index.module.css";
import BaseButton from "../../base/button/index";

const Hero = () => {
  return (
    <div className={`h-full flex align-center ${StyleModule.heroContent}`}>
      <div className={`${StyleModule.glass}`}>
        <div className={`container flex flex-column`}>
          <span className="text-primary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            repudiandae ullam doloremque aliquid dignissimos iure culpa modi
            eligendi incidunt quasi enim assumenda harum nulla mollitia optio?
            Quae doloribus eligendi magni.
          </p>
          <div className="flex">
            <div>
              <BaseButton>Get Started</BaseButton>
            </div>
            <div className="mx-10">
              <BaseButton bg="bgRed">About Us</BaseButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
