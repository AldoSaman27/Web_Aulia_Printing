import { Container, Button } from "react-bootstrap";
import "../Styles/Product.css";
import NavigationBar from "../Components/NavigationBar";
import Footer from "../Components/Footer";
import Image from "../Assets/AuliaPrinting.png";
import { Cart4 } from "react-bootstrap-icons";

const Product = () => {
  const products = Array.from(
    { length: 100 },
    (_, index) => `Product ${index + 1}`
  );

  return (
    <>
      <NavigationBar />
      <section id="allProduct" className="allProduct">
        <Container>
          <h1 className="text-center mb-4">Our Product</h1>

          <div className="row row-cols-lg-4 gap-lg-0 row-cols-md-3 gap-md-3 justify-content-center">
            {products.map((item, index) => (
              <div key={index} className="col mb-4">
                <div className="card-product">
                  <div className="card-header">
                    <img src={Image} alt="" className="card-img" />
                  </div>
                  <div className="card-body">
                    <h1 className="card-title">Aulia Printing</h1>
                    <p className="card-price">Rp. -</p>
                    <Button className="card-button">
                      <Cart4 color="white" className="mb-1 me-1" /> Order Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Product;
