function add(){
	var v1=parseInt(document.getElementById("input1").value);
	var v2=parseInt(document.getElementById("input2").value);
	alert("Result= " + (v1+v2).toString());
}

function subtract(){
	//Implement this
    var v1=parseInt(document.getElementById("input1").value);
    var v2=parseInt(document.getElementById("input2").value);
    alert("Result= " + (v1-v2).toString());
}

function multiply(){
	//Implement this

	var v1=parseInt(document.getElementById("input1").value);
	var v2=parseInt(document.getElementById("input2").value);
	alert("Result= " + (v1*v2).toString());

}

function divide(){
	//Implement this
	var v1=parseInt(document.getElementById("input1").value);
	var v2=parseInt(document.getElementById("input2").value);
	if(v2 != 0) {
		alert("Result= " + (v1/v2).toString());
	} else {
		alert("Error: divide by 0!");
	}
	
	
}
	



}
