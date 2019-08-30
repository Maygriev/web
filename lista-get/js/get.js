$(document).ready(function(){
  $.get(
    "https://tads-kitchen.herokuapp.com",
    function(data) {
      populaUL(data);
    }
  );
});

function createLI(conteudo, classe) {
  var li = document.createElement("li");
  li.textContent = "ID: " + conteudo.id + " - Nome: " + conteudo.name;
  li.classList.add(classe);
  return li;
}

function populaUL(array) {
  for (var i = 0; i < array.length; i++) {
    $("ul").append(createLI(array[i], "list-group-item"));
  }
}
