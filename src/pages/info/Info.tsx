import { motion } from "framer-motion";

function Info() {
  const containerStyle = {
    background: "linear-gradient(to bottom, #4e54c8, #8f94fb)",
    color: "white",
    padding: "20px",
    borderRadius: "10px",
    marginTop: "150px",
    marginBottom: "150px",
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{opacity:1}}
      className="container "
      style={containerStyle}
    >
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <h2 className="text-center mb-4">Welcome to the World of Gaming</h2>
          <p>
            The gaming industry has seen exponential growth, evolving into one
            of the most influential and lucrative sectors in the entertainment
            world. With advancements in technology, games have become more
            immersive and visually stunning, offering experiences that were once
            unimaginable.
          </p>

          <p>
            From action-packed adventures that transport players to fantastical
            worlds, to strategic challenges that test their intellect, there's a
            game for every taste and preference. Gaming has also become a social
            phenomenon, with online multiplayer games connecting players from
            all corners of the globe.
          </p>

          <h3 className="mt-4">Popular Genres</h3>
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Action:</strong> Fast-paced gameplay that often requires
              quick reflexes and precise control. These games can range from
              platformers like Super Mario to intense shooters like Call of
              Duty.
            </li>
            <li className="list-group-item">
              <strong>Role-playing (RPG):</strong> Immersive storytelling where
              players assume the roles of characters in a fictional world. RPGs
              often involve character progression, decision-making, and
              exploration.
            </li>
            <li className="list-group-item">
              <strong>Strategy:</strong> Games that challenge players to think
              critically and plan strategically. This genre includes real-time
              strategy (RTS) games like Age of Empires and turn-based strategy
              games like Civilization.
            </li>
            <li className="list-group-item">
              <strong>Sports:</strong> Simulations of real-world sports events.
              Whether it's football, basketball, or racing, sports games aim to
              replicate the excitement of physical sports in a virtual
              environment.
            </li>
            <li className="list-group-item">
              <strong>Simulation:</strong> These games aim to replicate
              real-world activities or scenarios, providing players with a
              realistic experience. This can range from flight simulators to
              farming simulations.
            </li>
            <li className="list-group-item">
              <strong>Horror:</strong> Thrilling and suspenseful experiences
              designed to frighten players. These games often involve dark,
              eerie environments and intense moments of suspense.
            </li>
            <li className="list-group-item">
              <strong>Multiplayer Online Battle Arena (MOBA):</strong>{" "}
              Team-based competitive gameplay where players control unique
              characters with distinct abilities. The goal is usually to destroy
              the opposing team's base or objectives.
            </li>
          </ul>

          <h3 className="mt-4">Gaming Platforms</h3>
          <ul className="list-group">
            <li className="list-group-item">
              <strong>PC:</strong> Offers high customization and powerful
              hardware for cutting-edge gaming experiences. It's a versatile
              platform with a wide range of titles, from indie games to
              graphically demanding AAA titles.
            </li>
            <li className="list-group-item">
              <strong>Console (PlayStation, Xbox, Nintendo):</strong> Dedicated
              gaming machines with exclusive titles and user-friendly
              interfaces. Each brand offers a unique ecosystem of games and
              services, catering to different gaming preferences and
              communities.
            </li>
            <li className="list-group-item">
              <strong>Mobile:</strong> Accessible gaming on smartphones and
              tablets, with a wide range of titles. Mobile games cater to a
              diverse audience, from casual gamers to those seeking immersive
              experiences on the go.
            </li>
          </ul>

          <p className="mt-4">
            Whether you're a casual gamer looking for a quick escape or a
            dedicated enthusiast seeking epic adventures, the world of gaming
            has something to offer for everyone. Stay updated with the latest
            releases and explore the limitless possibilities that await you.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Info;
