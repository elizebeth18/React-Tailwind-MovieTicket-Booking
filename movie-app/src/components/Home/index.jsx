import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../store/movieSlice"

import TabsBar from "../TabsBar";
import MovieSlider from "../MoviesSlider";
import RecommendedMovies from "../RecommendedMovies";


const Home = () => {

  const redux_moviesList = useSelector((state) => state.movies?.filteredMoviesList.length > 0 ? state.movies?.filteredMoviesList : state.movies?.moviesList);

  const sliderMoviesList = useSelector((state) => state.movies?.moviesList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  },[dispatch]);


  return (
    <>
      <TabsBar />
      <MovieSlider movies={sliderMoviesList} />
      <RecommendedMovies movies={redux_moviesList} />
    </>
  )
}

export default Home;
