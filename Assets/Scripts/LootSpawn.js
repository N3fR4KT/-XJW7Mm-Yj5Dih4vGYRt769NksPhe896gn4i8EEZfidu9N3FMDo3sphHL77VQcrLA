private var i : int;
var spawnPoints : Transform[];  // Array of spawn points to be used.
var itemsPrefabs : GameObject[]; // Array of different Items that are used.
var amountItems = 1;  // Total number of items to spawn.
var yieldTimeMin = 20;  // Minimum amount of time before spawning items randomly.
var yieldTimeMax = 30;  // Don't exceed this amount of time between spawning items randomly.

 
function Start()
{
 //FIRST SPAWN
 var Startobj : GameObject = itemsPrefabs[Random.Range(0, itemsPrefabs.length)]; // Randomize the different items to instantiate.
 var Startpos : Transform = spawnPoints[Random.Range(0, spawnPoints.length)];  // Randomize the spawnPoints to instantiate item at next.
 Instantiate(Startobj, Startpos.position, Startpos.rotation);
 //// SECOND SPAWN
 var Startobj2 : GameObject = itemsPrefabs[Random.Range(0, itemsPrefabs.length)]; // Randomize the different items to instantiate.
 var Startpos2 : Transform = spawnPoints[Random.Range(0, spawnPoints.length)];  // Randomize the spawnPoints to instantiate item at next.
 Instantiate(Startobj2, Startpos2.position, Startpos2.rotation);
 //// THIRD SPAWN
 var Startobj3 : GameObject = itemsPrefabs[Random.Range(0, itemsPrefabs.length)]; // Randomize the different items to instantiate.
 var Startpos3 : Transform = spawnPoints[Random.Range(0, spawnPoints.length)];  // Randomize the spawnPoints to instantiate item at next.
 Instantiate(Startobj3, Startpos3.position, Startpos3.rotation);

 Spawn();
}

function LoopSpawn()
{
 Spawn();
}

function Spawn() 
{ 
    for (i=0; i<amountItems; i++) // How many items to instantiate total.
    {
      yield WaitForSeconds(Random.Range(yieldTimeMin, yieldTimeMax));  // How long to wait before another item is instantiated.
      //// FIRST SPAWN
      var obj : GameObject = itemsPrefabs[Random.Range(0, itemsPrefabs.length)]; // Randomize the different items to instantiate.
      var pos : Transform = spawnPoints[Random.Range(0, spawnPoints.length)];  // Randomize the spawnPoints to instantiate item at next.
      Instantiate(obj, pos.position, pos.rotation);
      //// SECOND SPAWN
      var obj2 : GameObject = itemsPrefabs[Random.Range(0, itemsPrefabs.length)]; // Randomize the different items to instantiate.
      var pos2 : Transform = spawnPoints[Random.Range(0, spawnPoints.length)];  // Randomize the spawnPoints to instantiate item at next.
      Instantiate(obj2, pos2.position, pos2.rotation);
      //// THIRD SPAWN
      // var obj3 : GameObject = itemsPrefabs[Random.Range(0, itemsPrefabs.length)]; // Randomize the different items to instantiate.
      // var pos3 : Transform = spawnPoints[Random.Range(0, spawnPoints.length)];  // Randomize the spawnPoints to instantiate item at next.
        // Instantiate(obj3, pos3.position, pos3.rotation);      
      LoopSpawn();
   }
}