import { useRef } from "react";

export default function Ejercicio2() {
    return (
        <div>
            <CounterRef />
        </div>
    );
}

function CounterRef() {
    const counterRef = useRef(0);

    function handleConsole() {
        counterRef.current += 1;
        console.log("El valor del contador es: " + counterRef.current);
    }

    function handleAlert() {
        alert("El valor del contador es: " + counterRef.current);
    }

    return (
        <div>
            <button onClick={handleConsole}>Incr.Mostrar Consola</button>
            <button onClick={handleAlert}>Mostrar Alert</button>
        </div>
    );
}
