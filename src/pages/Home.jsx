import {Link} from "react-router-dom";

function Home() {

    return (
        <>
            <h1>Home</h1>
            <Link to={"/jobs"}>browse jobs</Link>
        </>
    )
}

export default Home