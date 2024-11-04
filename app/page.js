"use client";
import { useRouter } from "next/navigation";
import { persona, codigo } from "./funciones/datos.js";
// Donar Libros
export default function Home() {
  const router = useRouter();
  const handleGuardarClick = () => {
    router.push("/formulario/qr");
  }

return (
  <div >
    <h1 className="titulo">Donar Libros</h1>
    
    <div className="cuestionario">
      <h1 className="titulo1">Informacion del Usuario</h1>
      <div>{persona()}</div>
    </div>

    <div className="cuestionario">
      <h1 className="titulo1">Informacion del Libro</h1>
      <div>{codigo()}</div>
    </div>

    <div className="footer">
        <button className="btn">Atrás</button>
        <button className="btn" onClick={handleGuardarClick}>
          Guardar Información
        </button>
      </div>
  </div>
  )
}

