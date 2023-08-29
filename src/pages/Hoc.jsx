import React from "react";
import CollapseExpand from "../components/Accordion";
import SidePanel from "../components/SidePanel";

const accordionItems = [
  {
    header: "Accordion header 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam neque metus, dignissim vel placerat nec, sagittis eget mi. Aenean elementum, lorem in dignissim pellentesque, sapien mi viverra libero, porta luctus augue felis interdum lorem.",
  },
  {
    header: "Accordion header 2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam neque metus, dignissim vel placerat nec, sagittis eget mi.",
  },
  {
    header: "Accordion header 2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam neque metus, dignissim vel placerat nec, sagittis eget mi.",
  },
];

const Hoc = () => {
  return (
    <div className="container mx-auto py-10 relative">
      <h1 className="text-4xl font-bold">Sample page with HOC examples</h1>
      <div className="w-1/2 mx-auto py-10 text-lg">
        <h2 className="text-2xl font-bold mt-10 mb-5">Accordion</h2>
        {accordionItems.map((item) => (
          <CollapseExpand item={item} />
        ))}

        <h2 className="text-2xl font-bold mt-20 mb-5">Side panel</h2>
        <SidePanel>
          <div className="py-10 px-5">
            <h2 className="text-2xl font-bold ">Panel header</h2>
            <p className="mt-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              neque metus, dignissim vel placerat nec, sagittis eget mi.
            </p>
          </div>
        </SidePanel>
      </div>
    </div>
  );
};

export default Hoc;
