import json
import asyncio
from database.connection import air_pollution_collection, shutdown_db_client

async def load_json():
    with open("../data/air_pollution.json", "r") as f:
        data = json.load(f)

    if isinstance(data, list):
        result = await air_pollution_collection.insert_many(data)
        print(f"Inserted {len(result.inserted_ids)} documents.")
    elif isinstance(data, dict):
        result = await air_pollution_collection.insert_one(data)
        print(f"Inserted one document with id {result.inserted_id}")
    else:
        print("Unsupported JSON format")

    await shutdown_db_client()

if __name__ == "__main__":
    asyncio.run(load_json())
