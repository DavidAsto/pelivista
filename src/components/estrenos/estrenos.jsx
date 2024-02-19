import React from "react";
import { useEffect, useState } from "react";
import usePetition from "../../hooks/usePetition"
import { Swiper, SwiperSlide } from "swiper/react";
import './estrenos.css'



// IMPORT SWIPER STYLES

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'


// IMPORT MODULOS DEL SWIPER
import { FreeMode, Navigation } from "swiper/modules";


const Estrenos = () => {

    const data = usePetition('movie/upcoming')

    const IMAGEN_URL = "https://image.tmdb.org/t/p/original"

    const [slides, setSlides] = useState(4)

    useEffect(() => {
        const manejarSlide = () => {
            if (window.innerWidth <= 554) {
                setSlides(1);
            } else if (window.innerWidth <= 835) {
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
            <h2 className="text-3xl my-7 px-12 underline">Estrenos: </h2>
            <Swiper 
                slidesPerView={slides} 
                spaceBetween={30} 
                freeMode={true} 
                navigation={true}
                loop={true}
                modules={[FreeMode, Navigation]} className="swiper-estrenos">
                    {data.map(({id, title, poster_path, release_date}) => (
                        <SwiperSlide key={id} className="swiper-cards py-5 mx-2">
                            <img src={`${IMAGEN_URL + poster_path}`} className="img-estrenos" alt="" />
                                <span>{title}</span>
                                <span>{release_date}</span>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
        </>
    )
}

export default Estrenos