import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useInfo from "../../hooks/useInfo";
import './info.css'

const IMAGEN_URL = "https://image.tmdb.org/t/p/original"

const InfoPage = (props) => {

    const params = useParams()
    
    const data = useInfo(`${props.url}${params.id}`)  //HACER OTRO HOOK EN USEPETITION EL RESULTADO SALE CON(DATA.DATA.RESULT)
                                                   //EN USEINFO LA INFORMACION SALE CON (DATA.DATA) 
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return(
        <>
        
        <div className="main-info flex flex-row justify-center flex-wrap my-4">
            <div className="izquierda-info p-3 h-auto flex items-center justify-center">
                <img src={`${IMAGEN_URL + data.backdrop_path}`} className="img-info mb-7" alt="" />
            
            </div>

            <div className="derecha-info px-6 h-auto flex justify-start items-center">
                <div className="mb-12">
                    <h2 className="text-4xl">{data.title || data.name}<span className="px-3 text-2xl">({data.release_date || data.first_air_date})</span></h2>
                    <hr className="mb-11 mt-1"/>
                    <span className="text-3xl">Sinopsis</span>
                    <p className="mt-3 text-xl">{data.overview}</p>
                </div>
            </div>
        </div>

        </>
    )
}


export default InfoPage;