var ultID = 1;
var urlGET = "https://tads-kitchen.herokuapp.com/byid/";
var urlPOST = "https://tads-kitchen.herokuapp.com/cookers";
var meuTeste = setInterval(checaDados, 5000);

checaDados();

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

function checaDados() {
  $.get(
    (urlGET+ultID),
    function(data) {
      atualizaNotify(data);
    }
  );
  checaDados();
}

function atualizaNotify(data) {
  var novoValor = data.length;
  $("#notify")[0].textContent = novoValor;
}

function atualizaDados() {
  $.get(
    (urlGET+ultID),
    function(data) {
      populaUL(data);
      ultID += data.length;
    }
  );
}

function criarLI(conteudo, classe) {
  var li = document.createElement("li");
  li.textContent = "ID: " + conteudo.id + " - Nome: " + conteudo.name;
  li.classList.add(classe);
  return li;
}

function populaUL(array) {
  for (var i = 0; i < array.length; i++) {
    var obj = criarLI(array[i], "list-group-item");
    $("#lista").prepend(obj);
  }
}
