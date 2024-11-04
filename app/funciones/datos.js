"use client";
import React, { useState } from 'react';
import formulario from "@/app/formulario/donador.json";
import Libro from "@/app/formulario/libro.json";
import Modal from "./modal.js";
import Duda from "./duda.js";
import { si_ISBN, no_ISBN } from "@/app/funciones/datos _libro.js";

export function persona() {
    const [opcionSeleccionada, setOpcionSeleccionada] = useState('');
    const handleOpcionChange = (e) => {
        setOpcionSeleccionada(e.target.value);
    };  
    const [isModalOpen, setModalOpen] = useState(false); 
    const [hasSeenTerms, setHasSeenTerms] = useState(false); 
    const [isChecked, setChecked] = useState(false); 
    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };
    const handleModalClose = () => {
        setHasSeenTerms(true); // Marca que ha visto los términos
        setModalOpen(false); // Cierra el modal
    };

    return (
        <div>
            {formulario.tes.map((pregunta, i) => (
                <div className='precionar' key={i}>
                    <div className="titulo1">{pregunta.pregunta}</div> {/* Mostrar la pregunta */}
                    <div className='rellenar'>
                        {pregunta.opciones.map((opcion, j) => (
                            <label key={j}>
                                <input
                                    type={pregunta.tipo}
                                    name={pregunta.id}
                                    value={opcion}
                                    checked={opcion === opcionSeleccionada}
                                    onChange={handleOpcionChange}
                                />
                                {opcion}
                            </label>
                        ))}
                    </div>
                </div>
            ))}
            
            {opcionSeleccionada !== 'Si' && opcionSeleccionada !== '' && (
                <div >
                    <div className='rellenar'>
                            <div className='tex'>Correo</div>
                            <input type="email" name="correo" />
                    </div>
                    <div className='rellenar'>
                        <label >
                            <input type="checkbox" checked={isChecked} onChange={(e) => setChecked(e.target.checked)} disabled={!hasSeenTerms}  />
                            <button className="texto-enlace"  onClick={toggleModal} >Terminos y Condiciones</button>
                            <Modal isOpen={isModalOpen} onClose={handleModalClose} />
                        </label>
                    </div>
                </div>
                
            )}
        </div>
    );
}

export function codigo(){
    const [opcionSeleccionada1, setOpcionSeleccionada1] = useState('');
    const [mostrarContenido, setMostrarContenido] = useState(false);
    const [mostrarISBN, setMostrarISBN] = useState(false);
    
    const handleOpcionChange1 = (e) => {
        const seleccion = e.target.value;
        setOpcionSeleccionada1(seleccion);
        setMostrarContenido(false); // Ocultar el contenido anterior
        if (seleccion === 'Si') {
            setMostrarISBN(true); // Muestra el campo ISBN
        } else {
            setMostrarISBN(false); // Oculta el campo ISBN
            setMostrarContenido(true); // Muestra el contenido de no_ISBN
            setOpcionSeleccionada1('');
        }    
    };

    const siguienteClick = () => {
        setMostrarContenido(true); // Muestra el contenido al hacer clic
        setMostrarISBN(false); // Oculta el campo ISBN y el botón
    };


    const [isDudaVisible, setDudaVisible] = useState(false);
    const respuesClick = () => {
        setDudaVisible(true);
    };
    const handleModalClose = () => {
        setDudaVisible(false); // Cierra el modal
    };
  

    return(
        <div>
            {Libro.Codigo.map((pregunta, i) => (
                <div className='precionar' key={i}>
                    <div className="titulo1">
                        <button className="btn_duda" onClick={respuesClick}>?</button>
                        <div>{pregunta.pregunta}</div>
                    </div>
                    <div className='rellenar'>
                        {pregunta.opciones.map((opcion, j) => (
                            <label key={j}>
                                <input
                                    type={pregunta.tipo}
                                    name={pregunta.id}
                                    value={opcion}
                                    checked={opcion === opcionSeleccionada1}
                                    onChange={handleOpcionChange1}
                                />
                                {opcion}
                            </label>
                        ))}
                    </div>
                </div>
            ))}
            {opcionSeleccionada1 === 'Si' && mostrarISBN && (
                <div>
                    <div className='rellenar'>
                        <div className='tex'>ISBN</div>
                        <input type="text" name="codigo" />
                        <button className="btn" onClick={siguienteClick}>Siguiente</button>
                    </div>
                </div>  
            )}
            {mostrarContenido && (
               <div>
                   {opcionSeleccionada1 === 'Si' ? si_ISBN() :  no_ISBN()}
                </div>
            )}
            {isDudaVisible && (
                <div className="rellenar">
                    <Duda isOpen={isDudaVisible} onClose={handleModalClose}/>
                    
                </div>
            )}
        </div>
    );
}
