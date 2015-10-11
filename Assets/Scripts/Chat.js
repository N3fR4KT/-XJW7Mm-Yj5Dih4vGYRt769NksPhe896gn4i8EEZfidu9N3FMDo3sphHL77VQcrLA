#pragma strict

var texteChat : String = "";

 function OnGUI () {
  texteChat = GUI.TextField (Rect (0, Screen.height - 20, 200, 20), texteChat, 50);
 }