var xhr = new XMLHttpRequest();
var bt = document.querySelector("#update");
xhr.open("GET", "var/data.json");

xhr.addEventListener("load", function(){
  var json = JSON.parse(xhr.responseText);
  for (var i = 0; i < json.length; i++) {
    console.log(json[i].title);
  }
});

xhr.send();

bt.addEventListener("click", function(event){
  event.preventDefault();
  var tbody = document.querySelector("tbody");
  console.log(tbody);
  xhr.send();

})

function obterObjeto(objeto){
    var objeto = {
        titulo : objeto.titulo,
        autor : objeto.autor,
        data : objeto.data,
        texto : objeto.texto
      };

    return objeto;
}
