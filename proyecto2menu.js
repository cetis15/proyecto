var miMenuDesplegable, miMenuDesplegable2;//variables
function mostrar(){//funcion para mostrar el desplegable
	//body
	document.getElementById('miMenu').classList.toggle("mostrar");
	document.getElementById('miMenu2').classList.remove("mostrar");
}
window.onclick=function(e){
	if(!e.target.matches(".boton_desplegar")){
		miMenuDesplegable=document.getElementById('miMenu');
		if (miMenuDesplegable.classList.contains('mostrar')) {
			miMenuDesplegable.classList.remove("mostrar");
		}
	}
}
function mostrar2(){
	//body
	document.getElementById('miMenu2').classList.toggle("mostrar");
	document.getElementById('miMenu').classList.remove("mostrar");
	
}
window.onclick=function(e){
	if(!e.target.matches(".boton_desplegar")){
		miMenuDesplegable2=document.getElementById('miMenu2');
		if (miMenuDesplegable2.classList.contains('mostrar')) {
			miMenuDesplegable2.classList.remove("mostrar");
		}
	}
}