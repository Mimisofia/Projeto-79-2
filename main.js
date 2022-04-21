menuListArray = ["Pizza Vegetariana",//adicionar mais itens
                  "Pizza de Frango" ,   
                  "Pizza Portuguesa",    
                  "Pizza de Quatro Queijos",
                  "Pizza de Calabresa",
                  "Pizza Extravaganza"];

function getMenu(){
var htmldata = "";
menuListArray.sort();
for(var i=0;i<menuListArray.length;i++){
    htmldata=htmldata + menuListArray[i] + '<br>';
  }
  document.getElementById("displayMenu").innerHTML = htmldata;

//Completar o código
}

function addItem(){
var htmldata;
var imgtags= '<img id="im1"  src="/pizzaImg.png"/>'
var item=document.getElementById("addItem").value;
menuListArray.sort();
htmldata=""
for(var i=0;i<menuListArray.length;i++){
    htmldata=htmldata+imgtags+ menuListArray[i]+ '<br>';
}
document.getElementById("displayAddedMenu").innerHTML = htmldata;
//Completar o código

}

function addTop(){
    var item=document.getElementById("addItem").value;
    menuListArray.push(item);
    addItem();
//Completar o código
}