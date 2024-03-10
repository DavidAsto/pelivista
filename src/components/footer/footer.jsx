import React from "react";
import './footer.css'



const Footer = () => {
    return(
        <>
        <footer className="main-footer w-full  mt-6 flex flex-wrap justify-around items-center bg-blue-700">
            <div className="p-4">
                <h2 className="flex text-5xl">Pelivista</h2>
            </div>

            <div className="flex gap-12 flex-wrap justify-center px-6 pt-8">
                <div className="flex flex-col">
                    <h3>Informacion</h3>
                    <a href="#">nosotros</a>
                    <a href="#">contacto</a>
                    <a href="#">atencion</a>
                </div>

                <div className="flex flex-col">
                    <h3>Ayuda</h3>
                    <a href="#">preguntas frecuentes</a>
                    <a href="#">libro de reclamaciones</a>
                </div>

                <div className="flex flex-col">
                    <h3>Legal</h3>
                    <a href="#">politicas de privacidad</a>
                    <a href="#">politicas de datos personales</a>
                    <a href="#">terminos de uso</a>
                    <a href="#">terminos y condiciones</a>
                    <a href="#">bases legales</a>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer