import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../../header/Header";
import Footer from "../Footer/Footer";
import pngLogo from '/logo-small.png'


const Home = () => {
    const navigation = useNavigation();
    const location = useLocation();
    console.log(location);
    return (
        <>
        <div className="container md:container mx-auto px-2 pb-10 flex flex-col items-center justify-center 
        ">            
        <div className=" mt-4"><img src={pngLogo} className="logo" alt="Vite logo" /></div>
            <h1 className="text-center text-3xl text-black py-5"> MealDB Website Using API with React and Tailwind CSS</h1>
            <Header> </Header>
            {
                navigation.state == "loading" ?
                <p>Loading...</p>:
                <Outlet>      </Outlet>
            }
            
        </div>
        <Footer></Footer>
        </>
    );
};

export default Home;