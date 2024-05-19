import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-xl navbar-dark bg-dark fixed-top">
        <div className="container-fluid p-2">
          <span className="navbar-brand">
            <img
              style={{ width: "40px" }}
              src="https://cdn-icons-png.flaticon.com/128/3408/3408506.png"
              className="img-fluid"
              alt="GameXplorer Icon"
            />
            GameXplorer
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarDark"
            aria-controls="navbarDark"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarDark"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <motion.span className="nav-link active" aria-current="page">
                  <Link to="/"> Home</Link>
                </motion.span>
              </li>
              <li className="nav-item">
                <motion.span className="nav-link active" aria-current="page">
                  <Link to="/games">Games</Link>
                </motion.span>
              </li>
              <li className="nav-item">
                <motion.span className="nav-link active" aria-current="page">
                  <Link to="/info">Info</Link>
                </motion.span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
