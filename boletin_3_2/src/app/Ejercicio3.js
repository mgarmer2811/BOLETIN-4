import { useState, useEffect, useRef } from "react";

export default function Ejercicio3() {
    return (
        <div>
            <Timer />
        </div>
    );
}

function Timer() {
    const [contador, setContador] = useState(0);
    const timerRef = useRef(null);

    function handleStartTimer() {
        if (timerRef.current !== null) {
            return; // pa no crear otro temporizador
        }

        timerRef.current = setInterval(() => {
            setContador((prevContador) => prevContador + 1);
        }, 1000);
    }

    function handleStopTimer() {
        if (timerRef.current !== null) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
    }

    useEffect(() => {
        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, []);

    return (
        <div>
            <p>Contador(s): {contador}</p>
            <button onClick={handleStartTimer}>Iniciar Temporizador</button>
            <button onClick={handleStopTimer}>Detener Temporizador</button>
        </div>
    );
}
