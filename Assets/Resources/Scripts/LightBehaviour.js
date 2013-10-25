#pragma strict

var lineLength : int			= 100;
var objectToInteract : GameObject;
var beamMaterial : Material;

private var lengthOfLineRenderer : int 	= 2;
private var startPos : Vector3;
private var objectCollider : BoxCollider;
private var lineRenderer : LineRenderer;
private var ray : Ray;
private var hasHit : System.Boolean;
private var hitPoint : Vector3;
private var direction : Vector3;

function Start()
{	
	hasHit = false;
	startPos = gameObject.transform.position;
	direction = -gameObject.transform.up;
	
	lineRenderer = gameObject.AddComponent(LineRenderer);
	lineRenderer.material = beamMaterial;
	lineRenderer.SetColors(Color.red, Color.red);
	lineRenderer.SetWidth(.5,.5);
	lineRenderer.SetVertexCount(lengthOfLineRenderer);
	 
	objectCollider = objectToInteract.GetComponent(BoxCollider);
	ray = new Ray(startPos, direction);
}

function Update()
{
	Debug.DrawLine(startPos, startPos + lineLength * direction, Color.green);
	
	if(!hasHit)
	{
		lineRenderer.SetColors(Color.green, Color.green);
	
		for(var i : int = 0; i < lengthOfLineRenderer; i++) 
		{
			var pos : Vector3 = startPos + ((i * (50 / (lengthOfLineRenderer - 1))) * direction) + Vector3(i, Mathf.Sin(i + Time.time) / 20.0, 0);
			lineRenderer.SetPosition(i, pos);
		}
	}
	else
	{
		lineRenderer.SetColors(Color.red, Color.red);
	
		lineRenderer.SetPosition(0, startPos);
		lineRenderer.SetPosition(1, hitPoint);
	}

	// If ray hits the box
	var hit : RaycastHit;
	
	if(objectCollider.Raycast(ray, hit, lineLength))
	{
		// If the box is in material form
		if(!hasHit && !objectCollider.isTrigger)
		{
			hasHit = true;			
			hitPoint = hit.point;
		}
		else if(hasHit && objectCollider.isTrigger)
		{
			hasHit = false;
		}
	}
	else
	{
		hasHit = false;
	}
}