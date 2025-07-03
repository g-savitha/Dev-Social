const express = require('express');
const app = express();


app.get("/user/data", (req, res) => {
  try {
    throw new Error("Dummy Error");
    res.send("User data sent")
  }
  catch (err) {
    res.status(500).send("Internal Server Error")
  }
});

app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).send("Something went wrong")
  }
})


app.listen(7777, () => {
  console.log('Server is listening on port 7777');

});