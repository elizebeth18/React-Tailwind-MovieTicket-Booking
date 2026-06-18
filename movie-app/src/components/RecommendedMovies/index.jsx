import Card from "../Card";

const RecommendedMovies = ({ movies }) => {
    return (
        <>
            <h3 className="text-center 
                text-white text-2xl font-bold  
                relative top-2.5" >
                    Recommended Movies
            </h3>
            <Card movies={movies} />
        </>
    )
}

export default RecommendedMovies;