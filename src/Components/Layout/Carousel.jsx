import { getCarouselItems } from "../../Data/Carousel";
import Slider from "react-slick";

function Carousel() {

    let settings = {
        autoplay: true,
        arrows: false,
        infinite: true,
        autoplaySpeed: 10000,
        speed: 1000
    };

    return (
        <section className="-m-4 -mb-8 relative aspect-[991/317]">
            <Slider {...settings} className="absolute top-0 left-0 right-0">
                {getCarouselItems().map((item, index) => (
                    <div key={index}>
                        <img src={item} />
                    </div>
                ))}
            </Slider>
        </section >
    )
}

export default Carousel