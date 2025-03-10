import fatosHistoricos from "../dados/fatos.js";

function servicoBuscarFatoPorAno(ano) {
  return fatosHistoricos.filter(fato => fato.ano == ano);
}

function servicoValidarAno(ano) {
  return (ano >= 1921 && ano <= 2020) ? true : false;
}

export {servicoBuscarFatoPorAno, servicoValidarAno}