import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <>
      <div>
         <Link to="/">Go to Home</Link>
      </div>
      <h1> 404 - Page Not Found</h1>
    </>
  );
}

export default PageNotFound;