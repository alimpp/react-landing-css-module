import StyleModule from "./styles/index.module.css";

const BaseButton = ({ children, bg, loading, loadingText, ...props }) => {
  const dynamicBgClass = bg ? StyleModule[bg] : "";
  return (
    <button
      className={` ${StyleModule.baseButton} ${dynamicBgClass}`}
      {...props}
    >
      {loading ? <span>{loadingText}</span> : children}
    </button>
  );
};

export default BaseButton;
