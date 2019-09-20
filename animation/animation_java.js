// JavaScript Document

function startMyAnim(){
/*appends the class "trigger" to your animation id*/
document.getElementById("simpleAnim").classList.add("trigger");
/*removes the class; this will allow users to play the CSS animation more than once*/
setTimeout(function(){document.getElementById("simpleAnim").classList.remove("trigger")},3000);
}