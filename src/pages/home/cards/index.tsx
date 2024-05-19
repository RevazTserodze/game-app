import { motion } from "framer-motion";
import React, { useState } from "react";

interface Card {
  id: number;
  img: string;
  name: string;
  info: string;
  boolean: boolean;
}

const GameCards: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([
    {
      id: 1,
      img: "https://cdn-icons-png.flaticon.com/128/2790/2790414.png",
      name: "Adventure",
      info: "Action-adventure games combine elements of both action and adventure genres. They often feature a mix of combat, exploration, and puzzle-solving. Players embark on quests or missions in a dynamic environment.",
      boolean: false,
    },
    {
      id: 2,
      img: "https://cdn-icons-png.flaticon.com/128/196/196850.png",
      name: "Horror",
      info: "Horror adventure games are designed to immerse players in a spine-chilling and suspenseful atmosphere. Players often navigate through eerie environments, solve puzzles, and encounter terrifying creatures or situations. ",
      boolean: false,
    },
    {
      id: 3,
      img: "https://cdn-icons-png.flaticon.com/128/8853/8853783.png",
      name: "Multiplayer",
      info: "MOBAs are team-based strategy games where players control unique characters with specific abilities. The goal is to work together to defeat the opposing team. Matches often take place in an arena-style map.",
      boolean: false,
    },
  ]);

  const textAnimation = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: (_custom: any) => ({
      y: 0,
      opacity: 1,
      transition: { delay: _custom * 0.2 },
    }),
  };

  const handleToggleInfo = (id: number) => {
    const updatedCards = [...cards];
    updatedCards[id - 1].boolean = !updatedCards[id - 1].boolean;
    setCards(updatedCards);
  };

  return (
    <div style={{ marginTop: "50px" }} className="container">
      <div className="row">
        {cards.map((elem) => (
          <div className="col-lg-4 col-md-4 col-sm-12 mb-4" key={elem.id}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              custom={elem.id}
              variants={textAnimation}
              viewport={{ amount: 0.2, once: true }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                backgroundColor: "purple",
                padding: "20px",
                borderRadius: "20px",
                boxShadow: "0px 10px 20px 10px black",
              }}
            >
              <img src={elem.img} alt="card-img" />
              <h3 style={{ color: "white", textAlign: "center" }}>
                {elem.name}
              </h3>
              <p style={{ color: "white", textAlign: "center" }}>
                {elem.boolean ? elem.info : elem.info.slice(0, 30) + "..."}
              </p>
              <button
                type="button"
                className="btn btn-danger mx-auto d-block game-btn"
                onClick={() => handleToggleInfo(elem.id)}
              >
                {elem.boolean ? "Show Less" : "Show More"}
              </button>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameCards;
