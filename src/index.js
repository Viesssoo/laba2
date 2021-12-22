const express = require("express");
const app = express();
const bodyParser = require("body-parser");
//зависимости
var arr = []; //создание массива

app.use(bodyParser.text());
//текстовый формат
app.get("/", (req, res) => res.send("отправьте запрос"));

app.get("/list", function (req, res) {
  res.send(arr.toString());
});
app.post("/create", function (req, res) {
  arr.push(req.body); //добавление в массив
  console.log(req.body); //вывод тела
  res.send("ok");
});
app.listen();