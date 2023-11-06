import Navbar from "../../components/Navbar";
import Announcement from "../../components/Announcement";
import Slider from "../../components/Slider";
import Categories from "../../components/Categories";
import Products from "../../components/Products";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/Footer";
import DefaultLayout from "../../components/Layout/DefaultLayout";

const Home = () => {
    return (
        <>
        <DefaultLayout />
        <Announcement />
        <Navbar />
        <Slider />
        <Categories />
        <Products />
        <Newsletter />
        <Footer />
        </>
    )
}

export default Home;