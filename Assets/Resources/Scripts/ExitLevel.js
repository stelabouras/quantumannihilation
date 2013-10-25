#pragma strict

function OnTriggerStay (other : Collider)
{
	if (other.gameObject.tag == "Player")
	{
		switch(Application.loadedLevel)
		{
			case 2:
				Application.LoadLevel("Level02");
			break;
			case 3:
				Application.LoadLevel("Level03");	
			break;
			case 4:
				Application.LoadLevel("Level04");	
			break;
			case 5:
				Application.LoadLevel("Level05");	
			break;
			case 6:
				Application.LoadLevel("Level06");	
			break;
			case 7:
				Application.LoadLevel("Level07");	
			break;
			case 8:
				Application.LoadLevel("Level08");	
			break;
			case 9:
				Application.LoadLevel("Level09");	
			break;
			case 11:
				Application.LoadLevel("Level10");	
			break;
			case 12:
				Application.LoadLevel("Level11");	
			break;
			case 13:
				Application.LoadLevel("Level12");	
			break;
			case 14:
				Application.LoadLevel("Level13");	
			break;
			case 15:
				Application.LoadLevel("end");	
			break;
		}
	}
}