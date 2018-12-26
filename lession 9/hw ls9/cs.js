var box = document.getElementsByClassName("box");
for (var i = 0; i < box.length; i++) {
	box[i].addEventListener("click",function(){

	var active = document.getElementsByClassName("active")[0];
	active.className ="picture";

	this.children.className = "picture active";
	});
}
