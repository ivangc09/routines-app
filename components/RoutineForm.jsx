"use client";

import { useState } from "react";
import Routine from "./Routine";

export default function RoutineForm() {
    const [formData, setFormData] = useState({
        objetive: "",
        level: "",
        days_per_week: "",
        equipment: ""
    });

    const [routine, setRoutine] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleEquipmentChange = (e) => {
        const equipmentArray = e.target.value.split(",").map((item) => item.trim());
        setFormData({ ...formData, equipment: equipmentArray });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); 
        setError(null); 

        try {
            const response = await fetch("https://exercises-api-6vyn.onrender.com/generate-routine", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const data = await response.json();
            console.log("Routine Generated:", data);
            setRoutine(data.routine);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };
    
    return (
        <div className="m-10" id="routine-form">
            <div className="bg-[#ebb72d]">
                <h1 className="text-2xl font-semibold p-3">Customize your routine</h1>
            </div>
            <form className="flex justify-around items-center border-2 border-gray-400 gap-5 pt-4 h-[100px]" onSubmit={handleSubmit}>
                <label className="flex flex-col gap-3 ">
                    <p>Objective:</p>
                    <input className="border-1 border-black" type="text" name="objective" value={formData.objective || ""} onChange={handleChange} required />
                </label>

                <label className="flex flex-col gap-3">
                    Level:
                    <select className="border-1 border-black" name="level" value={formData.level || ""} onChange={handleChange} required>
                        <option value="">Select</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                    </select>
                </label>
    
                <label className="flex flex-col gap-3">
                    Days per Week:
                    <input className="border-1 border-black" type="number" name="days_per_week" value={formData.days_per_week || ""} onChange={handleChange} min="1" max="7" required />
                </label>
    
                <label className="flex flex-col gap-3">
                    Equipment (comma separated):
                    <input className="border-1 border-black" type="text" name="equipment" onChange={handleEquipmentChange} placeholder="Dumbbells, Mat, Resistance Bands" />
                </label>
    
                <button className="bg-black text-white rounded-full h-[50px] p-3 cursor-pointer" type="submit">Generate Routine</button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>Error: {error}</p>}
            {routine && !loading && <Routine routineData={{ routine }} />}
        </div>

    );
}