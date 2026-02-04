// server start kora
//database connect kora

const app = require("./src/app");
const mongoose = require("mongoose");

function connectToDb() {
  mongoose.connect(MONGO_URI).then(() => console.log("DB connected"));
}

connectToDb();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
