import StyleModule from './styles/index.module.css';

const BaseCard = ({ children }) => {
  return <div className={`w-full ${StyleModule.baseCard}`}>{children}</div>;
};

export default BaseCard;
