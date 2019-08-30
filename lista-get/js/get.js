$(document).ready(function(){
  $.get(
    "https://tads-kitchen.herokuapp.com",
    function(data) {
      for (var i = 0; i < data.length; i++) {
        $("ul").append(createLI(data[i]));
      }
    }
  );
});

function createLI(conteudo) {
  var li = document.createElement("li");
  li.textContent = "ID: " + conteudo.id + " - Nome: " + conteudo.name;
  li.classList.add("list-group-item");
  return li;
}
