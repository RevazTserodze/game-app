import React, { useState } from "react";
import playGames from "../../playgames/PlayGames";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface Game {
  id: number;
  name: string;
  img: string;
}

const Games: React.FC = () => {
  const [eachGame] = useState<Game[]>(playGames);
  const textAnimation = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: (_custom: any) => ({
      y: 0,
      opacity: 1,
      transition: { delay: _custom * 0.2 },
    }),
  };
  return (
    <div className="container-fluid mt-5">
      <div
        className="row"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {eachGame.map((elem) => (
          <div key={elem.id} className="col-xl-4 col-lg-6 col-sm-12 m-5">
            <Link to={`/${elem.name}`}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                custom={elem.id}
                variants={textAnimation}
                viewport={{ amount: 0.2, once: true }}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img
                  style={{ borderRadius: "20px" }}
                  className="img-fluid"
                  src={elem.img}
                  alt="game-img"
                />
              </motion.div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Games;
