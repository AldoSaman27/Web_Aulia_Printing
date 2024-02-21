import { Container } from "react-bootstrap";
import "../Styles/Product.css";
import NavigationBar from "../Components/NavigationBar";
import Footer from "../Components/Footer";
import Image from "../Assets/AuliaPrinting.png";

const Product = () => {
    const products = Array.from({ length: 100 }, (_, index) => `Product ${index + 1}`);

    return (
        <>
            <NavigationBar />
            <section id="Product" style={{ padding: '30px 0px' }}>
                <Container>
                    <h1 className="text-center mb-4">Our Product</h1>
                    <div>
                        {products.map((item, index) => (
                            <div key={item}>
                                <img src={Image} alt="" />
                                <div className="title-box"></div>
                                <div className="title">Aulia Printing</div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>
            <Footer />
        </>
    )
}

export default Product;