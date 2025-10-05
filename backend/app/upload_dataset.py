import json
import asyncio
from app.schemas.schemas import ParametersData
from app.database.connection import parameters_collection, shutdown_db_client

TYPE = "education_facilities"

async def load_json():
    with open(f"../data/{TYPE}.json", "r") as f:
        raw_data = json.load(f)

    docs = []
    for item in raw_data:
        coords = item.get("Coordinates")
        lat = item.get("Latitude") or item.get("latitude") or item.get("lat")
        lon = item.get("Longitude") or item.get("longitude") or item.get("lon")
        val = item.get("Value", 1)

        try:
            if coords:
                lat_str, lon_str = coords.split(",")
                lat, lon = float(lat_str.strip()), float(lon_str.strip())
            elif lat is not None and lon is not None:
                lat, lon = float(lat), float(lon)
            else:
                print(f"Skipping invalid record: {item}")
                continue

            doc = ParametersData(
                type=TYPE,
                latitude=lat,
                longitude=lon,
                value=float(val)
            ).dict()   
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
