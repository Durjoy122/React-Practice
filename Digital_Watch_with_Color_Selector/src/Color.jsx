import { useEffect, useState } from "react";
import './color.css';

function Color({ color }) {
    const [time, setTime] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(interval); 
    }, []);

    return (
        <h1 
            className="styled-heading" 
            style={{ color: color }} // Not including the color property here because because dynamically setting it in React.
        >
            {time}
        </h1>
    );
}

export default Color;
