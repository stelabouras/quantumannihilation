// Reset button resets the unstablephysics boxes

#pragma strict

var style : GUIStyle;

private var enableButton;
private var showHelp;

var unstablePhysics : GameObject;

private var unstableElements : Array;
private var unstablePositions: Vector3[];
private var unstableRotations: Quaternion[];
private var unstableScales : Vector3[];
private var unstableTriggers : System.Boolean[];
private var unstableMaterials : Material[];
private var unstableLayers : int[];

function Start ()
{
	enableButton 	= false;
	showHelp 		= false;
	
	// Get the starting positions of all the unstable objects of the scene
	var unstableElementsTemp = GameObject.FindGameObjectsWithTag("unstable"); 
	
	unstableElements = new Array();
	
	// Filter them to get only the physics ones
	for(var unstable : GameObject in unstableElementsTemp)
	{
		if(!unstable.rigidbody)
			continue;
	
		unstableElements.Push(unstable);
	}
		
	unstablePositions 	= new Vector3[unstableElements.length];
	unstableRotations 	= new Quaternion[unstableElements.length];
	unstableScales 		= new Vector3[unstableElements.length];
	unstableTriggers 	= new System.Boolean[unstableElements.length];
	unstableMaterials 	= new Material[unstableElements.length];
	unstableLayers 		= new int[unstableElements.length];
		
	for(var i = 0; i < unstableElements.length; i++)
	{			
		var unstable = unstableElements[i] as GameObject;
		
		unstablePositions[i] 	= unstable.transform.position;
		unstableRotations[i] 	= unstable.transform.rotation;
		unstableScales[i] 		= unstable.transform.localScale;		
		unstableTriggers[i] 	= unstable.GetComponent(BoxCollider).isTrigger;
		unstableMaterials[i] 	= unstable.GetComponent(MeshRenderer).material;
		unstableLayers[i]		= unstable.layer;
	}
}

function Update ()
{
	if(enableButton && Input.GetButtonUp("Use"))
	{
		for(var i = 0; i < unstableElements.length; i++)
		{
			var unstable 	= unstableElements[i] as GameObject;				
			
			var newUnstable = Instantiate(unstablePhysics, unstablePositions[i], unstableRotations[i]);	
			newUnstable.transform.localScale = unstableScales[i];
			newUnstable.GetComponent(BoxCollider).isTrigger = unstableTriggers[i];
			newUnstable.GetComponent(MeshRenderer).material = unstableMaterials[i];
			newUnstable.layer = unstableLayers[i];
			
			Destroy(unstable);
			
			unstableElements[i] = newUnstable;		
		}	
	}
}

function OnGUI ()
{
	if(showHelp)
		GUI.Label(new Rect(0, Screen.height - 20, Screen.width, 20),"E: Reset Materials", style);
}

function OnTriggerEnter (other : Collider)
{
	if (other.gameObject.tag != "Player")
		return;
		
	enableButton = true;

	if(!showHelp)
	{
		CancelInvoke();
		
		showHelp = true;
		
		Invoke("RemoveHelp", 3);
	}
}

function OnTriggerExit (other : Collider)
{
	RemoveHelp();
}

function RemoveHelp ()
{
	if(showHelp == false)
		return;
		
	showHelp = false;
}