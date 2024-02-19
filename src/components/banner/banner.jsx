import React, {useEffect, useState } from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './banner.css';
import usePetition from "../../hooks/usePetition";

//IMPORTAMOS LOS MODULOS PARA USAR SWIPER JS

import {Navigation, Pagination} from 'swiper/modules';



const Banner = () => { 

    const IMAGEN_URL = "https://image.tmdb.org/t/p/original"

    const datos = usePetition('movie/popular') // YA ESTA OPTIMIZADO 

      
    return(
        <>
        <Swiper navigation={true} pagination={true} loop={true} 
        modules={[Navigation, Pagination]} className="swiper-banner">
            {datos.map(({id, poster_path}) => (
                <SwiperSlide key={id} className="banner">
                    <img className="img-popular" src={`${IMAGEN_URL + poster_path}`} alt="" />
                </SwiperSlide>
            ))}
        </Swiper>

        </>
    )
}


export default Banner

