var urlGET = "https://tads-kitchen.herokuapp.com/posts";
var test = setInterval(temporizador, 1000);

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
  moment.locale("pt-br");
  var hora = $(".hora");
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
  for (var i = 0; i < data.length; i++) {
    var item = criaItem(data[i]);
    lista.prepend(item);
  }
}

function criaItem(data) {
  var ancora = document.createElement("a");
  ancora.classList.add("list-group-item");
  ancora.classList.add("list-group-item-action")
  var final;

  final = "<div class='d-flex w-100 justify-content-between'>";
  final += "<h5 class='mb-1'>" + data.title + "</h5>";
  final += "<small class = 'hora'>" + moment(data.time, "DDMMYYYY").fromNow() + "</small></div>";
  final += "<p class='mb-1'>" + data.text + "</p>";
  final += "<small>" + data.author + "</small>";

  ancora.innerHTML = final;

  return ancora;
}
