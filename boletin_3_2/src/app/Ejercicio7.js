import { useState, useRef } from "react";

const TextEditor = () => {
    const [text, setText] = useState("");
    const historyRef = useRef([]);

    function handleChange(event) {
        const newValue = event.target.value;
        historyRef.current.push(text);
        setText(newValue);
    }

    function handleUndo() {
        const previousValue = historyRef.current.pop();
        if (previousValue !== undefined) {
            setText(previousValue);
        }
    }

    return (
        <div>
            <textarea
                value={text}
                onChange={() => {
                    handleChange(event);
                }}
            />
            <button onClick={handleUndo}>Deshacer</button>
        </div>
    );
};

export default TextEditor;
