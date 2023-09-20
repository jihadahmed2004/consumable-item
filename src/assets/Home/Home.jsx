import { Outlet } from "react-router-dom";
import Header from "../../header/Header";
import Footer from "../Footer/Footer";


const Home = () => {
    return (
        <div className="container md:container mx-auto">
            <h1 className="text-center text-3xl text-black">My First MealDB Website</h1>
            <Header> </Header>
            <Outlet>
            </Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;