import React from "react";
import { motion } from "framer-motion";
import "./Maincard.scss";
import { Link } from "react-router-dom";

function Maincard(props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ y: [40, 0], opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="body_main">
        {props.data?.map((dataval, index) => (
          <>
            <Link className="links" to={dataval.link}>
              <motion.div
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, type: "tween" }}
                className="body_inner"
                key={index}
              >
                <img src={dataval.img} alt={dataval.title} />
                <h2 className="bold-text" style={{ marginTop: 20 }}>
                  {dataval.title}
                </h2>
                <p className="p-text" style={{ marginTop: 10 }}>
                  {dataval.discription}
                </p>
              </motion.div>
            </Link>
          </>
        ))}
      </div>
    </motion.div>
  );
}

export default Maincard;
