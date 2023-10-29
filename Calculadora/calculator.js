function toggleOperations(toggleValue) {
	var elems = document.getElementsByClassName("cal-button-sign");
	for(var i = 0; i < elems.length; i++) {
		elems[i].disabled = toggleValue;
	}
}

function pressButton (button, disabledOperation= false){
	var texto = document.getElementById('input').value + button;
	document.getElementById("input").value = texto;

	if (disabledOperation==true) {
		toggleOperations(true);

	}
	
}

function calculateResult() {
	var text = document.getElementById("input").value;
	const sum = text.split("+");
	const rest = text.split("-");
	const divide = text.split("/");
	const multiply = text.split("x");
	var result = "";
	if (sum.length == 2) {
		result = parseFloat(sum[0]) + parseFloat(sum[1]);
	}
	else if (rest.length == 2) {
		result = parseFloat(rest[0]) - parseFloat(rest[1]);
	}
	else if (divide.length == 2) {
		result = parseFloat(divide[0]) / parseFloat(divide[1]);
	}
	else if (multiply.length == 2) {
		result = parseFloat(multiply[0]) * parseFloat(multiply[1]);
	}
	document.getElementById("output").value = result;
}
function pressCero() {
	document.getElementById("input").value = " ";
	document.getElementById("output").value = " ";
	toggleOperations(false);
}


document.onkeypress = function (event) {
	if (event.key === "Enter") {
		event.preventDefault();
		calculateResult();
	}
};


