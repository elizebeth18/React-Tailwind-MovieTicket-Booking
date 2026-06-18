import { useEffect } from "react";
import NavBar from "./components/NavBar";
import TabsBar from "./components/TabsBar";

import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from './store/movieSlice';
import MovieSlider from "./components/MoviesSlider";
import RecommendedMovies from "./components/RecommendedMovies";


const App = () => {

  const redux_moviesList = useSelector((state) => state.movies?.filteredMoviesList.length > 0 ? state.movies?.filteredMoviesList : state.movies?.moviesList);

  const sliderMoviesList = useSelector((state) => state.movies?.moviesList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  },[dispatch]);


  return (
    <>
      <NavBar />
      <TabsBar />
      <MovieSlider movies={sliderMoviesList} />
      <RecommendedMovies movies={redux_moviesList} />
    </>
  )
}

export default App
