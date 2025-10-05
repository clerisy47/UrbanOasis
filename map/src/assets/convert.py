import csv
import json

# Input & output file paths
convertDistrict = 0
name = "district" if convertDistrict else "municipality"
id = "District Name" if convertDistrict else "Municipality_Edited"
csv_file = name + "Data.csv"
json_file = name + "Data.json"

# Read CSV and transform
result = {}

with open(csv_file, mode="r", encoding="utf-8") as f:
    reader = csv.DictReader(f)
    for row in reader:
        # Use Municipality as the key
        name = row[id].replace(" Gaunpalika", "").replace(" Nagarpalika", "").replace(" Municipality", "").replace(" Metropolitan City", "").replace(" Sub-Metropolitan City", "").lower()
        
        # Pick desired fields (customize this as needed)
        result[name] = {
						"District": row["District"],
						"2021 Population": row["2021 Population"],
						"2021 Density": row["2021 Population Density"],
						"2021 Households": row["HH number 2021"],
						"Literacy Rate": row["Literacy_Rate"],
            "Agricultural Percentage": row["Agricultural_Percent"]
        }

# Write JSON
with open(json_file, "w", encoding="utf-8") as f:
    json.dump(result, f, ensure_ascii=False, indent=4)

print("✅ JSON file created:", json_file)