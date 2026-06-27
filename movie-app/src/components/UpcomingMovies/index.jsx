import { useEffect, useContext, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { upComingMoviesThunk } from "../../store/upcomingMoviesSlice";
import { SearchContext } from "../../context/context";
import RecommendedMovies from "../RecommendedMovies";

const UpcomingMovies = () => {

    const dispatch = useDispatch();
    const { searchText } = useContext(SearchContext);

    const redux_upcoming_moviesList = useSelector((state) => state.upcomingMovies?.upcomingMovies);

    const filteredUpcomingList = useMemo(() => {
        return (redux_upcoming_moviesList && redux_upcoming_moviesList.filter((movie) => movie.title.toLowerCase().includes(searchText)))
    }, [searchText, redux_upcoming_moviesList]);

    useEffect(() => {
        dispatch(upComingMoviesThunk());
    }, [dispatch]);

    return (
        <>
            <RecommendedMovies movies={searchText === "" ? redux_upcoming_moviesList : filteredUpcomingList} />
        </>
    )
}

export default UpcomingMovies;