//1. Using dot and bracket notation modify the existing object values 
// to replace the information with your own

var me = {
	'name': 'Jake Overall',
	'age': 29,
	'hair color': 'brown'
};

me.name = "Amy";
me.age = 27;
me['hair color'] = "Light Brown";


//2. Iterate over the object to console.log the propery or key names. 
for (var key in me) {
	if(me.hasOwnProperty(key)) {
		var elem = me[key]
		console.log(key + ": " + elem)
	}
}
