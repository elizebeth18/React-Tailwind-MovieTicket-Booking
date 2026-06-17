import Slider from "react-slick";


function MovieSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="w-full max-w-xl mx-auto py-10 px-4">
      <Slider {...settings}>
        <div className="bg-indigo-600 text-white p-20 text-center rounded-2xl font-bold text-xl">
          <h3>Slide 1</h3>
        </div>
        <div className="bg-emerald-600 text-white p-20 text-center rounded-2xl font-bold text-xl">
          <h3>Slide 2</h3>
        </div>
        <div className="bg-amber-600 text-white p-20 text-center rounded-2xl font-bold text-xl">
          <h3>Slide 3</h3>
        </div>
      </Slider>
    </div>
  );
}

export default MovieSlider;