import { useEffect } from "react";
import NavBar from "./components/NavBar";
import TabsBar from "./components/TabsBar";

import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from './store/movieSlice';
import MovieSlider from "./components/MoviesSlider.jsx";


const App = () => {

  const redux_moviesList = useSelector((state) => state.movies.moviesList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  },[dispatch]);

  console.log('redux_moviesList',redux_moviesList);


  return (
    <>
      <NavBar />
      <TabsBar />
      <MovieSlider />
    </>
  )
}

export default App
