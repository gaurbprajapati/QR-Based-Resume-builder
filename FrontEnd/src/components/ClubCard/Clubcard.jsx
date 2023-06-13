import React, { useEffect, useState } from "react";
import "./Clubcard.scss";

import { ClubNav, Clubdata } from "../../Data";
import { motion } from "framer-motion";
import Maincard from "../Maincard/Maincard";

const Clubcard = () => {
  const [tab, setTab] = useState({ name: "all" });
  const [cdata, setCdata] = useState([]);
  const [active, setActive] = useState(0);
  const [onclickAnimation, setonclickAnimation] = useState({
    y: 0,
    opacity: 1,
  });

  useEffect(() => {
    console.log("useeffect is trigger");
    setonclickAnimation([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setonclickAnimation([{ y: 0, opacity: 1 }]);

      if (tab.name === "all") {
        setCdata(Clubdata);
      } else {
        const filterdata = Clubdata.filter((cluballdata) => {
          return cluballdata.category.toLowerCase() === tab.name;
        });
        setCdata(filterdata);
      }
    }, 600);
  }, [tab]);

  const activeTab = (e, index) => {
    setTab({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <div className="container" id="Clubcard">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-40, 0], opacity: 1 }}
        transition={{ duration: 1 }}
        className="title"
      >
        <span>N I E T</span>
        <h1>Collage Clubs</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [10, 0], opacity: 1 }}
        className="buttons"
      >
        {ClubNav.map((workNav, index) => {
          return (
            <button
              onClick={(e) => activeTab(e, index)}
              className={`${active === index ? "active" : ""}`}
              key={index}
            >
              {workNav}
            </button>
          );
        })}
      </motion.div>

      <motion.div
        animate={onclickAnimation}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
      >
        <Maincard data={cdata} />
      </motion.div>
    </div>
  );
};

export default Clubcard;

// this is past cards that are replaced with new one

{
  /* <motion.div
        animate={onclickAnimation}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="cluballdatas"
      >

    <motion.div
        initial={{x: 0 ,opacity: 0}}
          whileInView={{ y: [-50,0], opacity: 1 }}
        transition={{ duration: 1 }}
        exit={{opacity: 0, y: -50}}
        className="cluballdatas"

      >




       {cdata.map((work) => {
          return (
            <div className="cluballdata"
             key={work.id}
            >



             <motion.div
               whileHover={{ scale: 0.9 }}
               transition={{duration: 0.5}}
               >
            <Cards
            key={work.id}
            img={work.img}
            name={work.name}
            discription={work.discription}
            />
              </motion.div>
          </div>
            )


          })}


          </motion.div>

          </motion.div> */
}

// -----------------------------------------------------------

// addition thing to add in future ,  put up and check
// <motion.div
//   initial={{x: 0 ,opacity: 0}}
//     whileInView={{ x: [250,0], opacity: 1 }}
//     transition={{duration: 1}}
//   className="talk"
// >
//   <motion.div
//     whileHover={{ scale: 1.1 }}
//     transition={{duration: 0.3}}
//     className="talk_right"
//     >
//   <div className="talk_left">
//   so let's Explore<br />
//     <h3><span>Connect with your interested Club !</span></h3>
//   </div>
//   </motion.div>
// </motion.div>
