const adminAuth = (req, res, next) => {
  console.log("Checking admin auth");

  const token = "xyz";
  const isAuthourized = token === "xyz";
  if (!isAuthourized) {
    console.log("You are not authorized")
  }
  else {
    next();
  }
}
const userAuth = (req, res, next) => {

  const token = "xyzabc";
  const isAuthourized = token === "xyzabc";
  if (!isAuthourized) {
    console.log("You are not authorized")
  }
  else {
    next();
  }
}

module.exports = {
  adminAuth,
  userAuth
}