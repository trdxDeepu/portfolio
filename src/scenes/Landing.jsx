import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = ({ setSelectedPag }) => {
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
    >
      {/* image  */}
      <div className="md:order-2  justify-center basis-3/5 z-10 mt-16 md:mt-32">
        {isAboveMediumScreen ? (
          <div
            className="relative z-0 ml-20 before:absolute
                     before:-top-20 before:-left-20 before:rounded-t-[400px] before:w-full befpre:max-w[400px] before:h-full
                     before:border-2 before:border-blue before:z-[-1]"
          >
            <img
              src="src\assets\profile-image.png"
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
            />
          </div>
        ) : (
          <img
            src="src\assets\profile-image.png"
            alt="profile"
            className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
          />
        )}
      </div>
      <div className="z-30 basis-2/3 mt-12 md:mtt-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair z-10 text-center md:text-start">
            Deependra{""}
            <span
              className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush
                    before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]"
            >
              Singh
            </span>
          </p>
          <p className="mt-10 mb-7 text-sm text-center ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo odio
            voluptate sunt eveniet ratione repudiandae porro temporibus quia
            praesentium earum.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
