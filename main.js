document.write("Hello,This is the wolrd of programming JavaScript." + "<br>"); //This is a separeted line with string.
document.write("\"The morning air was crisp and sharp as Sean walked down the road,"
+ " The pavement was slippery and cold beneath his feet, like a slimy wet fish.\"" //This is a text from Google search, just a example.
+ "-Google Search." + "<br>");
document.write(20+15 + "<br>"); //this is a expression.
window.alert("Hello My friend, click OK!"); //This a window Alert!.

function My_First_Function() {    //This is a function example
  var str= "This is Blue!";
  var result = str.fontcolor("blue"); //Using Fontcolor method str variable, Youn can change to any color you want to. 
  document.getElementById("Blue_Text").innerHTML = result; //Using the value of result into HTML element "Green_text" id.
}