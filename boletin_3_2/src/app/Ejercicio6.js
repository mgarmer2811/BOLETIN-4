import { useRef, useState } from "react";

export default function ColorSlider() {
    const containerRef = useRef(null);
    const [red, setRed] = useState(100);

    function handleSliderChange(event) {
        const value = event.target.value;
        setRed(value);
        containerRef.current.style.backgroundColor = `rgb(${value}, 100, 100)`;
    }

    return (
        <div>
            <div
                ref={containerRef}
                style={{
                    width: "300px",
                    height: "150px",
                    backgroundColor: `rgb(${red}, 100, 100)`,
                }}
            ></div>
            <input
                type="range"
                min="0"
                max="255"
                value={red}
                onChange={() => {
                    handleSliderChange(event);
                }}
            />
        </div>
    );
}
