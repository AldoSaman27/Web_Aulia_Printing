import "../Styles/Home.css";
import Footer from "../Components/Footer";
import Product from "../Assets/AuliaPrinting.png";
import NavigationBar from "../Components/NavigationBar";
import { Container } from "react-bootstrap";
import { Pencil, Printer, Tools } from "react-bootstrap-icons";

const Home = () => {
    return (
        <section id="Home" style={{ width: '100%', minHeight: '100vh' }} >
            <NavigationBar />
            <header className="d-flex flex-column align-items-center justify-content-center">
                <h1 className="text-white">Aulia Printing</h1>
                <p className="text-white fw-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, totam?</p>
            </header>
            <div style={{ width: '80%', height: '100%', backgroundColor: '#212529', margin: '-30px auto 0px', borderRadius: '10px', padding: '10px 20px' }} className="d-flex align-items-center justify-content-between">
                <div style={{ width: '30%', height: '100%' }} className="d-flex flex-column align-items-center justify-content-center text-center">
                    <div className="d-flex align-items-center justify-content-center m-1">
                        <Printer size={35} color="white"/>
                    </div>
                    <p className="text-white m-1">Percetakan</p>
                </div>
                <div style={{ width: '30%', height: '100%' }} className="d-flex flex-column align-items-center justify-content-center text-center">
                    <div className="d-flex align-items-center justify-content-center m-1">
                        <Tools size={35} color="white"/>
                    </div>
                    <p className="text-white m-1">Service Komputer / Laptop & Printer</p>
                </div>
                <div style={{ width: '30%', height: '100%' }} className="d-flex flex-column align-items-center justify-content-center text-center">
                    <div className="d-flex align-items-center justify-content-center m-1">
                        <Pencil size={35} color="white"/>
                    </div>
                    <p className="text-white m-1">Fotocopy & ATK</p>
                </div>
            </div>

            <section className="WhyUs" style={{ padding: '50px 20px' }}>
                <Container>
                    <h1 className="text-center mb-3">Why Us?</h1>
                    <div>
                        <h2 className="m-0 p-0">Aulia Printing</h2>
                        <p className="text-secondary fw-semibold">Percetakan | Service Komputer / Laptop & Printer | Fotocopy & ATK</p>

                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum velit soluta, autem quibusdam adipisci nihil sit illo voluptatem distinctio non praesentium magnam odio, sunt enim ipsa cum nisi incidunt! Quas pariatur optio dicta rem accusantium sint. Facere vitae laboriosam ea! Deserunt iste neque consectetur placeat ipsa rerum veritatis eum optio.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus animi in dolore quam quisquam voluptas, aperiam natus molestiae. Minima nihil earum eos quaerat autem atque quod facere voluptas ab voluptates!</p>
                    </div>
                </Container>
            </section>

            <section className="OurProduct" style={{ padding: '0px 0px 50px 0px' }}>
                <Container className="d-flex flex-column align-items-center justify-content-center">
                    <h1 className="text-center mb-5">Our Products</h1>
                    <div>
                        <div>
                            <img src={Product} alt="" />
                            <div className="title-box"></div>
                            <div className="title">Aulia Printing</div>
                        </div>
                        <div>
                            <img src={Product} alt="" />
                            <div className="title-box"></div>
                            <div className="title">Aulia Printing</div>
                        </div>
                        <div>
                            <img src={Product} alt="" />
                            <div className="title-box"></div>
                            <div className="title">Aulia Printing</div>
                        </div>
                        <div>
                            <img src={Product} alt="" />
                            <div className="title-box"></div>
                            <div className="title">Aulia Printing</div>
                        </div>
                        <div>
                            <img src={Product} alt="" />
                            <div className="title-box"></div>
                            <div className="title">Aulia Printing</div>
                        </div>
                        <div>
                            <img src={Product} alt="" />
                            <div className="title-box"></div>
                            <div className="title">Aulia Printing</div>
                        </div>
                        <div>
                            <img src={Product} alt="" />
                            <div className="title-box"></div>
                            <div className="title">Aulia Printing</div>
                        </div>
                        <div>
                            <img src={Product} alt="" />
                            <div className="title-box"></div>
                            <div className="title">Aulia Printing</div>
                        </div>
                        <div>
                            <img src={Product} alt="" />
                            <div className="title-box"></div>
                            <div className="title">Aulia Printing</div>
                        </div>
                        <div>
                            <img src={Product} alt="" />
                            <div className="title-box"></div>
                            <div className="title">Aulia Printing</div>
                        </div>
                    </div>
                </Container>
            </section>
            <Footer />
        </section>
    )
}

export default Home;