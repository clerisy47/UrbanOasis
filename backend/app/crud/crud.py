from app.database.connection import parameters_collection
from app.schemas.schemas import ParametersData
from typing import List

import logging

logging.basicConfig(level=logging.INFO)


async def get_parameters_data() -> List[ParametersData]:
    parameters_data = await parameters_collection.find().to_list(length=None)
    return [ParametersData(**data) for data in parameters_data]


async def find_parameters(lat: float, lon: float):
    return await parameters_collection.find_one({"latitude": lat, "longitude": lon})