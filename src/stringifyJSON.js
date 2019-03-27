// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  var outputArray = [];
  var vals = [];
  var keys = [];

if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null){
	return '' + obj;	
}
  if(typeof obj === 'string'){
	return '\"'+ obj +'\"'
  }
 

  if(Array.isArray(obj)){
  	if(obj[0]=== undefined){
  		return '[]';
  	} else {
  		obj.forEach(function(value){
  			outputArray.push(stringifyJSON(value))
  		});
  	} return '[' + outputArray + ']' // '[[x , 1]]''
  }

  if(obj instanceof Object){
  	keys = Object.keys(obj);
  	keys.forEach(function(key){
  		var eachKey = obj[key];
  		var outputKey = '\"' + key + '\":';
  		if(typeof eachKey === 'function' || typeof eachKey === undefined){
  			outputArray.push('');
  		} else if (typeof eachKey === 'string'){
  				outputArray.push(outputKey + '\"' + eachKey + '\"');
		} else if (eachKey instanceof Object){
  			outputArray.push(outputKey + stringifyJSON(eachKey)); 
  		} else if(typeof eachKey === 'number' || typeof eachKey === 'boolean' || eachKey === null){
  			outputArray.push(outputKey + eachKey)
  		}
  	});
  	 return '{' + outputArray + '}';
  }
};

