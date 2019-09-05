var urlGET = "https://tads-kitchen.herokuapp.com/posts";

$("#AtualizaLista").on("click", function(){
  checaDados();
});


function checaDados() {
  $.get(
    urlGET,
    function(data) {
      console.log(data);
    }
  );
}
