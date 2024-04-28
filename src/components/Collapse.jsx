import { useState } from "react";
import ArrowTop from '../assets/images/ArrowTop.png';

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="cardCollapse" onClick={toggleCollapse}>
        <h2>{title}</h2>
        <img src={ArrowTop} className={`chevron ${isOpen ? "open" : "closed"}`} alt="Chevron" />
      </div>
      {isOpen && <div className="content">{content}</div>}
    </div>
  );
};

export default Collapse;
