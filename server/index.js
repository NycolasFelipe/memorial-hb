import app from "./src/app.js";

const port = process.env.PORT || 3000; //identifica porta do servidor de produção

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
