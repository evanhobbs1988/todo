//per item js code
// <li><input type="checkbox"/><span>write something</span></li>
//avoid global var
// make functions reusable


function addNewItem(List, itemText){
	var listItem = document.createElement("li");
	listItem.innerText = "hello";

	list.appendChild(listItem);
}
var inItemText = document.getElementById("inItemText")
inItemText.focus();

var btnNew = document.getElementById("btnAdd");
btnNew.onclick = function(){ 

	var itemText = inItemText.value;

	if(!itemText || itemText == "") {
		return false;
	}

	addNewItem(document.getElementById("todolist"), itemText);
};
