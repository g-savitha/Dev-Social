const express = require('express');
const { adminAuth, userAuth } = require("./middleware/auth")
const app = express();


app.use("/admin", adminAuth);
app.post("/user/login", (req, res) => {
  res.send("user logged in succesfully")

})
app.get("/user/data", userAuth, (req, res) => {
  res.send("User data sent")
});


app.listen(7777, () => {
  console.log('Server is listening on port 7777');

});