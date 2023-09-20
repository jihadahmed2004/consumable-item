import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    console.log(user);
    
    const {meals} = user;
    return(
        <div >
            <h2 className="text-2xl py-5 text-center ">Details About Selected Meals</h2>
            <div className="  grid  grid-cols-3 gap-3">
            {meals.map((meal,index) =>(
                <div key={index} className="border p-2">
                    <img src={meal.strMealThumb} alt={meal.strMeal} />                    
                    <h3 className="text-lg uppercase text-red-500 py-3 text-center">{meal.strMeal}</h3>
                </div>
             ))}                
            </div>
        </div>
    );
};

export default UserDetails;