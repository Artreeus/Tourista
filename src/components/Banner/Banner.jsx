import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../app.css";
import { Parallax, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div className="my-7">
      <Swiper className='z-0'
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide
          style={{
            position: "relative",
            backgroundImage: "url(carousel-3.webp)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          ></div>

          <div className="text-center text-white">
            <div
              className="text-4xl font-bold mb-4"
              data-swiper-parallax="-300"
            >
              Explore Exotic Destinations
            </div>
            <div
              className="text-lg text-gray-300 mb-6"
              data-swiper-parallax="-200"
            >
              Your Adventure Awaits
            </div>
            <div
              className="text-center text-gray-300"
              data-swiper-parallax="-100"
            >
              <p className="text-lg">
                Embark on a journey to discover the world's most breathtaking destinations. Whether it's exploring ancient ruins, lounging on pristine beaches, or immersing yourself in vibrant cultures, our travel experiences promise unforgettable memories.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            position: "relative",
            backgroundImage: "url(carousel-1.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          ></div>

          <div className="text-center text-white">
            <div
              className="text-4xl font-bold mb-4"
              data-swiper-parallax="-300"
            >
              Luxury Accommodations
            </div>
            <div
              className="text-lg text-gray-300 mb-6"
              data-swiper-parallax="-200"
            >
              Experience Opulence
            </div>
            <div
              className="text-center text-gray-300"
              data-swiper-parallax="-100"
            >
              <p className="text-lg">
                Indulge in unparalleled luxury at our exquisite accommodations. From lavish resorts to secluded villas, each property offers unmatched elegance and comfort, ensuring a truly enchanting stay.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            position: "relative",
            backgroundImage: "url(carousel-2.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          ></div>

          <div className="text-center text-white">
            <div
              className="text-4xl font-bold mb-4"
              data-swiper-parallax="-300"
            >
              Adventure Activities
            </div>
            <div
              className="text-lg text-gray-300 mb-6"
              data-swiper-parallax="-200"
            >
              Thrilling Experiences Await
            </div>
            <div
              className="text-center text-gray-300"
              data-swiper-parallax="-100"
            >
              <p className="text-lg">
                Get your adrenaline pumping with our exciting adventure activities. Whether it's hiking through lush forests, diving into crystal-clear waters, or soaring above scenic landscapes, there's something for every thrill-seeker.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
