#pragma strict

var style : GUIStyle;

private var showText1 = false;
private var showText2 = false;

function OnGUI()
{	
	if(showText1)
		GUI.Label(new Rect(0, Screen.height - 20, Screen.width, 20),"MOUSE 1: Creates matter from an energy aura", style);
		
	if(showText2)
		GUI.Label(new Rect(0, Screen.height - 20, Screen.width, 20),"MOUSE 2: Dissolves matter leaving the energy aura", style);
}

function ShowHelp(help : int)
{
	if(help == 1)
	{
		showText1 = true;
		Invoke("stopShowingHelp1", 10);
	}	
	else
	{
		showText2 = true;
		Invoke("stopShowingHelp2", 10);
	}
}
	
function stopShowingHelp1()
{
	showText1 = false;
}

function stopShowingHelp2()
{
	showText2 = false;
}