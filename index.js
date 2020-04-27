const promiseExample = require("./promise");
const { callbackExample, raiz } = require("./callback");

const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.status(200).send("Apresentação do seminário de aplicações distribuídas");
});

app.get("/callback-raiz/:numero", function (req, res) {
  const { numero } = req.params;
  const resultado = callbackExample(raiz, numero);
  res
    .status(200)
    .json({ title: "Cálculo de raiz quadrada com callback", resultado });
});

app.get("/raiz/:numero", async function (req, res) {
  try {
    const { numero } = req.params;
    const { resultado } = await promiseExample(numero);
    res
      .status(200)
      .json({ title: "Cálculo de raiz quadrada com promise", resultado });
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
