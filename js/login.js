document.addEventListener("DOMContentLoaded", function () {
	var el = document.querySelector(".login-button");
	
	var inputFirst = document.getElementById("username");
	var inputSecond = document.getElementById("password");
	
	el.addEventListener("click", function (event) {
		var temp = true;
		event.preventDefault();
		if (inputFirst.value == "") {
			inputFirst.style.borderColor = "#ff8462";
			temp = false;
		} else {
			temp = checkAlphaValidation(inputFirst);
		}
		if (inputSecond.value == "") {
			inputSecond.style.borderColor = "#ff8462";
			temp = false;
		}
		console.log('temp');
		console.log(temp);
		if (temp) {
			document.getElementById("username").value = "";
			document.getElementById("password").value = "";
			window.location.href = "landingPage.html";
		}
	});
});

function checkNumericValidation(input) {
	var letters = /^[0-9 ]+$/;
	if (!input.value.match(letters)) {
		return false;
	}
	return true;
}
function checkAlphaValidation(input) {
	var letters = /^[A-Za-z ]+$/;
	if (!input.value.match(letters)) {
		input.style.borderColor = "#ff8462";
		return false;
	}
	return true;
}

function checkValidation(value) {
	value.style.borderColor = "#cccccc";
}

