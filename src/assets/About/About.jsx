import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate ();
  const handleGoBack = () => {
    navigate(-1);
  }
  return (
    <div className="text-center text-2xl py-6 h-72">
      <h1 className="pb-4"> About Us</h1>
      <p className="pt-5 pb-7 text-base ">Will be update soon..</p>
      <button
        className="border bg-red text-black bg-gray-300 p-4 text-base"
        onClick={handleGoBack}
      >
        Go Back
      </button>
    </div>
  );
};

export default About;
