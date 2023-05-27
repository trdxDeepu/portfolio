import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const selectedStyle = `relative bg-yellow before:absolute before:w-6 before:h-6 
    before:rounded-full before:border-2 
    before:border-yellow before:left-[-50%] before:top-[-50%]`;

  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      <AnchorLink
        className={`${
          selectedPage === "home" ? selectedStyle : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        href="#home"
        onClick={() => setSelectedPage("home")}
      />
      <AnchorLink
        className={`${
          selectedPage === "skills" ? selectedStyle : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        href="#home"
        onClick={() => setSelectedPage("skills")}
      />
      <AnchorLink
        className={`${
          selectedPage === "projects" ? selectedStyle : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        href="#home"
        onClick={() => setSelectedPage("projects")}
      />
      <AnchorLink
        className={`${
          selectedPage ==="contact" ? selectedStyle : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        href="#home"
        onClick={() => setSelectedPage("contact")}
      />
    </div>
  );
};

export default DotGroup;
