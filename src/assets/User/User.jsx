import PropTypes from "prop-types";
import {  useNavigate } from "react-router-dom";

const User = ({ user }) => {
  const myStyle = {
    border: "2px solid green",
  };
  const { strCategory, strCategoryThumb, strCategoryDescription, idCategory } =
    user;

    const navigate = useNavigate();
  const hasDescription = strCategoryDescription !== "";

  const handleShowDetail = () => {
    navigate(`/user/${idCategory}`)
  };
  return (
    <div style={myStyle} className="p-5 mt-5 text-center">
        <p className="text-xl py-5">Meal id :{idCategory}</p>
      <div className="">
        <img className="w-full" src={strCategoryThumb} alt="" />
      </div>      
      <h3 className="text-2xl  py-5 "> {strCategory}</h3>
      {hasDescription ? (
        <>
          <p className="text-justify mb-3">{strCategoryDescription}</p>
          <button onClick={handleShowDetail} className="border-x p-3 bg-orange-500 text-gray-100 mt-2">
            {/* <Link to={`/user/${idCategory}`}>Show Details </Link> */} Show Details 
          </button>
        </>
      ) : (
        <p>No description available.</p>
      )}
    </div>
  );
};

User.propTypes = {
    user: PropTypes.object.isRequired, // Corrected PropTypes definition
  };
export default User;
