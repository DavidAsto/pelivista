import React from "react";
import { useEffect, useState } from "react";
import usePetition from "../../hooks/usePetition"
import { Swiper, SwiperSlide } from "swiper/react";
import './card.css'



// IMPORT SWIPER STYLES

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'


// IMPORT MODULOS DEL SWIPER
import { FreeMode, Navigation } from "swiper/modules";


const Cards = (props) => {

    const data = usePetition(props.url)

    const IMAGEN_URL = "https://image.tmdb.org/t/p/original"

    const [slides, setSlides] = useState(4)

    useEffect(() => {
        const manejarSlide = () => {
            if (window.innerWidth <= 554) {
                setSlides(1);
            } else if (window.innerWidth<= 680){
                setSlides(2);
            }else if (window.innerWidth <= 870) {
                setSlides(3);
            } else {
                setSlides(4);
            }
        };    
        manejarSlide()

        window.addEventListener("resize", manejarSlide);

        return() => {
            window.removeEventListener("resize", manejarSlide)
        }

    }, [])



    return(
        <>
        <div className="main-cards">
            <h2 className="text-4xl my-7 px-12">{props.titulo}</h2>
            <Swiper 
                slidesPerView={slides} 
                spaceBetween={30} 
                freeMode={true} 
                navigation={true}
                loop={true}
                modules={[FreeMode, Navigation]} className="swiper-estrenos">
                    {data.map((item) => (
                        <SwiperSlide key={item.id} className="swiper-cards p-3">
                            <img src={`${IMAGEN_URL + item.poster_path}`} className="img-estrenos" alt="" />
                            <a href="#" className="pt-2 text-lg">{item.title || item.name}</a>
                            <span className="text-lg">{item.release_date || item.first_air_date}</span>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
        </>
    )
}

export default Cards