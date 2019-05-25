function getRandomInRange(min, max) {
  	return Math.floor(Math.random() * (max - min + 1)) + min;
}
var balance = 50000 ;
var gameActive = 0 ;
var pustota = 1;
var inputValue = 0;
var stavka = 0 ;
document.getElementById('balance').innerHTML = balance;

document.getElementById('red').onclick = function() {
	stavka = document.getElementById('betting-inp').value;

		
	if (gameActive == 1){
		pustota = 2;
	} else if(stavka > balance) {
			alert('У вас нету столько денег.');
	}else if (stavka == 0){
			alert('Вы должно что-нибудь поставить.');
	}else if(stavka < 0) {
			alert("Вы не можете поставить отрицательное число.");
	}else {
		balance -= stavka;
		document.getElementById('balance').innerHTML = balance;
		gameActive = 1 ;
		var degreeRouletteStart = getRandomInRange(1800,3600) ;
		document.getElementById('roulette').style = 'transform: rotateZ(' + degreeRouletteStart + 'deg); transition: transform 7s cubic-bezier(0.15,0.15,0,1) 0s;';
		setTimeout(function() {
		
		var degreeRouletteEnd = degreeRouletteStart - (Math.floor(degreeRouletteStart / 360) * 360);
		document.getElementById('roulette').style = 'transform: rotateZ(' + degreeRouletteEnd + 'deg); transition: transform 0s linear 0s;';
			setTimeout(function() {	
			var vamvipalo = "Вам выпало число: ";
			if (degreeRouletteEnd <= 11){
				var NumberRoulette = vamvipalo + "0 Зелёное. "; 
				var button = "green" ;
			} else if (degreeRouletteEnd <= 36){
				var NumberRoulette = vamvipalo + "14 Чёрное. ";
				var button = "black" ;
			}else if (degreeRouletteEnd <= 60){
				var NumberRoulette = vamvipalo + "13 Красное. ";
				var button = "red" ;
			}else if (degreeRouletteEnd <= 85){
				var NumberRoulette = vamvipalo + "12 Чёрное. ";
				var button = "black" ;
			}else if (degreeRouletteEnd <= 107){
				var NumberRoulette = vamvipalo + "11 Красное. ";
				var button = "red" ;
			}else if (degreeRouletteEnd <= 132){
				var NumberRoulette = vamvipalo + "10 Чёрное. ";
				var button = "black" ;
			}else if (degreeRouletteEnd <= 155){
				var NumberRoulette = vamvipalo + "9 Красное. ";
				var button = "red" ;
			}else if (degreeRouletteEnd <= 180){
				var NumberRoulette = vamvipalo + "8 Чёрное. ";
				var button = "black" ;
			}else if (degreeRouletteEnd <= 203){
				var NumberRoulette = vamvipalo + "7 Красное. ";
				var button = "red" ;
			}else if (degreeRouletteEnd <= 228){
				var NumberRoulette = vamvipalo + "6 Чёрное. ";
				var button = "black" ;
			}else if (degreeRouletteEnd <= 251){
				var NumberRoulette = vamvipalo + "5 Красное. ";
				var button = "red" ;
			}else if (degreeRouletteEnd <= 276){
				var NumberRoulette = vamvipalo + "4 Чёрное. ";
				var button = "black" ;
			}else if (degreeRouletteEnd <= 299){
				var NumberRoulette =vamvipalo + "3 Красное. ";
				var button = "red" ;
			}else if (degreeRouletteEnd <= 324){
				var NumberRoulette = vamvipalo + "2 Чёрное. ";
				var button = "black" ;
			}else if (degreeRouletteEnd <= 348) {
				var NumberRoulette = vamvipalo + "1 Красное. ";
				var button = "red" ;
			}else {
				var NumberRoulette = vamvipalo + "0 Зелёное. ";
				var button = "green" ;
			}


			if (button == "red"){
					alert(NumberRoulette + "И вы выиграли: " + stavka * 2);
					balance += stavka * 2;
					document.getElementById('balance').innerHTML = balance;
			} else {
				alert(NumberRoulette + "И вы проиграли: " + stavka);
			}
			gameActive = 0 ;


			}, 20)
		}, 7000);
	}
}

		document.getElementById('black').onclick = function() {
		stavka = document.getElementById('betting-inp').value;

		
		if (gameActive == 1){
			pustota = 2;
		} else if(stavka > balance) {
				alert('У вас нету столько денег.');
			}else if (stavka <= 0){
				alert('Вы должно что-нибудь поставить.')
			}else{
				balance -= stavka;
			document.getElementById('balance').innerHTML = balance;
	gameActive = 1 ;
		var degreeRouletteStart = getRandomInRange(1800,3600) ;
		document.getElementById('roulette').style = 'transform: rotateZ(' + degreeRouletteStart + 'deg); transition: transform 7s cubic-bezier(0.15,0.15,0,1) 0s;';

		setTimeout(function() {
			
			var degreeRouletteEnd = degreeRouletteStart - (Math.floor(degreeRouletteStart / 360) * 360);
			document.getElementById('roulette').style = 'transform: rotateZ(' + degreeRouletteEnd + 'deg); transition: transform 0s linear 0s;';
				setTimeout(function() {	
				var vamvipalo = "Вам выпало число: ";
				if (degreeRouletteEnd <= 11){
					var NumberRoulette = vamvipalo + "0 Зелёное. "; 
					var button = "green" ;
				} else if (degreeRouletteEnd <= 36){
					var NumberRoulette = vamvipalo + "14 Чёрное. ";
					var button = "black" ;
				}else if (degreeRouletteEnd <= 60){
					var NumberRoulette = vamvipalo + "13 Красное. ";
					var button = "red" ;
				}else if (degreeRouletteEnd <= 85){
					var NumberRoulette = vamvipalo + "12 Чёрное. ";
					var button = "black" ;
				}else if (degreeRouletteEnd <= 107){
					var NumberRoulette = vamvipalo + "11 Красное. ";
					var button = "red" ;
				}else if (degreeRouletteEnd <= 132){
					var NumberRoulette = vamvipalo + "10 Чёрное. ";
					var button = "black" ;
				}else if (degreeRouletteEnd <= 155){
					var NumberRoulette = vamvipalo + "9 Красное. ";
					var button = "red" ;
				}else if (degreeRouletteEnd <= 180){
					var NumberRoulette = vamvipalo + "8 Чёрное. ";
					var button = "black" ;
				}else if (degreeRouletteEnd <= 203){
					var NumberRoulette = vamvipalo + "7 Красное. ";
					var button = "red" ;
				}else if (degreeRouletteEnd <= 228){
					var NumberRoulette = vamvipalo + "6 Чёрное. ";
					var button = "black" ;
				}else if (degreeRouletteEnd <= 251){
					var NumberRoulette = vamvipalo + "5 Красное. ";
					var button = "red" ;
				}else if (degreeRouletteEnd <= 276){
					var NumberRoulette = vamvipalo + "4 Чёрное. ";
					var button = "black" ;
				}else if (degreeRouletteEnd <= 299){
					var NumberRoulette =vamvipalo + "3 Красное. ";
					var button = "red" ;
				}else if (degreeRouletteEnd <= 324){
					var NumberRoulette = vamvipalo + "2 Чёрное. ";
					var button = "black" ;
				}else if (degreeRouletteEnd <= 348) {
					var NumberRoulette = vamvipalo + "1 Красное. ";
					var button = "red" ;
				}else {
					var NumberRoulette = vamvipalo + "0 Зелёное. ";
					var button = "green" ;
				}


				if (button == "black"){
						alert(NumberRoulette + "И вы выиграли: " + stavka * 2);
						balance += stavka * 2;
						document.getElementById('balance').innerHTML = balance;
					} else {
					alert(NumberRoulette + "И вы проиграли: " + stavka);
					}
				gameActive = 0 ;


			}, 20)

			
		}, 7000);
			}
		}

		document.getElementById('green').onclick = function() {
		stavka = document.getElementById('betting-inp').value;

		
		if (gameActive == 1){
			pustota = 2;
		} else if(stavka > balance) {
				alert('У вас нету столько денег.');
			}else if (stavka <= 0){
				alert('Вы должно что-нибудь поставить.')
			}else{
				balance -= stavka;
			document.getElementById('balance').innerHTML = balance;
	gameActive = 1 ;
		var degreeRouletteStart = getRandomInRange(1800,3600) ;
		document.getElementById('roulette').style = 'transform: rotateZ(' + degreeRouletteStart + 'deg); transition: transform 7s cubic-bezier(0.15,0.15,0,1) 0s;';

		setTimeout(function() {
			
			var degreeRouletteEnd = degreeRouletteStart - (Math.floor(degreeRouletteStart / 360) * 360);
			document.getElementById('roulette').style = 'transform: rotateZ(' + degreeRouletteEnd + 'deg); transition: transform 0s linear 0s;';
				setTimeout(function() {	
				var vamvipalo = "Вам выпало число: ";
				if (degreeRouletteEnd <= 11){
					var NumberRoulette = vamvipalo + "0 Зелёное. "; 
					var button = "green" ;
				} else if (degreeRouletteEnd <= 36){
					var NumberRoulette = vamvipalo + "14 Чёрное. ";
					var button = "black" ;
				}else if (degreeRouletteEnd <= 60){
					var NumberRoulette = vamvipalo + "13 Красное. ";
					var button = "red" ;
				}else if (degreeRouletteEnd <= 85){
					var NumberRoulette = vamvipalo + "12 Чёрное. ";
					var button = "black" ;
				}else if (degreeRouletteEnd <= 107){
					var NumberRoulette = vamvipalo + "11 Красное. ";
					var button = "red" ;
				}else if (degreeRouletteEnd <= 132){
					var NumberRoulette = vamvipalo + "10 Чёрное. ";
					var button = "black" ;
				}else if (degreeRouletteEnd <= 155){
					var NumberRoulette = vamvipalo + "9 Красное. ";
					var button = "red" ;
				}else if (degreeRouletteEnd <= 180){
					var NumberRoulette = vamvipalo + "8 Чёрное. ";
					var button = "black" ;
				}else if (degreeRouletteEnd <= 203){
					var NumberRoulette = vamvipalo + "7 Красное. ";
					var button = "red" ;
				}else if (degreeRouletteEnd <= 228){
					var NumberRoulette = vamvipalo + "6 Чёрное. ";
					var button = "black" ;
				}else if (degreeRouletteEnd <= 251){
					var NumberRoulette = vamvipalo + "5 Красное. ";
					var button = "red" ;
				}else if (degreeRouletteEnd <= 276){
					var NumberRoulette = vamvipalo + "4 Чёрное. ";
					var button = "black" ;
				}else if (degreeRouletteEnd <= 299){
					var NumberRoulette =vamvipalo + "3 Красное. ";
					var button = "red" ;
				}else if (degreeRouletteEnd <= 324){
					var NumberRoulette = vamvipalo + "2 Чёрное. ";
					var button = "black" ;
				}else if (degreeRouletteEnd <= 348) {
					var NumberRoulette = vamvipalo + "1 Красное. ";
					var button = "red" ;
				}else {
					var NumberRoulette = vamvipalo + "0 Зелёное. ";
					var button = "green" ;
				}


				if (button == "green"){
						alert(NumberRoulette + "И вы выиграли: " + stavka * 14);
						balance += stavka * 14;
						document.getElementById('balance').innerHTML = balance;
					} else {
					alert(NumberRoulette + "И вы проиграли: " + stavka);
					}
				gameActive = 0 ;


			}, 20)

			
		}, 7000);
			}
		}	
	


