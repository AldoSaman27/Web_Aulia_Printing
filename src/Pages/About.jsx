import { Container } from "react-bootstrap"
import NavigationBar from "../Components/NavigationBar";
import Product from "../Assets/AuliaPrinting.png";
import "../Styles/About.css";
import Footer from "../Components/Footer";

const About = () => {
    return (
        <>
            <NavigationBar />
            <section id="About" style={{ minHeight: '100vh', padding: '30px 0px' }}>
                <Container>
                    <h1 className="text-center mb-4">About Us</h1>
                    <div className="row">
                        <div className="col-12 col-md-4 mb-4">
                            <img src={Product} alt="" style={{ width: '100%', borderRadius: 10 }} />
                        </div>
                        <div className="col-12 col-md-8">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, reprehenderit. Quo optio reiciendis iure quaerat laudantium rem ut. At dignissimos nisi adipisci esse maiores sit necessitatibus error soluta possimus praesentium.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias odio dicta possimus magni et vitae adipisci voluptate excepturi voluptates sunt omnis facere, vero dolorem delectus at. Minima nemo, quis voluptatibus sint optio molestiae fugiat debitis aut in laborum. Provident tempore, est iure mollitia impedit odio? Praesentium consequatur vitae repellendus ducimus odit omnis est facilis, mollitia quam facere velit consectetur id iusto quibusdam nulla odio nobis corrupti, pariatur necessitatibus provident et rerum quas dolorem? Fugit dolores modi aperiam laudantium, nam doloribus recusandae quaerat ipsum exercitationem quae eius sint officia cumque. Voluptatem odit quam iure architecto ipsa repellat labore sint, itaque dicta!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sint molestiae officiis nesciunt. Amet ratione optio harum sed quia architecto? Fugit omnis libero amet impedit doloribus esse. Esse excepturi voluptas nesciunt? Harum sed aspernatur blanditiis quisquam, quo exercitationem aperiam nam libero animi magnam officia. Non accusamus explicabo enim aspernatur assumenda?</p>
                        </div>
                    </div>
                </Container>
            </section>
            <Footer />
        </>
    )
}

export default About;