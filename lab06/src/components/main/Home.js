import { Link } from "react-router-dom";

const Home = () => {
    return (
    <div>
        <ol>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/entry/add">Add entry</Link>
            </li>
            <li>
                <Link to="/entry/">Get entries</Link>
            </li>
        </ol>
    </div>)
};

export default Home;