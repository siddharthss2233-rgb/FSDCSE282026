const root = document.getElementById("container");
const button = document.getElementById("btn");
console.log(root);
console.log(button);

async function getData() {
  //alert("hii");
  const serverData = await fetch("https://fakestoreapi.com/products");
const jsondata=await(serverData.json());
root.innerHTML='<h2 style=color:red>$(jso)
  //console.log(jsondata[0].title); 
}
button.addEventListener("click", getData);
