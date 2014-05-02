#pragma strict

public var speed : float ;

function FixedUpdate () {
	var moveHorizontal = Input.GetAxis("Horizontal");
	var moveVertical = Input.GetAxis("Vertical");
	
	var movement = new Vector3(moveHorizontal, 0.0, moveVertical);
	
	rigidbody.AddForce(movement * speed * Time.deltaTime);
}