import { useEffect, useState, useRef } from "react";

export default function Ejercicio4() {
    return (
        <div>
            <RenderCounter />
        </div>
    );
}

function RenderCounter() {
    const [forzarRender, setForzarRender] = useState(false);
    const counterRef = useRef(0);

    useEffect(() => {
        counterRef.current += 1;
    }, []);

    useEffect(() => {
        counterRef.current += 1;
    }, [forzarRender]);

    function handleRender() {
        setForzarRender((prevRender) => !prevRender);
    }

    return (
        <div>
            <p>Numero de renderizados: {counterRef.current}</p>
            <button onClick={handleRender}>Renderizar</button>
        </div>
    );
}
