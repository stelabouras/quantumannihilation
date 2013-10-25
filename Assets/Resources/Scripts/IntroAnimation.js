#pragma strict

var style : GUIStyle;

function Start ()
{
	gameObject.animation.Play();
}

function Update()
{
	if (Input.GetKeyUp(KeyCode.Return))
	{
		Screen.fullScreen = !Screen.fullScreen;
	}
}

function OnGUI ()
{
	if (Input.GetKey("escape") || GUI.Button (Rect (Screen.width - 150, Screen.height - 80,100,50), "Skip", style)) 
	{
		Application.LoadLevel("Level01");
	}
}

function ShowFirstLevel()
{
	Application.LoadLevel("Level01");
}