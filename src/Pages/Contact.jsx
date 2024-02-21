import { Button, Container } from "react-bootstrap";
import NavigationBar from "../Components/NavigationBar";
import "../Styles/Contact.css";
import Footer from "../Components/Footer";
import { Whatsapp } from "react-bootstrap-icons";

const Contact = () => {
    return (
        <>
            <NavigationBar />
            <section id="Contact" style={{ minHeight: '100vh', padding: '30px 0px', backgroundColor: '#1E1E1E' }}>
                <Container>
                    <div className="row">
                        <div className="col-12 col-lg-6 mb-4">
                            <h1 className="text-white mb-4">Contact</h1>
                            <h3 className="text-white" style={{ fontWeight: 450 }}>Aulia Printing</h3>
                            <p className="text-white">kompleks Blok Plan Perkantoran, Jl. Jend. Sudirman, Palopo, Kec. Marisa, Kabupaten Pohuwato, Gorontalo 96265</p>
                            <Button href="https://wa.me/+6282290489976" target="_blank" className="btn-success d-flex align-items-center justify-content-center gap-2" style={{ width: 200 }}><Whatsapp/>+62 822 9048 9976</Button>
                        </div>
                        <div className="col-12 col-lg-6">
                            <iframe title="Aulia Printing" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2148.0791603301573!2d121.94570305289513!3d0.4655780743584088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x327835cf51429e5d%3A0x74dc0ecce3997f3c!2sAulia%20Printing!5e0!3m2!1sid!2sid!4v1708521386956!5m2!1sid!2sid" style={{ border: 0, borderRadius: 10, width: 500, height: 400 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </Container>
            </section>
            <Footer />
        </>
    )
}

export default Contact;