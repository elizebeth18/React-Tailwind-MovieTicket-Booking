import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

const MovieDetails = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const title = searchParams.get('movieTitle')

    const movie = useSelector(state => state.movies?.moviesList.find(movie => movie.title === title));


    console.log(movie)

    return (
        <>
            {(!movie) ? <h1 className="text-center text-3xl text-amber-400">Loading......</h1> :
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

        {/* Title + Release */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="font-bold text-3xl">
            {movie?.title}
          </h1>

          <span className="px-3 py-1 rounded-full bg-gray-200 text-sm">
            {movie?.releaseDate}
          </span>
        </div>

        {/* Movie info */}
        <div className="flex gap-4 flex-wrap mb-6">

          <span className="bg-gray-100 px-3 py-1 rounded-full">
            ⭐ {movie?.rating}
          </span>

          <span className="bg-gray-100 px-3 py-1 rounded-full">
            {movie?.duration}
          </span>

          <span className="bg-gray-100 px-3 py-1 rounded-full">
            {movie?.language}
          </span>

        </div>

        {/* Genres */}
        <div className="flex gap-2 flex-wrap mb-6">
          {movie?.genre?.map((item) => (
            <span
              key={item}
              className="bg-blue-200 px-3 py-1 rounded-full text-sm"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-gray-600 leading-7">
          {movie?.plot}
        </p>

      </div>

      {/* Bottom section */}
      <div className="mt-8 flex justify-between items-center">

        {/* <h2 className="text-2xl font-bold">
          ₹100
        </h2> */}

        <button className="bg-amber-950 text-white px-6 py-3 rounded-xl hover:opacity-90">
          Book Now
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