import express from "express";

const app = express();
const port = 3000;

app.get("/send-email", async (req, res) => {
  try {
    return res.status(200).json({ message: "E-mail enviado com sucesso!!!" });
  } catch (erro) {
    return res.status(500);
  }
});

app.get("/", (req, res) => {
  res.send("Qualé fi");
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
