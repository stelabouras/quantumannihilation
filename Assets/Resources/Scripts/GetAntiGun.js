#pragma strict

var style : GUIStyle;

function OnTriggerEnter (other : Collider)
{
	Destroy(gameObject);
	
	var playerGun : GameObject;
	var playerChildren : Component[];
	
	playerGun 		= GameObject.FindGameObjectWithTag ("Player");
	playerChildren 	= playerGun.GetComponentsInChildren (typeof(Transform), true);
	
	for (var playerChild : Component in playerChildren)
	{
		playerChild.gameObject.SetActive(true);
	}		
	
	var script : ShowHelp;
	script = other.GetComponent(ShowHelp);
	script.ShowHelp(1);
}