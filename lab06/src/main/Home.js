import { Link } from "react-router-dom";

const Home = () => {
    return (
        <ul>
            <li><Link to="/entry">All entries</Link></li>
            <li><Link to="/entry/add">Add entry</Link></li>
        </ul>
    )
};

export default Home;