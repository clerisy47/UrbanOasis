from pydantic import BaseModel, Field


class ParametersData(BaseModel):
    type: str
    latitude: float
    longitude: float
    value: float

    class Config:
        orm_mode = True
