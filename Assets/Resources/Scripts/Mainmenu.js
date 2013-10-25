#pragma strict

var style : GUIStyle;

function Start ()
{
	Screen.lockCursor = false;
}

static function IsBrowser() {
	return (Application.platform == RuntimePlatform.WindowsWebPlayer ||
		Application.platform == RuntimePlatform.OSXWebPlayer);
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
	var margin = 100;
	
	var playRect = Rect(Screen.width / 2.0 - 50 - 100 - margin, Screen.height - 80, 100, 50);
	var creditsRect = Rect(Screen.width / 2.0 - 50, Screen.height - 80, 100, 50);
	
	if(IsBrowser())
	{
		playRect = Rect(Screen.width / 2.0 - 100 - margin / 2.0, Screen.height - 80, 100, 50);
		creditsRect = Rect(Screen.width / 2.0 + margin / 2.0, Screen.height - 80, 100, 50);
	}

	if (GUI.Button (playRect, "Play", style)) 
	{
		Application.LoadLevel("Intro");	
	}
	
	if (GUI.Button (creditsRect, "Credits", style)) 
	{
		Application.LoadLevel("Credits");	
	}
	
	if (!IsBrowser() && (Input.GetKey("escape") || GUI.Button (Rect (Screen.width / 2.0 + 50 + margin, Screen.height - 80,100, 50), "Exit", style))) 
	{
		Application.Quit();
	}
}