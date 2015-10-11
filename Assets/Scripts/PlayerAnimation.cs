using UnityEngine;
using System.Collections;

public class PlayerAnimation : MonoBehaviour {

	public Animator anim;

	void Start ()
	{
		anim = GetComponent<Animator> ();

	}
	
	void Update ()
	{
		if (Input.GetAxis("Horizontal") < 0)
		{
			anim.SetBool ("Left", true);

			anim.SetBool ("Bottom", false);
			anim.SetBool ("Right", false);
			anim.SetBool ("Top", false);
		}
		if (Input.GetAxis("Vertical") < 0)
		{
			anim.SetBool ("Bottom", true);

			anim.SetBool ("Left", false);
			anim.SetBool ("Top", false);
			anim.SetBool ("Right", false);
		}
		if (Input.GetAxis("Horizontal") > 0)
		{
			anim.SetBool ("Right", true);

			anim.SetBool ("Left", false);
			anim.SetBool ("Bottom", false);
			anim.SetBool ("Top", false);
		}
		if (Input.GetAxis("Vertical") > 0)
		{
			anim.SetBool ("Top", true);

			anim.SetBool ("Bottom", false);
			anim.SetBool ("Left", false);
			anim.SetBool ("Right", false);
		}
//RUNNING ICI       \/  \/  \/
		if (Input.GetAxis ("Horizontal") < 0) {
			anim.SetBool ("RunLeft", true);
		} 
		else
		{
			anim.SetBool ("RunLeft", false);
		}
		if (Input.GetAxis ("Horizontal") > 0) {
			anim.SetBool ("RunRight", true);
		} 
		else
		{
			anim.SetBool ("RunRight", false);
		}
		if (Input.GetAxis ("Vertical") < 0) {
			anim.SetBool ("RunBottom", true);
		} 
		else
		{
			anim.SetBool ("RunBottom", false);
		}
		if (Input.GetAxis ("Vertical") > 0) {
			anim.SetBool ("RunTop", true);
		} 
		else
		{
			anim.SetBool ("RunTop", false);
		}
	}
}
