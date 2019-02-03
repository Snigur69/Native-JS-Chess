var wPaw = document.getElementsByClassName('wPaw');
var bPaw = document.getElementsByClassName('bPaw');
var wRook = document.getElementsByClassName('wRook');
var bRook = document.getElementsByClassName('bRook');
var wKnight = document.getElementsByClassName('wKnight');
var bKnight = document.getElementsByClassName('bKnight');
var wBishop = document.getElementsByClassName('wBishop');
var bBishop = document.getElementsByClassName('bBishop');
var wQueen = document.getElementsByClassName('wQueen');
var bQueen = document.getElementsByClassName('bQueen');
var wKing = document.getElementsByClassName('wKing');
var bKing = document.getElementsByClassName('bKing');
var whiteDefeat = document.getElementById('whiteDefeat');
var blackDefeat = document.getElementById('blackDefeat');
var helpDiv = document.getElementsByClassName('helpDiv');
var turn = document.getElementById('whichTurn');
var whiteP = document.createElement('p');
var blackP = document.createElement('p');

var figurePosY, figurePosX;
var nextElem;
var isSelectedPaw = false;
var isMove = false;
var parentDiv, nextDiv, leftDiv, rightDiv;
var pawImg;
var isClicked = false;
var rookImg;
var isSelectedRook = false;
var knightImg;
var isSelectedKnight = false;
var bishopImg;
var isSelectedBishop = false;
var queenImg;
var isSelectedQueen = false;
var kingImg;
var isSelectedKing = false;
var isWhiteTurn = true;
var isBlackTurn = false;
 
//Для вывода оповещения о ходе
whiteP.innerHTML = 'This is turn of WHITE player!';
whiteP.style.font = 'italic bold 50px arial';
blackP.innerHTML = 'This is turn of BLACK player!';
blackP.style.font = 'italic bold 50px arial';
turn.appendChild(whiteP);


 
document.addEventListener('click', function(){
	var clickedElem = document.elementFromPoint(event.clientX, event.clientY);
	var parentClicked = clickedElem.parentNode;

	// снять выделение с фигур
	if ((isSelectedPaw === true) && (clickedElem.style.borderColor === 'yellow')){
		figureMoving (isSelectedPaw, clickedElem, pawImg);
		isSelectedPaw = false;
	}
	if ((isSelectedPaw === true) && (parentClicked.style.borderColor === 'red')){
		figureKilling (isSelectedPaw, clickedElem, pawImg);
		isSelectedPaw = false;
	}
	
	if ((isSelectedRook === true) && (clickedElem.style.borderColor === 'yellow')){
		figureMoving (isSelectedRook, clickedElem, rookImg);
		isSelectedRook = false;
	}
	if ((isSelectedRook === true) && (parentClicked.style.borderColor === 'red')){
		figureKilling (isSelectedRook, clickedElem, rookImg);
		isSelectedRook = false;
	}
	
	if ((isSelectedKnight === true) && (clickedElem.style.borderColor === 'yellow')){
		figureMoving (isSelectedKnight, clickedElem, knightImg);
		isSelectedKnight = false;
	}
	if ((isSelectedKnight === true) && (parentClicked.style.borderColor === 'red')){
		figureKilling (isSelectedKnight, clickedElem, knightImg);
		isSelectedKnight = false;
	}
	
	if ((isSelectedBishop === true) && (clickedElem.style.borderColor === 'yellow')){
		figureMoving (isSelectedBishop, clickedElem, bishopImg);
		isSelectedBishop = false;
	}
	if ((isSelectedBishop === true) && (parentClicked.style.borderColor === 'red')){
		figureKilling (isSelectedBishop, clickedElem, bishopImg);
		isSelectedBishop = false;
	}
	
	if ((isSelectedQueen === true) && (clickedElem.style.borderColor === 'yellow')){
		figureMoving (isSelectedQueen, clickedElem, queenImg);
		isSelectedQueen = false;
	}
	if ((isSelectedQueen === true) && (parentClicked.style.borderColor === 'red')){
		figureKilling (isSelectedQueen, clickedElem, queenImg);
		isSelectedQueen = false;
	}
	
	if ((isSelectedKing === true) && (clickedElem.style.borderColor === 'yellow')){
		figureMoving (isSelectedKing, clickedElem, kingImg);
		isSelectedKing = false;
	}
	if ((isSelectedKing === true) && (parentClicked.style.borderColor === 'red')){
		figureKilling (isSelectedKing, clickedElem, kingImg);
		isSelectedKing = false;
	}
	 offSelection(clickedElem);

})

for (var i = 0; i < wPaw.length; i++){

	wPaw[i].addEventListener('click', function(){
		if (isWhiteTurn){
			isClicked = true;
			if (isMove === false) {
				figurePosY = getCordY(this);
				figurePosX = getCordX(this);		
				pawImg = document.elementFromPoint(event.clientX, event.clientY);
				imgColor = pawImg.classList[1];
				parentDiv = pawImg.parentNode;
				parentDiv.style.border = 'thick solid green';
				pawImg.style.margin = '-5px auto auto -5px';
				selectPaw('blackFig', figurePosX, figurePosY + 100);
				isSelectedPaw = true;
				isMove = true;

			}
			
		}

	})
}


for (var i = 0; i < bPaw.length; i++){

	bPaw[i].addEventListener('click', function(){
		if(isBlackTurn){
			var lastCord = figurePosY;
			if (isMove === false) {
				figurePosY = getCordY(this);
				figurePosX = getCordX(this);
				pawImg = document.elementFromPoint(event.clientX, event.clientY);
				parentDiv = pawImg.parentNode;
				imgColor = pawImg.classList[1];
				parentDiv.style.border = 'thick solid green';
				pawImg.style.margin = '-5px auto auto -5px';
				selectPaw('whiteFig', figurePosX, figurePosY - 100);
				isSelectedPaw = true;
				isMove = true;
			}
		}


	})
}

for (var i = 0; i < wRook.length; i++){

	wRook[i].addEventListener('click', function(){
		if (isWhiteTurn){
			if (isMove === false){
				figurePosY = getCordY(this);
				figurePosX = getCordX(this);
				rookImg = document.elementFromPoint(event.clientX, event.clientY);
				parentDiv = rookImg.parentNode;
				rightElem = document.elementFromPoint(figurePosX + 100, figurePosY);
				leftElem = document.elementFromPoint(figurePosX - 100, figurePosY);
				upperElem = document.elementFromPoint(figurePosX, figurePosY - 100);
				downElem = document.elementFromPoint(figurePosX, figurePosY + 100);
				parentDiv.style.border = 'thick solid green';
				rookImg.style.margin = '-5px auto auto -5px';
				selectRook(rightElem, 'blackFig', 'right', figurePosX, figurePosY);
				selectRook(leftElem, 'blackFig', 'left', figurePosX, figurePosY);
				selectRook(upperElem, 'blackFig', 'up', figurePosX, figurePosY);
				selectRook(downElem, 'blackFig', 'down', figurePosX, figurePosY);
				isSelectedRook = true;
				isMove = true;
			}
		}

	})
}


for (var i = 0; i < bRook.length; i++){

	bRook[i].addEventListener('click', function(){
		if (isBlackTurn){
			if (isMove === false){
				figurePosY = getCordY(this);
				figurePosX = getCordX(this);
				rookImg = document.elementFromPoint(event.clientX, event.clientY);
				parentDiv = rookImg.parentNode;
				rightElem = document.elementFromPoint(figurePosX + 100, figurePosY);
				leftElem = document.elementFromPoint(figurePosX - 100, figurePosY);
				upperElem = document.elementFromPoint(figurePosX, figurePosY - 100);
				downElem = document.elementFromPoint(figurePosX, figurePosY + 100);
				parentDiv.style.border = 'thick solid green';
				rookImg.style.margin = '-5px auto auto -5px';
				selectRook(rightElem, 'whiteFig', 'right', figurePosX, figurePosY);
				selectRook(leftElem, 'whiteFig', 'left', figurePosX, figurePosY);
				selectRook(upperElem, 'whiteFig', 'up', figurePosX, figurePosY);
				selectRook(downElem, 'whiteFig', 'down', figurePosX, figurePosY);
				isSelectedRook = true;
				isMove = true;
			}
		}
	})
}




for (var i = 0; i < wKnight.length; i++){
	wKnight[i].addEventListener('click', function (){
		if (isWhiteTurn){
			if (isMove === false){
				figurePosY = getCordY(this);
				figurePosX = getCordX(this);
				knightImg = document.elementFromPoint(event.clientX, event.clientY);
				parentDiv = knightImg.parentNode;
				parentDiv.style.border = 'thick solid green';
				knightImg.style.margin = '-5px auto auto -5px';
				selectKnight('blackFig', figurePosX + 200, figurePosY + 100);
				selectKnight('blackFig', figurePosX + 200, figurePosY - 100);
				selectKnight('blackFig', figurePosX + 100, figurePosY + 200);
				selectKnight('blackFig', figurePosX - 100, figurePosY + 200);
				selectKnight('blackFig', figurePosX - 200, figurePosY + 100);
				selectKnight('blackFig', figurePosX - 200, figurePosY - 100);
				selectKnight('blackFig', figurePosX - 100, figurePosY - 200);
				selectKnight('blackFig', figurePosX + 100, figurePosY - 200);
				isSelectedKnight = true;
				isMove = true;
			}
		}

	})
}

for (var i = 0; i < bKnight.length; i++){
	bKnight[i].addEventListener('click', function (){
		if (isBlackTurn){
			if (isMove === false){
				figurePosY = getCordY(this);
				figurePosX = getCordX(this);
				knightImg = document.elementFromPoint(event.clientX, event.clientY);
				parentDiv = knightImg.parentNode;
				parentDiv.style.border = 'thick solid green';
				knightImg.style.margin = '-5px auto auto -5px';
				selectKnight('whiteFig', figurePosX + 200, figurePosY + 100);
				selectKnight('whiteFig', figurePosX + 200, figurePosY - 100);
				selectKnight('whiteFig', figurePosX + 100, figurePosY + 200);
				selectKnight('whiteFig', figurePosX - 100, figurePosY + 200);
				selectKnight('whiteFig', figurePosX - 200, figurePosY + 100);
				selectKnight('whiteFig', figurePosX - 200, figurePosY - 100);
				selectKnight('whiteFig', figurePosX - 100, figurePosY - 200);
				selectKnight('whiteFig', figurePosX + 100, figurePosY - 200);
				isSelectedKnight = true;
				isMove = true;
			}
		}

	})
}


for (var i = 0; i < wBishop.length; i++){
	wBishop[i].addEventListener('click', function (){
		if (isWhiteTurn){
			if (isMove === false){
				figurePosY = getCordY(this);
				figurePosX = getCordX(this);
				bishopImg = document.elementFromPoint(event.clientX, event.clientY);
				parentDiv = bishopImg.parentNode;
				parentDiv.style.border = 'thick solid green';
				bishopImg.style.margin = '-5px auto auto -5px';
				selectBishop('downRight', 'blackFig', figurePosX, figurePosY);
				selectBishop('upRight', 'blackFig', figurePosX, figurePosY);
				selectBishop('downLeft', 'blackFig', figurePosX, figurePosY);
				selectBishop('upLeft', 'blackFig', figurePosX, figurePosY);
				isSelectedBishop = true;
				isMove = true;
			}
		}

	})
}


for (var i = 0; i < bBishop.length; i++){
	bBishop[i].addEventListener('click', function (){
		if (isBlackTurn){
			if (isMove === false){
				figurePosY = getCordY(this);
				figurePosX = getCordX(this);
				bishopImg = document.elementFromPoint(event.clientX, event.clientY);
				parentDiv = bishopImg.parentNode;
				parentDiv.style.border = 'thick solid green';
				bishopImg.style.margin = '-5px auto auto -5px';
				selectBishop('downRight', 'whiteFig', figurePosX, figurePosY);
				selectBishop('upRight', 'whiteFig', figurePosX, figurePosY);
				selectBishop('downLeft', 'whiteFig', figurePosX, figurePosY);
				selectBishop('upLeft', 'whiteFig', figurePosX, figurePosY);
				isSelectedBishop = true;
				isMove = true;
			}
		}

	})
}


for (var i = 0; i < wQueen.length; i++){
	wQueen[i].addEventListener('click', function (){
		if (isWhiteTurn){
			if (isMove === false){
				figurePosY = getCordY(this);
				figurePosX = getCordX(this);
				queenImg = document.elementFromPoint(event.clientX, event.clientY);
				parentDiv = queenImg.parentNode;
				parentDiv.style.border = 'thick solid green';
				queenImg.style.margin = '-5px auto auto -5px';
				selectQueen('up', 'blackFig', figurePosX, figurePosY);
				selectQueen('upRight', 'blackFig', figurePosX, figurePosY);
				selectQueen('right', 'blackFig', figurePosX, figurePosY);
				selectQueen('downRight', 'blackFig', figurePosX, figurePosY);
				selectQueen('down', 'blackFig', figurePosX, figurePosY);
				selectQueen('downLeft', 'blackFig', figurePosX, figurePosY);
				selectQueen('left', 'blackFig', figurePosX, figurePosY);
				selectQueen('upLeft', 'blackFig', figurePosX, figurePosY);
				isSelectedQueen = true;
				isMove = true;
			}
		}
	})
}

for (var i = 0; i < bQueen.length; i++){
	bQueen[i].addEventListener('click', function (){
		if (isBlackTurn){
			if (isMove === false){
				figurePosY = getCordY(this);
				figurePosX = getCordX(this);
				queenImg = document.elementFromPoint(event.clientX, event.clientY);
				parentDiv = queenImg.parentNode;
				parentDiv.style.border = 'thick solid green';
				queenImg.style.margin = '-5px auto auto -5px';
				selectQueen('up', 'whiteFig', figurePosX, figurePosY);
				selectQueen('upRight', 'whiteFig', figurePosX, figurePosY);
				selectQueen('right', 'whiteFig', figurePosX, figurePosY);
				selectQueen('downRight', 'whiteFig', figurePosX, figurePosY);
				selectQueen('down', 'whiteFig', figurePosX, figurePosY);
				selectQueen('downLeft', 'whiteFig', figurePosX, figurePosY);
				selectQueen('left', 'whiteFig', figurePosX, figurePosY);
				selectQueen('upLeft', 'whiteFig', figurePosX, figurePosY);
				isSelectedQueen = true;
				isMove = true;
			}
		}
	})
}

for (var i = 0; i < wKing.length; i++){
	wKing[i].addEventListener('click', function (){
		if (isWhiteTurn){
			if (isMove === false){
				figurePosY = getCordY(this);
				figurePosX = getCordX(this);
				kingImg = document.elementFromPoint(event.clientX, event.clientY);
				parentDiv = kingImg.parentNode;
				parentDiv.style.border = 'thick solid green';
				kingImg.style.margin = '-5px auto auto -5px';
				selectKing('up', 'blackFig', figurePosX, figurePosY);
				selectKing('upRight', 'blackFig', figurePosX, figurePosY);
				selectKing('right', 'blackFig', figurePosX, figurePosY);
				selectKing('downRight', 'blackFig', figurePosX, figurePosY);
				selectKing('down', 'blackFig', figurePosX, figurePosY);
				selectKing('downLeft', 'blackFig', figurePosX, figurePosY);
				selectKing('left', 'blackFig', figurePosX, figurePosY);
				selectKing('upLeft', 'blackFig', figurePosX, figurePosY);
				isSelectedKing = true;
				isMove = true;
			}
		}
	})
}


for (var i = 0; i < bKing.length; i++){
	bKing[i].addEventListener('click', function (){
		if (isBlackTurn){
			if (isMove === false){
				figurePosY = getCordY(this);
				figurePosX = getCordX(this);
				kingImg = document.elementFromPoint(event.clientX, event.clientY);
				parentDiv = kingImg.parentNode;
				parentDiv.style.border = 'thick solid green';
				kingImg.style.margin = '-5px auto auto -5px';
				selectKing('up', 'whiteFig', figurePosX, figurePosY);
				selectKing('upRight', 'whiteFig', figurePosX, figurePosY);
				selectKing('right', 'whiteFig', figurePosX, figurePosY);
				selectKing('downRight', 'whiteFig', figurePosX, figurePosY);
				selectKing('down', 'whiteFig', figurePosX, figurePosY);
				selectKing('downLeft', 'whiteFig', figurePosX, figurePosY);
				selectKing('left', 'whiteFig', figurePosX, figurePosY);
				selectKing('upLeft', 'whiteFig', figurePosX, figurePosY);
				isSelectedKing = true;
				isMove = true;
			}
		}
	})
}

function figureMoving (_selectedFig, _clicked, _selectedImg){
		_clicked.appendChild(_selectedImg);
		parentDiv.style.border = '';
		_selectedImg.style.margin = '-5px auto auto -5px';
		for (var i = 0; i < helpDiv.length; i++){
			helpDiv[i].style.borderColor = '';
		}
		isMove = false;
		turnSelection(turn);
}

function figureKilling(_selectedFig, _clicked, _selectedImg){
	var parentClicked = _clicked.parentNode;
		parentClicked.removeChild(_clicked);
		parentClicked.appendChild(_selectedImg);
		for (var i = 0; i < helpDiv.length; i++){
			helpDiv[i].style.borderColor = '';
		}
		_selectedImg.style.margin = '-5px auto auto -5px';
		isMove = false;
		if (_clicked.classList[0] === 'wKing'){
			alert ('Black team WIN');
		}
		if (_clicked.classList[0] === 'bKing'){
			alert ('White team WIN');
		}
		turnSelection(turn);
}

function offSelection(_clicked){
	if ((_clicked.className == 'helpDiv') && (_clicked.style.borderColor === '')){
		isMove = false;
		for (var i = 0; i < helpDiv.length; i++){
			helpDiv[i].style.borderColor = '';
		}
	}
	
}

function selectKing(_direct, _color, _x, _y){

	if(_direct === 'up'){
		var nextElem1 = document.elementFromPoint(_x, _y - 100);
		if ((nextElem1 !== null) && (nextElem1.className === 'helpDiv')){
			nextElem1.style.border = 'thick solid yellow';
		}
	}
	if(_direct === 'upRight'){
		var nextElem1 = document.elementFromPoint(_x + 100, _y - 100);
		if ((nextElem1 !== null) && (nextElem1.className === 'helpDiv')){
			nextElem1.style.border = 'thick solid yellow';
		}
	}
	if(_direct === 'right'){
		var nextElem1 = document.elementFromPoint(_x + 100, _y);
		if ((nextElem1 !== null) && (nextElem1.className === 'helpDiv')){
			nextElem1.style.border = 'thick solid yellow';
		}
		
	}
	if(_direct === 'downRight'){
		var nextElem1 = document.elementFromPoint(_x + 100, _y + 100);
		if ((nextElem1 !== null) && (nextElem1.className === 'helpDiv')){
			nextElem1.style.border = 'thick solid yellow';
		}
	}
	if(_direct === 'down'){
		var nextElem1 = document.elementFromPoint(_x, _y + 100);
		if ((nextElem1 !== null) && (nextElem1.className === 'helpDiv')){
			nextElem1.style.border = 'thick solid yellow';
		}
	}	
	if(_direct === 'downLeft'){
		var nextElem1 = document.elementFromPoint(_x - 100, _y + 100);
		if ((nextElem1 !== null) && (nextElem1.className === 'helpDiv')){
			nextElem1.style.border = 'thick solid yellow';
		}
	}
	if(_direct === 'left'){
		var nextElem1 = document.elementFromPoint(_x - 100, _y);
		if ((nextElem1 !== null) && (nextElem1.className === 'helpDiv')){
			nextElem1.style.border = 'thick solid yellow';
		}
	}
	if(_direct === 'upLeft'){
		var nextElem1 = document.elementFromPoint(_x - 100, _y - 100);
		if ((nextElem1 !== null) && (nextElem1.className === 'helpDiv')){
			nextElem1.style.border = 'thick solid yellow';
		}
	}
	if ((nextElem1 !== null) && (nextElem1.tagName === 'IMG')){
		var color = nextElem1.classList[1];
		if (_color === color){
			var div = nextElem1.parentNode;
			div.style.border = 'thick solid red';
			nextElem1.style.margin = '-5px auto auto -5px';
		}
	}

}

function selectQueen(_direct, _color, _x, _y){
	if(_direct === 'up'){
		var tmpY = _y - 100;
		var nextElem1 = document.elementFromPoint(_x, tmpY);
		while ((nextElem1 !== null) && (nextElem1.className === 'helpDiv')){
			nextElem1.style.border = 'thick solid yellow';
			tmpY -= 100;
			nextElem1 = document.elementFromPoint(_x, tmpY);
		}
	}
	if(_direct === 'upRight'){
		var tmpX = _x + 100;
		var tmpY = _y - 100;
		var nextElem1 = document.elementFromPoint(tmpX, tmpY);
		while ((nextElem1 !== null) && (nextElem1.className === 'helpDiv')){
			nextElem1.style.border = 'thick solid yellow';
			tmpX += 100; 
			tmpY -= 100;
			nextElem1 = document.elementFromPoint(tmpX, tmpY);
		}
	}
	if(_direct === 'right'){
		var tmpX = _x + 100;
		var nextElem1 = document.elementFromPoint(tmpX, _y);
		while ((nextElem1 !== null) && (nextElem1.className === 'helpDiv')){
			nextElem1.style.border = 'thick solid yellow';
			tmpX += 100; 
			nextElem1 = document.elementFromPoint(tmpX, _y);
		}
	}
	if(_direct === 'downRight'){
		var tmpX = _x + 100;
		var tmpY = _y + 100;
		var nextElem1 = document.elementFromPoint(tmpX, tmpY);
		while ((nextElem1 !== null) && (nextElem1.className === 'helpDiv')){
			nextElem1.style.border = 'thick solid yellow';
			tmpX += 100; 
			tmpY += 100;
			nextElem1 = document.elementFromPoint(tmpX, tmpY);
		}
	}
	if(_direct === 'down'){
		var tmpY = _y + 100;
		var nextElem1 = document.elementFromPoint(_x, tmpY);
		while ((nextElem1 !== null) && (nextElem1.className === 'helpDiv')){
			nextElem1.style.border = 'thick solid yellow';
			tmpY += 100;
			nextElem1 = document.elementFromPoint(_x, tmpY);
		}
	}
	if(_direct === 'downLeft'){
		var tmpX = _x - 100;
		var tmpY = _y + 100;
		var nextElem1 = document.elementFromPoint(tmpX, tmpY);
		while ((nextElem1 !== null) && (nextElem1.className === 'helpDiv')){
			nextElem1.style.border = 'thick solid yellow';
			tmpX -= 100; 
			tmpY += 100;
			nextElem1 = document.elementFromPoint(tmpX, tmpY);
		}
	}
	if(_direct === 'left'){
		var tmpX = _x - 100;
		var nextElem1 = document.elementFromPoint(tmpX, _y);
		while ((nextElem1 !== null) && (nextElem1.className === 'helpDiv')){
			nextElem1.style.border = 'thick solid yellow';
			tmpX -= 100; 
			nextElem1 = document.elementFromPoint(tmpX, _y);
		}
	}
	if(_direct === 'upLeft'){
		var tmpX = _x - 100;
		var tmpY = _y - 100;
		var nextElem1 = document.elementFromPoint(tmpX, tmpY);
		while ((nextElem1 !== null) && (nextElem1.className === 'helpDiv')){
			nextElem1.style.border = 'thick solid yellow';
			tmpX -= 100; 
			tmpY -= 100;
			nextElem1 = document.elementFromPoint(tmpX, tmpY);
		}
	}
	if ((nextElem1 !== null) && (nextElem1.tagName === 'IMG')){
		var color = nextElem1.classList[1];
		if (_color === color){
			var div = nextElem1.parentNode;
			div.style.border = 'thick solid red';
			nextElem1.style.margin = '-5px auto auto -5px';
		}
	}
}


function selectPaw(_color, _x, _y){
		var nextElem1 = document.elementFromPoint(_x, _y);
		if (nextElem1.id !== board){
			if ((nextElem1 !== null) && (nextElem1.className === 'helpDiv')){
				nextElem1.style.border = 'thick solid yellow';
			}
			var rightElem = document.elementFromPoint(_x + 100, _y);
			var leftElem = document.elementFromPoint(_x - 100, _y);

			if ((rightElem !== null) && (rightElem.tagName === 'IMG')){
				var color = rightElem.classList[1];
				if (_color === color){
					var div = rightElem.parentNode;
					div.style.border = 'thick solid red';
					rightElem.style.margin = '-5px auto auto -5px';
				}
			}

			if ((leftElem !== null) && (leftElem.tagName === 'IMG')){
				var color = leftElem.classList[1];
				if (_color === color){
					var div = leftElem.parentNode;
					div.style.border = 'thick solid red';
					leftElem.style.margin = '-5px auto auto -5px';
				}
			}
		}

}

function selectBishop (_direct, _color, _x, _y){
		var elem = document.elementFromPoint(_x,_y)
		if(_direct === 'downRight'){
			var tmpX = _x + 100;
			var tmpY = _y + 100;
			var nextElem1 = document.elementFromPoint(tmpX, tmpY);
			while ((nextElem1 !== null) && (nextElem1.className === 'helpDiv')){
				nextElem1.style.border = 'thick solid yellow';
				tmpX += 100; 
				tmpY += 100;
				nextElem1 = document.elementFromPoint(tmpX, tmpY);
			}
		}
		if(_direct === 'upRight'){
			var tmpX = _x + 100;
			var tmpY = _y - 100;
			var nextElem1 = document.elementFromPoint(tmpX, tmpY);
			while ((nextElem1 !== null) && (nextElem1.className === 'helpDiv')){
				nextElem1.style.border = 'thick solid yellow';
				tmpX += 100; 
				tmpY -= 100;
				nextElem1 = document.elementFromPoint(tmpX, tmpY);
			}
		}
		if(_direct === 'upLeft'){
			var tmpX = _x - 100;
			var tmpY = _y - 100;
			var nextElem1 = document.elementFromPoint(tmpX, tmpY);
			while ((nextElem1 !== null) && (nextElem1.className === 'helpDiv')){
				nextElem1.style.border = 'thick solid yellow';
				tmpX -= 100; 
				tmpY -= 100;
				nextElem1 = document.elementFromPoint(tmpX, tmpY);
			}
		}
		if(_direct === 'downLeft'){
			var tmpX = _x - 100;
			var tmpY = _y + 100;
			var nextElem1 = document.elementFromPoint(tmpX, tmpY);
			while ((nextElem1 !== null) && (nextElem1.className === 'helpDiv')){
				nextElem1.style.border = 'thick solid yellow';
				tmpX -= 100; 
				tmpY += 100;
				nextElem1 = document.elementFromPoint(tmpX, tmpY);
			}
		}

		if ((nextElem1 !== null) && (nextElem1.tagName === 'IMG')){
			var color = nextElem1.classList[1];
			if (_color === color){
				var div = nextElem1.parentNode;
				div.style.border = 'thick solid red';
				nextElem1.style.margin = '-5px auto auto -5px';
			}
		}
}


function selectKnight(_color, _x, _y){
	var elem = document.elementFromPoint(_x,_y);
	if ((elem !== null) && (elem.className === 'helpDiv')){
		elem.style.border = 'thick solid yellow';
	}
	if ((elem !== null) && (elem.tagName === 'IMG') && (elem.classList[1] === _color)){
		var parentElem = elem.parentNode;
		parentElem.style.border = 'thick solid red';
		elem.style.margin = '-5px auto auto -5px';
	}
}


function selectRook (_elem, _color, _direct, _x, _y){
		if(_direct === 'right'){
			tmpX = _x + 200;
			while ((_elem !== null) && (_elem.className === 'helpDiv')){
				_elem.style.border = 'thick solid yellow';
				_elem = document.elementFromPoint(tmpX, _y);
				tmpX += 100; 
				_elem = document.elementFromPoint(tmpX - 100, _y);
			}
		}
		
		if(_direct === 'left'){
			tmpX = _x - 200;
			while ((_elem !== null) && (_elem.className === 'helpDiv')){
				_elem.style.border = 'thick solid yellow';
				_elem = document.elementFromPoint(tmpX, _y);
				tmpX -= 100; 
				_elem = document.elementFromPoint(tmpX + 100, _y);
			}
		}


		if(_direct === 'up'){
			tmpY = _y - 200;
			while ((_elem !== null) && (_elem.className === 'helpDiv')){
				_elem.style.border = 'thick solid yellow';
				_elem = document.elementFromPoint(_x, tmpY);
				tmpY -= 100; 
				_elem = document.elementFromPoint(_x, tmpY + 100);
			}
		}

		if(_direct === 'down'){
			tmpY = _y + 200;
			while ((_elem !== null) && (_elem.className !== 'IMG') && (_elem.className === 'helpDiv') ){
					console.log(_elem)
				_elem.style.border = 'thick solid yellow';
				_elem = document.elementFromPoint(_x, tmpY);
				tmpY += 100; 
				_elem = document.elementFromPoint(_x, tmpY - 100);
			}
		}

		if ((_elem !== null) && (_elem.tagName === 'IMG')){
			var color = _elem.classList[1];
			if (_color === color){
				var div = _elem.parentNode;
				div.style.border = 'thick solid red';
				_elem.style.margin = '-5px auto auto -5px';
			}
		}
	
}


function turnSelection(_turn){
	if (isWhiteTurn){
		isWhiteTurn = false;
		isBlackTurn = true;
		_turn.removeChild(whiteP);
		_turn.appendChild(blackP);
		return;
	}
	if (isBlackTurn){
		isBlackTurn = false;
		isWhiteTurn = true;
		_turn.removeChild(blackP);
		_turn.appendChild(whiteP);
	}
}

function getCordY (elem){
	var box = elem.getBoundingClientRect();
	return box.top + pageYOffset;
}

function getCordX (elem){
	var box = elem.getBoundingClientRect();
	return box.left + pageYOffset;
}

