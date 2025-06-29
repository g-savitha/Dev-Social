const express = require('express');

const app = express();


app.get("/user", (req, res) => {
  res.send({ firstName: "Savitha", lastName: "Gollamudi" })
})
app.post("/user", (req, res) => {
  res.send("User created Succesfully");
})
app.put("/user", (req, res) => {
  res.send("User Updated Succesfully");
})
app.patch("/user", (req, res) => {
  res.send("Portion of a user got updated succesfully");
})
app.delete("/user", (req, res) => {
  res.send("User has been deleted Succesfully");
})
app.use("/test", (req, res) => {
  res.send("Hello from Server")
})




app.listen(7777, () => {
  console.log('Server is listening on port 3000');

});