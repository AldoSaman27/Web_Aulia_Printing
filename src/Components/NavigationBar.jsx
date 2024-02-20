import { useNavigate } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';

const NavigationBar = () => {
    const navigate = useNavigate();

    return (
        <Navbar expand="md" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home" className="fw-bold">Aulia Printing</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
                        <Nav.Link onClick={() => navigate("/about")}>About Us</Nav.Link>
                        <Nav.Link onClick={() => navigate("/product")}>Product</Nav.Link>
                        <Nav.Link onClick={() => navigate("/contact")}>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
  );
}

export default NavigationBar;