#pragma strict

var rayEmmiter : GameObject;
var controlObject : GameObject;

private var startPos : Vector3;
private var hitPoint : Vector3;
private var direction : Vector3;
private var distance : float;
private var hasHit : System.Boolean;

function Start ()
{
	hasHit			= false;
	startPos 		= gameObject.transform.position;
	direction 		= -gameObject.transform.up;
	distance 		= Vector3.Distance(gameObject.transform.position, rayEmmiter.transform.position);
}

function Update () 
{
	//Debug.DrawLine(startPos, startPos + distance * direction, Color.green);
	
	// Let's check if the receiver sees the emitter
	var hit : RaycastHit;
	
	if(Physics.Raycast (startPos, direction, hit, distance))
	{
		if(!hasHit && hit.collider == rayEmmiter.collider)		
		{
			for (var state in controlObject.GetComponent(Animation))
			{
				var state2 = state as AnimationState;
				state2.speed = 1.0;
			}
			
			controlObject.GetComponent(Animation).Play();
			hasHit = true;
		}
		else if(hasHit && hit.collider != rayEmmiter.collider)
		{
			for (var state in controlObject.GetComponent(Animation))
			{
				var state3 = state as AnimationState;
				state3.speed = 0.0;
			}
				
			hasHit = false;		
		}
	}
}