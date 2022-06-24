let element = document.querySelector("#container");
let buttons = document.querySelectorAll("#nav button");

resetClass = () => {
	element.removeAttribute("class");
}

addClass = (className) => {
	element.classList.add(className)
}

cardStyle = (button) => {
	if(button.className == "btn1"){
		resetClass();
		addClass("layout1");
	} 
		else if (button.className == "btn2" ) {
		resetClass();
		addClass("layout2");
	}
		else if (button.className == "btn3") {
		resetClass();
		addClass("layout3");
	}
}

removeClass = () => {
	buttons.forEach(button => {
		button.classList.remove("active");
	})
}

buttons.forEach( button => {
	button.addEventListener("click", () => {
		removeClass();
		cardStyle(button);
		button.classList.add("active");
	})
})

// removeClass = () => {
// 	element.removeAttribute("class");
// }

// myFunction1 = () => {
//   removeClass();
// 	element.classList.add("layout1");
// }

// myFunction2 = () => {
//   removeClass();
// 	element.classList.add("layout2");
// }

// myFunction3 = () => {
//   removeClass();
// 	element.classList.add("layout3");
// }

// Change Active Button Style