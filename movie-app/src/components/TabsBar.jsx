import { Link } from "react-router-dom";

const TabsBar = () => {
    return (
        <div className="grid grid-cols-3 gap-x-8">
            <Link to='/latestMovies'
                className="bg-amber-400 text-center  p-3">
                Latest Movies
            </Link>
            <Link to='/latestMovies'
                className="bg-amber-400 text-center p-3">
                Upcoming Movies
            </Link>
            <Link to='/nearByEvents'
                className="bg-amber-400 text-center p-3">
                NearBy Events
            </Link>
        </div>
    );
}

export default TabsBar;