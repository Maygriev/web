var ultID = 1;
var urlGET = "https://tads-kitchen.herokuapp.com/byid/";
var urlPOST = "https://tads-kitchen.herokuapp.com/cookers";
var meuTeste = setInterval(checaDados, 5000);

$("#InsereElemento").on("click", function(){
  adicionaCozinheiro();
});

$("#AtualizaLista").on("click", function(){
  atualizaDados();
});

function adicionaCozinheiro(){
  var nomeCozinheiro = $("#cookName")[0].value;
  var obj = JSON.stringify({name : nomeCozinheiro});
  $.post(
    urlPOST,
    obj
  );
  $("#cookName")[0].value = "";
  checaDados();
}

function zeraNotify() {
  var zerador = [];
  atualizaNotify(zerador);
}

function atualizaNotify(data) {
  var novoValor = data.length;
  $("#notify")[0].textContent = novoValor;
}

function checaDados() {
  $.get(
    (urlGET+ultID),
    function(data) {
      atualizaNotify(data);
    }
  );
}

function atualizaDados() {
  $.get(
    (urlGET+ultID),
    function(data) {
      preencherLista(data);
      ultID += data.length;
      zeraNotify();
    }
  );
}

function criarLI(conteudo, classe) {
  var li = document.createElement("li");
  li.textContent = "ID: " + conteudo.id + " - Nome: " + conteudo.name;
  li.classList.add(classe);
  return li;
}

function preencherLista(array) {
  for (var i = 0; i < array.length; i++) {
    var obj = criarLI(array[i], "list-group-item");
    $("#lista")[0].prepend(obj);
  }
}
