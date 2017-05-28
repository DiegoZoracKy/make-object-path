'use strict';

const makeObjectPath = require('../');
const assert = require('assert');

describe(`String path`, function() {
	it(`must create a new object with properties and value`, function() {
		const result = makeObjectPath('root.parent.child', 'someValue');
		assert.equal(result.root.parent.child, 'someValue');
	});

	it(`must include properties and value into an existent object`, function() {
		const existentObject = { someExistent: 'property' };
		makeObjectPath(existentObject, 'root.parent.child', 'someValue');
		assert.equal(existentObject.root.parent.child, 'someValue');
	});

	it(`must preserve the existent object structure`, function() {
		const existentObject = { someExistent: 'property' };
		makeObjectPath(existentObject, 'root.parent.child', 'someValue');
		assert.equal(existentObject.someExistent, 'property');
	});

	it(`must create a new object with properties without value`, function() {
		const result = makeObjectPath('root.parent.child');
		assert.equal(result.root.parent.child, undefined);
	});

	it(`must include properties without value into an existent object`, function() {
		const existentObject = { someExistent: 'property' };
		makeObjectPath(existentObject, 'root.parent.child');
		assert.equal(existentObject.root.parent.child, undefined);
	});

	it(`must create a new object with properties and value, using the delimiter '|'`, function() {
		const result = makeObjectPath('root|parent|child', 'someValue', '|');
		assert.equal(result.root.parent.child, 'someValue');
	});

	it(`must include properties without value into an existent object, using the delimiter '##`, function() {
		const existentObject = { someExistent: 'property' };
		makeObjectPath(existentObject, 'root##parent##child', undefined, '##');
		assert.equal(existentObject.root.parent.child, undefined);
	});
});

describe(`Array path`, function() {
	it(`must create a new object with properties and value`, function() {
		const result = makeObjectPath(['root', 'parent', 'child'], 'someValue');
		assert.equal(result.root.parent.child, 'someValue');
	});

	it(`must include properties and value into an existent object`, function() {
		const existentObject = { someExistent: 'property' };
		makeObjectPath(existentObject, ['root', 'parent', 'child'], 'someValue');
		assert.equal(existentObject.root.parent.child, 'someValue');
	});

	it(`must preserve the existent object structure`, function() {
		const existentObject = { someExistent: 'property' };
		makeObjectPath(existentObject, ['root', 'parent', 'child'], 'someValue');
		assert.equal(existentObject.someExistent, 'property');
	});

	it(`must create a new object with properties without value`, function() {
		const result = makeObjectPath(['root', 'parent', 'child']);
		assert.equal(result.root.parent.child, undefined);
	});

	it(`must include properties without value into an existent object`, function() {
		const existentObject = { someExistent: 'property' };
		makeObjectPath(existentObject, ['root', 'parent', 'child']);
		assert.equal(existentObject.root.parent.child, undefined);
	});

});