const fatoHistorico = require('../dados/fatos')

function servicoBuscarFatoPorAno(ano) {
  return fatoHistorico.fatosHistoricos.filter(fato => fato.ano == ano);
}

function servicoValidarAno(ano) {
  return (ano >= 1921 && ano <= 2020) ? true : false;
}



exports.servicoBuscarFatoPorAno = servicoBuscarFatoPorAno;
exports.servicoValidarAno = servicoValidarAno;