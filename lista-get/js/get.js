var ultID = 1;
var urlBase = "https://tads-kitchen.herokuapp.com/byid/";
var myVar = setInterval(atualizaDados, 5000);

function atualizaDados() {
  $.get(
    (urlBase+ultID),
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
    $("ul").append(obj);
  }
}
