using UnityEngine;
using System.Collections;

public class CollisionDetectionSystem : MonoBehaviour
{
	public float Transparence;

	void OnTriggerEnter2D(Collider2D coll)
	{
		if (coll.gameObject.tag == "Player")
		{
			GetComponent<SpriteRenderer>().color = new Color(1f, 1f, 1f, Transparence);
		}
	}
	
	void OnTriggerStay2D(Collider2D coll)
	{
		if (coll.gameObject.tag == "Player")
		{
			GetComponent<SpriteRenderer>().color = new Color(1f, 1f, 1f, Transparence);
		}
	}
	
	void OnTriggerExit2D(Collider2D coll)
	{
		if (coll.gameObject.tag == "Player")
		{
			GetComponent<SpriteRenderer>().color = new Color(1f, 1f, 1f, 1f);
		}
		
	}
}
