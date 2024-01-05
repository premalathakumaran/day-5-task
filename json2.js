//2..For the given JSON iterate over all for loops (for, for in, for of, for Each)

var json = [{
    "id" : "prema", 
    "deg": "B.E",
    "task" : "zen portal task",
    "mail": "prema@gmail.com"
}];

//for loop
for(var i = 0; i < json.length; i++) {
    var obj = json[i];

    console.log(obj.id);
    console.log(obj.deg);
    console.log(obj.task);
    console.log(obj.mail);

}
//for Each
json.forEach(function(obj) { 
    console.log(obj.deg);
 });

//for In
for (var key in json) {
if (json.hasOwnProperty(key)) {
  console.log(json[key].id);
  console.log(json[key].deg);
 
}
}
//for Of
let text = "";
for (let x of json[key].id) {
 text += x; 
}
 console.log(text);
