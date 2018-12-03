

document.getElementById('text').onkeyup = () =>{

var x = document.getElementById('text').value;
	
	if (isNaN(x)) {
		document.getElementById('heading').innerHTML = "Not A Number";
	}

	else{
		if (x%2==0) {
			document.getElementById('heading').innerHTML = "Even";
		}

		else{
			document.getElementById('heading').innerHTML = "Odd";
		}

	}

}



//////////////////////////////////////



document.getElementById('generate').onclick = () => {

	var g1 = document.getElementById('grade1').value;
	var g2 = document.getElementById('grade2').value;
	var g3 = document.getElementById('grade3').value;
	var g4 = document.getElementById('grade4').value;

	var av = ((parseInt(g1) + parseInt(g2) + parseInt(g3) + parseInt(g4)) / 4) ;

	var pof, tg;
	
	if(av <= 100 && av >= 90){
		pof = "Pass";
		tg = "1";
	}

	else if(av <= 90 && av >= 84){
		pof = "Pass";
		tg = "1.5";
	}

	else if(av <= 84 && av >= 75){
		pof = "Pass";
		tg = "2";
	}

	else if(av <= 75 && av >= 65){
		pof = "Pass";
		tg = "2.5";
	}

	else if(av <= 65 && av >= 60){
		pof = "Pass";
		tg = "3";
	}

	else if(av <= 60 && av >= 55){
		pof = "Fail";
		tg = "4";
	}

	else if(av <= 55 && av >= 0){
		pof = "Fail";
		tg = "5";
	}



	document.getElementById('ave').style.display = "block";
	document.getElementById('pof').style.display = "block";
	document.getElementById('tg').style.display = "block";

	document.getElementById('ave').onclick = () => {
		alert(av);
	}

	document.getElementById('pof').onclick = () => {
		alert(pof);
	}

	document.getElementById('tg').onclick = () => {
		alert(tg);
	}



}

