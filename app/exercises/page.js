"use client";

import NavBar from "@/components/NavBar";
import { useEffect, useState } from "react";

export default function Exercises() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://127.0.0.1:8000/excercises");
            const result = await response.json();
            setData(result);
        };
        fetchData();
    }, []);

    return (
        <div>
            <NavBar />
            <h1>Exercises</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}
