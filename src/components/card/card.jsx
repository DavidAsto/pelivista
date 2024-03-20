import React from "react";
import { useEffect, useState } from "react";
import usePetition from "../../hooks/usePetition"
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
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
                            <Link to={`${props.info}/${item.id}`}><img src={`${IMAGEN_URL + item.poster_path}`} className="img-estrenos" alt="" /></Link>
                            <Link className="pt-2 text-lg" to={`${props.info}/${item.id}`}>{item.title || item.name}</Link>
                            <span className="text-lg">{item.release_date || item.first_air_date}</span>
                        </SwiperSlide>
                    ))}   {/**PARA PODER IR A VER LA INFORMACION DE CADA CARD DE DIFERENTES ENDPOINTS TENGO QUE PASARLE LA RUTA ANTES 
                        QUE EL ID Y TENGO QUE PASARLO COMO UN PROP, Y MODIFICAR EL PROP DEPENDIENDO DEL COMPONENTE EN ESTE CASO
                        SERIE O PELICULAS (EJEMPLO EN LA LINEA 66 Y 67) **/}
            </Swiper>
        </div>
        </>
    )
}

export default Cards