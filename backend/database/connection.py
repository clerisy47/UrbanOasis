from motor.motor_asyncio import AsyncIOMotorClient
import urllib.parse

username = urllib.parse.quote_plus("clerisy47")
password = urllib.parse.quote_plus("poop123")
MONGO_URL = f"mongodb+srv://{username}:{password}@cluster0.egdhzrd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

client = AsyncIOMotorClient(MONGO_URL)
db = client.UrbanOasis

air_pollution_collection = db.air_pollution

async def shutdown_db_client():
    client.close()
