// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
var regexstr = /(\'|\")/g;
var regexnums = /(\-|[0-9]|\.)/g;
var index = 0;
var tempstring = '';
var outputArray = [];
var tempnum = '';
//strings
if(json[0] === '\'' || json[0] === '\"'){
	return json.replace(regexstr, "");
}

var strtest = function(){
	if(!regexstr.test(json.charAt(index))){
		tempstring += (json.charAt(index));
		index ++;
		strtest();
	}
}
var numtest = function() {
	if(regexnums.test(json.charAt(index))){
		console.log(json.charAt(index))
		tempnum += (json.charAt(index));
		index++;
		numtest();
	}
}
	// if(regexstr.test(json.charAt(index))){
	// 	return tempstring;
	// }
//arrays
if(json[0] === '['){
	var arrayfunc = function(){
	index++;
	 

		if(index === json.length-1){
			return '';
		}
		if(json.charAt(index) === ','){
			arrayfunc();
		}
		
		if(regexstr.test(json.charAt(index))){
			tempstring = '';
			index++
			strtest();
			outputArray.push(tempstring);
			arrayfunc();
		}
		if(regexnums.test(json.charAt(index))){
			numtest();
			outputArray.push(Number(tempnum));
			arrayfunc();
		}
	}
		
	arrayfunc();
	return outputArray;
}


};

//if json[0] === '['
//create an output array;
//if json[1] === """
	// for each char after - !== , push to output string
	// if === , 
//if json[0] === '{'

// var tfn = function(char) {
// 	switch(char) {
// 		case 't' :
// 			next('t');
// 			next('r');
// 			next('u');
// 			next('e');
// 			return true;
// 		case 'f' :
// 			next('f');
// 			next('a');
// 			next('l');
// 			next('s');
// 			next('e');
// 			return false;
// 		case 'n' :
// 			next('n');
// 			next('u');
// 			next('l');
// 			next('l');
// 			return null;

// 	}