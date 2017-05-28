/**
 * Creates an object structure based on a Path defined in an Array structure (accepting variables and expressions evaluations) or String written in dot notation (e.g. 'objParent.objChild.objDeep')
 * It can return a new object or create the path into an existent one
 * A value can be set into the deeper object's property
 *
 * @param  {Object Literal} src Object to be modified. This param can be ommitted, and in this case, it will treate the first argument as a Path and a new object will be returned
 * @param  {Array|String} path The Path structure to be created or modified. Can be an Array (e.g. [Parent, Child, lastChild]) or a String in dot notation (e.g. 'Parent.Child.lastChild')
 * @param  {Array|String|Object|Number} value  The value to be set to the deeper property created. (Ooptional)
 * @param  {String} delimiter  The path delimiter (defaults to '.')
 * @return {Object Literal}
 */
function makeObjectPath(src, path, value, delimiter = '.') {

	if (src.constructor !== Object) {
		delimiter = value || delimiter;
		value = path;
		path = src;
		src = {};
	}

	const arrPath = path.constructor === String ? path.split(delimiter) : path;

	arrPath.reduce((result, prop, i) => {
		return result[prop] = i === arrPath.length - 1 ? value : result[prop] || {};
	}, src);

	return src;
}

if (typeof module !== 'undefined' && module.exports){
	module.exports = makeObjectPath;
}
