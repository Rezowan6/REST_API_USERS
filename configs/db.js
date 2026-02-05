const mongoose = require("mongoose");
const config = require("./config");

const dbURL = config.db.url;

mongoose.connect(dbURL)
.then(() => console.log("MongoDB Atlas is connected ✅"))
.catch((error) => {
    console.error("MongoDB Connection Failed ❌", error.message);
    process.exit(1);
});

