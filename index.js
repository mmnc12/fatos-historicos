const express = require('express');
const app = express();
const servico = require('./servico/servico');



app.get('/', (req, res) => {
  let anoFato = req.query.ano;

  if (servico.servicoValidarAno(anoFato)) {
    
    let fato = servico.servicoBuscarFatoPorAno(anoFato);
  
    res.json({fato_histotorico: fato});
  } else {
    res.status(400).json({erro: "Parâmetro ano inválida!"});
  }
});

app.listen(8080, () => {
  let data = new Date();
  console.log(`Servidor rodando em: ${data}`);
});



