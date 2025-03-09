export default function Routine({ routineData }) {
    return (
        <div>
            {routineData ? (
                Object.keys(routineData.routine).map((day) => {
                    return (
                        <div key={day} className="bg-gray-200 m-[1rem] max-h-80">
                            <h3 className="text-center font-bold pt-2">{day}</h3>
                            <ul className="flex flex-wrap justify-between gap-3 p-5">
                                {routineData.routine[day].map((exercise, index) => (
                                    <li key={index} className="bg-[#ebb72d] rounded-2xl w-sm h-35">
                                        <p className="text-center pt-2"><strong>{exercise.name}</strong></p>
                                        <p className="pl-5 pt-5"><strong>Muscle Group:</strong> {exercise.muscle_group?.join(", ") || "Unknown"}</p>
                                        <p className="pl-5 pt-5"><strong>Equipment:</strong> {exercise.equipment?.join(", ") || "None"}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    );
                })
            ) : (
                <p>No Routine Found, Try Again</p>
            )}
        </div>
    );
}
