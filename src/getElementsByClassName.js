// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var output = [];
  // var docbody = document.body //[text, script, text, button.btn.random, text, button.btn.add, text, div.container, text] <button class='btn.random'>

var innerfunc = function (node) {
	for(var i = 0; i < node.childNodes.length; i++) {
		if(node.childNodes[i].childNodes.length > 0) {
			innerfunc(node.childNodes[i]);
		} if(node.childNodes[i].getAttribute !== undefined){
			if(node.childNodes[i].classList.contains(className)){
				output.unshift(node.childNodes[i]);
			}
		}
	}	
}

innerfunc(document);
return output;

};
//<div class='container'>
//	<div class='square'>
//	</div>
//</div>
//DOMTokenList ['Square', value: 'square' ] <== classList



