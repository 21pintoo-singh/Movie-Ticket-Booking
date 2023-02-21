const express = require("express");
var bodyParser = require("body-parser");
const mongoose  = require("mongoose");
mongoose.set('strictQuery', false);
const route = require("./src/Route/route.js");
const app = express();


app.use(bodyParser.json()); // tells the system that you want json to be used



// mongoDb connection
mongoose
  .connect(
    "mongodb+srv://21pintoo-singh:S0Uw8LhNlYRyHfiq@cluster1.k5nsu.mongodb.net/pintoo",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("MongoDb connected"))
  .catch((err) => console.log(err));

// Initial route
app.use("/", route);


// port
app.listen(process.env.PORT || 3000, function () {
  console.log("Express app running on port " + (process.env.PORT || 3000));
});
