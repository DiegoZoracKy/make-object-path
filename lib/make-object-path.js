/**
 * Creates an object structure based on a Path defined in an Array structure (accepting variables and expressions evaluations) or String written in dot notation (e.g. 'objParent.objChild.objDeep')
 * It can return a new object or create the path into an existent one
 * A value can be set into the deeper object's property
 *
 * @param  {Object Literal} _src Object to be modified. This param can be ommitted, and in this case, it will treate the first argument as a Path and a new object will be returned
 * @param  {Array|String} _path The Path structure to be created or modified. Can be an Array (e.g. [Parent, Child, lastChild]) or a String in dot notation (e.g. 'Parent.Child.lastChild')
 * @param  {Array|String|Object|Number} _val  The value to be set to the deeper property created. (Ooptional)
 * @return {Object Literal}
 */
var makeObjectPath = function(_src, _path, _val) {

	var src = _src,
		path = _path,
		val = _val;

	if (arguments[0] instanceof Array || typeof(arguments[0]) == 'string') {
		src = {};
		path = arguments[0];
		val = arguments[1] || null;
	}

	path = (typeof(path) == 'string') ? path.split('.') : path;

	var o = src;
	var currentO = o;
	for (var i in path) {
		currentO[path[i]] = (i != path.length - 1) ? currentO[path[i]] || {} : (val) ? val : {};
		currentO = currentO[path[i]];
	}
	return o;
} 

if (typeof module !== 'undefined' && module.exports)
	module.exports = makeObjectPath;