import Navbar from "../../components/Navbar/Navbar";
import Announcement from "../../components/Announcement/Announcement";
import Slider from "../../components/Slider/Slider";
import Categories from "../../components/Categories/Categories";
import Products from "../../components/Products";

const Home = () => {
    return (
        <>
        <Announcement />
        <Navbar />
        <Slider />
        <Categories />
        <Products />
        </>
    )
}

export default Home;