# make-object-path

[![Build Status](https://api.travis-ci.org/DiegoZoracKy/make-object-path.svg)](https://travis-ci.org/DiegoZoracKy/make-object-path)

Creates an object structure based on a Path defined in an Array structure or String written in dot notation, e.g. 'objParent.objChild.objDeep', or with any delimiter that can be defined as a parameter, e.g. 'objParent|objChild|objDeep'.
It can return a new object or create the path into an existing one.
A value can be defined to be set into the deepest object's property.

**Node.js** and **Browser** ready.


## Installation
```bash
npm install make-object-path
```

## Usage / Examples

### String path
```javascript
const makeObjectPath = require('make-object-path');

{
	// Creating the path without setting any value to the property
	const result = makeObjectPath('root.parent.child');

	// result:
	// {
	// 	"root":{
	// 		"parent":{
	// 			"child": undefined
	// 		}
	// 	}
	// }
}

{
	// Creating the path setting a value to the property + defining a different delimiter
	const result = makeObjectPath('root##parent##child', 'someValue', '##');

	// result:
	// {
	// 	"root":{
	// 		"parent":{
	// 			"child": "someValue"
	// 		}
	// 	}
	// }
}

```

### Array path
```javascript
const makeObjectPath = require('make-object-path');

var variableToBePropertyName = 'propertyName';
var existentObject = {
	"someProperty": null
};

// Creating the path into an existing object
const result = makeObjectPath(existentObject, [variableToBePropertyName, 'createdBy', 'variable'], true);

// result:
//{
//	"someProperty":null,
//	"propertyName":{
//		"createdBy":{
//			"variable": true
//		}
//	}
//}

```