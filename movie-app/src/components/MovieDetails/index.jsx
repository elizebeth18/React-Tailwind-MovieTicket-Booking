import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

const MovieDetails = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const title = searchParams.get('movieTitle')

    const movie = useSelector(state => state.movies?.moviesList.find(movie => movie.title === title));


    console.log(movie)

    return (
        <>
            {(!movie) ? <h1>Loading......</h1> :
                <>
                    <div className="max-w-6xl mx-auto p-6">
  <div className="grid md:grid-cols-2 gap-8 bg-white rounded-2xl shadow-lg overflow-hidden">

    {/* Poster */}
    <div>
      <img
        src={movie.image}
        alt={movie.title}
        className="w-full h-full object-cover"
      />
    </div>

    {/* Details */}
    <div className="p-6 flex flex-col justify-between">

      <div>
        <h1 className="text-4xl font-bold mb-3">
          {movie.title}
        </h1>

        <div className="flex flex-wrap gap-3 mb-4">
          <span className="px-3 py-1 rounded-full bg-gray-100">
            ⭐ {movie?.rating}
          </span>

          <span className="px-3 py-1 rounded-full bg-gray-100">
            {movie.duration}
          </span>

          <span className="px-3 py-1 rounded-full bg-gray-100">
            {movie.language}
          </span>
        </div>

        <div className="flex gap-2 flex-wrap mb-5">
            <span
              className="bg-blue-100 px-3 py-1 rounded-full text-sm"
            >
              {movie.genre}
            </span>
        </div>

        <p className="text-gray-600 leading-7">
          {movie?.plot}
        </p>

        <div className="mt-6">
          <h3 className="font-semibold mb-3">
            Show Times
          </h3>

          <div className="flex flex-wrap gap-3">
            {movie?.showtimes.map((time) => (
              <button
                key={time}
                className="border rounded-lg px-4 py-2 hover:bg-black hover:text-white transition"
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold">
           100 //₹{movie.price}
        </h2>

        <button className="bg-black text-white px-8 py-3 rounded-xl hover:opacity-90">
          Book Tickets
        </button>
      </div>

    </div>
  </div>
</div>
                </>
            }

        </>
    )
}

export default MovieDetails;