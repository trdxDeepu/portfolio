import React, { useState } from "react";

import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-yellow" : ""
      } hover:text-yellow transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopPage, selectedPage, setSelectedPage }) => {
  const [menuToggle, setMenuToggle] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width:768px)");
  const navBackGround = isTopPage?"":"bg-red"

  return (
    <nav className={`z-40 w-full fiex top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-playfair text-3xl font-bold">DS</h4>
        {/* Desktop Nav */}
        {isAboveSmallScreens ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            {/* <Link 
                            page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        /> */}
          </div>
        ) : (
          <div>
            <button
              className="rounded-full bg-red p-2 "
              onClick={() => setMenuToggle(!menuToggle)}
            >
              <img src="src\assets\menu-icon.svg" alt="menu-icons" />
            </button>
          </div>
        )}
        {/* Mobile menu */}

        {!isAboveSmallScreens && menuToggle && (
          <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px] ">
            <div className="flex justify-end p-12">
              <button onClick={() => setMenuToggle(!menuToggle)}>
                <img src="src\assets\close-icon.svg" alt="close-icons" />
              </button>
            </div>

            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Skills"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
