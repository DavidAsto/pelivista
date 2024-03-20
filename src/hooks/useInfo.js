import axios from "axios";
import { useEffect, useState } from "react";

const useInfo = (url) => {

    const API_URL = import.meta.env.VITE_API_URL

    const autenticacion = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YTZmZDJhMWY2MzEyMjFlYmQ4ZDE5YWIxOGNkNGI1ZCIsInN1YiI6IjY1YzE4NDBjYTA2NjQ1MDE3YTVkOTU4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.busPwch7DeZKYmfROpY8jMOn16liVqrdNXcjP0H_Jqk'
    const options = {
        headers: {
        Accept: 'aplication/json',
        Authorization: autenticacion
        }
    }

    const [data, setData] = useState([])

    useEffect(() => {
        
        axios.get(`${API_URL}${url}?language=es-ES`, options)
        .then((data) => {
          setData(data.data)
        })
        .catch(() => {
          console.error("peticion fallo");
        })
      }, [])

      return data
} 

export default useInfo;