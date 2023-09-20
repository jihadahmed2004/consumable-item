import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
  const users = useLoaderData();
  console.log(users);
  return (
    <div>
      <h2 className="text-2xl">Our Users: {users.meals.length}</h2>
      <p className="text-xl">Latest Meals</p>
      <div className="grid-cols-3 grid gap-2 grow-0">
        {users.meals.map((user) => (
          <User key={user.id} user={user}>   </User>
        ))}
      </div>
    </div>
  );
};

export default Users;
