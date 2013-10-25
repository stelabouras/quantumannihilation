#pragma strict

var style : GUIStyle;
var gunType : int;
var sound : AudioClip;

function OnTriggerEnter (other : Collider)
{
	if (other.gameObject.tag != "Player")
		return;
		
	Destroy(gameObject);
	
	var player : GameObject;
	var playerChildren : Component[];
	
	player	 		= GameObject.FindGameObjectWithTag ("Player");
	playerChildren 	= player.GetComponentsInChildren (typeof(Transform), true);
	
	for (var playerChild : Component in playerChildren)
	{
		playerChild.gameObject.SetActive(true);
	}		
	
	var script : ShowHelp;
	script = other.GetComponent(ShowHelp);
	script.ShowHelp(gunType);

	AudioSource.PlayClipAtPoint(sound, transform.position);
	
	if(Application.loadedLevel == 8)
	{
		var shootScript = GameObject.Find("Spawn Blob").GetComponent(Shoot);
		
		shootScript.enableShootAlt = true;
		
		var crosshair = GameObject.Find("Gun").GetComponent(Crosshair);
		
		crosshair.LoadNewCrosshair();
	}
}