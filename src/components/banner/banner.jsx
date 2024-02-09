import React, { useEffect, useState } from "react";
import axios from "axios";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './banner.css';

//IMPORTAMOS LOS MODULOS PARA USAR SWIPER JS

import {Navigation} from 'swiper/modules';
import { Pagination } from "swiper/modules";


const Banner = () => { 

    const API_URL = import.meta.env.VITE_API_URL
    const IMAGEN_URL = "https://image.tmdb.org/t/p/original"

    const autenticacion = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YTZmZDJhMWY2MzEyMjFlYmQ4ZDE5YWIxOGNkNGI1ZCIsInN1YiI6IjY1YzE4NDBjYTA2NjQ1MDE3YTVkOTU4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.busPwch7DeZKYmfROpY8jMOn16liVqrdNXcjP0H_Jqk'
    const options = {
        headers: {
        Accept: 'aplication/json',
        Authorization: autenticacion
        }
    }

    const [datos, setDatos] = useState([])

    //PEDIMOS DATOS DE LA API (FALTA OPTIMIZAR)
    useEffect(() => {
        axios.get(`${API_URL}movie/popular?language=es-ES&page=1`, options)
        .then((data) => {
          setDatos(data.data.results)
        })
        .catch(() => {
          console.error("peticion fallo");
        })
      }, [])
    
    

    return(
        <>
        <Swiper navigation={true} pagination={true} modules={[Navigation, Pagination]}>
            {datos.map(({id, poster_path}) => (
                <SwiperSlide key={id}>
                    <img className="img-popular brightness-50" src={`${IMAGEN_URL + poster_path}`} alt="" />
                </SwiperSlide>
            ))}
        </Swiper>

        </>
    )
}


export default Banner

