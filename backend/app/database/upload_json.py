import json
import asyncio
from schemas.schemas import ParametersData
from database.connection import parameters_collection, shutdown_db_client

TYPE = "air_pollution"

async def load_json():
    with open(f"../data/{TYPE}.json", "r") as f:
        raw_data = json.load(f)

    docs = []
    for item in raw_data:
        coords = item.get("Coordinates")
        val = item.get("Value")

        if not coords or val is None:
            print(f"Skipping invalid record: {item}")
            continue

        try:
            lat_str, lon_str = coords.split(",")
            doc = ParametersData(
                type=TYPE,
                latitude=float(lat_str.strip()),
                longitude=float(lon_str.strip()),
                value=float(val)
            ).model_dump()
            docs.append(doc)
        except Exception as e:
            print(f"Error processing record {item}: {e}")

    if docs:
        result = await parameters_collection.insert_many(docs)
        print(f"Inserted {len(result.inserted_ids)} documents.")
    else:
        print("No valid documents to insert.")

    await shutdown_db_client()

if __name__ == "__main__":
    asyncio.run(load_json())
