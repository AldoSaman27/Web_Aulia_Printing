import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Instagram, Linkedin, Tiktok, Youtube } from "react-bootstrap-icons";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer>
      <Container>
        <div className="row">
          <div className="col-12 col-md-6 d-flex flex-column align-items-center align-items-md-start justify-content-center mb-4">
            <h1 className="m-0 p-0 text-white">Aulia Printing</h1>
            <p className="m-0 p-0 text-secondary fw-semibold">
              Percetakan | Service Komputer / Laptop & Printer | Fotocopy & ATK
            </p>
          </div>
          <div className="col-12 col-md-6 d-flex gap-3 align-items-center justify-content-center justify-content-md-end mb-4">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="Sosmed d-flex align-items-center justify-content-center rounded-circle"
            >
              <Linkedin size={15} color="black" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="Sosmed d-flex align-items-center justify-content-center rounded-circle"
            >
              <Instagram size={15} color="black" />
            </a>
            <a
              href="https://tiktok.com/"
              target="_blank"
              rel="noreferrer"
              className="Sosmed d-flex align-items-center justify-content-center rounded-circle"
            >
              <Tiktok size={15} color="black" />
            </a>
            <a
              href="https://youtube.com/"
              target="_blank"
              rel="noreferrer"
              className="Sosmed d-flex align-items-center justify-content-center rounded-circle"
            >
              <Youtube size={15} color="black" />
            </a>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-4">
          <ul className="p-0 m-0 d-flex gap-4">
            <li
              style={{
                listStyle: "none",
                fontSize: "1.1rem",
                cursor: "pointer",
              }}
              className="text-white fw-semibold"
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              style={{
                listStyle: "none",
                fontSize: "1.1rem",
                cursor: "pointer",
              }}
              className="text-white fw-semibold"
              onClick={() => navigate("/about")}
            >
              About Us
            </li>
            <li
              style={{
                listStyle: "none",
                fontSize: "1.1rem",
                cursor: "pointer",
              }}
              className="text-white fw-semibold"
              onClick={() => navigate("/product")}
            >
              Product
            </li>
            <li
              style={{
                listStyle: "none",
                fontSize: "1.1rem",
                cursor: "pointer",
              }}
              className="text-white fw-semibold"
              onClick={() => navigate("/contact")}
            >
              Contact
            </li>
          </ul>
        </div>
        <hr color="white" style={{ height: 3 }} />
        <p className="m-0 p-0 text-white text-center text-md-end">
          © {new Date().getFullYear()} Aulia Printing
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
