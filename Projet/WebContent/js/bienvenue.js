////function nomMdp(){
////	
////	
////// var vrai = new Boolean(true);
////// var faux = new Boolean(false);
////	 
////	var  element=document.getElementById("txNom").value;
////	var  passW=document.getElementById("txMdp").value;
////	 
////	 if(element.value.length == 0 &&  passW.value.length == 0){   // (txNom.value.length==0) 
////		 														  // element ==0 && passW==0)
////		 														  // message d'erreur
////		 alert ("veuillez remplir les cases");	
////		 
////		 return false;
////
////	 }else{
////		 alert ("bienvenue");
////		 
////		 document.location.href="acceuil.html";
////		 
////		  return true;
////	 }
////	
////	}
////  
//
//function validerLogin(){
//
//	if(!verifObligatoire("txNom")) {
//		alert("Nom obligatoire");
//		return false;
//	}
//	else
//		{
//		if(!verifObligatoire("txMdp")) {
//			alert("mot de passe obligatoire");
//			return false;
//		}
//		else
//		{
//	return true;
//}
//
//// contrôle formulaire
//
//function VerifObligatoire(zone){
//	
//	var zoneelement=document.getElemntById(zone);
//	if(zoneelement.value.length==0){
//		
//		// appel de la méthode qui gére les erreurs
//		gererErreur(zone);
//		return false;}
//	}
//
//} else{
//	zoneelement.style.backgroundColor="";
//	return true;
//	}
//
//// gérer les erreurs
//
//function gererErreur(Zone){
//	
//	var oZone=document.getElementById(zone);
//
//	//tester le focus sur la zone en paramètre
//	
//	oZone.focus();
//	
//	//changer la couleur de la zone
//	
//	oZone.style.backgroundColor="red";
//	
//}
//
//function montrer(zone){
//	
//	var oZone=document.getElementById(zone);
//	oone.style.display='block';
//	
//	
//}	
//function cacher(zone){
//	
//	var oZone=document.getElementById(zone);
//	oZone.style.display=none;
//}
//}

function validationLogin() {
	if (!verifObligatoire("txNom")) {
		alert("Nom obligatoire");
		return false;
	} else {
		if (!verifObligatoire("txMdp")) {
			alert("Mot de passe obligatoire");
			return false;
		} else {
			return true;
		}
	}
}
// controle formulaire
function verifObligatoire(zone) {
	var zoneelement = document.getElementById(zone);
	if (zoneelement.value.length == 0) {
		gererErreur(zone);
		return false;
	} else {
		zoneelement.style.backgroundColor="";
		return true;
	}
}
//gerer les erreurs
function gererErreur(zone){
	var oZone=document.getElementById(zone);
	oZone.focus();
	oZone.style.backgroundColor="#FFA07A";
}
function montrer(zone){
	var oZone=document.getElementById(zone);
	oZone.style.display='block';
}
function cacher(zone){
	var oZone = document.getElementById(zone);
	oZone.style.display='none';
}
