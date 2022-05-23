const textoEntrada=document.querySelector(".Entrada");

const mensajeSalida=document.querySelector(".Salida");

function encriptar(StringParaEncriptar){

	let matrizCodigo=[["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]];

	StringParaEncriptar=StringParaEncriptar.toLowerCase();

	for(let i = 0; i < matrizCodigo.length; i++){

		if(StringParaEncriptar.includes(matrizCodigo [i][0])){

			StringParaEncriptar=StringParaEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
		}
	}

	return StringParaEncriptar;
	
}


function btnencriptar(){
	const textoEncriptado=encriptar(textoEntrada.value);
	mensajeSalida.value=textoEncriptado;
	
}

function btndesencriptar(){

	const textoDesencriptado=desencriptar(mensajeSalida.value);
	mensajeSalida.value=textoDesencriptado;
}

function desencriptar(MensajeEncriptado){

	let matrizAnti=[["aimes","a"],["enter","e"],["imes","i"],["ober","o"],["ufat","u"]];

	for (let i=0; i < matrizAnti.length; i++){

		if(MensajeEncriptado.includes(matrizAnti[i][0])){

			MensajeEncriptado=MensajeEncriptado.replaceAll(matrizAnti[i][0],matrizAnti[i][1]);
		}
	}

	return MensajeEncriptado;
}

function btncopiar(){
	let texto=document.getElementById("textosalida");
	texto.select();
	texto.setSelectionRange(0,99999);
	document.execCommand("copy");
	
}