const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h5>Contact Us</h5>
            <p>Email: GameXplorer@example.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
          <div className="col-md-4 mb-4">
            <h5>About Us</h5>
            <p>
              As the gaming industry continues to evolve, Thrive Games remains
              steadfast in its dedication to delivering exceptional gaming
              experiences. The company has exciting plans for the future,
              including the launch of a highly anticipated open-world RPG and
              groundbreaking forays into the world of virtual reality gaming.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Follow Us On</h5>
            <ul
              className="list-unstyled social-icons"
              style={{ display: "flex", alignItems: "center" }}
            >
              <li>
                <img
                  style={{ width: "35px" }}
                  src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png"
                  className="img-fluid"
                />
              </li>
              <li style={{ marginLeft: "10px" }}>
                <img
                  style={{ width: "35px" }}
                  src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png"
                  className="img-fluid"
                />
              </li>
              <li style={{ marginLeft: "10px" }}>
                <img
                  style={{ width: "35px" }}
                  src="https://cdn-icons-png.flaticon.com/128/733/733579.png"
                  className="img-fluid"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container text-center mt-5">
        <div className="underline"></div>
        <p className="mb-0">&copy; 2023 GameXplorer.com</p>
      </div>
    </footer>
  );
};

export default Footer;
