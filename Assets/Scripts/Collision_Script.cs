using UnityEngine;
using System.Collections;

public class Collision_Script : MonoBehaviour
{
	public GameObject House;
	public GameObject House2;

	void OnTriggerEnter2D(Collider2D coll)
	{
		if (coll.gameObject.tag == "House")
		{
			House.GetComponent<SpriteRenderer>().color = new Color(1f, 1f, 1f, .25f);
			House2.GetComponent<SpriteRenderer>().color = new Color(1f, 1f, 1f, .25f);
			//House.SetActive(false);
			//Debug.Log ("Collision Event.");
		}
	}
	
	void OnTriggerStay2D(Collider2D coll)
	{
		if (coll.gameObject.tag == "House")
		{
			House.GetComponent<SpriteRenderer>().color = new Color(1f, 1f, 1f, .25f);
			House2.GetComponent<SpriteRenderer>().color = new Color(1f, 1f, 1f, .25f);
			//House.SetActive(false);
			//Debug.Log ("Collision Stay Event.");
		}
	}
	
	void OnTriggerExit2D(Collider2D coll)
	{
		if (coll.gameObject.tag == "House")
		{
			House.GetComponent<SpriteRenderer>().color = new Color(1f, 1f, 1f, 1f);
			House2.GetComponent<SpriteRenderer>().color = new Color(1f, 1f, 1f, 1f);
			//House.SetActive (true);
			//Debug.Log ("Collision Exit Event.");
		}

	}
}
