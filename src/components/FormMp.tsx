
import React from "react";
import { donate } from "@/app/api/donate";

function FormMp() {
    return (
        <form
            action={donate}
            className="w-full max-w-96 bg-[#ccc] p-4 border text-black flex flex-col m-auto"
        >
            <label htmlFor="monto">Ingresar Monto</label>
            <input type="number" placeholder="Ingresar monto" name="monto" value={1000}/>
            
            <label htmlFor="mensaje">Ingresa un mensaje</label>
            <textarea name="mensaje" />

            <button type="submit" className="bg-blue-500 py-3 rounded-xl mt-4">Enviar</button>
        </form>
    );
}

export default FormMp;
