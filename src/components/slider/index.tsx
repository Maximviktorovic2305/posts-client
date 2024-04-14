import Slider from "react-slick"

import { Image } from "@nextui-org/react"
import img1 from "../../img/1.png"
import img10 from "../../img/10.png"
import img11 from "../../img/11.png"
import img2 from "../../img/2.png"
import img3 from "../../img/3.png"
import img4 from "../../img/4.png"
import img5 from "../../img/5.png"
import img6 from "../../img/6.png"
import img7 from "../../img/7.png"
import img8 from "../../img/8.png"
import img9 from "../../img/9.png"

const SliderComponent = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    vertical: true,
    autoplay: true,
    arrows: false,
    // nextArrow: false,
    // prevArrow: false,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "ease-in",
  }

  return (
    <div className="overflow-hidden mr-12">
      <Slider {...settings}>
        <div className="mb-4">
          <Image width={150} height={250} src={img1} />
        </div>
        <div className="mb-4">
          <Image width={150} height={250} src={img2} />
        </div>
        <div className="mb-4">
          <Image width={150} height={250} src={img3} />
        </div>
        <div className="mb-4">
          <Image width={150} height={250} src={img4} />
        </div>
        <div className="mb-4">
          <Image width={150} height={250} src={img5} />
        </div>
        <div className="mb-4">
          <Image width={150} height={250} src={img6} />
        </div>
        <div className="mb-4">
          <Image width={150} height={250} src={img7} />
        </div>
        <div className="mb-4">
          <Image width={150} height={250} src={img8} />
        </div>
        <div className="mb-4">
          <Image width={150} height={250} src={img9} />
        </div>
        <div className="mb-4">
          <Image width={150} height={250} src={img10} />
        </div>
        <div className="mb-4">
          <Image width={150} height={250} src={img11} />
        </div>
      </Slider>
    </div>
  )
}

export default SliderComponent
