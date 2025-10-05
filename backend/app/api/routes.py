from fastapi import APIRouter, HTTPException
from typing import List
from app.schemas.schemas import ParametersData
from app.crud.crud import get_parameters_data

router = APIRouter()

@router.get("/parameters/", response_model=List[ParametersData])
async def get_parameters():
    parameters = await get_parameters_data()
    if not parameters:
        raise HTTPException(status_code=404, detail="No parameters data found.")
    return parameters