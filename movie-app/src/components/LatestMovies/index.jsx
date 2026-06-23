import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { latestMoviesThunk, searchLatestMovies } from "../../store/latestMoviesSlice";


import RecommendedMovies from "../RecommendedMovies";

const LatestMovies = () => {

   const dispatch = useDispatch();

   const reduxLatestMovies = useSelector((state) => state.latestMovies?.filteredLatestMovies.length > 0 ? state.latestMovies?.filteredLatestMovies : state.latestMovies?.latestMovies);

   console.log(reduxLatestMovies.length)

   useEffect(()=>{
      dispatch(latestMoviesThunk())
   },[dispatch]);

     return(
        <RecommendedMovies movies={reduxLatestMovies} />
     )
}

export default LatestMovies