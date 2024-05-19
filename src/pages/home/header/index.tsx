import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      className="container-fluid"
      style={{
        backgroundImage: `url('https://media.contentapi.ea.com/content/dam/battlefield/battlefield-2042/homepage/common/bf-2042-section-bg-hub-homepage-season-6-xl.jpg.adapt.1920w.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        marginTop: "50px",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="row"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="col-lg-8 col-md-8 col-sm-12">
          <h1 style={{ textAlign: "center", color: "white" }}> GameXplorer</h1>
          <p
            style={{
              textAlign: "center",
              color: "white",
              fontSize: "20px",
              fontFamily: "sans-serif",
            }}
          >
            GameXplorer is a dynamic and comprehensive gaming website that
            caters to the diverse interests of gamers worldwide. Whether you're
            a casual player looking for quick tips or a hardcore enthusiast
            seeking in-depth analyses, GameXplorer is your go-to destination for
            all things gaming. With a user-friendly interface, up-to-date
            content, and a passionate community, GameXplorer is committed to
            enhancing your gaming experience.
          </p>
        </div>
        <div style={{ textAlign: "center" }} className="col-12">
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to="/registration"
          >
            <button
              type="button"
              style={{ width: "200px", color: "white" }}
              className="btn btn-outline-danger"
            >
              Register Here
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
