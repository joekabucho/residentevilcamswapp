#pragma strict

var cam1 : Camera;
var cam2 : Camera;

private var walkedIn : boolean = false;

function Start()
{
	cam1.camera.enabled = true;
	cam2.camera.enabled = false;
}

function OnTriggerEnter(Col : Collider)
{
	if(Col.tag == "Player")
	{
		walkedIn = !walkedIn;
	}
}

function Update()
{
	if(walkedIn == true)
	{
		cam1.camera.enabled = false;
		cam2.camera.enabled = true;
	}
	
	if(walkedIn == false)
	{
		cam1.camera.enabled = true;
		cam2.camera.enabled = false;
	}
}