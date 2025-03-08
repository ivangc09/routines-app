from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import random

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Para permitir todos los orígenes
    allow_credentials=True,
    allow_methods=["*"],  # Para permitir todos los métodos
    allow_headers=["*"],  # Para permitir todos los encabezados
)

class RoutineRequest(BaseModel):
    objective: str
    level: str
    days_per_week: int
    equipment: List[str]

class Excercise(BaseModel):
    name:str
    muscle_group:List[str]
    level:str
    equipment:Optional[List[str]] = None

excercises_db = [
    Excercise(name="Squat", muscle_group=["Quadricep", "Gluteus"], level="Beginner", equipment=None),
    Excercise(name="Deadlift", muscle_group=["Hamstring", "Gluteus"], level="Intermediate", equipment=["barbell"]),
    Excercise(name="Bench Press", muscle_group=["Pectoral", "Tricep"], level="Beginner", equipment=["dumbells", "barbell"]),
]

@app.post("/generate-routine")
def generate_routine(routine_request: RoutineRequest):
    routine = {}
    for day in range(1, routine_request.days_per_week + 1):
        filtered_exercises = [
            e for e in excercises_db if e.level == routine_request.level or e.level == "Begginer"
        ]
        routine[f"Day {day}"] = random.sample(filtered_exercises, min(3, len(filtered_exercises)))
    return {"routine": routine}

@app.get("/excercises")
def get_excercises():
    return excercises_db

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, port=8000)