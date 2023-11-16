
	function dateTime(){
		document.getElementById('dateTime').innerHTML= Date();
	}

	function changeContent(){
		document.getElementById('changeContent').innerHTML='Hello JavaScript!';
	}

	function changeAttributeOn(){
		document.getElementById('changeAttribute').src='images/pic_bulbon.gif';
	}
	function changeAttributeOff(){
		document.getElementById('changeAttribute').src='images/pic_bulboff.gif';
	}

	function changeStyle(){
		document.getElementById('changeStyle').style.fontSize='50px';
	}

	function changeColor(){
		document.getElementById('changeColor').style.color='red';
	}

	function hide(){
		document.getElementById('hideShow').style.display='none';
	}
	function show(){
		document.getElementById('hideShow').style.display='block';
	}