import { useLocation } from "react-router-dom";
import Card from "../Card";

const RecommendedMovies = ({ movies }) => {

    let title = 'Recommended Movies';

    const location = useLocation();

    if (location.pathname === "/latestMovies") {
        title = 'Latest Movies'
    } else if (location.pathname === "/upcomingMovies") {
        title = 'Upcoming Movies'
    }


    return (
        <>
            <h3 className="text-center 
                text-white text-2xl font-bold  
                relative top-2.5" >
                {title}
            </h3>
            <Card movies={movies} />
        </>
    )
}

export default RecommendedMovies;