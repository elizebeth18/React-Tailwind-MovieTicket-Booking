import { useEffect } from "react";
import NavBar from "./components/NavBar";
import TabsBar from "./components/TabsBar";

import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from './store/movieSlice';
import MovieSlider from "./components/MoviesSlider";


const App = () => {

  const redux_moviesList = useSelector((state) => state.movies?.moviesList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  },[dispatch]);


  return (
    <>
      <NavBar />
      <TabsBar />
      <MovieSlider movies={redux_moviesList}/>
    </>
  )
}

export default App
