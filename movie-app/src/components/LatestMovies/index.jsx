import { useEffect, useMemo, useContext } from "react"
import { useSelector, useDispatch } from "react-redux"
import { latestMoviesThunk } from "../../store/latestMoviesSlice";
import RecommendedMovies from "../RecommendedMovies";
import { SearchContext } from "../../context/context";

const LatestMovies = () => {

   const dispatch = useDispatch();

   const { searchText } = useContext(SearchContext);

   const reduxLatestMovies = useSelector((state) => state.latestMovies?.latestMovies);


   useEffect(() => {
      dispatch(latestMoviesThunk())
   }, [dispatch]);

   const filteredLatestMoviesList = useMemo(() => {
      return (reduxLatestMovies && reduxLatestMovies.filter((movie) => movie.title.toLowerCase().includes(searchText)))
   }, [searchText, reduxLatestMovies]);

   return (
      <RecommendedMovies movies={searchText === "" ? reduxLatestMovies : filteredLatestMoviesList} />
   )
}

export default LatestMovies;