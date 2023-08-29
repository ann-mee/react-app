import { useRef } from "react";
import withToggle from "../hoc/withToggle";
import ArrowDown from "../icons/ArrowDown";

const Accordion = ({ isOpen, toggleOpen, item }) => {
  const contentRef = useRef(null);

  return (
    <div>
      <button
        onClick={toggleOpen}
        className="border-b border-gray-200 w-full text-left py-4 relative pr-10"
      >
        {item.header}
        <span
          className={`absolute top-4 right-0 transform transition-transform duration-500 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <ArrowDown />
        </span>
      </button>
      <div
        ref={contentRef}
        className="accordion-content"
        style={
          isOpen
            ? { height: contentRef.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <p>{item.content}</p>
      </div>
    </div>
  );
};

export default withToggle(Accordion);
