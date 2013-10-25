#pragma strict

var enableShootAlt : System.Boolean;
var fireSound : AudioClip;
var fireSoundAlt : AudioClip;
var beamMaterial : Material;

private var showBeam : System.Boolean;
private var lineRenderer : LineRenderer;
private var lengthOfLineRenderer : int 	= 2;
private var projectileRange = 100.0;

function Start () 
{	
	Screen.lockCursor = true;
	showBeam = false;
	
	if(Application.loadedLevel < 9)
		enableShootAlt = false;
	else
		enableShootAlt = true;
		
	/*
	// Line Renderer is disabled for now
	lineRenderer = gameObject.AddComponent(LineRenderer);
	lineRenderer.SetColors(Color.red, Color.red);
	lineRenderer.SetWidth(.1,.1);
	lineRenderer.material = beamMaterial;
	lineRenderer.SetVertexCount(lengthOfLineRenderer);
	*/
}

function Update () 
{
	var startPos : Vector3 = Camera.main.transform.position + 1.0 * Camera.main.transform.forward;
	var direction: Vector3 = Camera.main.transform.forward;
	var direction2:Vector3 = gameObject.transform.forward;
	var hit : RaycastHit;
	var layerMask : int = 1 << 0 | 1 << 2;
	
	//Debug.DrawLine(startPos, startPos + projectileRange * direction, Color.green);
	
	if(Input.GetButtonUp("Fire1") || (enableShootAlt && Input.GetButtonUp("Fire2")))
	{
		if(Physics.Raycast (startPos, direction, hit, projectileRange, layerMask))
		{
			if(hit.collider.tag == "unstable")
			{				
				var script : States;
				script = hit.collider.GetComponent(States);
				
				if(Input.GetButtonUp("Fire1"))
				{
					hit.collider.isTrigger = false;
					script.MakeMatter();
				}
				else
				{
					hit.collider.isTrigger = true;
					script.MakeAntimatter();
				}			
			}
		}

		particleSystem.startSize = 0.1;
		
		if(Input.GetButtonUp("Fire1"))
		{
			particleSystem.startColor = Color.red;
			AudioSource.PlayClipAtPoint(fireSound, transform.position);
		}
		else
		{
			particleSystem.startColor = Color.white;
			AudioSource.PlayClipAtPoint(fireSoundAlt, transform.position);
		}
		
		particleSystem.Play();
		showBeam = true;
	}
	
	/*
	if(showBeam)
	{
		lineRenderer.enabled = true;
		
		for(var i : int = 0; i < lengthOfLineRenderer; i++) 
		{
			var pos : Vector3 = gameObject.transform.position + (i * (projectileRange / (lengthOfLineRenderer - 1)) * direction2) + Vector3(i, Mathf.Sin(i + 30 * Time.time) / 20.0, 0);
			lineRenderer.SetPosition(i, pos);			
		}
		
		CancelInvoke("StopBeam");
		Invoke("StopBeam", 2.0);
	}
	*/
}

function StopBeam()
{
	lineRenderer.enabled = false;
	showBeam = false;
}