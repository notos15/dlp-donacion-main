"use client";
import React, { useState } from 'react';
import formulario from "@/app/formulario/donador.json";
import Cuadro from "@/app/funciones/ctexto.js";
import Libro from "@/app/formulario/libro.json";
import Modal from "./modal.js";

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
                                    onChange={handleOpcionChange}
                                />
                                {opcion}
                            </label>
                        ))}
                    </div>
                </div>
            ))}
            
            {opcionSeleccionada !== 'Si' && (
                <div >
                    <div className='rellenar'>
                            <div className='tex'>Correo</div>
                            <input type="email" name="correo" />
                    </div>
                    <div className='rellenar'>
                        <label >
                            <input type="checkbox" checked={isChecked} onChange={(e) => setChecked(e.target.checked)} disabled={!hasSeenTerms}  />
                            <button className="texto-enlace"  onClick={toggleModal} >Terminos y condiciones</button>
                            <Modal isOpen={isModalOpen} onClose={handleModalClose} />
                        </label>
                    </div>
                </div>
                
            )}
        </div>
    );
}

export function libro(){
    const [opcionSeleccionada, setOpcionSeleccionada] = useState('');
    const handleOpcionChange = (e) => {
        setOpcionSeleccionada(e.target.value);
    };
    return(
        <div>
            {Libro.cuadrotx.map((preg,j)=>(
            <div className='rellenar'>
                <div className='tex'>{preg.id}</div>
                <Cuadro dato={preg.gris}></Cuadro>
            </div>
            ))}
            
            {Libro.Codigo.map((pregunta, i) => (
                <div className='precionar' key={i}>
                    <div className="titulo1">{pregunta.pregunta}</div> {/* Mostrar la pregunta */}
                    <div className='rellenar'>
                        {pregunta.opciones.map((opcion, j) => (
                            <label key={j}>
                                <input
                                    type={pregunta.tipo}
                                    name={pregunta.id}
                                    value={opcion}
                                    onChange={handleOpcionChange}
                                />
                                {opcion}
                            </label>
                        ))}
                    </div>
                </div>
            ))}
             {opcionSeleccionada !== 'No' && (
                <div>
                    <div className='rellenar'>
                            <div className='tex'>ISBN</div>
                            <input type="email" name="codigo" />
                    </div>
                    
                </div>
                
            )}
            {Libro.tes.map((pregunta, i) => (
                <div className='precionar' key={i}>
                    <div className="titulo1">{pregunta.pregunta}</div> {/* Mostrar la pregunta */}
                    <div className='rellenar'>
                        <div className='opciones'>
                        {pregunta.opciones.map((opcion, j) => (
                            <label key={j}>
                                <input type={pregunta.tipo} name={pregunta.id} value={opcion} />
                                {opcion}
                            </label>
                        ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
