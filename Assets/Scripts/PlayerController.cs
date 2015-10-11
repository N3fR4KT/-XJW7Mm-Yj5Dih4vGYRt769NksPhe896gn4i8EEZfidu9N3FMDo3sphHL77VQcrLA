using UnityEngine;
using System.Collections;

public class PlayerController : MonoBehaviour
{
	public Vector2 speed = new Vector2(5, 5);
	private Vector2 movement;
	private Animator anim;

	// Use this for initialization
	void Start () {

		anim = gameObject.GetComponent<Animator> ();
	}
	
	// Update is called once per frame
	void Update ()
	{
		// moves the player up down left and right with collision detection.
		//anim.SetFloat ("Speed", Mathf.Abs(Input.GetAxis ("Horizontal")));
		//anim.SetFloat ("Speed", Mathf.Abs(Input.GetAxis ("Vertical")));
		float inputX = Input.GetAxis ("Horizontal");
		float inputY = Input.GetAxis ("Vertical");

		movement = new Vector2 (speed.x * inputX, speed.y * inputY);
	}

	void FixedUpdate()
	{
		GetComponent<Rigidbody2D>().velocity = movement;
	}

}
