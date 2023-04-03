import Coupon from "../components/Common/Coupon"
import NavBar from '../components/Common/NavBar';
import ImageSlider from '../components/Home/ImageSlider';
import Footer from '../components/Common/Footer';
import ValueCards from '../components/Home/ValueCards';



function HomePage () {
    const slides = [
        {url: 'https://images.unsplash.com/photo-1589883661923-6476cb0ae9f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2874&q=80', title: 'cat laying down belly up'},
        {url: 'https://images.unsplash.com/photo-1527416876370-fb74d128c3dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80', title: 'two cats'},
        {url: 'https://images.unsplash.com/photo-1557246565-8a3d3ab5d7f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80', title: 'white playful cat'},
        {url: 'https://images.unsplash.com/photo-1542297056134-df64a72eaeb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80', title: 'cat with girl laying down'}
    ]

    const containerStyles = {
        width: "100%",
        height: "700px",
        margin: "0 auto"
    }

    return (
        <div>
<Coupon />
<NavBar />
<div style={containerStyles}>
<ImageSlider slides={slides} />
</div>
<ValueCards />
<Footer />
        </div>
    )
}

export default HomePage;