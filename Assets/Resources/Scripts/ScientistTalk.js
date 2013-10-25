var letterPause = 0.1;
var sound : AudioClip;

private var word;

function Start ()
{
	word = guiText.text;
	guiText.text = "";
	
	yield WaitForSeconds(4.0);
	TypeText();
}

function TypeText () 
{
    for (var letter in word.ToCharArray())
    {

        guiText.text += letter;
		audio.PlayOneShot(sound, 2.0);
		
        yield WaitForSeconds (letterPause);
    }      

	Destroy(gameObject, 2);
}