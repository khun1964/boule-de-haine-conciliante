function AjouterLigne(){
	
	var foo=document.getElementById("myTable").insertRow(0);
	var cell1=foo.insertCell(0);
	var cell2=foo.insertCell(1);
	var cell3=foo.insertCell(2);

	cell1.innerHTML = "NvligneCell1";
	cell2.innerHTML = "NvligneCell2";
	cell3.innerHTML = "NvligneCell2";
}