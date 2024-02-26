import { Instagram, Linkedin, Tiktok, Youtube } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="row">
        <div className="col-12 col-md-6 d-flex flex-column align-items-center align-items-md-start justify-content-center mb-4">
          <h1 className="footer-brand">
            Aulia <span>Printing</span>
          </h1>
          <p className="footer-description">
            Percetakan | Service Komputer / Laptop & Printer | Fotocopy & ATK
          </p>
        </div>
        <div className="col-12 col-md-6 d-flex gap-3 align-items-center justify-content-center justify-content-md-end mb-4">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="footer-sosmed"
          >
            <Linkedin size={15} color="black" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="footer-sosmed"
          >
            <Instagram size={15} color="black" />
          </a>
          <a
            href="https://tiktok.com/"
            target="_blank"
            rel="noreferrer"
            className="footer-sosmed"
          >
            <Tiktok size={15} color="black" />
          </a>
          <a
            href="https://youtube.com/"
            target="_blank"
            rel="noreferrer"
            className="footer-sosmed"
          >
            <Youtube size={15} color="black" />
          </a>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-4">
        <div className="footer-menu">
          <a href="#home" className="footer-link">
            Home
          </a>
          <a href="#about-us" className="footer-link">
            About Us
          </a>
          <a href="#product" className="footer-link">
            Product
          </a>
          <a href="#contact" className="footer-link">
            Contact
          </a>
        </div>
      </div>
      <hr color="white" style={{ height: 3 }} />
      <p className="footer-copyright">
        © {new Date().getFullYear()} Aulia Printing
      </p>
    </footer>
  );
};

export default Footer;
