import React, { useState } from "react";
import "./Tooltip.css";

const Tooltip = ({ children, text, position = "top" }) => {
  const [visible, setVisible] = useState(false);

  const showTooltip = () => setVisible(true);
  const hideTooltip = () => setVisible(false);

  return (
    <div
      className="tooltip-container"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      {visible && <p className={`tooltip ${position}`}>{text}</p>}
    </div>
  );
};

export default Tooltip;
