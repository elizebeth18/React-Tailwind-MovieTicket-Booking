import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MovieSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div><h3>Movie 1</h3></div>
      <div><h3>Movie 2</h3></div>
      <div><h3>Movie 3</h3></div>
      <div><h3>Movie 4</h3></div>
    </Slider>
  );
}

export default MovieSlider;