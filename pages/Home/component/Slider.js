// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import bg from "../../../photos/blurry-gradient-haikei.png";
import Image from "next/image";
import burger from '../../../photos/burger.png'
import pizza from '../../../photos/pizza.png'
import gril from '../../../photos/gril.png'
import pasta from '../../../photos/pasta.png'
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";


const Slider = () => {
    
  return (
    <div className="w-full max-w-screen-2xl md:pb-5  object-cover mx-auto text-white" style={{ background: `url(${bg.src})`,
    backgroundRepeat: 'no-repeat', backgroundSize:'cover'
    }}>
      <Swiper
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        navigation={true} modules={[Autoplay, Navigation]}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        loop={true}
        className=' md:h-[400px] w-full mySwiper'
        style={{"--swiper-navigation-color": "#FFF", "--swiper-pagination-color": "#FFF"}}
      >
        <SwiperSlide >
          <div className="grid grid-cols-1 md:grid-cols-2 items-center text-center md:text-right h-full">
            <div className="w-full">
              <h3 className="text-4xl md:text-5xl font-semibold">Find out the best food</h3>
              <p className="text-xl mt-2 md:mt-5">We have gain our consumer trust so try our full</p>
            </div>
            <div className="order-first md:order-last ">
              <Image
                src={burger}
                alt='burger'
                className='lg:p-8 md:p-5 p-2 md:max-w-[480px]'
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center text-center md:text-right h-full">
            <div>
              <h3 className="text-4xl md:text-5xl font-semibold">Find out the best food</h3>
              <p className="text-xl mt-2 md:mt-5">We have gain our consumer trust so try our full</p>
            </div>
            <div className="order-first md:order-last object-fill w-full md:h-full">
              <Image
                src={pizza}
                alt='burger'                
                className='lg:p-8 md:p-5 p-2 w-full h-full'
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-1 md:grid-cols-2  items-center text-center md:text-right h-full">
            <div>
              <h3 className="text-4xl md:text-5xl font-semibold">Find out the best food</h3>
              <p className="text-xl mt-2 md:mt-5">We have gain our consumer trust so try our full</p>
            </div>
            <div className="order-first md:order-last object-fill md:h-full">
              <Image
                src={pasta}
                alt='burger'
                className='lg:p-8 md:p-5 p-2 md:mx-auto md:w-11/12 md:h-full'
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-1 h-full md:grid-cols-2 items-center text-center md:text-right h-full">
            <div>
              <h3 className="text-4xl md:text-5xl font-semibold">Find out the best food</h3>
              <p className="text-xl mt-2 md:mt-5">We have gain our consumer trust so try our full</p>
            </div>
            <div className="order-first md:order-last object-fill md:h-full">
              <Image
                src={gril}
                alt='burger'
                className='lg:p-8 md:p-5 p-2 md:mx-auto md:w-10/12 md:h-full'
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
