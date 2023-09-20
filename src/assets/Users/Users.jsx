import { useLoaderData } from "react-router-dom";

const Users = () => {

    const users = useLoaderData();
    return (
        <div>
            <h1>Our Users:{users.length}</h1>
            <p>MealDb Users</p>
        </div>
    );
};

export default Users;