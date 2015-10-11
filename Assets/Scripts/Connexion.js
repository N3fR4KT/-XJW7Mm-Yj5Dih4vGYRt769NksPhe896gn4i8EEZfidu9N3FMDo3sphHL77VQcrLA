#pragma strict

var adresse_ip : String;
var port = 25565;
var nombre_joueurs = 15;

function Awake(){
DontDestroyOnLoad(this.gameObject);
}

function OnGUI(){

if(Network.peerType == NetworkPeerType.Disconnected || Network.peerType == NetworkPeerType.Server){
GUI.Label(Rect(5, 0, 200, 20), "Adresse IP du serveur:");
adresse_ip = GUI.TextField(Rect(200, 0, 100, 20), adresse_ip);

		if(GUI.Button(Rect(50, 40, 100, 25), "Se Connecter") && adresse_ip.Length != 0){
		Network.Connect(adresse_ip, port);
		Application.LoadLevel("SceneMAP");
	}

		if(GUI.Button(Rect(250, 40, 150, 25), "Créer un serveur")){
		Network.InitializeServer(nombre_joueurs, port, false);
		Application.LoadLevel("SceneMAP");
		Debug.Log("Clicked Button.");
	}
}

}

function OnServerInitialized(){
Debug.Log("Initialized server.");
}

function OnFailedToConnect(){
Debug.Log("Impossible de se connecter à l'adresse: " + adresse_ip);
}

function OnConnectedToServer(){
Debug.Log("Connection au serveur réussie. Adresse ip: " + adresse_ip);
}

function OnPlayerConnected(){
Debug.Log("Un joueur a rejoind le serveur.");
}