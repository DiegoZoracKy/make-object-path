# makeObjectPath

Creates an object structure based on a Path defined in an Array structure (accepting variables and expressions evaluations) or String written in dot notation (e.g. 'objParent.objChild.objDeep').
It can return a new object or create the path into an existent one.
A value can be set into the deeper object's property.

It can be installed and used on Node environments.

## Usage / Examples

```javascript

makeObjectPath('root.parent.child', 'someValue');

// Output:

{
	"root":{
		"parent":{
			"child":"someValue"
		}
	}
}

```

```javascript

var variableToBePropertyName = 'propertyName';
var existentObject = {
	"someProperty": null	
};

makeObjectPath(existentObject, [variableToBePropertyName, 'createdBy', 'variable'], true);

// Output:

{
	"someProperty":null,
	"propertyName":{
		"createdBy":{
			"variable": true
		}
	}
}

```

## Installation
```javascript

npm install clean-special-chars

```