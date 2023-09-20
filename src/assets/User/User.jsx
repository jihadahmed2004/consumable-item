import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  const myStyle = {
    border: "2px solid green",
  };
  const { strCategory, strCategoryThumb, strCategoryDescription, idCategory } =
    user;
  return (
    <div style={myStyle} className="p-5 mt-5">
      <h3> {strCategory}</h3>
      <div>
        <img src={strCategoryThumb} alt="" />
      </div>
      <p>{strCategoryDescription}</p>
      <button className="border-x p-2 bg-orange-500 text-gray-100 mt-2">
        <Link to={`/user/${idCategory}`}>Show Details </Link>
      </button>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.isRequired,
};
export default User;
