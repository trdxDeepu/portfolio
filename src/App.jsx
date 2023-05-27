import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");

  const [isTopOfPage, setIsTopPage] = useState("home");
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  useEffect(() => {
    const handScroll = () => {
      if (window.scrollY === 0) setIsTopPage(true);
      if (window.scrollX !== 0) setIsTopPage(false);
    };
    window.addEventListener("scroll", handScroll);
    return () => window.removeEventListener("scroll", handScroll);
  });

  return (
    <>
      <div className="app bg-deep-blue">
        <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <div className="w-5/6 mx-auto md:h-full">
          {isAboveMediumScreens && (
            <DotGroup
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          )}
        </div>
         <Landing
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
         />     
      </div>
    </>
  );
}

export default App;
