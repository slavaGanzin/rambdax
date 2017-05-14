# Rambdax

Extended version of Rambda(utility library)

## Simple example

```
const R = require("rambdax")
const result = R.compose(
  R.filter(val => val>2),
  R.flatten,
)([ [1], [2], [3], 4])
console.log(result) // => [3,4]
```

## How to use it?

Simple `npm i rambdax` is sufficient

## Differences between Rambda and Ramda

- Rambda's **equals** doesn't protect against circular structures as **Ramda.equals** does

- Rambda's **map/filter** works only for arrays, while Ramda's **map/filter** accept also objects

- Rambda's **type** detect async functions. The returned value is `"Async"`

## API

#### produce

> Typing:

```
R.produce(
  fnObject: Object,
  inputArgument: any
): Object
```

> Example:

```
const conditions = {
  foo: a => a > 10,
  bar: a => ({baz:a})
}

const result = R.produce(conditions, 7)

const expectedResult = {
  foo: false,
  bar: {baz: 7}
}
result === expectedResult // => true
```

> Description

`conditions` is an object with sync or async functions as values.

Those functions will be used to generate object with `conditions`'s props and
values, which are result of each `conditions` value when
`inputArgument` is the input.

#### renameProps

> Typing:

```
R.renameProps(
  renameObj: Object,
  inputObj: Object
): Object
```

> Example:

```
const renameObj = {
  f: "foo",
  b: "bar"
}
const inputObj = {
  f:1,
  b:2
}
const result = R.renameProps(renameObj, inputObj)
const expectedResult = {
  foo:1,
  bar:2
}
```

---

#### add

> add(a: Number, b: Number): Number

```javascript
R.add(2, 3) //=>  5
```

#### adjust

> adjust(replaceFn: Function, i:Number, arr:Array): Array

- Replaces `i` index in `arr` with the result of `replaceFn(arr[i])`

```javascript
R.adjust(a => a + 1, 0, [0, 100]) //=> [1, 100]
```

#### any

> any(condition: Function, arr: Array): Boolean

- Returns true if at least one member of `arr` returns true, when passed to the `condition` function

```javascript
R.any(a => a * a > 8)([1, 2, 3]) //=> true
R.any(a => a * a > 10)([1, 2, 3]) //=> false
```

#### append

> append(valueToAppend: any, arr: Array): Array

```javascript
R.append('foo', ['bar', 'baz']) //=> ['foo', 'bar', 'baz']
```

#### contains

> contains(valueToFind: any, arr: Array): Boolean

Returns true if `valueToFind` is part of `arr`

```javascript
R.contains(2, [1, 2]) //=> true
R.contains(3, [1, 2]) //=> false
```

#### defaultTo

> defaultTo(defaultArgument: T, inputArgument: any): T

Returns `defaultArgument` if `inputArgument` is `undefined` or the type of `inputArgument` is different of the type of `defaultArgument`.

Returns `inputArgument` in any other case.

```javascript
R.defaultTo('foo', undefined) //=> 'foo'
R.defaultTo('foo')('bar') //=> 'bar'
R.defaultTo('foo')(1) //=> 'foo'
```

#### drop

> drop(howManyToDrop: Number, arrOrStr: Array|String): Array|String

Returns `arrOrStr` with `howManyToDrop` items dropped from the left

```javascript
R.drop(1, ['foo', 'bar', 'baz']) //=> ['bar', 'baz']
R.drop(1, 'foo')  //=> 'oo'
```

#### dropLast

> dropLast(howManyToDrop: Number, arrOrStr: Array|String): Array|String

Returns `arrOrStr` with `howManyToDrop` items dropped from the right

```javascript
R.dropLast(1, ['foo', 'bar', 'baz']) //=> ['foo', 'bar']
R.dropLast(1, 'foo')  //=> 'fo'
```

#### equals

> equals(a: any, b: any): Boolean

- Returns equality match between `a` and `b`

Doesn't handles cyclical data structures

```javascript
R.equals(1, 1) //=> true
R.equals({}, {}) //=> false
R.equals([1, 2, 3], [1, 2, 3]) //=> true
```

#### filter

> filter(filterFn: Function, arr: Array): Array

Filters `arr` throw boolean returning `filterFn`

```javascript
const filterFn = a => a % 2 === 0

R.filter(filterFn, [1, 2, 3, 4]) //=> [2, 4]
```

#### find

> find(findFn: Function, arr: Array<T>): T|undefined

Returns `undefined` or the first element of `arr` satisfying `findFn`

```javascript
const findFn = a => R.type(a.foo) === "Number"
const arr = [{foo: "bar"}, {foo: 1}]
R.find(findFn, arr) //=> {foo: 1}
```

#### findIndex

> findIndex(findFn: Function, arr: Array): Number

Returns `-1` or the index of the first element of `arr` satisfying `findFn`

```javascript
const findFn = a => R.type(a.foo) === "Number"
const arr = [{foo: "bar"}, {foo: 1}]
R.find(findFn, arr) //=> 1
```

#### flatten

> flatten(arr: Array): Array

```javascript
R.flatten([ 1, [ 2, [ 3 ] ] ]
//=> [ 1, 2, 3 ]
```

#### head

> head(arrOrStr: Array|String): any

- Returns the first element of `arrOrStr`

```javascript
R.head([1, 2, 3]) //=> 1
R.head('foo') //=> 'f'
```

#### indexOf

> indexOf(valueToFind: any, arr: Array): Number

Returns `-1` or the index of the first element of `arr` equal of `valueToFind`

```javascript
R.indexOf(1, [1, 2]) //=> 0
```

#### init

> init(arrOrStr: Array|String): Array|String

- Returns all but the last element of `arrOrStr`

```javascript
R.init([1, 2, 3])  //=> [1, 2]
R.init('foo')  //=> 'fo'
```

#### join

> join(separator: String, arr: Array): String

```javascript
R.join('-', [1, 2, 3])  //=> '1-2-3'
```

#### last

> last(arrOrStr: Array|String): any

- Returns the last element of `arrOrStr`

```javascript
R.last(['foo', 'bar', 'baz']) //=> 'baz'
R.last('foo') //=> 'o'
```

#### length

> length(arrOrStr: Array|String): Number

```javascript
R.length([1, 2, 3]) //=> 3
```

#### map

> map(mapFn: Function, arr: Array): Array

Returns the result of looping through `arr` with `mapFn`

```javascript
const mapFn = x => x * 2;
R.map(mapFn, [1, 2, 3]) //=> [2, 4, 6]
```

#### match

> map(regExpression: Regex, str: String): Array

```javascript
R.match(/([a-z]a)/g, 'bananas') //=> ['ba', 'na', 'na']
```

#### merge

> merge(a: Object, b: Object)

Returns result of `Object.assign({}, a, b)`

```javascript
R.merge({ 'foo': 0, 'bar': 1 }, { 'foo': 7 })
//=> { 'foo': 7, 'bar': 1 }
```

#### omit

> omit(propsToOmit: Array<String>, obj: Object): Object

- Returns a partial copy of an `obj` with omitting `propsToOmit`

```javascript
R.omit(['a', 'd'], {a: 1, b: 2, c: 3}) //=> {b: 2, c: 3}
```

#### path

> path(pathToSearch: Array<String>, obj: Object): any

- Retrieve the value at `pathToSearch` in object `obj`

```javascript
R.path(['a', 'b'], {a: {b: 2}}) //=> 2
R.path(['a', 'c'], {a: {b: 2}}) //=> undefined
```

#### pick

> pick(propsToPick: Array<String>, obj: Object): Object

- Returns a partial copy of an `obj` containing only `propsToPick` properties

```javascript
R.pick(['a', 'c'], {a: 1, b: 2}) //=> {a: 1}
```

#### pluck

> pluck(prop: String, arr: Array<Object>): Array

- Returns list of the values of property `prop` taken from the objects in `arr`

```javascript
R.pluck('a')([{a: 1}, {a: 2}]) //=> [1, 2]
```

#### prepend

> prepend(valueToPrepend: any, arr: Array): Array

```javascript
R.prepend('foo', ['bar', 'baz']) //=> ['foo', 'bar', 'baz']
```

#### prop(propToFind: String, obj: Object): any

Returns `undefined` or the value of property `propToFind` in `obj`

```javascript
R.prop('x', {x: 100}) //=> 100
R.prop('x', {}) //=> undefined
```

#### propEq

> propEq(propToFind: String, valueToMatch: any, obj: Object): Boolean

Returns true if `obj` has property `propToFind` and its value is equal to `valueToMatch`

```javascript
const propToFind = "foo"
const valueToMatch = 0
R.propEq(propToFind, valueToMatch)({foo: 0}) //=> true
R.propEq(propToFind, valueToMatch)({foo: 1}) //=> false
```

#### range

> range(start: Number, end: Number): Array<Number>

- Returns a array of numbers from `start`(inclusive) to `end`(exclusive)

```javascript
R.range(0, 2)   //=> [0, 1]
```

#### repeat

> repeat(valueToRepeat: T, num: Number): Array<T>

```javascript
R.repeat('foo', 2) //=> ['foo', 'foo']
```

#### replace

> replace(strOrRegex: String|Regex, replacer: String, str: String): String

Replace `strOrRegex` found in `str` with `replacer`

```javascript
R.replace('foo', 'bar', 'foo foo') //=> 'bar foo'
R.replace(/foo/, 'bar', 'foo foo') //=> 'bar foo'
R.replace(/foo/g, 'bar', 'foo foo') //=> 'bar bar'
```

#### sort

> sort(sortFn: Function, arr: Array): Array

Returns copy of `arr` sorted by `sortFn`

`sortFn` must return `Number`

```javascript
const sortFn = (a, b) => a - b
R.sort(sortFn, [3, 1, 2]) //=> [1, 2, 3]
```

#### sortBy

Returns copy of `arr` sorted by `sortFn`

`sortFn` must return value for comparison

```javascript
const sortFn = obj => obj.foo
R.sortBy(sortFn, [
  {foo: 1},
  {foo: 0}
])
//=> [{foo: 0}, {foo: 1}]
```

#### split

> split(separator: String, str: String): Array

```javascript
R.split('-', 'a-b-c') //=> ['a', 'b', 'c']
```

#### splitEvery

> splitEvery(sliceLength: Number, arrOrString: Array|String): Array

- Splits `arrOrStr` into slices of `sliceLength`

```javascript
R.splitEvery(2, [1, 2, 3]) //=> [[1, 2], [3]]
R.splitEvery(3, 'foobar') //=> ['foo', 'bar']
```

#### subtract

> subtract(a: Number, b: Number): Number

Returns `a` minus `b`

```javascript
R.subtract(3, 1) //=> 2
```

#### tail

> tail(arrOrStr: Array|String): Array|String

- Returns all but the first element of `arrOrStr`

```javascript
R.tail([1, 2, 3])  //=> [2, 3]
R.tail('foo')  //=> 'oo'
```

#### take

> take(num: Number, arrOrStr: Array|String): Array|String

- Returns the first `num` elements of `arrOrStr`

```javascript
R.take(1, ['foo', 'bar']) //=> ['foo']
R.take(2, ['foo']) //=> 'fo'
```

#### takeLast

> takeLast(num: Number, arrOrStr: Array|String): Array|String

- Returns the last `num` elements of `arrOrStr`

```javascript
R.takeLast(1, ['foo', 'bar']) //=> ['bar']
R.takeLast(2, ['foo']) //=> 'oo'
```

#### test

> test(regExpression: Regex, str: String): Boolean

- Determines whether `str` matches `regExpression`

```javascript
R.test(/^f/, 'foo') //=> true
R.test(/^f/, 'bar') //=> false
```

#### toLower

> toLower(str: String): String

```javascript
R.toLower('FOO') //=> 'foo'
```

#### toUpper

> toUpper(str: String): String

```javascript
R.toUpper('foo') //=> 'FOO'
```

#### trim

> trim(str: String): String
```javascript
R.trim('  foo  ') //=> 'foo'
```

#### type

> type(a: any): String

```javascript
R.type(() => {}) //=> "Function"
R.type(async () => {}) //=> "Async"
R.type([]) //=> "Array"
R.type({}) //=> "Object"
R.type('s') //=> "String"
R.type(1) //=> "Number"
R.type(false) //=> "Boolean"
R.type(null) //=> "Null"
R.type(/[A-z]/) //=> "RegExp"
```

#### uniq

> uniq(arr: Array): Array

- Returns a new array containing only one copy of each element in `arr`

```javascript
R.uniq([1, 1, 2, 1]) //=> [1, 2]
R.uniq([1, '1'])     //=> [1, '1']
```

#### update

> update(i: Number, replaceValue: any, arr: Array): Array

- Returns a new copy of the `arr` with the element at `i` index
replaced with `replaceValue`

```javascript
R.update(0, "foo", ['bar', 'baz']) //=> ['foo', baz]
```

#### values

> values(obj: Object): Array

- Returns array with of all values in `obj`

```javascript
R.values({a: 1, b: 2}) //=> [1, 2]
```
