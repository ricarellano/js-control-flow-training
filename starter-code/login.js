console.log("login.js loaded");
var userLogin = {
  userName: "ricardo",
  password: "match"
};

var pass = prompt("Enter password for user" + " " + userLogin.userName );

if (userLogin.password == pass) {
   alert("correct password!");
}
else {
  prompt("Enter their password again");
}
