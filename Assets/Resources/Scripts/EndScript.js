#pragma strict

function Start () {

	var talk = GameObject.Find("Talk");
	talk.GetComponent(GUIText).enabled = false;
	talk.GetComponent(ScientistTalk).enabled = false;
	var cineCamera = GameObject.Find("CineCamera");
	cineCamera.GetComponent(Camera).enabled = false;
	cineCamera.GetComponent(AudioListener).enabled = false;
	var theEnd = GameObject.Find("TheEnd");
	theEnd.GetComponent(TextMesh).text = "";
	var q = GameObject.Find("Question");
	q.GetComponent(TextMesh).text = "";
}

function Update () {

}

function OnTriggerEnter (other : Collider)
{
	if (other.gameObject.tag != "Player")
		return;
	
	var character = GameObject.Find("Game Character");
	character.GetComponent(AudioSource).Stop();
	
	var gun = GameObject.Find("Gun");
	gun.SetActive(false);
	
	var box = GameObject.Find("thebox");
	Destroy(box);
	
	var pallet = GameObject.Find("pallet");
	pallet.GetComponent(MeshRenderer).material.color = Color(1,0,0,1.0);
	pallet.GetComponent(Animation).Play();
	
	var door = GameObject.Find("PlayerDoor");
	door.GetComponent(Animation).Play();

	var lights = GameObject.FindGameObjectsWithTag("light");
	
	for(var light in lights)
	{
		light.GetComponent(Animation).Play();	
	}
		
	var camera = GameObject.Find("Main Camera");
	camera.GetComponent(Camera).enabled = false;
	camera.GetComponent(AudioListener).enabled = false;

	var cineCamera = GameObject.Find("CineCamera");
	cineCamera.GetComponent(AudioListener).enabled = true;
	cineCamera.GetComponent(Camera).enabled = true;
	cineCamera.GetComponent(AudioSource).Play();
	cineCamera.GetComponent(Animation).Play();

	var talk = GameObject.Find("Talk");
	talk.GetComponent(AudioSource).enabled = false;
	talk.GetComponent(AudioSource).enabled = true;
	talk.GetComponent(GUIText).enabled = true;
	talk.GetComponent(ScientistTalk).enabled = true;
	
	var theEnd = GameObject.Find("TheEnd");
	theEnd.GetComponent(TextMesh).text = "The End";
	theEnd.GetComponent(Animation).Play();
	
	var q = GameObject.Find("Question");
	q.GetComponent(TextMesh).text = "?";
	q.GetComponent(Animation).Play();

}