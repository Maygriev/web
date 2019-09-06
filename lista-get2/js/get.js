var urlGET = "https://tads-kitchen.herokuapp.com/posts";

$("#AtualizaLista").on("click", function(){
  atualizaDados();
});

function atualizaDados() {
  $.get(
    urlGET,
    function(data) {
      preencheLista(data);
    }
  );
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

  final = "<div class='d-flex w-100 justify-content-between'>\n<h5 class='mb-1'>" + data.title + "</h5>\n";
  final += "<small>" + data.time + "</small>";
  final += "</div>\n<p class='mb-1'>" + data.text + "</p>\n";
  final += "<small>" + data.author + "</small>";

  ancora.innerHTML = final;

  return ancora;
}
