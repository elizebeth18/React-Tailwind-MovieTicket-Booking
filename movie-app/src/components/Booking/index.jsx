import { useState, useRef, useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { bookMovieTicketThunk } from '../../store/bookMovieTicketSlice';

const TicketBookingForm = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    const movieId = searchParams.get('id');
    const movieTitle = searchParams.get('title');

    const movie = useSelector(state => state.movies?.moviesList.find(movie => movie.title === movieTitle));

    console.log(movie);

    const today = new Date().toISOString().split('T')[0];

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [showtime, setShowTime] = useState("");
    const [seatType, setSeatType] = useState("");
    const [date, setDate] = useState("");
    const [ticketCount, setTicketCount] = useState(1);

    const dispatch = useDispatch();

    const emailRef = useRef(null);

    const validateEmailHandler = () => {

    }

    const totalPrice = useMemo(() => {

        const prices = {
            normal: 200,
            superior: 300,
            sofa: 600
        }

        return prices[seatType] ? prices[seatType] * ticketCount : 0;

    }, [seatType, ticketCount]);

    const submitFormHandler = useCallback(() => {
        const bookingDetails = {
            movieId,
            movieTitle,
            name,
            email,
            showtime,
            seatType,
            date, 
            ticketCount,
            totalPrice
        }

        dispatch(bookMovieTicketThunk(bookingDetails));


    },[
        movieId,
        movieTitle,
        name,
        email,
        showtime,
        seatType, 
        date, 
        ticketCount, 
        totalPrice
    ]);

    return (
        <div className="max-w-md mx-auto my-6 p-6 bg-white rounded-lg shadow">

            <h1 className="text-2xl font-bold mb-5">
                Book Ticket
            </h1>

            <input value={movieTitle} disabled
                className="w-full p-3 mb-3 rounded border border-black"
                placeholder="Movie Name" />

            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        emailRef.current.focus();
                    }
                }}
                className="w-full p-3 mb-3 rounded border border-black"
                placeholder="Name" />

            <input ref={emailRef} value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={validateEmailHandler}
                className="w-full p-3 mb-3 rounded border border-black"
                placeholder="Email" />

            <select
                className="w-full p-3 mb-3 rounded border border-black"
                onChange={(e) => { setShowTime(e.target.value); }}
            >
                <option value="">Select Show Timings</option>
                {movie?.showtimes.map(showtime => (<option value={showtime}>{showtime}</option>))}
            </select>

            <select
                onChange={(e) => { setSeatType(e.target.value); }}
                className="w-full p-3 mb-3 rounded border border-black">
                <option value="">
                    Select Seat
                </option>

                <option value="normal">
                    Normal ₹200
                </option>

                <option value="superior">
                    Superior ₹300
                </option>
                <option value="sofa">
                    Sofa ₹600
                </option>
            </select>

            <input
                type="number"
                min="1"
                value={ticketCount}
                onChange={(e) => { setTicketCount(parseInt(e.target.value)) }}
                className="w-full border p-3 mb-3 rounded"
            />

            <input
                type="date"
                min={today}
                onChange={(e) => { setDate(e.target.value) }}
                className="w-full border p-3 mb-3 rounded"
            />

            <div className="mb-4 font-bold">
                Total: ₹{totalPrice}
            </div>

            <button
                onClick={submitFormHandler}
                className="bg-blue-500 text-white px-4 py-2 rounded w-full">
                Book Now
            </button>

        </div>
    )
}

export default TicketBookingForm;