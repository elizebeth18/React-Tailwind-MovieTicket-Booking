import { useMemo, useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { bookMovieTicketThunk } from '../../store/bookMovieTicketSlice'
//import Alert from "./PopUp";

const TicketBookingForm = () => {

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const movieTitle = searchParams.get('title');

    
    const movieList = useSelector(state => state.movies?.moviesList)
    let movie = movieList.find(movie => movie.title === movieTitle);

    const latestMovie = useSelector(state => state.latestMovies?.latestMovies.find(movie => movie.title === movieTitle));

    const upComingMovie = useSelector(state => state.upcomingMovies?.upcomingMovies.find((movie) => movie.title === movieTitle));

    if (latestMovie && Object.keys(latestMovie).length !== 0) {
        movie = { ...latestMovie }
    } else if (upComingMovie && Object.keys(upComingMovie).length !== 0) {
        movie = { ...upComingMovie }
    }

    const dispatch = useDispatch();

    const today = new Date().toISOString().split("T")[0];

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        showtime: "",
        seatType: "",
        ticketCount: 1,
        date: ""
    });

    const [errors, setErrors] = useState({});
    const [showPopup, setShowPopup] = useState(false);

    const inputChangeHandler = (e) => {

        const { name, value } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const totalPrice = useMemo(() => {

        const prices = {
            normal: 200,
            superior: 300,
            sofa: 600
        };

        return prices[formData.seatType] ? prices[formData.seatType] * formData.ticketCount : 0;

    }, [
        formData.seatType,
        formData.ticketCount
    ]);


    const validateForm = () => {

        const newErrors = {};

        if (formData.name.trim() === "") {
            newErrors.name = "Name required";
        }

        if (formData.email.trim() === "") {
            newErrors.email = "Email required";
        }
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Invalid email";
        }

        if (formData.showtime === "") {
            newErrors.showtime = "Select showtime";
        }

        if (formData.seatType === "") {
            newErrors.seatType = "Select seat";
        }

        if (formData.date === "") {
            newErrors.date = "Select date";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };


    const submitFormHandler = async (e) => {

        //e.preventDefault();

        if (!validateForm()) {
            return;
        }

        const bookingDetails = {
            movieTitle,
            ...formData,
            totalPrice
        };

        try {
            await dispatch(bookMovieTicketThunk(bookingDetails)).unwrap()
            //alert("ticket booked successfully");
            //navigate("/ticketQRCode");
        }
        catch (error) {
            alert("Booking failed",error);
        }

    };


    return (
        <>
            {/* {showPopup && (
                <Alert
                    message="Ticket booked successfully 🎉"
                    onClose={() => setShowPopup(false)}
                />
            )} */}
            <div className="max-w-md mx-auto p-6 my-5 bg-white rounded-lg">

                <h1 className="font-bold text-xl mb-5 text-center">
                    Book Movie Ticket</h1>

                <input
                    disabled className="w-full p-3 border mb-2 rounded"
                    value={movieTitle} />

                <input name="name" className="w-full p-3 border mb-2 rounded"
                    value={formData.name} placeholder="Name"
                    onChange={inputChangeHandler}
                />

                {errors.name &&
                    <p className="text-red-500">
                        {errors.name}
                    </p>}

                <input name="email" className="w-full p-3 border mb-2 rounded"
                    value={formData.email} placeholder="Email"
                    onChange={inputChangeHandler}
                />

                {errors.email &&
                    <p className="text-red-500">
                        {errors.email}
                    </p>}

                <select name="showtime" value={formData.showtime}
                    onChange={inputChangeHandler}
                    className="w-full p-3 border mb-2 rounded" >
                    <option value="">Select Show Time</option>
                    {movie?.showtimes.map(showtime => (
                        <option
                            key={showtime}
                            value={showtime}
                        >
                            {showtime}
                        </option>
                    ))}
                </select>

                {errors.showtime &&
                    <p className="text-red-500">
                        {errors.showtime}
                    </p>}

                <select name="seatType" value={formData.seatType}
                    onChange={inputChangeHandler}
                    className="w-full p-3 border mb-2 rounded" >
                    <option value="">Select Seat</option>

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

                {errors.seatType &&
                    <p className="text-red-500">
                        {errors.seatType}
                    </p>}

                <input type="number" min="1"
                    name="ticketCount" className="w-full p-3 border mb-2 rounded"
                    value={formData.ticketCount}
                    onChange={inputChangeHandler}
                />

                <input type="date" min={today}
                    name="date" className="w-full p-3 border mb-2 rounded"
                    value={formData.date} placeholder="Date"
                    onChange={inputChangeHandler}
                />

                {errors.date &&
                    <p className="text-red-500">
                        {errors.date}
                    </p>}

                <div className="mt-4 font-bold">
                    Total: ₹{totalPrice}
                </div>

                <button className="bg-blue-500 text-white rounded w-full p-3"
                    type="button" onClick={submitFormHandler}>
                        Book Ticket
                </button>

            </div>
        </>
    )
}

export default TicketBookingForm;