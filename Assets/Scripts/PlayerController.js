#pragma strict

public var speed : float ;
public var countText : GUIText;
public var winText : GUIText;
private var count : int;

function Start(){
	count = 0;
	SetCountText();
	winText.text = "";
}

function FixedUpdate () {
	var moveHorizontal = Input.GetAxis("Horizontal");
	var moveVertical = Input.GetAxis("Vertical");
	
	var movement = new Vector3(moveHorizontal, 0.0, moveVertical);
	
	rigidbody.AddForce(movement * speed * Time.deltaTime);
}

function OnTriggerEnter(other : Collider){
	if(other.gameObject.tag == "PickUp"){
		other.gameObject.SetActive(false);
		count = count + 1;
		SetCountText();
	}
}

function SetCountText(){
	countText.text = "Count: " + count;
	if(count >= 13){
		winText.text = "YOU WIN !!";
	}
}