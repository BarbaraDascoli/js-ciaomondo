function gestoreSaluta (){
	try{
		alert("Ciao Mondo");
	}catch(e){
	alert("gestoreSaluta"+e)};
}
function gestoreLoad () {
		var nodoSaluta
		
			try{
				nodoSaluta = document.getElementById ("Saluta");
				nodoSaluta.onClick = gestoreSaluta;
			}catch(e){
				alert("gestoreLoad"+e);
				}
		}
	window.onload = gestoreLoad;