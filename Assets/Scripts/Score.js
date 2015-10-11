#pragma strict

var jouer : Transform;
var equipe : String;
var estMort = true;

/*function Update () {

	if(Network.peerType == NetworkPeerType.Client || NetworkPeerType.Server){
	
		if(equipe == ""){
		
		}
	}
}*/

function OnGUI(){

	if(Network.peerType == NetworkPeerType.Client || NetworkPeerType.Server){
	
		if(equipe == ""){
			if(GUI.Button(Rect(Screen.width / 2 - 75, Screen.height / 2 - 15, 50, 30), "Rouge")){
			
			}
			if(GUI.Button(Rect(Screen.width / 2 + 25, Screen.height / 2 - 15, 50, 30), "Bleu")){
			
			}
		}
	}

}