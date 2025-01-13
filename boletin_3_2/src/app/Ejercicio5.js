import React, { useState, useRef, useEffect } from "react";

export default function PreviousValue() {
    const [value, setValue] = useState(0);
    const prevValueRef = useRef(0);

    useEffect(() => {
        prevValueRef.current = value;
    }, [value]);

    return (
        <div>
            <h1>Valor Actual: {value}</h1>
            <h2>Valor Previo: {prevValueRef.current}</h2>
            <button onClick={() => setValue(value + 1)}>Incrementar</button>
            <button onClick={() => setValue(value - 1)}>Decrementar</button>
        </div>
    );
}
