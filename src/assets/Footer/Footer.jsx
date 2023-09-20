
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-lg">
          <small>&copy; {new Date().getFullYear()} MealDB </small>
        </p>
        <p className="text-2xl">
          <small>Thank you for visiting the site</small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
