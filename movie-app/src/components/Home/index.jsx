import { useEffect, useContext, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../store/movieSlice";

import TabsBar from "../TabsBar";
import MovieSlider from "../MoviesSlider";
import RecommendedMovies from "../RecommendedMovies";
import { SearchContext } from "../../context/context";

const Home = () => {

  const { searchText } = useContext(SearchContext);

  let redux_moviesList = useSelector((state) => state.movies?.moviesList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);


  const filteredList = useMemo(() => {
    return (redux_moviesList && redux_moviesList.filter((movie) => movie.title.toLowerCase().includes(searchText)));
  }, [searchText, redux_moviesList]);

  

  return (
    <>
      <TabsBar />
      <MovieSlider movies={redux_moviesList} />
      <RecommendedMovies movies={searchText === "" ? redux_moviesList : filteredList} />
    </>
  )
}

export default Home;
