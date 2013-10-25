#pragma strict

var matterMaterial : Material;
var antimatterMaterial : Material;
var sound : AudioClip;

function MakeMatter ()
{	
	if(rigidbody)
		rigidbody.useGravity = true;
	
	gameObject.layer = 0; //"Default"
	
	renderer.material = matterMaterial;
	
	if(Application.loadedLevel > 14)
		renderer.material.color = Color(1.0, 0, 0, 0);
	
	if(Application.loadedLevelName != "MainScene")
		AudioSource.PlayClipAtPoint(sound, transform.position);
}

function MakeAntimatter ()
{	
	if(rigidbody)
		rigidbody.useGravity = false;

	gameObject.layer = 2; //"Ignore Raycast"
	
	renderer.material = antimatterMaterial;
	
	if(Application.loadedLevelName != "MainScene")
		AudioSource.PlayClipAtPoint(sound, transform.position);
}

function Switch ()
{
	if(collider.enabled)
	{
		collider.enabled 	= false;
		MakeAntimatter();
	}
	else
	{
		collider.enabled 	= true;
		MakeMatter();
	}
}

function SwitchAndChangeBackground ()
{
	Switch();
}