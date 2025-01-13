import { useEffect, useRef } from "react";

export default function Ejercicio1() {
    return (
        <div>
            <AutoFocusInput />
        </div>
    );
}

function AutoFocusInput() {
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="Escribe aquí" />
        </div>
    );
}
