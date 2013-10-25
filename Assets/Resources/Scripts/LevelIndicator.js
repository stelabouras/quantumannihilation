#pragma strict

private var showText = false;
var text : System.String = "";
var style : GUIStyle;

function Start ()
{
	showText 					= true;
	style.normal.textColor.a 	= 0;
	
	FadeIn();	
}

function OnGUI()
{
	if(showText) 
	{
		GUI.Label(Rect(0,Screen.height / 2.0 - 150.0,Screen.width, 30), text, style);	
	}
}

function Update()
{
	if (Input.GetKeyUp(KeyCode.Return))
	{
		Screen.fullScreen = !Screen.fullScreen;
	}
}

function StopShowingText () 
{
	showText = false;
}

function FadeIn()
{
	while(style.normal.textColor.a < 1.0)
	{
		style.normal.textColor.a += Time.deltaTime / 2.0;
		yield;
	}
	
	Invoke("StopShowingText", 2);
}