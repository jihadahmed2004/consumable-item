import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const myStyle ={
        border: "2px solid green",
    }
    const {idMeal,strMeal,strCategory,strInstructions,strArea,strMealThumb,strSource,} = user;
    return (
        <div style={myStyle} className='p-5 mt-5'>
            <h3>Meal: {strMeal}</h3>
            <div>
                <img src={strMealThumb} alt="" />
            </div>
            <p>Category: {strCategory}</p>
            <p>Category Side: {strArea}</p>
            <p>Instruction: {strInstructions}</p>
            <button className="border-x p-2 bg-orange-500 text-gray-100 mt-2"><Link to={`/user/${idMeal}`}>Show Details </Link></button>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.string.isRequired,
  };
  

export default User;