import { Link,useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="container md:container mx-auto px-2 pb-10 flex flex-col items-center justify-center text-2xl mt-10 text-center">
            <h2>Oops!!!</h2>
            {/* <p>{error.statusText || error.message}</p> */}
            {
                error.status == 404 && 
                <div>
                    <h3>Page not found</h3>
                    <p>Go back where you from</p>
                    <Link to="/"> <button className="border-x p-3 bg-red-400 text-gray-100 mt-2">Home</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;