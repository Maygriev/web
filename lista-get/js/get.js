$(document).ready(function(){
  $.get(
    "https://tads-kitchen.herokuapp.com",
    function(data) {
      populaUL(data);
    }
  );
});

function createLI(conteudo) {
  var li = document.createElement("li");
  li.textContent = "ID: " + conteudo.id + " - Nome: " + conteudo.name;
  li.classList.add("list-group-item");
  return li;
}

function populaUL(array) {
  for (var i = 0; i < array.length; i++) {
    $("ul").append(createLI(array[i]));
  }
}
