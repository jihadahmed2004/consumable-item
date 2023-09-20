import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
  const users = useLoaderData();

  console.log(users);

  return (
    <>
      <div className="text-center py-3 ">
        <h2 className="text-2xl">Our Meals: {users.categories.length}</h2>
        <p className="text-xl py-3">Latest Meals</p>
      </div>
      <div className="grid-cols-3 grid gap-2 grow-0">
        {users.categories.map((user) => (
          <User key={user.idCategory} user={user}>
            
          </User>
        ))}
      </div>
    </>
  );
};

export default Users;
