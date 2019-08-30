var xhr = new XMLHttpRequest();
xhr.open("GET", "var/data.json");

xhr.addEventListener("load", function(){
  var json = JSON.parse(xhr.responseText);
  var tbody = $("tbody")[0];
  for (var i = 0; i < json.length; i++) {
    var tr = createTR(obterObjeto(json[i]));
    tbody.appendChild(tr);
  }
});

$("#update").click(function(){
  var teste = $("tbody")[0];
  clearTable(teste);
  xhr.open("GET", "var/data.json");
  xhr.send();
  event.preventDefault();
});

function obterObjeto(objeto){
    var objeto = {
        titulo : objeto.titulo,
        autor : objeto.autor,
        data : objeto.data,
        texto : objeto.texto
      };

    return objeto;
}

function clearTable(tbody) {
  var new_tbody = document.createElement("tbody");
  tbody.parentNode.appendChild(new_tbody);
  tbody.parentNode.removeChild(tbody);
}

function createTR(objeto) {
    var tr = document.createElement("tr");

    tr.appendChild(createTD(objeto.titulo));
    tr.appendChild(createTD(objeto.autor));
    tr.appendChild(createTD(objeto.texto));
    tr.appendChild(createTD(objeto.data));

    return tr;
}

function createTD(conteudo) {
  var td = document.createElement("td");
  td.textContent = conteudo;
  return td;
}
