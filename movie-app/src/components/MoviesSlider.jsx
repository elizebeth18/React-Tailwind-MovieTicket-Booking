import SliderImport from "react-slick";
const Slider = SliderImport.default ?? SliderImport;


function MovieSlider({ movies }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };

  return (
    <div className="w-250 max-w-xl rounded-2xl mx-auto py-10 px-4">
      {movies && <Slider {...settings}>
        {movies.map(movie => {
            return (
              <div key={movie.id} className="bg-amber-500 text-black p-2 text-center rounded-2xl font-bold text-xl">
                <div className="rounded-2xl">
                  <img src={movie.image} className="w-full h-80 rounded-2xl"/>
                </div>
                <h3 key={movie.id}>{movie.title}</h3>
              </div>
            );
        })} 
      </Slider>
      }
    </div>
  );
}

export default MovieSlider;