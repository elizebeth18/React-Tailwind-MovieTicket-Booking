import { useEffect, useContext, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../store/movieSlice";

import TabsBar from "../TabsBar";
import MovieSlider from "../MoviesSlider";
import RecommendedMovies from "../RecommendedMovies";
import { SearchContext } from "../../context/context";

import { bookMovieTicketThunk } from "../../store/bookMovieTicketSlice";

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

  
      const submitFormHandler = async () => {
  
          
  
          const bookingDetails = {
      "id": "ff93",
      "movieTitle": "Superman",
      "name": "ssd",
      "email": "sdsf@dsfd.scom",
      "showtime": "11:00 AM",
      "seatType": "normal",
      "ticketCount": 1,
      "date": "2026-06-28",
      "totalPrice": 200
    };
  
          try {
              await dispatch(bookMovieTicketThunk(bookingDetails)).unwrap()
          }
          catch (error) {
              alert("Booking failed",error);
          }
  
      };

  return (
    <>
      {/* <TabsBar /> */}

      <button className="flex justify-center text-center bg-cyan-500"
        onClick={() => {
          submitFormHandler()
      }}>
        Book Ticket
      </button>


      {/* <MovieSlider movies={redux_moviesList} />
      <RecommendedMovies movies={searchText === "" ? redux_moviesList : filteredList} /> */}
    </>
  )
}

export default Home;
