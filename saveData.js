const fs = require("fs");

const url = "http://127.0.0.1:8000/api/parameters/";

fetch(url)
    .then((res) => res.json())
    .then((data) => {
        // Save the fetched data to a JSON file
        fs.writeFileSync("data.json", JSON.stringify(data, null, 2));
        console.log("Data saved to data.json");
    })
    .catch((err) => console.error("Error fetching data:", err));
