var urlGET = "https://tads-kitchen.herokuapp.com/posts";
var test = setInterval(temporizador, 1000);
moment.locale("pt-br");

$("#AtualizaLista").on("click", function(){
  esvaziaLista();
  atualizaDados();
});

function temporizador() {
  $.get(
    urlGET,
    function(data) {
      atualizaHora(data);
    }
  );
}

function atualizaHora(data) {
  var hora = $(".hora");
  var teste = "";
  for (var i = 0; i < hora.length; i++) {
    var j = hora.length - i - 1;
    hora[j].innerHTML = moment(data[i].time, "DDMMYYYY").fromNow();
  }
}

function atualizaDados() {
  $.get(
    urlGET,
    function(data) {
      preencheLista(data);
    }
  );
}

function esvaziaLista() {
  $("#lista").empty();
}

function preencheLista(data) {
  var lista = $("#lista")[0];
  data.map(function(dado){
    var item = criaItem(dado);
    lista.innerHTML = item + lista.innerHTML;
  });
}

function criaItem(data) {
  var string = "";
  var dtCreate = moment(data.time, "DDMMYYYY").fromNow();

  string = template(data.title, dtCreate , data.text, data.author);

  return string;
}

function template(title, time, text, author) {
  return `
  <a href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">${title}</h5>
      <small class="text-muted hora">${time}</small>
    </div>
    <p class="mb-1">${text}</p>
    <small class="text-muted">${author}</small>
  </a>`
}
