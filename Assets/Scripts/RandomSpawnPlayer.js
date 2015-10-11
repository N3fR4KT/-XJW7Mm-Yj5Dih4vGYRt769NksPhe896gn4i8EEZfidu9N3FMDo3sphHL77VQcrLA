#pragma strict
var Player : GameObject; //Player Object
//var Player : Transform; //Player Prefab
var spawnPoints : Transform[]; //All Spawn Points

function Start () {
 var Startpos : Transform = spawnPoints[Random.Range(0, spawnPoints.length)]; //Select a random Spawn
 Player.transform.position = Startpos.transform.position; //Teleport player to the random spawn
 //Instantiate(Player, Startpos.transform.position, Quaternion.identity);//Teleport player to the random spawn PREFAB MODE.
}