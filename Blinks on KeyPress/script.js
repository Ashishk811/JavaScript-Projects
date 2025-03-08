let keyValue;
let prvValue;
(function blinkonKeyPress(){
	window.addEventListener("keydown", (e) => {
		keyValue= e.code;
		document.querySelector(`#${keyValue}`).style.backgroundColor = "black";
		document.querySelector(`#${keyValue}`).style.color= "white";

		if(prvValue && prvValue != keyValue){
			document.querySelector(`#${prvValue}`).style.backgroundColor = "#e0e0e0";
			document.querySelector(`#${prvValue}`).style.color= "black";
		}
		prvValue= keyValue;

		setTimeout(()=>{
			document.querySelector(`#${keyValue}`).style.backgroundColor = "#e0e0e0";
			document.querySelector(`#${keyValue}`).style.color= "black";
		},900);

	});
})();
