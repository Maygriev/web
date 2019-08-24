var xhr = new XMLHttpRequest();
xhr.open("GET", "var/data.json");
xhr.addEventListener("load", function(){
  var json = JSON.parse(xhr.responseText);
  for (var i = 0; i < json.length; i++) {
    console.log(json[i].title);
  }
});
xhr.send();
