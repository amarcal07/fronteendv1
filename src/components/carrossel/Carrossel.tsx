// Importando os Componentes React Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Importando os estilos do Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Importando seu CSS
import "./Carrossel.css";

// Importanto Componentes do Swiper
import { Autoplay, Pagination, Navigation } from "swiper";

function Carrossel() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={50}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >

                <SwiperSlide>
                    <img src="https://imgur.com/BYqnHSTl.png" alt="Imagem" referrerPolicy="no-referrer" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://imgur.com/5PCBDdf.png" alt="Imagem" referrerPolicy="no-referrer" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://imgur.com/a7cu6sj.png" alt="Imagem" referrerPolicy="no-referrer" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://imgur.com/eXVk0MR.png" alt="Imagem" referrerPolicy="no-referrer" />
                </SwiperSlide>

            </Swiper>
        </>
    )
}

export default Carrossel