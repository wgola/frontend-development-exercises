import { Link } from "react-router-dom";

const ErrorPage = ({ error }) => {
    return (<>
                <p>Sorry, something went wrong...</p>
                <p>{error}</p>
                <Link to="/"><button>Home</button></Link>
            </>)
};

export default ErrorPage;