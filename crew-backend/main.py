from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
from dotenv import load_dotenv

load_dotenv(os.path.join(os.path.dirname(__file__), '..', '.env.local'))

from crews.hint_generator import HintGeneratorCrew
from crews.problem_generator import ProblemGeneratorCrew
from crews.cs_tutor import CSTutorCrew
from ide_agent import run_ide_agent

app = FastAPI(title="Phoenix CrewAI Backend")

# Allow CORS for local dev and production
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust this in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class HintRequest(BaseModel):
    code: str
    problem_description: str
    language: str
    llm_provider: str = "gemini"

class ProblemRequest(BaseModel):
    topic: str
    difficulty: str
    platform_style: str  # e.g., "LeetCode", "Codeforces"
    llm_provider: str = "gemini"

class CSTutorRequest(BaseModel):
    topic: str
    question: str
    llm_provider: str = "gemini"

@app.post("/api/hint")
async def generate_hint(req: HintRequest):
    try:
        crew = HintGeneratorCrew(req.llm_provider)
        result = crew.run(code=req.code, problem_description=req.problem_description, language=req.language)
        return {"hint": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/problem")
async def generate_problem(req: ProblemRequest):
    try:
        crew = ProblemGeneratorCrew(req.llm_provider)
        result = crew.run(topic=req.topic, difficulty=req.difficulty, platform_style=req.platform_style)
        return {"problem": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/cstutor")
async def generate_tutor_response(req: CSTutorRequest):
    try:
        crew = CSTutorCrew(req.llm_provider)
        result = crew.run(topic=req.topic, question=req.question)
        return {"response": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

class IDEAgentRequest(BaseModel):
    code: str = ""
    language: str = ""
    query: str
    history: list = []
    apiKey: str = None
    llm_provider: str = "gemini"

@app.post("/api/ide-agent")
async def run_ide_agent_endpoint(req: IDEAgentRequest):
    try:
        reply = run_ide_agent(
            code=req.code,
            language=req.language,
            query=req.query,
            history=req.history,
            api_key=req.apiKey,
            provider=req.llm_provider
        )
        return {"reply": reply}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
