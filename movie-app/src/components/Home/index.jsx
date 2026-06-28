import { useEffect, useContext, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../store/movieSlice";
import { bookMovieTicketThunk } from "../../store/bookMovieTicketSlice";

import TabsBar from "../TabsBar";
import MovieSlider from "../MoviesSlider";
import RecommendedMovies from "../RecommendedMovies";
import { SearchContext } from "../../context/context";

const Home = () => {

  const { searchText } = useContext(SearchContext);

  let redux_moviesList = useSelector((state) => state.movies?.moviesList);

  const dispatch = useDispatch();

  /* const ticket = {
      "id": "3e5c",
      "movieId": "4",
      "movieTitle": "Interstellar",
      "name": "ewrew",
      "email": "sads@dsfd.com",
      "showtime": "17:30",
      "seatType": "superior",
      "date": "2026-07-10",
      "ticketCount": 1,
      "totalPrice": 300
    }

    const submitTicket = async(ticket) => {
      try{
        
        await dispatch(bookMovieTicketThunk(ticket)).unwrap()
      }catch(err){
        console.log(err)
      }
    }; */

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
