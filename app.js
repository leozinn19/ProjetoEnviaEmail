import express from "express";
import nodemailer from "nodemailer";

const app = express();
const port = 3000;

app.get("/send-email", async (req, res) => {
  var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "218cedba8e8a68",
      pass: "27ca1a74ad3b17",
    },
  });

  var message = {
    from: "noreplay@celke.com.br",
    to: "leonardo@celke.com.br",
    subject: "Consegui mandar o email!!",
    text: "Boa Léoo!!",
    html: "<p>HTML version of the message</p>",
  };

  transport.sendMail(message, function (err) {
    if (err)
      return res
        .status(400)
        .json({ mensagem: "Erro: email não enviado com sucesso" });
  });
  return res.status(200).json({ message: "E-mail enviado com sucesso!" });
});

app.get("/", (req, res) => {
  res.send("Qualé fi");
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
