import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
const Hero = () => {
    return (
        <Swiper spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay]}
            className="mySwiper rounded-xl lg:mt-6 mt-10">
            <SwiperSlide>
                <div className="relative">
                    <img src="https://i.ibb.co/6sq9WXt/pexels-photo-1268855.webp" className="relative md:h-[300px]  sm:h-[500px] h-[300px] lg:w-[1192px]  w-[800px] bg-gray-400 object-cover" alt="hero navigate ui" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative">
                    <img src="https://i.ibb.co/LJhkXTX/pexels-photo-1285625.jpg" className="relative md:h-[300px]  sm:h-[500px] h-[300px] lg:w-[1192px]  w-[800px] bg-gray-400 object-cover" alt="hero navigate ui" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative">
                    <img src="https://i.ibb.co/xXbFGjj/pexels-photo-2087391.webp" className="relative md:h-[300px]  sm:h-[500px] h-[300px] lg:w-[1192px]  w-[800px] bg-gray-400 object-cover" alt="hero navigate ui" />
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Hero;