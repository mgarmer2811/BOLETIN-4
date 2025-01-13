import React, { useRef, useState } from "react";

export default function FormValidator() {
    const inputRef = useRef(null);
    const [error, setError] = useState("");

    function validateEmail() {
        const email = inputRef.current.value;
        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        setError(isValid ? "" : "Por favor, introduce un correo válido.");
    }

    return (
        <div>
            <input
                ref={inputRef}
                type="email"
                placeholder="Introduce tu correo"
                onBlur={validateEmail}
            />
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
}
