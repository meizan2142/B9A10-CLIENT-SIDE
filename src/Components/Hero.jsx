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
                    <img src="https://i.ibb.co/XSm5hF9/photo-1674884734801-9ad239333f43.jpg" className="relative md:h-[300px]  sm:h-[500px] h-[300px] lg:w-[1192px]  w-[800px] bg-gray-400 object-cover" alt="hero navigate ui" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative">
                    <img src="https://i.ibb.co/G3pMtY9/photo-1534008897995-27a23e859048.jpg" className="relative md:h-[300px]  sm:h-[500px] h-[300px] lg:w-[1192px]  w-[800px] bg-gray-400 object-cover" alt="hero navigate ui" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative">
                    <img src="https://i.ibb.co/jG496jD/photo-1595598893966-aa42c10bfdd2.jpg" className="relative md:h-[300px]  sm:h-[500px] h-[300px] lg:w-[1192px]  w-[800px] bg-gray-400 object-cover" alt="hero navigate ui" />
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Hero;