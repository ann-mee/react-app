import React, { useState } from "react";

const withToggle = (Component) => {
  return function WithToggle(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return <Component {...props} isOpen={isOpen} toggleOpen={toggleOpen} />;
  };
};
export default withToggle;
