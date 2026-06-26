import { useMemo, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { bookMovieTicketThunk } from "../../store/bookMovieTicketSlice";

const TicketBookingForm = () => {

    const [searchParams] = useSearchParams();

    const movieId = searchParams.get("id");
    const movieTitle = searchParams.get("title");

    const dispatch = useDispatch();

    const movieList = useSelector(state => state.movies?.moviesList)
    const movie = movieList.find(movie => movie.title === movieTitle);

    const today = new Date().toISOString().split("T")[0];


    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm({

        defaultValues: {
            movieTitle,
            ticketCount: 1
        }
    });

    const seatType = watch("seatType");
    const ticketCount = watch("ticketCount");

    const totalPrice = useMemo(() => {

        const prices = {
            normal: 200,
            superior: 300,
            sofa: 600
        };

        return prices[seatType]
            ? prices[seatType] * ticketCount
            : 0;

    }, [seatType, ticketCount]);

    const submitFormHandler = async(data)=>{

        const bookingDetails = {
            ...data,
            movieId,
            totalPrice
        };

        try {

            await dispatch(bookMovieTicketThunk(bookingDetails)).unwrap();

            alert("ticket booked successfully")
        }
        catch(error){

            alert("Booking failed");
        }
    };

    return (
        <>
            
            <div
                className="max-w-md
                mx-auto
                p-6
                bg-white
                rounded-lg
                shadow
                "
            >

                <h1
                    className="
                    text-2xl
                    font-bold
                    mb-5
                    "
                >
                    Book Ticket
                </h1>

                <input
                    value={movieTitle}
                    disabled
                    className="
                    w-full
                    border
                    p-3
                    mb-3
                    rounded
                    "
                />

                <input
                    placeholder="Name"
                    {...register(
                        "name",
                        {
                            required:
                            "Name is required"
                        }
                    )}
                    className="
                    w-full
                    border
                    p-3
                    rounded
                    "
                />

                {errors.name &&

                <p className="text-red-500">

                    {errors.name.message}

                </p>}


                <input
                    placeholder="Email"
                    {...register(
                        "email",
                        {
                            required:
                            "Email required",

                            pattern:{
                                value:
                                /^[^\s@]+@[^\s@]+\.[^\s@]+$/,

                                message:
                                "Invalid email"
                            }
                        }
                    )}
                    className="
                    w-full
                    border
                    p-3
                    mt-3
                    rounded
                    "
                />

                {errors.email &&

                <p className="text-red-500">

                    {errors.email.message}

                </p>}


                <select
                    {...register(
                        "showtime",
                        {
                            required:
                            "Select showtime"
                        }
                    )}
                    className="
                    w-full
                    border
                    p-3
                    mt-3
                    rounded
                    "
                >

                    <option value="">
                        Select Show Time
                    </option>

                    {movie?.showtimes.map(
                        showtime => (

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
                    {errors.showtime.message}
                </p>}


                <select
                    {...register(
                        "seatType",
                        {
                            required:
                            "Select seat"
                        }
                    )}
                    className="
                    w-full
                    border
                    p-3
                    mt-3
                    rounded
                    "
                >
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

                {errors.seatType &&
                <p className="text-red-500">
                    {errors.seatType.message}
                </p>}

                <input
                    type="number"
                    {...register(
                        "ticketCount",
                        {
                            required:true,
                            min:1
                        }
                    )}
                    className="w-full border p-3 mt-3 rounded"
                />

                <input
                    type="date"
                    min={today}
                    {...register(
                        "date",
                        {
                            required:
                            "Select date"
                        }
                    )}
                    className="
                    w-full
                    border
                    p-3
                    mt-3
                    rounded
                    "
                />

                {errors.date &&
                <p className="text-red-500">
                    {errors.date.message}
                </p>}

                <div className="font-bold mt-4">

                    Total: ₹{totalPrice}

                </div>

                <button type="submit"
                    onClick={handleSubmit(
                        submitFormHandler
                    )}
                    className="bg-blue-500 text-white px-4 py-2 rounded w-full mt-4 "
                >
                    Book Now
                </button>

            </div>
        </>
    );
};

export default TicketBookingForm;