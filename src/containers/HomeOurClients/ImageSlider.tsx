import React from "react";
import Slider from "react-slick";
import { styleclubClients } from "../../utils/mockData";
import ClientImageCardComponent from "./ClientImageCard";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
  className: "center",
  centerMode: true,

  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        className: "center",
        centerMode: true,
      },
    },
  ],
};
const ImageSliderComponent = () => {
  return (
    <section className="home_client_slider">
      <Slider {...settings}>
        {styleclubClients.map((client, index) => (
          <div key={index}>
            <ClientImageCardComponent index={index} image={client.imgUrl} />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ImageSliderComponent;
