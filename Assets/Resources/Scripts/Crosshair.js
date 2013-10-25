#pragma strict

var crosshairTexture : Texture2D;
var position : Rect;
static var OriginalOn = true;

function Start () 
{
	if(Application.loadedLevel >= 9)
		crosshairTexture = Resources.Load("2D Stuff/crosshairnew") as Texture2D;
	
	var newWidth = crosshairTexture.width / 2.0;
	var newHeight= crosshairTexture.height/ 2.0;
	
 	position = Rect((Screen.width - newWidth) / 2, (Screen.height - newHeight) /2, newWidth, newHeight);
}

function LoadNewCrosshair()
{
	crosshairTexture = Resources.Load("2D Stuff/crosshairnew") as Texture2D;
}

function OnGUI()
{
    if(OriginalOn == true)
    {
        GUI.DrawTexture(position, crosshairTexture);
    }
}
