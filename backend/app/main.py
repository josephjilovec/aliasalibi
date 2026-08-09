from uuid import uuid4
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, EmailStr, Field

app = FastAPI(title="Alias & Alibi Service", version="0.1.0")

class IntakeRequest(BaseModel):
    name: str = Field(min_length=2, max_length=120)
    email: EmailStr
    service: str = Field(min_length=2, max_length=120)
    jurisdiction: str = Field(min_length=2, max_length=100)
    objective: str = Field(min_length=10, max_length=1800)
    lawful_purpose: bool

@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok"}

@app.post("/v1/intake", status_code=202)
def create_intake(payload: IntakeRequest) -> dict[str, str]:
    if not payload.lawful_purpose:
        raise HTTPException(status_code=422, detail="Lawful-use attestation is required.")

    # Production implementation: write only lead-level metadata to PostgreSQL,
    # emit an audit event, then route the matter to a secure professional workflow.
    # Sensitive identity or legal documents should be collected later through a
    # purpose-built encrypted channel with scoped access controls.
    return {"request_id": str(uuid4()), "status": "accepted"}
