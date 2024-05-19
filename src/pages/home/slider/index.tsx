const Slider = () => {
  return (
    <div>
      <div
        style={{ width: "90%", marginTop: "50px", marginBottom: "150px" }}
        id="carouselExampleCaptions"
        className="carousel slide container-fluid"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://wallpaperaccess.com/full/168307.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h3>Explore New World</h3>
              <p>
                Welcome to the world of epic adventures! Dive into a realm of
                fantasy, where heroes rise, monsters lurk, and quests await. Are
                you ready to embark on an unforgettable journey?
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://wallpaperaccess.com/full/18678.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h3>Fight Alongside Friends</h3>
              <p>
                Gather your allies and prepare for battle! The arena awaits
                champions seeking glory in intense multiplayer showdowns.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://wallpaperaccess.com/full/47581.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h3>Become The Conqueror</h3>
              <p>
                Remember, strategic thinking is often the key to success.
                Analyze your enemies' weaknesses and choose your actions wisely.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
