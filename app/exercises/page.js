"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

export default function Exercises() {
    const [data, setData] = useState([]);

    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://exercises-api-6vyn.onrender.com/excercises");

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err.message);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <NavBar />
            <h1 className="text-center text-4xl font-bold mt-5">Exercises</h1>
            {data.length > 0 ? (
                <div className="flex flex-wrap justify-center gap-4">
                    {data.map((exercise, index) => (
                        <div key={index} className="bg-gray-100 p-4 w-1/4 m-[1rem]">
                            <p className="text-center"><strong> {exercise.name}</strong></p>
                            <p><strong>Muscle Group:</strong> {exercise.muscle_group.join(", ")}</p>
                            <p><strong>Level:</strong> {exercise.level}</p>
                            <p><strong>Equipment:</strong> {exercise.equipment ? exercise.equipment.join(", ") : "Not required"}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Loading...</p>
            )}

            <Footer/>
        </div>
    );
}
