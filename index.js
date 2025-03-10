import express from 'express';
import { servicoBuscarFatoPorAno, servicoValidarAno } from './servico/servico.js';

const app = express();

app.get('/', (req, res) => {
  let anoFato = req.query.ano;

  if (servicoValidarAno(anoFato)) {
    
    let fato = servicoBuscarFatoPorAno(anoFato);
  
    res.json({fato_histotorico: fato});
  } else {
    res.status(400).json({erro: "Parâmetro ano inválida!"});
  }
});

app.listen(8080, () => {
  let data = new Date();
  console.log(`Servidor rodando em: ${data}`);
});



