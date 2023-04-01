import NavBar from "../components/Common/NavBar"
import ContactForm from "../components/Contact/ContactForm"
import Coupon from "../components/Common/Coupon";
import Footer from "../components/Common/Footer";
import Hero from "../components/Contact/Hero";

function Contact() {
    return (
        <div>
            <Coupon />
            <NavBar />
            <Hero />
            <ContactForm />
            <Footer />
        </div>
    )
}

export default Contact;