require("dotenv").config();

const dev = {
    app: {
        port: process.env.PORT || 4000
    },
    db: {
        url: process.env.DB_URL || "mongodb://localhost:27017/REST_API_USERS_DEMO"
    }
}

module.exports = dev;