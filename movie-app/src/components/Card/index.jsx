const Card = ({ movies }) => {

    return (
     
      <div className="flex flex-row  gap-16 w-350 max-w-full rounded-2xl mx-auto py-10 px-4">
        {movies && movies.map((movie, index) => {
          return (
            <div key={index} class="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
                <img
                  class="w-full h-48  object-cover"
                  src={movie.image}
                  alt="Card Image"
                />

                <div class="p-6">
                  <h2 class="text-xl text-center font-bold mb-2">{movie.title}</h2>

                  <div className="flex justify-center">
                    <button
                      class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
            </div>
          )
        })}
      </div>
    )
}

export default Card;