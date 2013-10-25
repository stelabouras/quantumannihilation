#pragma strict

var shootType : int;

function OnTriggerEnter (other : Collider)
{
	Destroy(gameObject);
	
	if(other.tag != "unstable")
		return;
	
	var script : States;
	script = other.GetComponent(States);
	
	if(shootType == 1)
	{
		other.isTrigger = false;
		script.MakeMatter();
	}
	else
	{
		other.isTrigger = true;
		script.MakeAntimatter();
	}
}