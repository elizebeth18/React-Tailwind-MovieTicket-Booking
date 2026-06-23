import { useSearchParams } from "react-router-dom";

const MovieDetails = () => {
    
    const[searchParams, setSearchParams] = useSearchParams();
    const title = searchParams.get('movieTitle')
    return (
        <>
            <h1 className="font-bold text-cyan-700">MovieDetails - {title}</h1>
            <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 ...">
                <div className="background-red-200 col-span-2">01</div>
                <div className="col-span-2">02</div>
                <div>03</div>
                <div>04</div>
                <div>05</div>
            </div>
        </>
    )
}

export default MovieDetails;