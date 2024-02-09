import React, { useEffect, useState } from "react";
import axios from "axios";
import './banner.css'

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
        <div className="main mb-4 h-max flex flex-wrap justify-center my-9"> 
            {datos.map(({id, title,poster_path}) => (
                <div key={id} className="p-5">
                    <img className="img-popular" height={570} width={380} src={`${IMAGEN_URL + poster_path}`} alt="" />
                    <p className="py-2"><span className="text-xl">{title}</span></p>
                </div>
            ))}  
        </div>

        </>
    )
}


export default Banner

