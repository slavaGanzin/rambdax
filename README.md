# Rambdax

Extended version of Rambda(utility library) - [Documentation](https://selfrefactor.github.io/rambdax/#/)

`Rambda` is faster and smaller alternative to the popular functional programming library **Ramda**. - [Documentation](https://selfrefactor.github.io/rambda/#/)

[![CircleCI](https://circleci.com/gh/selfrefactor/rambda/tree/master.svg?style=svg)](https://circleci.com/gh/selfrefactor/rambda/tree/master)
[![codecov](https://codecov.io/gh/selfrefactor/rambda/branch/master/graph/badge.svg)](https://codecov.io/gh/selfrefactor/rambda)
[![dependencies Status](https://david-dm.org/selfrefactor/rambdax/status.svg)](https://david-dm.org/selfrefactor/rambda)
![Normal size](https://img.badgesize.io/selfrefactor/rambdax/master/dist/rambdax.js)
![Gzip size](https://img.badgesize.io/selfrefactor/rambdax/master/dist/rambdax.js?compression=gzip)

## Differences between Rambda and Ramdax

Rambdax passthrough all [Rambda](https://github.com/selfrefactor/rambda) methods and introduce some new functions.

The idea of **Rambdax** is to extend **Rambda** without worring for **Ramda** compatibility.

## Example use

```javascript
import { compose, map, filter } from 'rambdax'

const result = compose(
  map(x => x * 2),
  filter(x => x > 2)
)([1, 2, 3, 4])
// => [6, 8]
```

You can test this example in <a href="https://rambda.now.sh?const%20result%20%3D%20R.compose(%0A%20%20R.map(x%20%3D%3E%20x%20*%202)%2C%0A%20%20R.filter(x%20%3D%3E%20x%20%3E%202)%0A)(%5B1%2C%202%2C%203%2C%204%5D)%0A%0A%2F%2F%20%3D%3E%20%5B6%2C%208%5D">Rambda's REPL</a>

* [Install](#install)
* [Differences between Rambda and Ramda](#differences-between-rambda-and-ramda)
* [API](#api)
* [Changelog](#changelog)

## Rambda's advantages

- Tree-shaking

Currently **Rambda** is more tree-shakable than **Ramda**

- Speed

**Rambda** is generally more performant than `Ramda` as the [benchmarks](#benchmarks) can prove that.

- dot notation for `R.path` and `R.paths`

Standard usage of `R.path` is `R.path(['a', 'b'], {a: {b: 1} })`.

In **Rambda** you have the choice to use dot notation(which is arguably more readable):

```
R.path('a.b', {a: {b: 1} })
```

- comma notation for `R.pick` and `R.omit`

Similar to dot notation, but the separator is comma(`,`) instead of dot(`.`).

```
R.pick('a,b', {a: 1 , b: 2, c: 3} })

// No space allowed between properties
```

- Typescript included

Typescript definitions are included in the library, in comparison to **Ramda**, where you need to additionally install `@types/ramda`.

- More generic methods

`Ramda` has an overwhelming list of methods, as one could get lost putting all these methods in one's head. `Rambda` has smaller method counts and that could be seen as advantage.

<details>
<summary>
  Click to see the full list of 116 Ramda methods not implemented in Rambda 
</summary>

- __
- addIndex
- ap
- aperture
- apply
- applyTo
- ascend
- binary
- bind
- call
- comparator
- composeK
- composeP
- composeWith
- construct
- constructN
- contains
- countBy
- descend
- differenceWith
- dissocPath
- dropLastWhile
- dropRepeats
- dropRepeatsWith
- dropWhile
- empty
- eqBy
- eqProps
- evolve
- forEachObjIndexed
- gt
- gte
- hasIn
- innerJoin
- insert
- insertAll
- into
- invert
- invertObj
- invoker
- juxt
- keysIn
- lift
- liftN
- lt
- lte
- mapAccum
- mapAccumRight
- mapObjIndexed
- memoizeWith
- mergeAll
- mergeDeepLeft
- mergeDeepRight
- mergeDeepWith
- mergeDeepWithKey
- mergeLeft
- mergeRight
- mergeWith
- mergeWithKey
- move
- nAry
- nthArg
- o
- objOf
- of
- once
- or
- otherwise
- pair
- partialRight
- partition
- pathEq
- pathSatisfies
- pickBy
- pipeK
- pipeP
- pipeWith
- project
- propSatisfies
- props
- reduceBy
- reduceRight
- reduceWhile
- reduced
- remove
- scan
- sequence
- sortWith
- splitAt
- splitWhen
- symmetricDifferenceWith
- takeLastWhile
- takeWhile
- andThen
- toPairsIn
- transduce
- traverse
- tryCatch
- unapply
- unary
- uncurryN
- unfold
- union
- unionWith
- uniqBy
- unless
- unnest
- until
- useWith
- valuesIn
- where
- whereEq
- xprod
- zipWith
- thunkify
- default

</details>
  
## Install

- **yarn add rambdax**

- For UMD usage either use `./dist/rambdax.umd.js` or the following CDN link:

```
https://unpkg.com/rambdax@CURRENT_VERSION/dist/rambdax.umd.js
```

- with deno

```
import {compose, add} from 'https://raw.githubusercontent.com/selfrefactor/rambdax/master/dist/rambdax.esm.js'
```

## Differences between Rambda and Ramda

- Rambda's **type** detects async functions and unresolved `Promises`. The returned values are `'Async'` and `'Promise'`.

- Rambda's **type** handles *NaN* input, in which case it returns `NaN`.

- Rambda's **path** and **paths** accept dot notation - `'x.y' same as ['x','y']`

- Rambda's **pick** and **omit** accept comma notation - `'x,y' same as ['x','y']`

- Rambda's **map**, **reject** and **forEach** can iterate over objects not only arrays.

- Rambda's **map** and **filter** pass array index as second argument when mapping over arrays.

- Rambda's **adjust**, **all**, **allPass**, **any**, **anyPass**, **findIndex** , **findLastIndex** and **reject** are passing index as second argument to the predicate function.

- Rambda's **filter** returns empty array with bad input(`null` or `undefined`), while Ramda throws.

- Ramda's **includes** will throw an error if input is neither `string` nor `array`, while **Rambda** version will return `false`.

- Ramda's **clamp** work for letters, while Rambda's method work only for numbers.

> If you need more **Ramda** methods in **Rambda**, you may either submit a `PR` or check the extended version of **Rambda** - [Rambdax](https://github.com/selfrefactor/rambdax). In case of the former, you may want to consult with [Rambda contribution guidelines.](CONTRIBUTING.md)

## Benchmarks

<details>

<summary>
Click to expand all benchmark results

There are methods which are benchmarked only with `Ramda` and `Rambda`(i.e. no `Lodash`).

Note that some of these methods, are called with and without curring. This is done in order to give more detailed performance feedback.

The benchmarks results are produced from latest versions of *Rambda*, *Lodash*(4.17.15) and *Ramda*(0.27.0).

</summary>

method | Rambda | Ramda | Lodash
--- |--- | --- | ---
 *add* | 96.29% slower | 96.37% slower | 🔳
 *adjust* | 62.03% slower | 🚀 Fastest | 🔳
 *all* | 🚀 Fastest | 94.17% slower | 🔳
 *allPass* | 🚀 Fastest | 99.04% slower | 🔳
 *any* | 🚀 Fastest | 98.24% slower | 🔳
 *anyPass* | 🚀 Fastest | 99.18% slower | 🔳
 *append* | 🚀 Fastest | 81.35% slower | 🔳
 *applySpec* | 🚀 Fastest | 72.7% slower | 🔳
 *assoc* | 91.44% slower | 58.77% slower | 🔳
 *clone* | 🚀 Fastest | 83.88% slower | 🔳
 *compose* | 🚀 Fastest | 96.09% slower | 🔳
 *converge* | 37.4% slower | 🚀 Fastest | 🔳
 *curry* | 53.49% slower | 🚀 Fastest | 🔳
 *curryN* | 61.91% slower | 🚀 Fastest | 🔳
 *defaultTo* | 🚀 Fastest | 59.37% slower | 🔳
 *drop* | 🚀 Fastest | 97.38% slower | 🔳
 *dropLast* | 🚀 Fastest | 96.82% slower | 🔳
 *equals* | 77.01% slower | 79.54% slower | 🔳
 *filter* | 71.08% slower | 88.05% slower | 🔳
 *find* | 🚀 Fastest | 91.09% slower | 🔳
 *findIndex* | 🚀 Fastest | 97.99% slower | 🔳
 *flatten* | 96.44% slower | 95.22% slower | 🔳
 *ifElse* | 🚀 Fastest | 20.75% slower | 🔳
 *includes* | 🚀 Fastest | 69.26% slower | 🔳
 *indexOf* | 5% slower | 84.76% slower | 🔳
 *init* | 93.98% slower | 96.93% slower | 🔳
 *is* | 🚀 Fastest | 14.62% slower | 🔳
 *isEmpty* | 62.95% slower | 93.54% slower | 🔳
 *last* | 🚀 Fastest | 99.63% slower | 🔳
 *lastIndexOf* | 🚀 Fastest | 41.81% slower | 🔳
 *map* | 34.86% slower | 66.26% slower | 🔳
 *match* | 🚀 Fastest | 44.35% slower | 🔳
 *merge* | 62.84% slower | 🚀 Fastest | 🔳
 *none* | 🚀 Fastest | 88.37% slower | 🔳
 *omit* | 🚀 Fastest | 72.52% slower | 🔳
 *over* | 🚀 Fastest | 40.27% slower | 🔳
 *path* | 6.27% slower | 75.23% slower | 🔳
 *pick* | 🚀 Fastest | 23.34% slower | 🔳
 *prop* | 🚀 Fastest | 89.4% slower | 🔳
 *propEq* | 🚀 Fastest | 85.12% slower | 🔳
 *range* | 95.65% slower | 91.05% slower | 🔳
 *reduce* | 79.04% slower | 72.44% slower | 🔳
 *repeat* | 82.97% slower | 94.94% slower | 🔳
 *replace* | 3.62% slower | 34.6% slower | 🔳
 *set* | 🚀 Fastest | 24.15% slower | 🔳
 *sort* | 🚀 Fastest | 62.87% slower | 🔳
 *sortBy* | 🚀 Fastest | 60.94% slower | 🔳
 *split* | 🚀 Fastest | 85.94% slower | 🔳
 *splitEvery* | 🚀 Fastest | 87.31% slower | 🔳
 *take* | 91.55% slower | 97.55% slower | 🔳
 *takeLast* | 92.62% slower | 98.8% slower | 🔳
 *test* | 🚀 Fastest | 94.14% slower | 🔳
 *type* | 36.31% slower | 🚀 Fastest | 🔳
 *uniq* | 99.13% slower | 96.88% slower | 🔳
 *update* | 40.2% slower | 🚀 Fastest | 🔳
 *view* | 🚀 Fastest | 57.13% slower | 🔳

</details>

## Used by

- [WatermelonDB](https://github.com/Nozbe/WatermelonDB)

- [SAP's Cloud SDK](https://github.com/SAP/cloud-sdk)

- [VSCode Slack intergration](https://github.com/verydanny/vcslack)

- [Webpack PostCSS](https://github.com/sectsect/webpack-postcss)

- [MobX-State-Tree decorators](https://github.com/farwayer/mst-decorators)

- [Mobx decorators](https://github.com/farwayer/mobx-decorators)

## API

### add

```typescript
add(a: number, b: number): number
```

It adds `a` and `b`.

```javascript
R.add(2, 3) // =>  5
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.add(2%2C%203)%20%2F%2F%20%3D%3E%20%205">Try the above <strong>R.add</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
add(a: number, b: number): number;
add(a: number): (b: number) => number;
```

</details>

<details>

<summary><strong>R.add</strong> source</summary>

```javascript
export function add(a, b){
  if (arguments.length === 1) return _b => add(a, _b)

  return Number(a) + Number(b)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { add } from './add'

test('with number', () => {
  expect(add(2, 3)).toEqual(5)
  expect(add(7)(10)).toEqual(17)
})

test('string is bad input', () => {
  expect(add('foo', 'bar')).toBeNaN()
})

test('ramda specs', () => {
  expect(add('1', '2')).toEqual(3)
  expect(add(1, '2')).toEqual(3)
  expect(add(true, false)).toEqual(1)
  expect(add(null, null)).toEqual(0)
  expect(add(undefined, undefined)).toEqual(NaN)
  expect(add(new Date(1), new Date(2))).toEqual(3)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {add} from 'rambda'

describe('add', () => {
  it('number', () => {
    const result = [add(4)(1), add(4, 1)]
    result[0] // $ExpectType number
    result[1] // $ExpectType number
  })
})
```

</details>

### adjust

```typescript
adjust<T>(index: number, replaceFn: (a: T) => T, list: ReadonlyArray<T>): T[]
```

It replaces `index` in array `list` with the result of `replaceFn(list[i])`.

```javascript
R.adjust(
  0,
  a => a + 1,
  [0, 100]
) // => [1, 100]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.adjust(%0A%20%200%2C%0A%20%20a%20%3D%3E%20a%20%2B%201%2C%0A%20%20%5B0%2C%20100%5D%0A)%20%2F%2F%20%3D%3E%20%5B1%2C%20100%5D">Try the above <strong>R.adjust</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
adjust<T>(index: number, replaceFn: (a: T) => T, list: ReadonlyArray<T>): T[];
adjust<T>(index: number, replaceFn: (a: T) => T): (list: ReadonlyArray<T>) => T[];
```

</details>

<details>

<summary><strong>R.adjust</strong> source</summary>

```javascript
import { curry } from './curry'

function adjustFn(
  index, replaceFn, list
){
  const actualIndex = index < 0 ? list.length + index : index
  if (index >= list.length || actualIndex < 0) return list

  const clone = list.slice()
  clone[ actualIndex ] = replaceFn(clone[ actualIndex ])

  return clone
}

export const adjust = curry(adjustFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { add } from './add'
import { adjust } from './adjust'

const expected = [ 0, 11, 2 ]

test('without curring', () => {
  expect(adjust(
    1, add(10), [ 0, 1, 2 ]
  )).toEqual(expected)
})

test('with curring type 1 1 1', () => {
  expect(adjust(1)(add(10))([ 0, 1, 2 ])).toEqual(expected)
})

test('with curring type 1 2', () => {
  expect(adjust(1)(add(10), [ 0, 1, 2 ])).toEqual(expected)
})

test('with curring type 2 1', () => {
  expect(adjust(1, add(10))([ 0, 1, 2 ])).toEqual(expected)
})

test('with negative index', () => {
  expect(adjust(
    -2, add(10), [ 0, 1, 2 ]
  )).toEqual(expected)
})

test('when index is out of bounds', () => {
  const list = [ 0, 1, 2, 3 ]
  expect(adjust(
    4, add(1), list
  )).toEqual(list)
  expect(adjust(
    -5, add(1), list
  )).toEqual(list)
})
```

</details>

<details>

<summary>1 failed <italic>Ramda.adjust</italic> specs

> :boom: Reason for the failure: ramda accepts an array-like object
</summary>

```javascript
var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');

describe('adjust', function() {
  it('accepts an array-like object', function() {
    function args() {
      return arguments;
    }
    eq(R.adjust(2, R.add(1), args(0, 1, 2, 3)), [0, 1, 3, 3]);
  });
});
```

</details>

### all

```typescript
all<T>(predicate: (x: T) => boolean, list: ReadonlyArray<T>): boolean
```

It returns `true`, if all members of array `list` returns `true`, when applied as argument to `predicate` function.

```javascript
const list = [ 0, 1, 2, 3, 4 ]
const predicate = x => x > -1

const result = R.all(predicate, arr)
// => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%200%2C%201%2C%202%2C%203%2C%204%20%5D%0Aconst%20predicate%20%3D%20x%20%3D%3E%20x%20%3E%20-1%0A%0Aconst%20result%20%3D%20R.all(predicate%2C%20arr)%0A%2F%2F%20%3D%3E%20true">Try the above <strong>R.all</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
all<T>(predicate: (x: T) => boolean, list: ReadonlyArray<T>): boolean;
all<T>(predicate: (x: T) => boolean): (list: ReadonlyArray<T>) => boolean;
```

</details>

<details>

<summary><strong>R.all</strong> source</summary>

```javascript
export function all(predicate, list){
  if (arguments.length === 1) return _list => all(predicate, _list)

  for (let i = 0; i < list.length; i++){
    if (!predicate(list[ i ], i)) return false
  }

  return true
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { all } from './all'

const numArr = [ 0, 1, 2, 3, 4 ]

test('when true', () => {
  const fn = x => x > -1

  expect(all(fn)(numArr)).toBeTrue()
})

test('when false', () => {
  const fn = x => x > 2

  expect(all(fn, numArr)).toBeFalse()
})

test('pass index as second argument', () => {
  const indexes = []
  const fn = (x, i) => {
    indexes.push(i)

    return x > 5
  }
  all(fn, [ 10, 12, 14 ])

  expect(indexes).toEqual([ 0, 1, 2 ])
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {all} from 'rambda'

describe('all', () => {
  it('happy', () => {
    const x = all<number>(y => {
      y // $ExpectType number
      return y > 0
    })([1, 2, 3])
    x // $ExpectType boolean

    const q = all(y => y > 0, [1, 2, 3]) // $ExpectType boolean

    q // $ExpectType boolean
  })
})
```

</details>

### allFalse

```typescript
allFalse(...inputs: any[]): boolean
```

It returns `true` if all `inputs` arguments are falsy according to `R.isFalsy`.

Functions are valid inputs, but these functions cannot have their own arguments.

This method is very similar to `R.anyFalse`, `R.anyTrue` and `R.allTrue`

```javascript
R.allFalse(0, null, [], {}, '', () => false)
// => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.allFalse(0%2C%20null%2C%20%5B%5D%2C%20%7B%7D%2C%20''%2C%20()%20%3D%3E%20false)%0A%2F%2F%20%3D%3E%20true">Try the above <strong>R.allFalse</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
allFalse(...inputs: any[]): boolean;
```

</details>

<details>

<summary><strong>R.allFalse</strong> source</summary>

```javascript
import { isTruthy } from './_internals/isTruthy'
import { type } from './type'

export function allFalse(...inputs){
  let counter = 0
  while (counter < inputs.length){
    const x = inputs[ counter ]

    if (type(x) === 'Function'){
      if (isTruthy(x())){
        return false
      }
    } else if (isTruthy(x)){
      return false
    }

    counter++
  }

  return true
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { runTests } from 'helpers-fn'

import { allFalse } from './allFalse'

const first = { ok : [ () => 2 > 10, () => [], () => {}, null, [] ] }
const second = { fail : [ () => 2 > 10, () => [], () => ({ a : 1 }) ] }
const third = { fail : [ () => 2 > 10, () => [], true ] }

const testData = {
  label : 'foo',
  data  : [ first, second, third ],
  fn    : input => allFalse(...input),
}
runTests(testData)
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {allFalse} from 'rambda'

describe('allFalse', () => {
  it('happy', () => {
    const x = allFalse(null, false, undefined, () => false)
    x // $ExpectType boolean
  })
})
```

</details>

### allPass

```typescript
allPass<T>(predicates: ((x: T) => boolean)[]): (input: T) => boolean
```

It returns `true`, if all functions of `predicates` return `true`, when `input` is their argument.

```javascript
const input = {
  a : 1,
  b : 2,
}
const predicates = [
  x => x.a === 1,
  x => x.b === 2,
]
const result = R.allPass(predicates)(input) // => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20input%20%3D%20%7B%0A%20%20a%20%3A%201%2C%0A%20%20b%20%3A%202%2C%0A%7D%0Aconst%20predicates%20%3D%20%5B%0A%20%20x%20%3D%3E%20x.a%20%3D%3D%3D%201%2C%0A%20%20x%20%3D%3E%20x.b%20%3D%3D%3D%202%2C%0A%5D%0Aconst%20result%20%3D%20R.allPass(predicates)(input)%20%2F%2F%20%3D%3E%20true">Try the above <strong>R.allPass</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
allPass<T>(predicates: ((x: T) => boolean)[]): (input: T) => boolean;
```

</details>

<details>

<summary><strong>R.allPass</strong> source</summary>

```javascript
export function allPass(predicates){
  return input => {
    let counter = 0
    while (counter < predicates.length){
      if (!predicates[ counter ](input)){
        return false
      }
      counter++
    }

    return true
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { allPass } from './allPass'

test('happy', () => {
  const rules = [ x => typeof x === 'number', x => x > 10, x => x * 7 < 100 ]

  expect(allPass(rules)(11)).toBeTrue()

  expect(allPass(rules)(undefined)).toBeFalse()
})

test('when returns true', () => {
  const conditionArr = [ val => val.a === 1, val => val.b === 2 ]

  expect(allPass(conditionArr)({
    a : 1,
    b : 2,
  })).toBeTrue()
})

test('when returns false', () => {
  const conditionArr = [ val => val.a === 1, val => val.b === 3 ]

  expect(allPass(conditionArr)({
    a : 1,
    b : 2,
  })).toBeFalse()
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {allPass} from 'rambda'

describe('allPass', () => {
  it('happy', () => {
    const x = allPass<number>([
      y => {
        y // $ExpectType number
        return typeof y === 'number'
      },
      y => {
        return y > 0
      },
    ])(11)

    x // $ExpectType boolean
  })
})
```

</details>

<details>

<summary>1 failed <italic>Ramda.allPass</italic> specs

> :boom: Reason for the failure: ramda returns a curried function whose arity matches that of the highest-arity predicate
</summary>

```javascript
var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');

describe('allPass', function() {
  var odd = function(n) { return n % 2 !== 0; };
  var lt20 = function(n) { return n < 20; };
  var gt5 = function(n) { return n > 5; };
  var plusEq = function(w, x, y, z) { return w + x === y + z; };
  it('returns a curried function whose arity matches that of the highest-arity predicate', function() {
    eq(R.allPass([odd, gt5, plusEq]).length, 4);
    eq(R.allPass([odd, gt5, plusEq])(9, 9, 9, 9), true);
    eq(R.allPass([odd, gt5, plusEq])(9)(9)(9)(9), true);
  });
});
```

</details>

### allTrue

```typescript
allTrue(...input: any[]): boolean
```

It returns `true` if all `inputs` arguments are truthy according to `R.isTruthy`.

```javascript
R.allTrue(1, true, {a: 1}, [1], 'foo', () => true)
// => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.allTrue(1%2C%20true%2C%20%7Ba%3A%201%7D%2C%20%5B1%5D%2C%20'foo'%2C%20()%20%3D%3E%20true)%0A%2F%2F%20%3D%3E%20true">Try the above <strong>R.allTrue</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
allTrue(...input: any[]): boolean;
```

</details>

<details>

<summary><strong>R.allTrue</strong> source</summary>

```javascript
import { isFalsy } from './_internals/isFalsy'
import { type } from './type'

export function allTrue(...inputs){
  let counter = 0
  while (counter < inputs.length){
    const x = inputs[ counter ]

    if (type(x) === 'Function'){
      if (isFalsy(x())){
        return false
      }
    } else if (isFalsy(x)){
      return false
    }

    counter++
  }

  return true
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { allTrue } from './allTrue'

test('with functions', () => {
  const foo = () => 1
  const bar = () => false
  const baz = () => JSON.parse('{sda')
  const result = allTrue(
    foo, bar, baz
  )
  expect(result).toBe(false)
})

test('usage with non boolean', () => {
  const foo = { a : 1 }
  const baz = [ 1, 2, 3 ]

  const result = allTrue(
    foo, foo, baz
  )
  expect(result).toBe(true)
})

test('usage with boolean', () => {
  const foo = 4
  const baz = [ 1, 2, 3 ]

  const result = allTrue(foo > 2, baz.length === 3)
  expect(result).toBe(true)
})

test('escapes early - case 0', () => {
  const foo = undefined
  const result = allTrue(foo, () => foo.a)
  expect(result).toBe(false)
})

test('escapes early - case 1', () => {
  const foo = null
  const result = allTrue(foo, () => foo.a)
  expect(result).toBe(false)
})

test('escapes early - case 2', () => {
  const foo = { a : 'bar' }
  const result = allTrue(
    foo, foo.a, foo.a.b
  )
  expect(result).toBe(false)
})

test('escapes early - case 3', () => {
  const foo = { a : { b : 'foo' } }
  const result = allTrue(
    foo,
    () => foo.a,
    () => foo.a.b
  )
  expect(result).toBe(true)
})
```

</details>

### allType

```typescript
allType(targetType: RambdaTypes): (...input: any[]) => boolean
```

It returns a function which will return `true` if all of its `inputs` arguments belong to `targetType`.

```javascript
const targetType = 'String'

const result = R.allType(
  targetType
)('foo', 'bar', 'baz')
// => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20targetType%20%3D%20'String'%0A%0Aconst%20result%20%3D%20R.allType(%0A%20%20targetType%0A)('foo'%2C%20'bar'%2C%20'baz')%0A%2F%2F%20%3D%3E%20true">Try the above <strong>R.allType</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
allType(targetType: RambdaTypes): (...input: any[]) => boolean;
```

</details>

<details>

<summary><strong>R.allType</strong> source</summary>

```javascript
import { type } from './type'

export function allType(targetType){
  return (...inputs) => {
    let counter = 0

    while (counter < inputs.length){
      if (type(inputs[ counter ]) !== targetType){
        return false
      }
      counter++
    }

    return true
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { allType } from './allType'

test('when true', () => {
  const result = allType('Array')(
    [ 1, 2, 3 ], [], [ null ]
  )

  expect(result).toBe(true)
})

test('when false', () => {
  const result = allType('String')(
    1, undefined, null, []
  )

  expect(result).toBe(false)
})
```

</details>

### always

```typescript
always<T>(x: T): () => T
```

It returns function that always returns `x`.

```javascript
const fn = R.always(7)

console.log(fn())// => 7
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20fn%20%3D%20R.always(7)%0A%0Aconsole.log(fn())%2F%2F%20%3D%3E%207">Try the above <strong>R.always</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
always<T>(x: T): () => T;
```

</details>

<details>

<summary><strong>R.always</strong> source</summary>

```javascript
export function always(x){
  return () => x
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { always } from './always'

test('happy', () => {
  const fn = always(7)

  expect(fn()).toEqual(7)
  expect(fn()).toEqual(7)
})
```

</details>

### and

```typescript
and<T extends { and?: ((...a: readonly any[]) => any)
```

Returns `true` if both arguments are `true`. Otherwise, it returns `false`.

```javascript
R.and(true, true); // => true
R.and(false, true); // => false
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.and(true%2C%20true)%3B%20%2F%2F%20%3D%3E%20true%0AR.and(false%2C%20true)%3B%20%2F%2F%20%3D%3E%20false">Try the above <strong>R.and</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
and<T extends { and?: ((...a: readonly any[]) => any); } | number | boolean | string | null>(fn1: T, val2: any): boolean;
and<T extends { and?: ((...a: readonly any[]) => any); } | number | boolean | string | null>(fn1: T): (val2: any) => boolean;
```

</details>

<details>

<summary><strong>R.and</strong> source</summary>

```javascript
export function and(a, b){
  if (arguments.length === 1) return _b => and(a, _b)

  return a && b
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { and } from './and'

test('happy', () => {
  expect(and(true, true)).toBe(true)
  expect(and(true, false)).toBe(false)
  expect(and(false, true)).toBe(false)
  expect(and(false, false)).toBe(false)
})
```

</details>

### any

```typescript
any<T>(predicate: (x: T, i: number) => boolean, list: ReadonlyArray<T>): boolean
```

It returns `true`, if at least one member of `list` returns true, when passed to `predicate` function.

```javascript
const list = [1, 2, 3]
const predicate = x => x * x > 8
R.any(fn, list)
// => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20const%20list%20%3D%20%5B1%2C%202%2C%203%5D%0Aconst%20predicate%20%3D%20x%20%3D%3E%20x%20*%20x%20%3E%208%0AR.any(fn%2C%20list)%0A%2F%2F%20%3D%3E%20true">Try the above <strong>R.any</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
any<T>(predicate: (x: T, i: number) => boolean, list: ReadonlyArray<T>): boolean;
any<T>(predicate: (x: T) => boolean, list: ReadonlyArray<T>): boolean;
any<T>(predicate: (x: T, i: number) => boolean): (list: ReadonlyArray<T>) => boolean;
any<T>(predicate: (x: T) => boolean): (list: ReadonlyArray<T>) => boolean;
```

</details>

<details>

<summary><strong>R.any</strong> source</summary>

```javascript
export function any(predicate, list){
  if (arguments.length === 1) return _list => any(predicate, _list)

  let counter = 0
  while (counter < list.length){
    if (predicate(list[ counter ], counter)){
      return true
    }
    counter++
  }

  return false
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { any } from './any'

const arr = [ 1, 2 ]

test('no curry', () => {
  expect(any(val => val < 0, arr)).toBeFalse()
})

test('with curry', () => {
  expect(any(val => val < 2)(arr)).toBeTrue()
})

test('passes index to predicate', () => {
  any((x, i) => {
    expect(typeof x).toBe('string')
    expect(typeof i).toBe('number')
  })([ 'foo', 'bar' ])
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {any} from 'rambda'

describe('any', () => {
  it('1', () => {
    const x = any<number>(
      (y, i) => {
        y // $ExpectType number
        i // $ExpectType number
        return y > 2
      },
      [1, 2, 3]
    )
    x // $ExpectType boolean
  })
  it('2', () => {
    const x = any<number>(
      y => {
        y // $ExpectType number
        return y > 2
      },
      [1, 2, 3]
    )
    x // $ExpectType boolean
  })

  it('1 curry', () => {
    const x = any<number>((y, i) => {
      y // $ExpectType number
      i // $ExpectType number
      return y > 2
    })([1, 2, 3])
    x // $ExpectType boolean
  })
  it('2 curry', () => {
    const x = any<number>(y => {
      y // $ExpectType number
      return y > 2
    })([1, 2, 3])
    x // $ExpectType boolean
  })
})
```

</details>

### anyFalse

```typescript
anyFalse(...input: any[]): boolean
```

It returns `true` if any of `inputs` is falsy according to `R.isFalsy`.

```javascript
R.anyFalse(1, {a: 1}, [1], () => false)
// => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.anyFalse(1%2C%20%7Ba%3A%201%7D%2C%20%5B1%5D%2C%20()%20%3D%3E%20false)%0A%2F%2F%20%3D%3E%20true">Try the above <strong>R.anyFalse</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
anyFalse(...input: any[]): boolean;
```

</details>

<details>

<summary><strong>R.anyFalse</strong> source</summary>

```javascript
import { isFalsy } from './_internals/isFalsy'
import { type } from './type'

export function anyFalse(...inputs){
  let counter = 0
  while (counter < inputs.length){
    const x = inputs[ counter ]

    if (type(x) === 'Function'){
      if (isFalsy(x())){
        return true
      }
    } else if (isFalsy(x)){
      return true
    }

    counter++
  }

  return false
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { anyFalse } from './anyFalse'

test('when true', () => {
  expect(anyFalse(
    true, true, false
  )).toBeTruthy()
})

test('when false', () => {
  expect(anyFalse(true, true)).toBeFalsy()
})

test('supports function', () => {
  expect(anyFalse(
    true,
    () => true,
    () => false
  )).toBeTruthy()
})
```

</details>

### anyPass

```typescript
anyPass<T>(predicates: ReadonlyArray<SafePred<T>>): SafePred<T>
```

It accepts list of `predicates` and returns a function. This function with its `input` will return `true`, if any of `predicates` returns `true` for this `input`.

```javascript
const isBig = x => x > 20
const isOdd = x => x % 2 === 1
const input = 11

const fn = R.anyPass(
  [isBig, isOdd]
)

const result = fn(input) 
// => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20isBig%20%3D%20x%20%3D%3E%20x%20%3E%2020%0Aconst%20isOdd%20%3D%20x%20%3D%3E%20x%20%25%202%20%3D%3D%3D%201%0Aconst%20input%20%3D%2011%0A%0Aconst%20fn%20%3D%20R.anyPass(%0A%20%20%5BisBig%2C%20isOdd%5D%0A)%0A%0Aconst%20result%20%3D%20fn(input)%20%0A%2F%2F%20%3D%3E%20true">Try the above <strong>R.anyPass</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
anyPass<T>(predicates: ReadonlyArray<SafePred<T>>): SafePred<T>;
```

</details>

<details>

<summary><strong>R.anyPass</strong> source</summary>

```javascript
export function anyPass(predicates){
  return input => {
    let counter = 0
    while (counter < predicates.length){
      if (predicates[ counter ](input)){
        return true
      }
      counter++
    }

    return false
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { anyPass } from './anyPass'

test('happy', () => {
  const rules = [ x => typeof x === 'string', x => x > 10 ]
  const predicate = anyPass(rules)
  expect(predicate('foo')).toBeTrue()
  expect(predicate(6)).toBeFalse()
})

test('happy', () => {
  const rules = [ x => typeof x === 'string', x => x > 10 ]

  expect(anyPass(rules)(11)).toBeTrue()

  expect(anyPass(rules)(undefined)).toBeFalse()
})

const obj = {
  a : 1,
  b : 2,
}

test('when returns true', () => {
  const conditionArr = [ val => val.a === 1, val => val.a === 2 ]

  expect(anyPass(conditionArr)(obj)).toBeTrue()
})

test('when returns false + curry', () => {
  const conditionArr = [ val => val.a === 2, val => val.b === 3 ]

  expect(anyPass(conditionArr)(obj)).toBeFalse()
})

test('happy', () => {
  expect(anyPass([])(3)).toEqual(false)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {anyPass} from 'rambda'

describe('anyPass', () => {
  it('happy', () => {
    const x = anyPass<number>([
      y => {
        y // $ExpectType number
        return typeof y === 'number'
      },
      y => {
        return y > 0
      },
    ])(11)

    x // $ExpectType boolean
  })
})
```

</details>

<details>

<summary>1 failed <italic>Ramda.anyPass</italic> specs

> :boom: Reason for the failure: ramda returns a curried function whose arity matches that of the highest-arity predicate
</summary>

```javascript
var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');

describe('anyPass', function() {
  var odd = function(n) { return n % 2 !== 0; };
  var gt20 = function(n) { return n > 20; };
  var lt5 = function(n) { return n < 5; };
  var plusEq = function(w, x, y, z) { return w + x === y + z; };
  it('returns a curried function whose arity matches that of the highest-arity predicate', function() {
    eq(R.anyPass([odd, lt5, plusEq]).length, 4);
    eq(R.anyPass([odd, lt5, plusEq])(6, 7, 8, 9), false);
    eq(R.anyPass([odd, lt5, plusEq])(6)(7)(8)(9), false);
  });
});
```

</details>

### anyTrue

```typescript
anyTrue(...input: any[]): boolean
```

It returns `true` if any of `inputs` arguments are truthy according to `R.isTruthy`.

```javascript
R.anyTrue(0, null, [], {}, '', () => true)
// => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.anyTrue(0%2C%20null%2C%20%5B%5D%2C%20%7B%7D%2C%20''%2C%20()%20%3D%3E%20true)%0A%2F%2F%20%3D%3E%20true">Try the above <strong>R.anyTrue</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
anyTrue(...input: any[]): boolean;
```

</details>

<details>

<summary><strong>R.anyTrue</strong> source</summary>

```javascript
import { isTruthy } from './_internals/isTruthy'
import { type } from './type'

export function anyTrue(...inputs){
  let counter = 0
  while (counter < inputs.length){
    const x = inputs[ counter ]

    if (type(x) === 'Function'){
      if (isTruthy(x())){
        return true
      }
    } else if (isTruthy(x)){
      return true
    }

    counter++
  }

  return false
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { anyTrue } from './anyTrue'

test('when true', () => {
  expect(anyTrue(
    true, true, false
  )).toBeTruthy()
})

test('when false', () => {
  expect(anyTrue(
    false, false, false
  )).toBeFalsy()
})

test('supports function', () => {
  expect(anyTrue(
    false,
    false,
    false,
    () => false,
    () => true
  )).toBeTruthy()
})
```

</details>

### anyType

```typescript
anyType(targetType: RambdaTypes): (...input: any[]) => boolean
```

It returns a function which will return `true` if at least one of its `inputs` arguments belongs to `targetType`.

`targetType` is one of the possible returns of `R.type`

```javascript
const targetType = 'String'

const result = R.anyType(
  targetType
)(1, {}, 'foo')
// => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20targetType%20%3D%20'String'%0A%0Aconst%20result%20%3D%20R.anyType(%0A%20%20targetType%0A)(1%2C%20%7B%7D%2C%20'foo')%0A%2F%2F%20%3D%3E%20true">Try the above <strong>R.anyType</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
anyType(targetType: RambdaTypes): (...input: any[]) => boolean;
```

</details>

<details>

<summary><strong>R.anyType</strong> source</summary>

```javascript
import { type } from './type'

export function anyType(targetType){
  return (...inputs) => {
    let counter = 0

    while (counter < inputs.length){
      if (type(inputs[ counter ]) === targetType){
        return true
      }
      counter++
    }

    return false
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { anyType } from './anyType'

test('when true', () => {
  const result = anyType('Array')(
    1, undefined, null, []
  )

  expect(result).toBe(true)
})

test('when false', () => {
  const result = anyType('String')(
    1, undefined, null, []
  )

  expect(result).toBe(false)
})
```

</details>

### append

```typescript
append<T>(x: T, listOrString: ReadonlyArray<T>): T[]
```

It adds element `x` at the end of `listOrString`.

```javascript
const x = 'foo'

const result = [
  R.append(x, 'cherry_'),
  R.append(x, ['bar', 'baz'])
]
// => ['cherry_foo', ['bar', 'baz', 'foo']]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20x%20%3D%20'foo'%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.append(x%2C%20'cherry_')%2C%0A%20%20R.append(x%2C%20%5B'bar'%2C%20'baz'%5D)%0A%5D%0A%2F%2F%20%3D%3E%20%5B'cherry_foo'%2C%20%5B'bar'%2C%20'baz'%2C%20'foo'%5D%5D">Try the above <strong>R.append</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
append<T>(x: T, listOrString: ReadonlyArray<T>): T[];
append<T>(x: T): <T>(listOrString: ReadonlyArray<T>) => T[];
```

</details>

<details>

<summary><strong>R.append</strong> source</summary>

```javascript
export function append(x, listOrString){
  if (arguments.length === 1)
    return _listOrString => append(x, _listOrString)

  if (typeof listOrString === 'string') return `${ listOrString }${ x }`

  const clone = listOrString.slice()
  clone.push(x)

  return clone
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { append } from './append'
import { compose } from './compose'
import { flatten } from './flatten'
import { map } from './map'

test('with strings', () => {
  expect(append('o', 'fo')).toEqual('foo')
})

test('with arrays', () => {
  expect(append('tests', [ 'write', 'more' ])).toEqual([
    'write',
    'more',
    'tests',
  ])
})

test('append to empty array', () => {
  expect(append('tests', [])).toEqual([ 'tests' ])
})

test('happy', () => {
  const result = compose(flatten, map(append(0)))([ [ 1 ], [ 2 ], [ 3 ] ])
  expect(result).toEqual([ 1, 0, 2, 0, 3, 0 ])
})

test('should not modify arguments', () => {
  const a = [ 1, 2, 3 ]
  const b = append(4, a)

  expect(a).toEqual([ 1, 2, 3 ])
  expect(b).toEqual([ 1, 2, 3, 4 ])
})
```

</details>

### applySpec

```typescript
applySpec<Spec extends Record<string, (...args: readonly any[]) => any>>(
  spec: Spec
): (
  ...args: Parameters<ValueOfRecord<Spec>>
) => { [Key in keyof Spec]: ReturnType<Spec[Key]> }
```

It returns a curried function with the same arity as the longest function in the spec object.
Arguments will be applied to the spec methods recursively.

```javascript
const spec = {
  name: R.path('deeply.nested.firstname')
}
const json = {
  deeply: {
   nested: {
      firstname: 'barry'
    }
  }
}
const result = R.applySpec(spec, json) // => { name: 'barry' }

// Second example
const getMetrics = R.applySpec({
  sum: R.add,
  nested: { mul: R.multiply }
})
getMetrics(2, 4) 
// => { sum: 6, nested: { mul: 8 } }
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20spec%20%3D%20%7B%0A%20%20name%3A%20R.path('deeply.nested.firstname')%0A%7D%0Aconst%20json%20%3D%20%7B%0A%20%20deeply%3A%20%7B%0A%20%20%20nested%3A%20%7B%0A%20%20%20%20%20%20firstname%3A%20'barry'%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0Aconst%20result%20%3D%20R.applySpec(spec%2C%20json)%20%2F%2F%20%3D%3E%20%7B%20name%3A%20'barry'%20%7D%0A%0A%2F%2F%20Second%20example%0Aconst%20getMetrics%20%3D%20R.applySpec(%7B%0A%20%20sum%3A%20R.add%2C%0A%20%20nested%3A%20%7B%20mul%3A%20R.multiply%20%7D%0A%7D)%0AgetMetrics(2%2C%204)%20%0A%2F%2F%20%3D%3E%20%7B%20sum%3A%206%2C%20nested%3A%20%7B%20mul%3A%208%20%7D%20%7D">Try the above <strong>R.applySpec</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
applySpec<Spec extends Record<string, (...args: readonly any[]) => any>>(
  spec: Spec
): (
  ...args: Parameters<ValueOfRecord<Spec>>
) => { [Key in keyof Spec]: ReturnType<Spec[Key]> };
applySpec<T>(spec: any): (...args: readonly any[]) => T;
```

</details>

<details>

<summary><strong>R.applySpec</strong> source</summary>

```javascript
import { _isArray } from './_internals/_isArray'

// recursively traverse the given spec object to find the highest arity function
function __findHighestArity(spec, max = 0){
  for (const key in spec){
    if (spec.hasOwnProperty(key) === false || key === 'constructor') continue

    if (typeof spec[ key ] === 'object'){
      max = Math.max(max, __findHighestArity(spec[ key ]))
    }

    if (typeof spec[ key ] === 'function'){
      max = Math.max(max, spec[ key ].length)
    }
  }

  return max
}

function __filterUndefined(){
  const defined = []
  let i = 0
  const l = arguments.length
  while (i < l){
    if (typeof arguments[ i ] === 'undefined') break
    defined[ i ] = arguments[ i ]
    i++
  }

  return defined
}

function __applySpecWithArity(
  spec, arity, cache
){
  const remaining = arity - cache.length

  if (remaining === 1)
    return x =>
      __applySpecWithArity(
        spec, arity, __filterUndefined(...cache, x)
      )
  if (remaining === 2)
    return (x, y) =>
      __applySpecWithArity(
        spec, arity, __filterUndefined(
          ...cache, x, y
        )
      )
  if (remaining === 3)
    return (
      x, y, z
    ) =>
      __applySpecWithArity(
        spec, arity, __filterUndefined(
          ...cache, x, y, z
        )
      )
  if (remaining === 4)
    return (
      x, y, z, a
    ) =>
      __applySpecWithArity(
        spec,
        arity,
        __filterUndefined(
          ...cache, x, y, z, a
        )
      )
  if (remaining > 4)
    return (...args) =>
      __applySpecWithArity(
        spec, arity, __filterUndefined(...cache, ...args)
      )

  // handle spec as Array
  if (_isArray(spec)){
    const ret = []
    let i = 0
    const l = spec.length
    for (; i < l; i++){
      // handle recursive spec inside array
      if (typeof spec[ i ] === 'object' || _isArray(spec[ i ])){
        ret[ i ] = __applySpecWithArity(
          spec[ i ], arity, cache
        )
      }
      // apply spec to the key
      if (typeof spec[ i ] === 'function'){
        ret[ i ] = spec[ i ](...cache)
      }
    }

    return ret
  }

  // handle spec as Object
  const ret = {}
  // apply callbacks to each property in the spec object
  for (const key in spec){
    if (spec.hasOwnProperty(key) === false || key === 'constructor') continue

    // apply the spec recursively
    if (typeof spec[ key ] === 'object'){
      ret[ key ] = __applySpecWithArity(
        spec[ key ], arity, cache
      )
      continue
    }

    // apply spec to the key
    if (typeof spec[ key ] === 'function'){
      ret[ key ] = spec[ key ](...cache)
    }
  }

  return ret
}

export function applySpec(spec, ...args){
  // get the highest arity spec function, cache the result and pass to __applySpecWithArity
  const arity = __findHighestArity(spec)

  if (arity === 0){
    return () => ({})
  }
  const toReturn = __applySpecWithArity(
    spec, arity, args
  )

  return toReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { applySpec as applySpecRamda, nAry } from 'ramda'

import { add, always, compose, dec, inc, map, path, prop, T } from '../rambda'
import { applySpec } from './applySpec'

test('different than Ramda when bad spec', () => {
  const result = applySpec({ sum : { a : 1 } })(1, 2)
  const ramdaResult = applySpecRamda({ sum : { a : 1 } })(1, 2)
  expect(result).toEqual({})
  expect(ramdaResult).toEqual({ sum : { a : {} } })
})

test('works with empty spec', () => {
  expect(applySpec({})()).toEqual({})
  expect(applySpec([])(1, 2)).toEqual({})
  expect(applySpec(null)(1, 2)).toEqual({})
})

test('works with unary functions', () => {
  const result = applySpec({
    v : inc,
    u : dec,
  })(1)
  const expected = {
    v : 2,
    u : 0,
  }
  expect(result).toEqual(expected)
})

test('works with binary functions', () => {
  const result = applySpec({ sum : add })(1, 2)
  expect(result).toEqual({ sum : 3 })
})

test('works with nested specs', () => {
  const result = applySpec({
    unnested : always(0),
    nested   : { sum : add },
  })(1, 2)
  const expected = {
    unnested : 0,
    nested   : { sum : 3 },
  }
  expect(result).toEqual(expected)
})

test('works with arrays of nested specs', () => {
  const result = applySpec({
    unnested : always(0),
    nested   : [ { sum : add } ],
  })(1, 2)

  expect(result).toEqual({
    unnested : 0,
    nested   : [ { sum : 3 } ],
  })
})

test('works with arrays of spec objects', () => {
  const result = applySpec([ { sum : add } ])(1, 2)

  expect(result).toEqual([ { sum : 3 } ])
})

test('works with arrays of functions', () => {
  const result = applySpec([ map(prop('a')), map(prop('b')) ])([
    {
      a : 'a1',
      b : 'b1',
    },
    {
      a : 'a2',
      b : 'b2',
    },
  ])
  const expected = [
    [ 'a1', 'a2' ],
    [ 'b1', 'b2' ],
  ]
  expect(result).toEqual(expected)
})

test('works with a spec defining a map key', () => {
  expect(applySpec({ map : prop('a') })({ a : 1 })).toEqual({ map : 1 })
})

test.skip('retains the highest arity', () => {
  const f = applySpec({
    f1 : nAry(2, T),
    f2 : nAry(5, T),
  })
  expect(f.length).toBe(5)
})

test('returns a curried function', () => {
  expect(applySpec({ sum : add })(1)(2)).toEqual({ sum : 3 })
})

// Additional tests
// ============================================
test('arity', () => {
  const spec = {
    one   : x1 => x1,
    two   : (x1, x2) => x1 + x2,
    three : (
      x1, x2, x3
    ) => x1 + x2 + x3,
  }
  expect(applySpec(
    spec, 1, 2, 3
  )).toEqual({
    one   : 1,
    two   : 3,
    three : 6,
  })
})

test('arity over 5 arguments', () => {
  const spec = {
    one   : x1 => x1,
    two   : (x1, x2) => x1 + x2,
    three : (
      x1, x2, x3
    ) => x1 + x2 + x3,
    four : (
      x1, x2, x3, x4
    ) => x1 + x2 + x3 + x4,
    five : (
      x1, x2, x3, x4, x5
    ) => x1 + x2 + x3 + x4 + x5,
  }
  expect(applySpec(
    spec, 1, 2, 3, 4, 5
  )).toEqual({
    one   : 1,
    two   : 3,
    three : 6,
    four  : 10,
    five  : 15,
  })
})

test('curried', () => {
  const spec = {
    one   : x1 => x1,
    two   : (x1, x2) => x1 + x2,
    three : (
      x1, x2, x3
    ) => x1 + x2 + x3,
  }
  expect(applySpec(spec)(1)(2)(3)).toEqual({
    one   : 1,
    two   : 3,
    three : 6,
  })
})

test('curried over 5 arguments', () => {
  const spec = {
    one   : x1 => x1,
    two   : (x1, x2) => x1 + x2,
    three : (
      x1, x2, x3
    ) => x1 + x2 + x3,
    four : (
      x1, x2, x3, x4
    ) => x1 + x2 + x3 + x4,
    five : (
      x1, x2, x3, x4, x5
    ) => x1 + x2 + x3 + x4 + x5,
  }
  expect(applySpec(spec)(1)(2)(3)(4)(5)).toEqual({
    one   : 1,
    two   : 3,
    three : 6,
    four  : 10,
    five  : 15,
  })
})

test('undefined property', () => {
  const spec = { prop : path([ 'property', 'doesnt', 'exist' ]) }
  expect(applySpec(spec, {})).toEqual({ prop : undefined })
})

test('restructure json object', () => {
  const spec = {
    id          : path('user.id'),
    name        : path('user.firstname'),
    profile     : path('user.profile'),
    doesntExist : path('user.profile.doesntExist'),
    info        : { views : compose(inc, prop('views')) },
    type        : always('playa'),
  }

  const data = {
    user : {
      id        : 1337,
      firstname : 'john',
      lastname  : 'shaft',
      profile   : 'shaft69',
    },
    views : 42,
  }

  expect(applySpec(spec, data)).toEqual({
    id          : 1337,
    name        : 'john',
    profile     : 'shaft69',
    doesntExist : undefined,
    info        : { views : 43 },
    type        : 'playa',
  })
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {multiply, applySpec, inc, dec, add} from 'rambda'

describe('applySpec', () => {
  it('ramda 1', () => {
    const result = applySpec({
      v: inc,
      u: dec,
    })(1)
    result // $ExpectType { v: number; u: number; }
  })
  it('ramda 1', () => {
    interface Output {
      sum: number,
      multiplied: number,
    }
    const result = applySpec<Output>({
      sum: add,
      multiplied: multiply,
    })(1, 2)

    result // $ExpectType Output
  })
})
```

</details>

### assoc

```typescript
assoc<T, U, K extends string>(prop: K, newValue: T, obj: U): Record<K, T> & U
```

It makes a shallow clone of `obj` with setting or overriding the property `prop` with `newValue`.

```javascript
R.assoc('c', 3, {a: 1, b: 2})
//=> {a: 1, b: 2, c: 3}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.assoc('c'%2C%203%2C%20%7Ba%3A%201%2C%20b%3A%202%7D)%0A%2F%2F%3D%3E%20%7Ba%3A%201%2C%20b%3A%202%2C%20c%3A%203%7D">Try the above <strong>R.assoc</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
assoc<T, U, K extends string>(prop: K, newValue: T, obj: U): Record<K, T> & U;
assoc<T, K extends string>(prop: K, newValue: T): <U>(obj: U) => Record<K, T> & U;
assoc<K extends string>(prop: K): <T, U>(newValue: T, obj: U) => Record<K, T> & U;
```

</details>

<details>

<summary><strong>R.assoc</strong> source</summary>

```javascript
import { curry } from './curry'

function assocFn(
  prop, newValue, obj
){
  return Object.assign(
    {}, obj, { [ prop ] : newValue }
  )
}

export const assoc = curry(assocFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { assoc } from './assoc'

test('adds a key to an empty object', () => {
  expect(assoc(
    'a', 1, {}
  )).toEqual({ a : 1 })
})

test('adds a key to a non-empty object', () => {
  expect(assoc(
    'b', 2, { a : 1 }
  )).toEqual({
    a : 1,
    b : 2,
  })
})

test('adds a key to a non-empty object - curry case 1', () => {
  expect(assoc('b', 2)({ a : 1 })).toEqual({
    a : 1,
    b : 2,
  })
})

test('adds a key to a non-empty object - curry case 2', () => {
  expect(assoc('b')(2, { a : 1 })).toEqual({
    a : 1,
    b : 2,
  })
})

test('adds a key to a non-empty object - curry case 3', () => {
  const result = assoc('b')(2)({ a : 1 })

  expect(result).toEqual({
    a : 1,
    b : 2,
  })
})

test('changes an existing key', () => {
  expect(assoc(
    'a', 2, { a : 1 }
  )).toEqual({ a : 2 })
})

test('undefined is considered an empty object', () => {
  expect(assoc(
    'a', 1, undefined
  )).toEqual({ a : 1 })
})

test('null is considered an empty object', () => {
  expect(assoc(
    'a', 1, null
  )).toEqual({ a : 1 })
})

test('value can be null', () => {
  expect(assoc(
    'a', null, null
  )).toEqual({ a : null })
})

test('value can be undefined', () => {
  expect(assoc(
    'a', undefined, null
  )).toEqual({ a : undefined })
})

test('assignment is shallow', () => {
  expect(assoc(
    'a', { b : 2 }, { a : { c : 3 } }
  )).toEqual({ a : { b : 2 } })
})
```

</details>

### assocPath

```typescript
assocPath<T, U>(path: Path, newValue: T, obj: U): U
```

It makes a shallow clone of `obj` with setting or overriding with `newValue` the property found with `path`.

```javascript
const path = 'b.c'
const newValue = 2
const obj = { a: 1 }

R.assocPath(path, newValue, obj)
// => { a : 1, b : { c : 2 }}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20const%20path%20%3D%20'b.c'%0Aconst%20newValue%20%3D%202%0Aconst%20obj%20%3D%20%7B%20a%3A%201%20%7D%0A%0AR.assocPath(path%2C%20newValue%2C%20obj)%0A%2F%2F%20%3D%3E%20%7B%20a%20%3A%201%2C%20b%20%3A%20%7B%20c%20%3A%202%20%7D%7D">Try the above <strong>R.assocPath</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
assocPath<T, U>(path: Path, newValue: T, obj: U): U;
assocPath<T, U>(path: Path, newValue: T): (obj: U) => U;
assocPath<T, U>(path: Path): FunctionToolbelt.Curry<(a: T, b: U) => U>;
```

</details>

<details>

<summary><strong>R.assocPath</strong> source</summary>

```javascript
import { _isArray } from './_internals/_isArray'
import { _isInteger } from './_internals/_isInteger'
import { assoc } from './assoc'
import { curry } from './curry'

function assocPathFn(
  list, newValue, input
){
  const pathArrValue = typeof list === 'string' ? list.split('.') : list
  if (pathArrValue.length === 0){
    return newValue
  }

  const index = pathArrValue[ 0 ]
  if (pathArrValue.length > 1){
    const condition =
      typeof input !== 'object' ||
      input === null ||
      !input.hasOwnProperty(index)

    const nextinput = condition ?
      _isInteger(parseInt(pathArrValue[ 1 ], 10)) ?
        [] :
        {} :
      input[ index ]
    newValue = assocPathFn(
      Array.prototype.slice.call(pathArrValue, 1),
      newValue,
      nextinput
    )
  }

  if (_isInteger(parseInt(index, 10)) && _isArray(input)){
    const arr = input.slice()
    arr[ index ] = newValue

    return arr
  }

  return assoc(
    index, newValue, input
  )
}

export const assocPath = curry(assocPathFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { assocPath } from './assocPath'

test('adds a key to an empty object', () => {
  expect(assocPath(
    'a', 1, {}
  )).toEqual({ a : 1 })
})

test('adds a key to a non-empty object', () => {
  expect(assocPath(
    'b', 2, { a : 1 }
  )).toEqual({
    a : 1,
    b : 2,
  })
})

test('adds a nested key to a non-empty object', () => {
  expect(assocPath(
    'b.c', 2, { a : 1 }
  )).toEqual({
    a : 1,
    b : { c : 2 },
  })
})

test('adds a nested key to a nested non-empty object - curry case 1', () => {
  expect(assocPath('b.d',
    3)({
    a : 1,
    b : { c : 2 },
  })).toEqual({
    a : 1,
    b : {
      c : 2,
      d : 3,
    },
  })
})

test('adds a key to a non-empty object - curry case 1', () => {
  expect(assocPath('b', 2)({ a : 1 })).toEqual({
    a : 1,
    b : 2,
  })
})

test('adds a nested key to a non-empty object - curry case 1', () => {
  expect(assocPath('b.c', 2)({ a : 1 })).toEqual({
    a : 1,
    b : { c : 2 },
  })
})

test('adds a nested array to a non-empty object - curry case 1', () => {
  expect(assocPath('b.0', 2)({ a : 1 })).toEqual({
    a : 1,
    b : [ 2 ],
  })
})

test('adds a key to a non-empty object - curry case 2', () => {
  expect(assocPath('b')(2, { a : 1 })).toEqual({
    a : 1,
    b : 2,
  })
})

test('adds a key to a non-empty object - curry case 3', () => {
  const result = assocPath('b')(2)({ a : 1 })

  expect(result).toEqual({
    a : 1,
    b : 2,
  })
})

test('changes an existing key', () => {
  expect(assocPath(
    'a', 2, { a : 1 }
  )).toEqual({ a : 2 })
})

test('undefined is considered an empty object', () => {
  expect(assocPath(
    'a', 1, undefined
  )).toEqual({ a : 1 })
})

test('null is considered an empty object', () => {
  expect(assocPath(
    'a', 1, null
  )).toEqual({ a : 1 })
})

test('value can be null', () => {
  expect(assocPath(
    'a', null, null
  )).toEqual({ a : null })
})

test('value can be undefined', () => {
  expect(assocPath(
    'a', undefined, null
  )).toEqual({ a : undefined })
})

test('assignment is shallow', () => {
  expect(assocPath(
    'a', { b : 2 }, { a : { c : 3 } }
  )).toEqual({ a : { b : 2 } })
})

test('happy', () => {
  const result = assocPath(
    [], 3, {
      a : 1,
      b : 2,
    }
  )
  expect(result).toEqual(3)
})

test('happy', () => {
  const expected = { foo : { bar : { baz : 42 } } }
  const result = assocPath(
    [ 'foo', 'bar', 'baz' ], 42, { foo : null }
  )
  expect(result).toEqual(expected)
})
```

</details>

### both

```typescript
both(pred1: Pred, pred2: Pred): Pred
```

It returns a function with `input` argument. 

This function will return `true`, if both `firstCondition` and `secondCondition` return `true` when `input` is passed as their argument.

```javascript
const firstCondition = x => x > 10
const secondCondition = x => x < 20
const fn = R.both(secondCondition)

const result = [fn(15), fn(30)]
// => [true, false]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20firstCondition%20%3D%20x%20%3D%3E%20x%20%3E%2010%0Aconst%20secondCondition%20%3D%20x%20%3D%3E%20x%20%3C%2020%0Aconst%20fn%20%3D%20R.both(secondCondition)%0A%0Aconst%20result%20%3D%20%5Bfn(15)%2C%20fn(30)%5D%0A%2F%2F%20%3D%3E%20%5Btrue%2C%20false%5D">Try the above <strong>R.both</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
both(pred1: Pred, pred2: Pred): Pred;
both<T>(pred1: Predicate<T>, pred2: Predicate<T>): Predicate<T>;
both<T>(pred1: Predicate<T>): (pred2: Predicate<T>) => Predicate<T>;
both(pred1: Pred): (pred2: Pred) => Pred;
```

</details>

<details>

<summary><strong>R.both</strong> source</summary>

```javascript
export function both(f, g){
  if (arguments.length === 1) return _g => both(f, _g)

  return (...input) => f(...input) && g(...input)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { both } from './both'

const firstFn = val => val > 0
const secondFn = val => val < 10

test('with curry', () => {
  expect(both(firstFn)(secondFn)(17)).toBeFalse()
})

test('without curry', () => {
  expect(both(firstFn, secondFn)(7)).toBeTrue()
})

test('with multiple inputs', () => {
  const between = function (
    a, b, c
  ){
    return a < b && b < c
  }
  const total20 = function (
    a, b, c
  ){
    return a + b + c === 20
  }
  const fn = both(between, total20)
  expect(fn(
    5, 7, 8
  )).toBeTrue()
})

test('skip evaluation of the second expression', () => {
  let effect = 'not evaluated'
  const F = function (){
    return false
  }
  const Z = function (){
    effect = 'Z got evaluated'
  }
  both(F, Z)()

  expect(effect).toBe('not evaluated')
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {both} from 'rambda'

describe('both', () => {
  it('with passed type', () => {
    const fn = both<number>( // $ExpectType Predicate<number>
      x => {
        return x > 1
      },
      x => {
        return x % 2 === 0
      }
    )
    const result = fn(2) // $ExpectType boolean
    result // $ExpectType boolean
  })
  it('no type passed', () => {
    const fn = both(
      x => {
        x // $ExpectType any
        return x > 1
      },
      x => {
        return x % 2 === 0
      }
    )
    const result = fn(2) // $ExpectType boolean
    result // $ExpectType boolean
  })
})

describe('both + curry', () => {
  it('with passed type', () => {
    const fn = both<number>(x => {
      return x > 1
    })(x => {
      return x % 2 === 0
    })
    fn // $ExpectType Predicate<number>
    const result = fn(2) // $ExpectType boolean
    result // $ExpectType boolean
  })
  it('no type passed', () => {
    const fn = both(x => {
      x // $ExpectType unknown
      return (x as number) > 1
    })(x => {
      return (x as number) % 2 === 0
    })
    const result = fn(2) // $ExpectType boolean
    result // $ExpectType boolean
  })
})
```

</details>

<details>

<summary>1 failed <italic>Ramda.both</italic> specs

> :boom: Reason for the failure: ramda supports fantasy-land
</summary>

```javascript
var S = require('sanctuary');

var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');
describe('both', function() {
  it('accepts fantasy-land applicative functors', function() {
    var Just = S.Just;
    var Nothing = S.Nothing;
    eq(R.both(Just(true), Just(true)), Just(true));
    eq(R.both(Just(true), Just(false)), Just(false));
    eq(R.both(Just(true), Nothing()), Nothing());
    eq(R.both(Nothing(), Just(false)), Nothing());
    eq(R.both(Nothing(), Nothing()), Nothing());
  });
});
```

</details>

### chain

```typescript
chain<T, U>(fn: (n: T) => readonly U[], list: readonly T[]): U[]
```

The method is also known as `flatMap`.

```javascript
const duplicate = n => [ n, n ]
const list = [ 1, 2, 3 ]

const result = chain(duplicate, list)
// => [ 1, 1, 2, 2, 3, 3 ]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20duplicate%20%3D%20n%20%3D%3E%20%5B%20n%2C%20n%20%5D%0Aconst%20list%20%3D%20%5B%201%2C%202%2C%203%20%5D%0A%0Aconst%20result%20%3D%20chain(duplicate%2C%20list)%0A%2F%2F%20%3D%3E%20%5B%201%2C%201%2C%202%2C%202%2C%203%2C%203%20%5D">Try the above <strong>R.chain</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
chain<T, U>(fn: (n: T) => readonly U[], list: readonly T[]): U[];
chain<T, U>(fn: (n: T) => readonly U[]): (list: readonly T[]) => U[];
chain<X0, X1, R>(fn: (x0: X0, x1: X1) => R, fn1: (x1: X1) => X0): (x1: X1) => R;
```

</details>

<details>

<summary><strong>R.chain</strong> source</summary>

```javascript
export function chain(fn, list){
  if (arguments.length === 1){
    return _list => chain(fn, _list)
  }

  return [].concat(...list.map(fn))
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { chain } from './chain'

const duplicate = n => [ n, n ]

test('happy', () => {
  const fn = x => [ x * 2 ]
  const list = [ 1, 2, 3 ]

  const result = chain(fn, list)

  expect(result).toEqual([ 2, 4, 6 ])
})

test('maps then flattens one level', () => {
  expect(chain(duplicate, [ 1, 2, 3 ])).toEqual([ 1, 1, 2, 2, 3, 3 ])
})

test('maps then flattens one level - curry', () => {
  expect(chain(duplicate)([ 1, 2, 3 ])).toEqual([ 1, 1, 2, 2, 3, 3 ])
})

test('flattens only one level', () => {
  const nest = n => [ [ n ] ]
  expect(chain(nest, [ 1, 2, 3 ])).toEqual([ [ 1 ], [ 2 ], [ 3 ] ])
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {chain} from 'rambda'

const list = [1, 2, 3]
const duplicate = (n: number) => [n, n]

describe('chain', () => {
  it('without passing type', () => {
    const result = chain(duplicate, list)
    result // $ExpectType number[]
  })

  it('passing types', () => {
    const duplicateAndModify = (x: number) => [`||${x}||`, `||${x}||`]
    const result = chain<number, string>(duplicateAndModify, list)
    const resultCurried = chain<number, string>(duplicateAndModify)(list)
    result // $ExpectType string[]
    resultCurried // $ExpectType string[]
  })
})
```

</details>

*5 failed Ramda.chain specs*

> :boom: Reason for the failure: ramda passes to `chain` if available | ramda supports fantasy-land

### change

```typescript
change<T>(
  origin: object,
  path: string,
  changeData: any
): T
```

It helps changing object's properties if there are below 3 levels deep.

It is intended for usage inside unit tests, when you need more powerful method to change object's properties.

`path` input argument allows you to specify which object's sub-branch you want to manipulate. You should pass an empty string if you target the whole `origin` object.

`changeData` can be a direct value. If it is a object, then this object is used to edit or add new properties to the selected sub-branch.

```javascript
const simpleResult = R.change(
  { a: 1, b: { c: 2 } },
  'b.c',
  3
)
const expectedSimpleResult = {
  a: 1,
  b: { c: 3 }
}
// simpleResult === expectedSimpleResult

const origin = {
  a   : 0,
  foo : {
    bar : 1,
    bax : { nested : 2 },
  }
}

const changeData = {
  bar: 2,
  bay: 3,
  bax: { baq: 9 }
}

const result = R.change(
  origin,
  'foo',
  changeData
)

const expected = {
  a   : 0,
  foo : {
    bar : 2,
    bay : 3,
    bax : {
      nested : 2,
      baq: 9
    },
  },
}
// => `result` is equal to `expected`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20simpleResult%20%3D%20R.change(%0A%20%20%7B%20a%3A%201%2C%20b%3A%20%7B%20c%3A%202%20%7D%20%7D%2C%0A%20%20'b.c'%2C%0A%20%203%0A)%0Aconst%20expectedSimpleResult%20%3D%20%7B%0A%20%20a%3A%201%2C%0A%20%20b%3A%20%7B%20c%3A%203%20%7D%0A%7D%0A%2F%2F%20simpleResult%20%3D%3D%3D%20expectedSimpleResult%0A%0Aconst%20origin%20%3D%20%7B%0A%20%20a%20%20%20%3A%200%2C%0A%20%20foo%20%3A%20%7B%0A%20%20%20%20bar%20%3A%201%2C%0A%20%20%20%20bax%20%3A%20%7B%20nested%20%3A%202%20%7D%2C%0A%20%20%7D%0A%7D%0A%0Aconst%20changeData%20%3D%20%7B%0A%20%20bar%3A%202%2C%0A%20%20bay%3A%203%2C%0A%20%20bax%3A%20%7B%20baq%3A%209%20%7D%0A%7D%0A%0Aconst%20result%20%3D%20R.change(%0A%20%20origin%2C%0A%20%20'foo'%2C%0A%20%20changeData%0A)%0A%0Aconst%20expected%20%3D%20%7B%0A%20%20a%20%20%20%3A%200%2C%0A%20%20foo%20%3A%20%7B%0A%20%20%20%20bar%20%3A%202%2C%0A%20%20%20%20bay%20%3A%203%2C%0A%20%20%20%20bax%20%3A%20%7B%0A%20%20%20%20%20%20nested%20%3A%202%2C%0A%20%20%20%20%20%20baq%3A%209%0A%20%20%20%20%7D%2C%0A%20%20%7D%2C%0A%7D%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%60expected%60">Try the above <strong>R.change</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
change<T>(
  origin: object,
  path: string,
  changeData: any
): T;
change<Input, Output>(
  origin: Input,
  path: string,
  changeData: any
): Output;
```

</details>

<details>

<summary><strong>R.change</strong> source</summary>

```javascript
//Its lodash's set method taken from
//https://github.com/lodash/lodash/blob/4.5.0-npm-packages
import { _isArray } from './_internals/_isArray'
import { set } from './_internals/set'
import { partition } from './partition'

const isObject = x => {
  const ok = x !== null && !_isArray(x) && typeof x === 'object'
  if (!ok){
    return false
  }

  return Object.keys(x).length > 0
}

export function change(
  origin, pathRaw, rules
){
  const willReturn = JSON.parse(JSON.stringify(origin))

  if (!isObject(rules)){
    set(
      willReturn, pathRaw, rules
    )

    return willReturn
  }
  const path = pathRaw === '' ? '' : `${ pathRaw }.`

  for (const ruleKey of Object.keys(rules)){
    const rule = rules[ ruleKey ]
    if (!isObject(rule)){
      set(
        willReturn, `${ path }${ ruleKey }`, rule
      )
      continue
    }
    const [ withObjects, withoutObjects ] = partition(subruleKey => isObject(rule[ subruleKey ]),
      Object.keys(rule))

    withoutObjects.forEach(subruleKey => {
      const subrule = rule[ subruleKey ]
      set(
        willReturn, `${ path }${ ruleKey }.${ subruleKey }`, subrule
      )
    })

    withObjects.forEach(subruleKey => {
      const subrule = rule[ subruleKey ]
      Object.keys(subrule).forEach(deepKey => {
        const deep = rule[ subruleKey ][ deepKey ]

        if (!isObject(deep)){
          return set(
            willReturn,
            `${ path }${ ruleKey }.${ subruleKey }.${ deepKey }`,
            deep
          )
        }

        Object.keys(deep).forEach(superDeepKey => {
          const superDeep = rule[ subruleKey ][ deepKey ][ superDeepKey ]

          set(
            willReturn,
            `${ path }${ ruleKey }.${ subruleKey }.${ deepKey }.${ superDeepKey }`,
            superDeep
          )
        })
      })
    })
  }

  return willReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { change } from './change'

const origin = {
  a   : 0,
  foo : {
    bar : 1,
    baz : false,
    bax : { nested : 2 },
  },
  first : {
    second : {
      third : {
        fourthA : 3,
        fourthB : 4,
        fourth  : {
          a     : 1,
          fifth : { unreachable : 22 },
        },
      },
    },
  },
}

test('when rule is not an object', () => {
  const expected = {
    a   : 0,
    foo : {
      bar : 1,
      baz : false,
      bax : { nested : 7 },
    },
    first : {
      second : {
        third : {
          fourthA : 3,
          fourthB : 4,
          fourth  : {
            a     : 1,
            fifth : { unreachable : 22 },
          },
        },
      },
    },
  }

  const result = change(
    origin, 'foo.bax.nested', 7
  )
  expect(result).toEqual(expected)
})

test('works with 4 levels deep nesting', () => {
  const changeData = {
    foo : {
      bar : 7,
      bax : { bay : 8 },
    },
    first : {
      second : {
        b     : 7,
        third : {
          fourthA : 9,
          fourth  : { a : 2 },
        },
      },
    },
  }
  const expected = {
    a   : 0,
    foo : {
      bar : 7,
      baz : false,
      bax : {
        nested : 2,
        bay    : 8,
      },
    },
    first : {
      second : {
        third : {
          fourthA : 9,
          fourthB : 4,
          // This is 5th level nesting
          // So we get the full change property
          // Instead of merge with the origin
          ///////////////////////////
          fourth  : { a : 2 },
        },
        b : 7,
      },
    },
  }
  const result = change(
    origin, '', changeData
  )
  expect(result).toEqual(expected)
})

test('simpler', () => {
  const localOrigin = {
    a   : 0,
    foo : {
      bar : 1,
      bax : { nested : 2 },
    },
  }
  const changeData = {
    bar : 2,
    bay : 3,
    bax : { baq : 9 },
  }
  const result = change(
    localOrigin, 'foo', changeData
  )

  const expectedResult = {
    a   : 0,
    foo : {
      bar : 2,
      bay : 3,
      bax : {
        nested : 2,
        baq    : 9,
      },
    },
  }

  expect(result).toEqual(expectedResult)
})
```

</details>

### clamp

```typescript
clamp(min: number, max: number, input: number): number
```

Restrict a number `input` to be withing `min` and `max` limits.

If `input` is bigger than `max`, then the result is `max`.

If `input` is smaller than `min`, then the result is `min`.

```javascript
R.clamp(0, 10, 5) //=> 5
R.clamp(0, 10, -1) //=> 0
R.clamp(0, 10, 11) //=> 10
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.clamp(0%2C%2010%2C%205)%20%2F%2F%3D%3E%205%0AR.clamp(0%2C%2010%2C%20-1)%20%2F%2F%3D%3E%200%0AR.clamp(0%2C%2010%2C%2011)%20%2F%2F%3D%3E%2010">Try the above <strong>R.clamp</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
clamp(min: number, max: number, input: number): number;
clamp(min: number, max: number): (input: number) => number;
```

</details>

<details>

<summary><strong>R.clamp</strong> source</summary>

```javascript
import { curry } from './curry'

function clampFn(
  min, max, input
){
  if (input >= min && input <= max) return input

  if (input > max) return max
  if (input < min) return min
}

export const clamp = curry(clampFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { clamp } from './clamp'

test('rambda specs', () => {
  expect(clamp(
    1, 10, 0
  )).toEqual(1)
  expect(clamp(
    3, 12, 1
  )).toEqual(3)
  expect(clamp(
    -15, 3, -100
  )).toEqual(-15)
  expect(clamp(
    1, 10, 20
  )).toEqual(10)
  expect(clamp(
    3, 12, 23
  )).toEqual(12)
  expect(clamp(
    -15, 3, 16
  )).toEqual(3)
  expect(clamp(
    1, 10, 4
  )).toEqual(4)
  expect(clamp(
    3, 12, 6
  )).toEqual(6)
  expect(clamp(
    -15, 3, 0
  )).toEqual(0)
})
```

</details>

### clone

```typescript
clone<T>(input: T): T
```

It creates a deep copy of the `input`, which may contain (nested) Arrays and Objects, Numbers, Strings, Booleans and Dates.

```javascript
const objects = [{a: 1}, {b: 2}];
const objectsClone = R.clone(objects);

const result = [
  R.equals(objects, objectsClone),
  R.equals(objects[0], objectsClone[0]),
] // => [ true, true ]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20objects%20%3D%20%5B%7Ba%3A%201%7D%2C%20%7Bb%3A%202%7D%5D%3B%0Aconst%20objectsClone%20%3D%20R.clone(objects)%3B%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.equals(objects%2C%20objectsClone)%2C%0A%20%20R.equals(objects%5B0%5D%2C%20objectsClone%5B0%5D)%2C%0A%5D%20%2F%2F%20%3D%3E%20%5B%20true%2C%20true%20%5D">Try the above <strong>R.clone</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
clone<T>(input: T): T;
clone<T>(input: ReadonlyArray<T>): T[];
```

</details>

<details>

<summary><strong>R.clone</strong> source</summary>

```javascript
import { _isArray } from './_internals/_isArray'

export function clone(input){
  const out = _isArray(input) ? Array(input.length) : {}
  if (input && input.getTime) return new Date(input.getTime())

  for (const key in input){
    const v = input[ key ]
    out[ key ] =
      typeof v === 'object' && v !== null ?
        v.getTime ?
          new Date(v.getTime()) :
          clone(v) :
        v
  }

  return out
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import assert from 'assert'

import { clone } from './clone'
import { equals } from './equals'

test('with array', () => {
  const arr = [
    {
      b : 2,
      c : 'foo',
      d : [ 1, 2, 3 ],
    },
    1,
    new Date(),
    null,
  ]
  expect(clone(arr)).toEqual(arr)
})

test('with object', () => {
  const arr = {
    a : 1,
    b : 2,
    c : 3,
    d : [ 1, 2, 3 ],
    e : new Date(),
  }
  expect(clone(arr)).toEqual(arr)
})

test('with date', () => {
  const date = new Date(
    2014, 10, 14, 23, 59, 59, 999
  )

  const cloned = clone(date)
  assert.notStrictEqual(date, cloned)
  expect(cloned).toEqual(new Date(
    2014, 10, 14, 23, 59, 59, 999
  ))

  expect(cloned.getDay()).toEqual(5)
})

test('with R.equals', () => {
  const objects = [ { a : 1 }, { b : 2 } ]

  const objectsClone = clone(objects)

  const result = [
    equals(objects, objectsClone),
    equals(objects[ 0 ], objectsClone[ 0 ]),
  ]
  expect(result).toEqual([ true, true ])
})
```

</details>

<details>

<summary>9 failed <italic>Ramda.clone</italic> specs

> :boom: Reason for the failure: rambda method work only with objects and arrays
</summary>

```javascript
var assert = require('assert');

var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');
describe('deep clone integers, strings and booleans', function() {
  it('clones integers', function() {
    eq(R.clone(-4), -4);
    eq(R.clone(9007199254740991), 9007199254740991);
  });
  it('clones floats', function() {
    eq(R.clone(-4.5), -4.5);
    eq(R.clone(0.0), 0.0);
  });
  it('clones strings', function() {
    eq(R.clone('ramda'), 'ramda');
  });
  it('clones booleans', function() {
    eq(R.clone(true), true);
  });
});
describe('deep clone objects', function() {
  it('clones objects with circular references', function() {
    var x = {c: null};
    var y = {a: x};
    var z = {b: y};
    x.c = z;
    var clone = R.clone(x);
    assert.notStrictEqual(x, clone);
    assert.notStrictEqual(x.c, clone.c);
    assert.notStrictEqual(x.c.b, clone.c.b);
    assert.notStrictEqual(x.c.b.a, clone.c.b.a);
    assert.notStrictEqual(x.c.b.a.c, clone.c.b.a.c);
    eq(R.keys(clone), R.keys(x));
    eq(R.keys(clone.c), R.keys(x.c));
    eq(R.keys(clone.c.b), R.keys(x.c.b));
    eq(R.keys(clone.c.b.a), R.keys(x.c.b.a));
    eq(R.keys(clone.c.b.a.c), R.keys(x.c.b.a.c));
    x.c.b = 1;
    assert.notDeepEqual(clone.c.b, x.c.b);
  });
});
describe('deep clone arrays', function() {
});
describe('deep clone functions', function() {
});
describe('built-in types', function() {
  it('clones RegExp object', function() {
    R.forEach(function(pattern) {
      var clone = R.clone(pattern);
      assert.notStrictEqual(clone, pattern);
      eq(clone.constructor, RegExp);
      eq(clone.source, pattern.source);
      eq(clone.global, pattern.global);
      eq(clone.ignoreCase, pattern.ignoreCase);
      eq(clone.multiline, pattern.multiline);
    }, [/x/, /x/g, /x/i, /x/m, /x/gi, /x/gm, /x/im, /x/gim]);
  });
});
describe('deep clone deep nested mixed objects', function() {
  it('clones array with mutual ref object', function() {
    var obj = {a: 1};
    var list = [{b: obj}, {b: obj}];
    var clone = R.clone(list);
    assert.strictEqual(list[0].b, list[1].b);
    assert.strictEqual(clone[0].b, clone[1].b);
    assert.notStrictEqual(clone[0].b, list[0].b);
    assert.notStrictEqual(clone[1].b, list[1].b);
    eq(clone[0].b, {a:1});
    eq(clone[1].b, {a:1});
    obj.a = 2;
    eq(clone[0].b, {a:1});
    eq(clone[1].b, {a:1});
  });
});
describe('deep clone edge cases', function() {
  it('nulls, undefineds and empty objects and arrays', function() {
    eq(R.clone(null), null);
    eq(R.clone(undefined), undefined);
    assert.notStrictEqual(R.clone(undefined), null);
    var obj = {};
    assert.notStrictEqual(R.clone(obj), obj);
    var list = [];
    assert.notStrictEqual(R.clone(list), list);
  });
});
describe('Let `R.clone` use an arbitrary user defined `clone` method', function() {
  it('dispatches to `clone` method if present', function() {
    function ArbitraryClone(x) { this.value = x; }
    ArbitraryClone.prototype.clone = function() { return new ArbitraryClone(this.value); };
    var obj = new ArbitraryClone(42);
    var arbitraryClonedObj = R.clone(obj);
    eq(arbitraryClonedObj, new ArbitraryClone(42));
    eq(arbitraryClonedObj instanceof ArbitraryClone, true);
  });
});
```

</details>

### compact

```typescript
compact<T>(x: any[]): T[]
```

It returns a clone of `list` without the falsy or empty elements.

```javascript
const list = [null, '', {}, [], 1]

const result = R.compact(list)
// => [1]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5Bnull%2C%20''%2C%20%7B%7D%2C%20%5B%5D%2C%201%5D%0A%0Aconst%20result%20%3D%20R.compact(list)%0A%2F%2F%20%3D%3E%20%5B1%5D">Try the above <strong>R.compact</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
compact<T>(x: any[]): T[];
```

</details>

<details>

<summary><strong>R.compact</strong> source</summary>

```javascript
import { equals } from './equals'
import { type } from './type'

const forbidden = [ 'Null', 'Undefined', 'RegExp' ]
const allowed = [ 'Number', 'Boolean' ]
const notEmpty = [ 'Array', 'String' ]

export function compact(list){
  const toReturn = []

  list.forEach(a => {
    const currentType = type(a)
    if (forbidden.includes(currentType)) return

    if (allowed.includes(currentType)) return toReturn.push(a)

    if (currentType === 'Object'){
      if (!equals(a, {})) toReturn.push(a)

      return
    }

    if (!notEmpty.includes(currentType)) return
    if (a.length === 0) return

    toReturn.push(a)
  })

  return toReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { compact } from './compact'

test('happy', () => {
  const arr = [
    1,
    null,
    undefined,
    false,
    '',
    ' ',
    () => {},
    'foo',
    {},
    [],
    [ 1 ],
    /\s/g,
  ]

  const result = compact(arr)
  const expected = [ 1, false, ' ', 'foo', [ 1 ] ]

  expect(result).toEqual(expected)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {compact} from 'rambda'

const list = ['', 2, 3]

describe('chain', () => {
  it('happy', () => {
    const result = compact(list)
    result // $ExpectType unknown[]
  })

  it('passing type', () => {
    const result = compact<number>(list)
    result // $ExpectType number[]
  })
})
```

</details>

### complement

```typescript
complement(pred: (...args: any[]) => boolean): (...args: any[]) => boolean
```

It returns `inverted` version of `origin` function that accept `input` as argument.

The return value of `inverted` is the negative boolean value of `origin(input)`.

```javascript
const origin = x => x > 5
const inverted = complement(origin)

const result = [
  origin(7),
  inverted(7)
] => [ true, false ]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20origin%20%3D%20x%20%3D%3E%20x%20%3E%205%0Aconst%20inverted%20%3D%20complement(origin)%0A%0Aconst%20result%20%3D%20%5B%0A%20%20origin(7)%2C%0A%20%20inverted(7)%0A%5D%20%3D%3E%20%5B%20true%2C%20false%20%5D">Try the above <strong>R.complement</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
complement(pred: (...args: any[]) => boolean): (...args: any[]) => boolean;
```

</details>

<details>

<summary><strong>R.complement</strong> source</summary>

```javascript
export function complement(fn){
  return (...input) => !fn(...input)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { complement } from './complement'

test('happy', () => {
  const fn = complement(x => x.length === 0)

  expect(fn([ 1, 2, 3 ])).toBeTrue()
})

test('with multiple parameters', () => {
  const between = function (
    a, b, c
  ){
    return a < b && b < c
  }
  const f = complement(between)
  expect(f(
    4, 5, 11
  )).toEqual(false)
  expect(f(
    12, 2, 6
  )).toEqual(true)
})
```

</details>

<details>

<summary>1 failed <italic>Ramda.complement</italic> specs

> :boom: Reason for the failure: ramda supports fantasy-land
</summary>

```javascript
var S = require('sanctuary');

var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');
describe('complement', function() {
  it('accepts fantasy-land functors', function() {
    var Just = S.Just;
    var Nothing = S.Nothing;
    eq(R.complement(Just(true)), Just(false));
    eq(R.complement(Just(false)), Just(true));
    eq(R.complement(Nothing()), Nothing());
  });
});
```

</details>

### compose

```typescript
compose<T1>(fn0: () => T1): () => T1
```

It performs right-to-left function composition.

```javascript
const result = R.compose(
  R.map(x => x * 2),
  R.filter(x => x > 2)
)([1, 2, 3, 4])

// => [6, 8]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.compose(%0A%20%20R.map(x%20%3D%3E%20x%20*%202)%2C%0A%20%20R.filter(x%20%3D%3E%20x%20%3E%202)%0A)(%5B1%2C%202%2C%203%2C%204%5D)%0A%0A%2F%2F%20%3D%3E%20%5B6%2C%208%5D">Try the above <strong>R.compose</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
compose<T1>(fn0: () => T1): () => T1;
compose<V0, T1>(fn0: (x0: V0) => T1): (x0: V0) => T1;
compose<V0, V1, T1>(fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T1;
compose<V0, V1, V2, T1>(fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T1;
```

</details>

<details>

<summary><strong>R.compose</strong> source</summary>

```javascript
export function compose(...fns){
  if (fns.length === 0){
    throw new Error('compose requires at least one argument')
  }

  return (...args) => {
    const list = fns.slice()
    if (list.length > 0){
      const fn = list.pop()
      let result = fn(...args)
      while (list.length > 0){
        result = list.pop()(result)
      }

      return result
    }
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { add } from './add'
import { compose } from './compose'
import { filter } from './filter'
import { last } from './last'
import { map } from './map'

test('happy', () => {
  const result = compose(
    last, map(add(10)), map(add(1))
  )([ 1, 2, 3 ])

  expect(result).toEqual(14)
})

test('accepts initially two arguments', () => {
  const result = compose(map(x => x * 2),
    (a, y) => filter(x => x > y, a))([ 1, 2, 3, 4 ], 2)

  expect(result).toEqual([ 6, 8 ])
})

test('when no arguments is passed', () => {
  expect(() => compose()).toThrow('compose requires at least one argument')
})

test('ramda spec', () => {
  const f = function (
    a, b, c
  ){
    return [ a, b, c ]
  }
  const g = compose(f)
  expect(g(
    1, 2, 3
  )).toEqual([ 1, 2, 3 ])
})
```

</details>

<details>

<summary>3 failed <italic>Ramda.compose</italic> specs

> :boom: Reason for the failure: ramda passes context to functions | rambda composed functions have no length
</summary>

```javascript
var assert = require('assert');
var jsv = require('jsverify');

var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');
describe('compose', function() {
  it('performs right-to-left function composition', function() {
    //  f :: (String, Number?) -> ([Number] -> [Number])
    var f = R.compose(R.map, R.multiply, parseInt);
    eq(f.length, 2);
    eq(f('10')([1, 2, 3]), [10, 20, 30]);
    eq(f('10', 2)([1, 2, 3]), [2, 4, 6]);
  });
  it('passes context to functions', function() {
    function x(val) {
      return this.x * val;
    }
    function y(val) {
      return this.y * val;
    }
    function z(val) {
      return this.z * val;
    }
    var context = {
      a: R.compose(x, y, z),
      x: 4,
      y: 2,
      z: 1
    };
    eq(context.a(5), 40);
  });
  it('can be applied to one argument', function() {
    var f = function(a, b, c) { return [a, b, c]; };
    var g = R.compose(f);
    eq(g.length, 3);
    eq(g(1, 2, 3), [1, 2, 3]);
  });
});
describe('compose properties', function() {
  jsv.property('composes two functions', jsv.fn(), jsv.fn(), jsv.nat, function(f, g, x) {
    return R.equals(R.compose(f, g)(x), f(g(x)));
  jsv.property('associative',  jsv.fn(), jsv.fn(), jsv.fn(), jsv.nat, function(f, g, h, x) {
    var result = f(g(h(x)));
    return R.all(R.equals(result), [
      R.compose(f, g, h)(x),
      R.compose(f, R.compose(g, h))(x),
      R.compose(R.compose(f, g), h)(x)
    ]);
});
```

</details>

### composeAsync

```typescript
composeAsync<Out>(
  ...fns: (Async<any> | Func<any>)[]
): (input: any) => Promise<Out>
```

Asynchronous version of `R.compose`

```javascript
const add = async x => {
  await R.delay(500)
  return x + 1
}
const passOn = async x => fn(x)

const result = R.composeAsync(
  add,
  passOn
)(0)
// `result` resolves to `2`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20add%20%3D%20async%20x%20%3D%3E%20%7B%0A%20%20await%20R.delay(500)%0A%20%20return%20x%20%2B%201%0A%7D%0Aconst%20passOn%20%3D%20async%20x%20%3D%3E%20fn(x)%0A%0Aconst%20result%20%3D%20R.composeAsync(%0A%20%20add%2C%0A%20%20passOn%0A)(0)%0A%2F%2F%20%60result%60%20resolves%20to%20%602%60">Try the above <strong>R.composeAsync</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
composeAsync<Out>(
  ...fns: (Async<any> | Func<any>)[]
): (input: any) => Promise<Out>;
composeAsync<Out>(
  ...fns: (Async<any> | Func<any>)[]
): (input: any) => Promise<Out>;
```

</details>

<details>

<summary><strong>R.composeAsync</strong> source</summary>

```javascript
import { type } from './type'

export function composeAsync(...inputArguments){
  return async function (startArgument){
    let argumentsToPass = startArgument

    while (inputArguments.length !== 0){
      const fn = inputArguments.pop()
      const typeFn = type(fn)

      if (typeFn === 'Async'){
        argumentsToPass = await fn(argumentsToPass)
      } else {
        argumentsToPass = fn(argumentsToPass)
      }
    }

    return argumentsToPass
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { composeAsync } from './composeAsync'
import { delay as delayModule } from './delay'
import { equals } from './equals'
import { map } from './map'
import { mapAsync } from './mapAsync'
import { prop } from './prop'
import { tapAsync } from './tapAsync'

test('1', async () => {
  const fn = input =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve({
          type    : 'result',
          payload : input,
        })
      }, 100)
    })

  const list = [ 'foo', 'bar' ].map(a => fn(a))

  const result = await composeAsync(
    map(prop('payload')),
    async inputs => Promise.all(inputs.map(async input => fn(input))),
    map(prop('payload'))
  )(await Promise.all(list))

  expect(result).toEqual([ 'foo', 'bar' ])
})

test('2', async () => {
  const delay = ms =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(ms + 110)
      }, ms)
    })

  const delayAsync = async ms => delay(ms)

  const result = await composeAsync(
    a => a - 1000,
    a => a,
    async a => delayAsync(a),
    a => a + 11
  )(await delay(20))
  expect(result).toEqual(-749)
})

test('3', async () => {
  try {
    const delay = ms =>
      new Promise((_, reject) => {
        setTimeout(() => {
          reject('error')
        }, ms)
      })

    const delayAsync = async ms => delay(ms)

    await composeAsync(a => a - 1000, delayAsync)(20)
  } catch (err){
    expect(err).toEqual('error')
  }
})

test('4', async () => {
  let sideEffect
  const result = await composeAsync(tapAsync(async x => {
    sideEffect = equals(x, [ 2, 4, 6 ])

    return delayModule(x * 3)
  }),
  mapAsync(async x => {
    await delayModule(x * 100)

    return x * 2
  }))([ 1, 2, 3 ])

  expect(result).toEqual([ 2, 4, 6 ])

  expect(sideEffect).toEqual(true)
})

test('inside compose explicit `async` keyword', async () => {
  const delay = ms =>
    new Promise((res, rej) => {
      const b = ms + 7

      res(b)
    })

  const result = await composeAsync(
    a => a,
    a => a + 1000,
    async a => delay(a),
    a => a + 11
  )(20)

  expect(result).toEqual(1038)
})

const delayFn = ms =>
  new Promise((res, rej) => {
    const b = ms + 7

    res(b)
  })

test('known issue - function returning promise', async () => {
  const result = await composeAsync(
    a => a,
    a => a + 1000,
    delayFn,
    a => a + 11
  )(20)

  expect(result).toEqual('[object Promise]1000')
})

test('throw error', async () => {
  const delay = async () => {
    await delayFn(1)
    JSON.parse('{foo')
  }

  let flag = true
  try {
    await composeAsync(
      a => a,
      a => a + 1000,
      async () => delay(),
      a => a + 11
    )(20)
  } catch (e){
    flag = false
  }

  expect(flag).toBe(false)
})
```

</details>

### concat

```typescript
concat<T>(x: ReadonlyArray<T>, y: ReadonlyArray<T>): T[]
```

It returns a new string or array, which is the result of merging `x` and `y`.

```javascript
R.concat([1, 2])([3, 4]) // => [1, 2, 3, 4]
R.concat('foo', 'bar') // => 'foobar'
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.concat(%5B1%2C%202%5D)(%5B3%2C%204%5D)%20%2F%2F%20%3D%3E%20%5B1%2C%202%2C%203%2C%204%5D%0AR.concat('foo'%2C%20'bar')%20%2F%2F%20%3D%3E%20'foobar'">Try the above <strong>R.concat</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
concat<T>(x: ReadonlyArray<T>, y: ReadonlyArray<T>): T[];
concat<T>(x: ReadonlyArray<T>): (y: ReadonlyArray<T>) => T[];
concat(x: string, y: string): string;
concat(x: string): (y: string) => string;
```

</details>

<details>

<summary><strong>R.concat</strong> source</summary>

```javascript
export function concat(x, y){
  if (arguments.length === 1) return _y => concat(x, _y)

  return typeof x === 'string' ? `${ x }${ y }` : [ ...x, ...y ]
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { concat } from './concat'

test('happy', () => {
  const arr1 = [ 'a', 'b', 'c' ]
  const arr2 = [ 'd', 'e', 'f' ]

  const a = concat(arr1, arr2)
  const b = concat(arr1)(arr2)
  const expectedResult = [ 'a', 'b', 'c', 'd', 'e', 'f' ]

  expect(a).toEqual(expectedResult)
  expect(b).toEqual(expectedResult)
})

test('with strings', () => {
  expect(concat('ABC', 'DEF')).toEqual('ABCDEF')
})
```

</details>

<details>

<summary>1 failed <italic>Ramda.concat</italic> specs

> :boom: Reason for the failure: ramda pass to concat method if present
</summary>

```javascript
var assert = require('assert');

var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');
describe('concat', function() {
  var z1 = {
    x: 'z1',
    concat: function(that) { return this.x + ' ' + that.x; }
  };
  var z2 = {
    x: 'z2'
  };
  it('delegates to non-String object with a concat method, as second param', function() {
    eq(R.concat(z1, z2), 'z1 z2');
  });
});
```

</details>

### cond

```typescript
cond(conditions: [Pred, (...a: readonly any[]) => any][]): (...a: readonly any[]) => any
```

It takes list with `conditions` and returns a new function `fn` that expects `input` as argument. 

This function will start evaluating the `conditions` in order to find the first winner(order of conditions matter). 

The winner is this condition, which left side returns `true` when `input` is its argument. Then the evaluation of the right side of the winner will be the final result.

If no winner is found, then `fn` returns `undefined`.

```javascript
const fn = R.cond([
  [ x => x > 25, R.always('more than 25') ],
  [ x => x > 15, R.always('more than 15') ],
  [ R.T, x => `${x} is nothing special` ],
])

const result = [
  fn(30),
  fn(20),
  fn(10),
] 
// => ['more than 25', 'more than 15', '10 is nothing special']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20fn%20%3D%20R.cond(%5B%0A%20%20%5B%20x%20%3D%3E%20x%20%3E%2025%2C%20R.always('more%20than%2025')%20%5D%2C%0A%20%20%5B%20x%20%3D%3E%20x%20%3E%2015%2C%20R.always('more%20than%2015')%20%5D%2C%0A%20%20%5B%20R.T%2C%20x%20%3D%3E%20%60%24%7Bx%7D%20is%20nothing%20special%60%20%5D%2C%0A%5D)%0A%0Aconst%20result%20%3D%20%5B%0A%20%20fn(30)%2C%0A%20%20fn(20)%2C%0A%20%20fn(10)%2C%0A%5D%20%0A%2F%2F%20%3D%3E%20%5B'more%20than%2025'%2C%20'more%20than%2015'%2C%20'10%20is%20nothing%20special'%5D">Try the above <strong>R.cond</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
cond(conditions: [Pred, (...a: readonly any[]) => any][]): (...a: readonly any[]) => any;
cond<A, B>(conditions: [SafePred<A>, (...a: readonly A[]) => B][]): (...a: readonly A[]) => B;
```

</details>

<details>

<summary><strong>R.cond</strong> source</summary>

```javascript
export function cond(conditions){
  return input => {
    let done = false
    let toReturn
    conditions.forEach(([ predicate, resultClosure ]) => {
      if (!done && predicate(input)){
        done = true
        toReturn = resultClosure(input)
      }
    })

    return toReturn
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { always } from './always'
import { cond } from './cond'
import { equals } from './equals'
import { T } from './T'

test('returns a function', () => {
  expect(typeof cond([])).toEqual('function')
})

test('returns a conditional function', () => {
  const fn = cond([
    [ equals(0), always('water freezes at 0°C') ],
    [ equals(100), always('water boils at 100°C') ],
    [
      T,
      function (temp){
        return 'nothing special happens at ' + temp + '°C'
      },
    ],
  ])
  expect(fn(0)).toEqual('water freezes at 0°C')
  expect(fn(50)).toEqual('nothing special happens at 50°C')
  expect(fn(100)).toEqual('water boils at 100°C')
})

test('no winner', () => {
  const fn = cond([
    [ equals('foo'), always(1) ],
    [ equals('bar'), always(2) ],
  ])
  expect(fn('quux')).toEqual(undefined)
})

test('predicates are tested in order', () => {
  const fn = cond([
    [ T, always('foo') ],
    [ T, always('bar') ],
    [ T, always('baz') ],
  ])
  expect(fn()).toEqual('foo')
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {cond, always, equals} from 'rambda'

describe('cond', () => {
  it('happy', () => {
    const fn = cond<number, string>([
      [equals(0), always('water freezes at 0°C')],
      [equals(100), always('water boils at 100°C')],
      [
        () => true,
        function(temp) {
          return 'nothing special happens at ' + temp + '°C'
        },
      ],
    ])

    const a = fn(0)
    a // $ExpectType string
  })
})
```

</details>

<details>

<summary>2 failed <italic>Ramda.cond</italic> specs

> :boom: Reason for the failure: pass to transformer is not applied in rambda
</summary>

```javascript
var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');

describe('cond', function() {
  it('forwards all arguments to predicates and to transformers', function() {
    var fn = R.cond([
      [function(_, x) { return x === 42; }, function() { return arguments.length; }]
    ]);
    eq(fn(21, 42, 84), 3);
  });
  it('retains highest predicate arity', function() {
    var fn = R.cond([
      [R.nAry(2, R.T), R.T],
      [R.nAry(3, R.T), R.T],
      [R.nAry(1, R.T), R.T]
    ]);
    eq(fn.length, 3);
  });
});
```

</details>

### converge

```typescript
converge(after: ((...a: readonly any[]) => any), fns: Array<((...a: readonly any[]) => any)>): (...a: readonly any[]) => any
```

<details>

<summary>All Typescript definitions</summary>

```typescript
converge(after: ((...a: readonly any[]) => any), fns: Array<((...a: readonly any[]) => any)>): (...a: readonly any[]) => any;
```

</details>

<details>

<summary><strong>R.converge</strong> source</summary>

```javascript
import { curryN } from './curryN'
import { map } from './map'
import { max } from './max'
import { reduce } from './reduce'

export function converge(fn, transformers){
  if (arguments.length === 1)
    return _transformers => converge(fn, _transformers)

  const highestArity = reduce(
    (a, b) => max(a, b.length), 0, transformers
  )

  return curryN(highestArity, function (){
    return fn.apply(this,
      map(g => g.apply(this, arguments), transformers))
  })
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { add } from './add'
import { converge } from './converge'

const mult = function (a, b){
  return a * b
}

const f1 = converge(mult, [
  function (a){
    return a
  },
  function (a){
    return a
  },
])
const f2 = converge(mult, [
  function (a){
    return a
  },
  function (a, b){
    return b
  },
])
const f3 = converge(mult, [
  function (a){
    return a
  },
  function (
    a, b, c
  ){
    return c
  },
])

test('passes the results of applying the arguments individually to two separate functions into a single one', () => {
  expect(converge(mult, [ add(1), add(3) ])(2)).toEqual(15) // mult(add1(2), add3(2)) = mult(3, 5) = 3 * 15;
})

test('returns a function with the length of the "longest" argument', () => {
  expect(f1.length).toEqual(1)
  expect(f2.length).toEqual(2)
  expect(f3.length).toEqual(3)
})

test('passes context to its functions', () => {
  const a = function (x){
    return this.f1(x)
  }
  const b = function (x){
    return this.f2(x)
  }
  const c = function (x, y){
    return this.f3(x, y)
  }
  const d = converge(c, [ a, b ])
  const context = {
    f1 : add(1),
    f2 : add(2),
    f3 : add,
  }
  expect(a.call(context, 1)).toEqual(2)
  expect(b.call(context, 1)).toEqual(3)
  expect(d.call(context, 1)).toEqual(5)
})

test('returns a curried function', () => {
  expect(f2(6)(7)).toEqual(42)
  expect(f3().length).toEqual(3)
})

test('works with empty functions list', () => {
  const fn = converge(function (){
    return arguments.length
  }, [])
  expect(fn.length).toEqual(0)
  expect(fn()).toEqual(0)
})
```

</details>

### count

```typescript
count<T>(searchFor: T, list: any[]): number
```

It counts how many times `searchFor` is within `list` according to `R.equals`.

```javascript
const list = [1, {a:1}, 1, 'foo']
const searchFor = 1

const result = R.count(searchFor, list)
// => 2
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B1%2C%20%7Ba%3A1%7D%2C%201%2C%20'foo'%5D%0Aconst%20searchFor%20%3D%201%0A%0Aconst%20result%20%3D%20R.count(searchFor%2C%20list)%0A%2F%2F%20%3D%3E%202">Try the above <strong>R.count</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
count<T>(searchFor: T, list: any[]): number;
count<T>(searchFor: T): (list: any[]) => number;
```

</details>

<details>

<summary><strong>R.count</strong> source</summary>

```javascript
import { _isArray } from './_internals/_isArray'
import { equals } from './equals'

export function count(searchFor, list){
  if (arguments.length === 1){
    return listHolder => count(searchFor, listHolder)
  }
  if (!_isArray(list)) return 0

  return list.filter(x => equals(x, searchFor)).length
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { count } from './count'

test('when 0', () => {
  const target = { a : 1 }
  const list = []

  const result = count(target, list)
  const expectedResult = 0

  expect(result).toEqual(expectedResult)
})

test('when 2', () => {
  const target = { a : 1 }
  const list = [ 2, 1, 2, { a : 1 }, 22, { a : 1 } ]

  const result = count(target)(list)
  const expectedResult = 2

  expect(result).toEqual(expectedResult)
})
```

</details>

### curry

```typescript
curry<F extends (...args: any) => any>(f: F): FunctionToolbelt.Curry<F>
```

It expects a function as input and returns its curried version.

```javascript
const fn = (a, b, c) => a + b + c
const curried = R.curry(fn)
const sum = curried(1,2)

const result = sum(3) // => 6
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20fn%20%3D%20(a%2C%20b%2C%20c)%20%3D%3E%20a%20%2B%20b%20%2B%20c%0Aconst%20curried%20%3D%20R.curry(fn)%0Aconst%20sum%20%3D%20curried(1%2C2)%0A%0Aconst%20result%20%3D%20sum(3)%20%2F%2F%20%3D%3E%206">Try the above <strong>R.curry</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
curry<F extends (...args: any) => any>(f: F): FunctionToolbelt.Curry<F>;
```

</details>

<details>

<summary><strong>R.curry</strong> source</summary>

```javascript
import { curryN } from './curryN'

export function curry(fn){
  return curryN(fn.length, fn)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { curry } from './curry'

test('happy', () => {
  const addFourNumbers = (
    a, b, c, d
  ) => a + b + c + d
  const curriedAddFourNumbers = curry(addFourNumbers)
  const f = curriedAddFourNumbers(1, 2)
  const g = f(3)

  expect(g(4)).toEqual(10)
})

test('when called with more arguments', () => {
  const add = curry((n, n2) => n + n2)

  expect(add(
    1, 2, 3
  )).toEqual(3)
})

test('when called with zero arguments', () => {
  const sub = curry((a, b) => a - b)
  const s0 = sub()

  expect(s0(5, 2)).toEqual(3)
})

test('when called via multiple curry stages', () => {
  const join = curry((
    a, b, c, d
  ) => [ a, b, c, d ].join('-'))

  const stage1 = join('A')
  const stage2 = stage1('B', 'C')

  expect(stage2('D')).toEqual('A-B-C-D')
})
```

</details>

<details>

<summary>3 failed <italic>Ramda.curry</italic> specs

> :boom: Reason for the failure: ramda support placeholder(R.__)
</summary>

```javascript
var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');
var jsv = require('jsverify');
var funcN = require('./shared/funcN');

describe('curry', function() {
  it('properly reports the length of the curried function', function() {
    var f = R.curry(function(a, b, c, d) {return (a + b * c) / d;});
    eq(f.length, 4);
    var g = f(12);
    eq(g.length, 3);
    var h = g(3);
    eq(h.length, 2);
    eq(g(3, 6).length, 1);
  });
  it('preserves context', function() {
    var ctx = {x: 10};
    var f = function(a, b) { return a + b * this.x; };
    var g = R.curry(f);
    eq(g.call(ctx, 2, 4), 42);
    eq(g.call(ctx, 2).call(ctx, 4), 42);
  });
  it('supports R.__ placeholder', function() {
    var f = function(a, b, c) { return [a, b, c]; };
    var g = R.curry(f);
    var _ = R.__;
    eq(g(1)(2)(3), [1, 2, 3]);
    eq(g(1)(2, 3), [1, 2, 3]);
    eq(g(1, 2)(3), [1, 2, 3]);
    eq(g(1, 2, 3), [1, 2, 3]);
    eq(g(_, 2, 3)(1), [1, 2, 3]);
    eq(g(1, _, 3)(2), [1, 2, 3]);
    eq(g(1, 2, _)(3), [1, 2, 3]);
    eq(g(1, _, _)(2)(3), [1, 2, 3]);
    eq(g(_, 2, _)(1)(3), [1, 2, 3]);
    eq(g(_, _, 3)(1)(2), [1, 2, 3]);
    eq(g(1, _, _)(2, 3), [1, 2, 3]);
    eq(g(_, 2, _)(1, 3), [1, 2, 3]);
    eq(g(_, _, 3)(1, 2), [1, 2, 3]);
    eq(g(1, _, _)(_, 3)(2), [1, 2, 3]);
    eq(g(_, 2, _)(_, 3)(1), [1, 2, 3]);
    eq(g(_, _, 3)(_, 2)(1), [1, 2, 3]);
    eq(g(_, _, _)(_, _)(_)(1, 2, 3), [1, 2, 3]);
    eq(g(_, _, _)(1, _, _)(_, _)(2, _)(_)(3), [1, 2, 3]);
  });
  it('supports @@functional/placeholder', function() {
    var f = function(a, b, c) { return [a, b, c]; };
    var g = R.curry(f);
    var _ = {'@@functional/placeholder': true, x: Math.random()};
    eq(g(1)(2)(3), [1, 2, 3]);
    eq(g(1)(2, 3), [1, 2, 3]);
    eq(g(1, 2)(3), [1, 2, 3]);
    eq(g(1, 2, 3), [1, 2, 3]);
    eq(g(_, 2, 3)(1), [1, 2, 3]);
    eq(g(1, _, 3)(2), [1, 2, 3]);
    eq(g(1, 2, _)(3), [1, 2, 3]);
    eq(g(1, _, _)(2)(3), [1, 2, 3]);
    eq(g(_, 2, _)(1)(3), [1, 2, 3]);
    eq(g(_, _, 3)(1)(2), [1, 2, 3]);
    eq(g(1, _, _)(2, 3), [1, 2, 3]);
    eq(g(_, 2, _)(1, 3), [1, 2, 3]);
    eq(g(_, _, 3)(1, 2), [1, 2, 3]);
    eq(g(1, _, _)(_, 3)(2), [1, 2, 3]);
    eq(g(_, 2, _)(_, 3)(1), [1, 2, 3]);
    eq(g(_, _, 3)(_, 2)(1), [1, 2, 3]);
    eq(g(_, _, _)(_, _)(_)(1, 2, 3), [1, 2, 3]);
    eq(g(_, _, _)(1, _, _)(_, _)(2, _)(_)(3), [1, 2, 3]);
  });
});
describe('curry properties', function() {
  jsv.property('curries multiple values', funcN(4), jsv.json, jsv.json, jsv.json, jsv.json, function(f, a, b, c, d) {
    var g = R.curry(f);
    return R.all(R.equals(f(a, b, c, d)), [
      g(a, b, c, d),
      g(a)(b)(c)(d),
      g(a)(b, c, d),
      g(a, b)(c, d),
      g(a, b, c)(d)
    ]);
  jsv.property('curries with placeholder', funcN(3), jsv.json, jsv.json, jsv.json, function(f, a, b, c) {
    var _ = {'@@functional/placeholder': true, x: Math.random()};
    var g = R.curry(f);
    return R.all(R.equals(f(a, b, c)), [
      g(_, _, c)(a, b),
      g(a, _, c)(b),
      g(_, b, c)(a),
      g(a, _, _)(_, c)(b),
      g(a, b, _)(c)
    ]);
});
```

</details>

### curryN

```typescript
curryN(length: number, fn: (...args: readonly any[]) => any): (...a: readonly any[]) => any
```

It returns a curried equivalent of the provided function, with the specified arity.

<details>

<summary>All Typescript definitions</summary>

```typescript
curryN(length: number, fn: (...args: readonly any[]) => any): (...a: readonly any[]) => any;
```

</details>

<details>

<summary><strong>R.curryN</strong> source</summary>

```javascript
function _curryN(
  n, cache, fn
){
  return function (){
    // concat cache and the arguments as fast as possible https://jsperf.com/concat-two-arrays-quickly
    let ci = 0
    let ai = 0
    const cl = cache.length
    const al = arguments.length
    const args = new Array(cl + al)
    while (ci < cl){
      args[ ci ] = cache[ ci ]
      ci++
    }
    while (ai < al){
      args[ cl + ai ] = arguments[ ai ]
      ai++
    }
    const remaining = n - args.length

    return args.length >= n ?
      fn.apply(this, args) :
      _arity(remaining, _curryN(
        n, args, fn
      ))
  }
}

function _arity(n, fn){
  switch (n){
  case 0:
    return function (){
      return fn.apply(this, arguments)
    }
  case 1:
    return function (_1){
      return fn.apply(this, arguments)
    }
  case 2:
    return function (_1, _2){
      return fn.apply(this, arguments)
    }
  case 3:
    return function (
      _1, _2, _3
    ){
      return fn.apply(this, arguments)
    }
  case 4:
    return function (
      _1, _2, _3, _4
    ){
      return fn.apply(this, arguments)
    }
  case 5:
    return function (
      _1, _2, _3, _4, _5
    ){
      return fn.apply(this, arguments)
    }
  case 6:
    return function (
      _1, _2, _3, _4, _5, _6
    ){
      return fn.apply(this, arguments)
    }
  case 7:
    return function (
      _1, _2, _3, _4, _5, _6, _7
    ){
      return fn.apply(this, arguments)
    }
  case 8:
    return function (
      _1, _2, _3, _4, _5, _6, _7, _8
    ){
      return fn.apply(this, arguments)
    }
  case 9:
    return function (
      _1, _2, _3, _4, _5, _6, _7, _8, _9
    ){
      return fn.apply(this, arguments)
    }
  case 10:
    return function (
      _1, _2, _3, _4, _5, _6, _7, _8, _9, _10
    ){
      return fn.apply(this, arguments)
    }
  default:
    throw new Error('First argument to _arity must be a non-negative integer no greater than ten')
  }
}

export function curryN(n, fn){
  if (arguments.length === 1) return _fn => curryN(n, _fn)

  return _arity(n, _curryN(
    n, [], fn
  ))
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { curryN } from './curryN'

describe('curryN', () => {
  function source(
    a, b, c, d
  ){
    void d

    return a * b * c
  }

  it('accepts an arity', () => {
    const curried = curryN(3, source)
    expect(curried(1)(2)(3)).toEqual(6)
    expect(curried(1, 2)(3)).toEqual(6)
    expect(curried(1)(2, 3)).toEqual(6)
    expect(curried(
      1, 2, 3
    )).toEqual(6)
  })

  it('can be partially applied', () => {
    const curry3 = curryN(3)
    const curried = curry3(source)
    expect(curried.length).toEqual(3)
    expect(curried(1)(2)(3)).toEqual(6)
    expect(curried(1, 2)(3)).toEqual(6)
    expect(curried(1)(2, 3)).toEqual(6)
    expect(curried(
      1, 2, 3
    )).toEqual(6)
  })

  it('preserves context', () => {
    const ctx = { x : 10 }
    const f = function (a, b){
      return a + b * this.x
    }
    const g = curryN(2, f)

    expect(g.call(
      ctx, 2, 4
    )).toEqual(42)
    expect(g.call(ctx, 2).call(ctx, 4)).toEqual(42)
  })

  it('forwards extra arguments', () => {
    const f = function (){
      return Array.prototype.slice.call(arguments)
    }
    const g = curryN(3, f)

    expect(g(
      1, 2, 3
    )).toEqual([ 1, 2, 3 ])
    expect(g(
      1, 2, 3, 4
    )).toEqual([ 1, 2, 3, 4 ])
    expect(g(1, 2)(3, 4)).toEqual([ 1, 2, 3, 4 ])
    expect(g(1)(
      2, 3, 4
    )).toEqual([ 1, 2, 3, 4 ])
    expect(g(1)(2)(3, 4)).toEqual([ 1, 2, 3, 4 ])
  })
})
```

</details>

### debounce

```typescript
debounce<T>(fn: T, ms: number): (input: T) => T
```

It creates a debounced function that delays invoking `fn` until after wait milliseconds `ms` have elapsed since the last time the debounced function was invoked.

```javascript
let counter = 0
const increment = () => {
  counter++
}

const debounced = R.debounce(increment, 1000)

const result = async function(){
  debounced()
  await R.delay(500)
  debounced()
  await R.delay(800)
  console.log(counter) // => 0

  await R.delay(1200)
  console.log(counter) // => 1

  return counter
}
// `result` resolves to `1`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?let%20counter%20%3D%200%0Aconst%20increment%20%3D%20()%20%3D%3E%20%7B%0A%20%20counter%2B%2B%0A%7D%0A%0Aconst%20debounced%20%3D%20R.debounce(increment%2C%201000)%0A%0Aconst%20result%20%3D%20async%20function()%7B%0A%20%20debounced()%0A%20%20await%20R.delay(500)%0A%20%20debounced()%0A%20%20await%20R.delay(800)%0A%20%20console.log(counter)%20%2F%2F%20%3D%3E%200%0A%0A%20%20await%20R.delay(1200)%0A%20%20console.log(counter)%20%2F%2F%20%3D%3E%201%0A%0A%20%20return%20counter%0A%7D%0A%2F%2F%20%60result%60%20resolves%20to%20%601%60">Try the above <strong>R.debounce</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
debounce<T>(fn: T, ms: number): (input: T) => T;
```

</details>

<details>

<summary><strong>R.debounce</strong> source</summary>

```javascript
export function debounce(
  func, ms, immediate = false
){
  let timeout

  return function (...input){
    const later = function (){
      timeout = null
      if (!immediate){
        func.apply(null, input)
      }
    }
    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, ms)
    if (callNow){
      func.apply(null, input)
    }
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { debounce } from './debounce'
import { delay } from './delay'

test('', async () => {
  let counter = 0
  let aHolder
  let bHolder

  const inc = (a, b) => {
    aHolder = a
    bHolder = b
    counter++
  }
  const incWrapped = debounce(inc, 500)

  incWrapped(1, 2)
  expect(counter).toBe(0)
  expect(aHolder).toBe(undefined)
  expect(bHolder).toBe(undefined)

  await delay(200)

  incWrapped(2, 3)
  expect(counter).toBe(0)

  await delay(200)

  incWrapped(3, 4)
  expect(counter).toBe(0)
  expect(aHolder).toBe(undefined)
  expect(bHolder).toBe(undefined)

  await delay(200)
  incWrapped(5, 6)
  expect(counter).toBe(0)

  await delay(700)
  expect(counter).toBe(1)
  expect(aHolder).toBe(5)
  expect(bHolder).toBe(6)
})

test('immediate debounce', async () => {
  let counter = 0
  const inc = () => {
    counter++
  }

  const incWrapped = debounce(
    inc, 500, true
  )
  incWrapped()
  expect(counter).toBe(1)
  await delay(200)
  incWrapped()
  expect(counter).toBe(1)
  await delay(200)
  incWrapped()
  expect(counter).toBe(1)
  await delay(700)
  incWrapped()
  expect(counter).toBe(2)
})
```

</details>

### dec

```typescript
dec(x: number): number
```

It decrements a number.

<details>

<summary>All Typescript definitions</summary>

```typescript
dec(x: number): number;
```

</details>

<details>

<summary><strong>R.dec</strong> source</summary>

```javascript
export const dec = x => x - 1
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { dec } from './dec'

test('happy', () => {
  expect(dec(2)).toBe(1)
})
```

</details>

### defaultTo

```typescript
defaultTo<T>(defaultValue: T): (...inputArguments: (T | null | undefined)[]) => T
```

It returns `defaultValue`, if all of `inputArguments` are `undefined`, `null` or `NaN`.

Else, it returns the first truthy `inputArguments` instance(from left to right).

```javascript
// With single input argument
R.defaultTo('foo', 'bar') // => 'bar'
R.defaultTo('foo', undefined) // => 'foo'

// With multiple input arguments
R.defaultTo('foo', undefined, null, NaN) // => 'foo'
R.defaultTo('foo', undefined, 'bar', NaN, 'qux') // => 'bar'
R.defaultTo('foo', undefined, null, NaN, 'quz') // => 'qux'
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%2F%2F%20With%20single%20input%20argument%0AR.defaultTo('foo'%2C%20'bar')%20%2F%2F%20%3D%3E%20'bar'%0AR.defaultTo('foo'%2C%20undefined)%20%2F%2F%20%3D%3E%20'foo'%0A%0A%2F%2F%20With%20multiple%20input%20arguments%0AR.defaultTo('foo'%2C%20undefined%2C%20null%2C%20NaN)%20%2F%2F%20%3D%3E%20'foo'%0AR.defaultTo('foo'%2C%20undefined%2C%20'bar'%2C%20NaN%2C%20'qux')%20%2F%2F%20%3D%3E%20'bar'%0AR.defaultTo('foo'%2C%20undefined%2C%20null%2C%20NaN%2C%20'quz')%20%2F%2F%20%3D%3E%20'qux'">Try the above <strong>R.defaultTo</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
defaultTo<T>(defaultValue: T): (...inputArguments: (T | null | undefined)[]) => T;
defaultTo<T>(defaultValue: T, ...inputArguments: (T | null | undefined)[]): T;
defaultTo<T, U>(defaultValue: T | U, ...inputArguments: (T | U | null | undefined)[]): T | U;
```

</details>

<details>

<summary><strong>R.defaultTo</strong> source</summary>

```javascript
function flagIs(inputArguments){
  return (
    inputArguments === undefined ||
    inputArguments === null ||
    Number.isNaN(inputArguments) === true
  )
}

export function defaultTo(defaultArgument, ...inputArguments){
  if (arguments.length === 1){
    return _inputArguments => defaultTo(defaultArgument, _inputArguments)
  } else if (arguments.length === 2){
    return flagIs(inputArguments[ 0 ]) ? defaultArgument : inputArguments[ 0 ]
  }

  const limit = inputArguments.length - 1
  let len = limit + 1
  let ready = false
  let holder

  while (!ready){
    const instance = inputArguments[ limit - len + 1 ]

    if (len === 0){
      ready = true
    } else if (flagIs(instance)){
      len -= 1
    } else {
      holder = instance
      ready = true
    }
  }

  return holder === undefined ? defaultArgument : holder
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { defaultTo } from './defaultTo'

test('with undefined', () => {
  expect(defaultTo('foo')(undefined)).toEqual('foo')
})

test('with null', () => {
  expect(defaultTo('foo')(null)).toEqual('foo')
})

test('with NaN', () => {
  expect(defaultTo('foo')(NaN)).toEqual('foo')
})

test('with empty string', () => {
  expect(defaultTo('foo', '')).toEqual('')
})

test('with false', () => {
  expect(defaultTo('foo', false)).toEqual(false)
})

test('when inputArgument passes initial check', () => {
  expect(defaultTo('foo', 'bar')).toEqual('bar')
})

test('default extends to indefinite input arguments - case 1', () => {
  const result = defaultTo(
    'foo', null, 'bar'
  )
  const expected = 'bar'

  expect(result).toEqual(expected)
})

test('default extends to indefinite input arguments - case 2', () => {
  const result = defaultTo(
    'foo', null, NaN, 'bar'
  )
  const expected = 'bar'

  expect(result).toEqual(expected)
})

test('default extends to indefinite input arguments - case 3', () => {
  const result = defaultTo(
    'foo', null, NaN, undefined
  )
  const expected = 'foo'

  expect(result).toEqual(expected)
})

test('default extends to indefinite input arguments - case 4', () => {
  const result = defaultTo(
    'foo', null, NaN, undefined, 'bar'
  )
  const expected = 'bar'

  expect(result).toEqual(expected)
})

test('default extends to indefinite input arguments - case 5', () => {
  const result = defaultTo(
    'foo', null, NaN, 'bar', 'baz'
  )
  const expected = 'bar'

  expect(result).toEqual(expected)
})

test('default extends to indefinite input arguments - case 6', () => {
  const result = defaultTo(
    'foo', null, NaN, undefined, null, NaN
  )
  const expected = 'foo'

  expect(result).toEqual(expected)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {defaultTo} from 'rambda'

describe('defaultTo with Ramda spec', () => {
  it('happy', () => {
    const x = defaultTo<string>('foo', undefined) // $ExpectType string
    x // $ExpectType string
  })
  it('fallback', () => {
    const x = defaultTo('foo', undefined) // $ExpectType "foo"
    x // $ExpectType "foo"
    const y = defaultTo('foo', 'bar') // $ExpectType "foo" | "bar"
    y // $ExpectType "foo" | "bar"
  })
  it('with one type', () => {
    const x = defaultTo<string>('foo', 'bar') // $ExpectType string
    x // $ExpectType string
  })
  it('with two types', () => {
    const x = defaultTo<string, number>('foo', 1) // $ExpectType string | number
    x // $ExpectType string | number
  })
})

describe('defaultTo with Rambda spec', () => {
  it('happy', () => {
    const x = defaultTo<string>('foo', undefined, 'bar') // $ExpectType string
    x // $ExpectType string
  })

  it('happy with curry', () => {
    const fn = defaultTo<string>('foo')
    const x = fn(undefined, 'bar', null) // $ExpectType string
    x // $ExpectType string
    const y = fn(undefined) // $ExpectType string
    y // $ExpectType string
  })

  it('with two types', () => {
    const x = defaultTo<string, number>('foo', undefined, 1, null, 2, 'bar') // $ExpectType string | number
    x // $ExpectType string | number
  })
})
```

</details>

### delay

```typescript
delay(ms: number): Promise<'RAMBDAX_DELAY'>
```

`setTimeout` as a promise that resolves to `R.DELAY` variable after `ms` milliseconds.

```javascript
const result = R.delay(1000)
// `result` resolves to `RAMBDAX_DELAY`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.delay(1000)%0A%2F%2F%20%60result%60%20resolves%20to%20%60RAMBDAX_DELAY%60">Try the above <strong>R.delay</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
delay(ms: number): Promise<'RAMBDAX_DELAY'>;
```

</details>

<details>

<summary><strong>R.delay</strong> source</summary>

```javascript
export const DELAY = 'RAMBDAX_DELAY'

export function delay(ms){
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(DELAY)
    }, ms)
  })
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { DELAY, delay } from './delay'

test('usage with variables', async () => {
  expect(await delay(500)).toBe(DELAY)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {delay, DELAY} from 'rambda'

describe('R.delay', () => {
  it('happy', async() => {
    const result = await delay(100)
    result // $ExpectType "RAMBDAX_DELAY"
    DELAY // $ExpectType "RAMBDAX_DELAY"
  })
})
```

</details>

### difference

```typescript
difference<T>(a: ReadonlyArray<T>, b: ReadonlyArray<T>): T[]
```

It returns the uniq set of all elements in the first list `a` not contained in the second list `b`.

```javascript
const a = [ 1, 2, 3, 4 ]
const b = [ 3, 4, 5, 6 ]

const result = difference(a, b)
// => [ 1, 2 ]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20a%20%3D%20%5B%201%2C%202%2C%203%2C%204%20%5D%0Aconst%20b%20%3D%20%5B%203%2C%204%2C%205%2C%206%20%5D%0A%0Aconst%20result%20%3D%20difference(a%2C%20b)%0A%2F%2F%20%3D%3E%20%5B%201%2C%202%20%5D">Try the above <strong>R.difference</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
difference<T>(a: ReadonlyArray<T>, b: ReadonlyArray<T>): T[];
difference<T>(a: ReadonlyArray<T>): (b: ReadonlyArray<T>) => T[];
```

</details>

<details>

<summary><strong>R.difference</strong> source</summary>

```javascript
import { includes } from './includes'
import { uniq } from './uniq'

export function difference(a, b){
  if (arguments.length === 1) return _b => difference(a, _b)

  return uniq(a).filter(aInstance => !includes(aInstance, b))
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { difference } from './difference'

test('difference', () => {
  const a = [ 1, 2, 3, 4 ]
  const b = [ 3, 4, 5, 6 ]
  expect(difference(a)(b)).toEqual([ 1, 2 ])

  expect(difference([], [])).toEqual([])
})

test('difference with objects', () => {
  const a = [ { id : 1 }, { id : 2 }, { id : 3 }, { id : 4 } ]
  const b = [ { id : 3 }, { id : 4 }, { id : 5 }, { id : 6 } ]
  expect(difference(a, b)).toEqual([ { id : 1 }, { id : 2 } ])
})

test('no duplicates in first list', () => {
  const M2 = [ 1, 2, 3, 4, 1, 2, 3, 4 ]
  const N2 = [ 3, 3, 4, 4, 5, 5, 6, 6 ]
  expect(difference(M2, N2)).toEqual([ 1, 2 ])
})

test('should use R.equals', () => {
  expect(difference([ NaN ], [ NaN ]).length).toEqual(0)
})
```

</details>

<details>

<summary>1 failed <italic>Ramda.difference</italic> specs

> :boom: Reason for the failure: ramda supports negative zero
</summary>

```javascript
var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');

describe('difference', function() {
  var M = [1, 2, 3, 4];
  var M2 = [1, 2, 3, 4, 1, 2, 3, 4];
  var N = [3, 4, 5, 6];
  var N2 = [3, 3, 4, 4, 5, 5, 6, 6];
  var Z = [3, 4, 5, 6, 10];
  var Z2 = [1, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8];
  it('has R.equals semantics', function() {
    function Just(x) { this.value = x; }
    Just.prototype.equals = function(x) {
      return x instanceof Just && R.equals(x.value, this.value);
    };
    eq(R.difference([0], [-0]).length, 1);
    eq(R.difference([-0], [0]).length, 1);
    eq(R.difference([NaN], [NaN]).length, 0);
    eq(R.difference([new Just([42])], [new Just([42])]).length, 0);
  });
});
```

</details>

### dissoc

```typescript
dissoc<T>(prop: string, obj: any): T
```

It returns a new object that does not contain property `prop`.

```javascript
R.dissoc('b', {a: 1, b: 2, c: 3})
//=> {a: 1, c: 3}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.dissoc('b'%2C%20%7Ba%3A%201%2C%20b%3A%202%2C%20c%3A%203%7D)%0A%2F%2F%3D%3E%20%7Ba%3A%201%2C%20c%3A%203%7D">Try the above <strong>R.dissoc</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
dissoc<T>(prop: string, obj: any): T;
dissoc(prop: string): <U>(obj: any) => U;
```

</details>

<details>

<summary><strong>R.dissoc</strong> source</summary>

```javascript
export function dissoc(prop, obj){
  if (arguments.length === 1) return _obj => dissoc(prop, _obj)

  if (obj === null || obj === undefined) return {}

  const willReturn = {}
  for (const p in obj){
    willReturn[ p ] = obj[ p ]
  }
  delete willReturn[ prop ]

  return willReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { dissoc } from './dissoc'

test('input is null or undefined', () => {
  expect(dissoc('b', null)).toEqual({})
  expect(dissoc('b', undefined)).toEqual({})
})

test('property exists curried', () => {
  expect(dissoc('b')({
    a : 1,
    b : 2,
  })).toEqual({ a : 1 })
})

test('property doesn\'t exists', () => {
  expect(dissoc('c', {
    a : 1,
    b : 2,
  })).toEqual({
    a : 1,
    b : 2,
  })
})

test('works with non-string property', () => {
  expect(dissoc(42, {
    a  : 1,
    42 : 2,
  })).toEqual({ a : 1 })

  expect(dissoc(null, {
    a    : 1,
    null : 2,
  })).toEqual({ a : 1 })

  expect(dissoc(undefined, {
    a         : 1,
    undefined : 2,
  })).toEqual({ a : 1 })
})

test('includes prototype properties', () => {
  function Rectangle(width, height){
    this.width = width
    this.height = height
  }
  const area = Rectangle.prototype.area = function (){
    return this.width * this.height
  }
  const rect = new Rectangle(7, 6)

  expect(dissoc('area', rect)).toEqual({
    width  : 7,
    height : 6,
  })

  expect(dissoc('width', rect)).toEqual({
    height : 6,
    area   : area,
  })

  expect(dissoc('depth', rect)).toEqual({
    width  : 7,
    height : 6,
    area   : area,
  })
})
```

</details>

### divide

```typescript
divide(a: number, b: number): number
```

```javascript
R.divide(71, 100) // => 0.71
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.divide(71%2C%20100)%20%2F%2F%20%3D%3E%200.71">Try the above <strong>R.divide</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
divide(a: number, b: number): number;
divide(a: number): (b: number) => number;
```

</details>

<details>

<summary><strong>R.divide</strong> source</summary>

```javascript
export function divide(a, b){
  if (arguments.length === 1) return _b => divide(a, _b)

  return a / b
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { divide } from './divide'

test('happy', () => {
  expect(divide(71, 100)).toEqual(0.71)
  expect(divide(71)(100)).toEqual(0.71)
})
```

</details>

### drop

```typescript
drop<T>(howManyToDrop: number, listOrString: ReadonlyArray<T>): T[]
```

It returns `listOrString` with `howManyToDrop` items dropped from its beginning.

```javascript
R.drop(2, ['foo', 'bar', 'baz']) // => ['baz']
R.drop(2, 'foobar')  // => 'obar'
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.drop(2%2C%20%5B'foo'%2C%20'bar'%2C%20'baz'%5D)%20%2F%2F%20%3D%3E%20%5B'baz'%5D%0AR.drop(2%2C%20'foobar')%20%20%2F%2F%20%3D%3E%20'obar'">Try the above <strong>R.drop</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
drop<T>(howManyToDrop: number, listOrString: ReadonlyArray<T>): T[];
drop(howManyToDrop: number, listOrString: string): string;
drop<T>(howManyToDrop: number): {
  (listOrString: string): string;
  (listOrString: ReadonlyArray<T>): T[];
};
```

</details>

<details>

<summary><strong>R.drop</strong> source</summary>

```javascript
export function drop(howManyToDrop, listOrString){
  if (arguments.length === 1) return _list => drop(howManyToDrop, _list)

  return listOrString.slice(howManyToDrop > 0 ? howManyToDrop : 0)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import assert from 'assert'

import { drop } from './drop'

test('with array', () => {
  expect(drop(2)([ 'foo', 'bar', 'baz' ])).toEqual([ 'baz' ])
  expect(drop(3, [ 'foo', 'bar', 'baz' ])).toEqual([])
  expect(drop(4, [ 'foo', 'bar', 'baz' ])).toEqual([])
})

test('with string', () => {
  expect(drop(3, 'rambda')).toEqual('bda')
})

test('with non-positive count', () => {
  expect(drop(0, [ 1, 2, 3 ])).toEqual([ 1, 2, 3 ])
  expect(drop(-1, [ 1, 2, 3 ])).toEqual([ 1, 2, 3 ])
  expect(drop(-Infinity, [ 1, 2, 3 ])).toEqual([ 1, 2, 3 ])
})

test('should return copy', () => {
  const xs = [ 1, 2, 3 ]

  assert.notStrictEqual(drop(0, xs), xs)
  assert.notStrictEqual(drop(-1, xs), xs)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {drop} from 'rambda'

describe('drop', () => {
  it('happy', () => {
    const x = drop(2, 'foo') // $ExpectType string
    x // $ExpectType string
    const xx = drop(2)('foo') // $ExpectType string
    xx // $ExpectType string
    const y = drop(2, [1, 2, 3]) // $ExpectType number[]
    y // $ExpectType number[]
    const yy = drop<number>(2)([1, 2, 3]) // $ExpectType number[]
    yy // $ExpectType number[]
  })
})
```

</details>

### dropLast

```typescript
dropLast<T>(howManyToDrop: number, listOrString: ReadonlyArray<T>): T[]
```

It returns `listOrString` with `howManyToDrop` items dropped from its end.

```javascript
R.dropLast(2, ['foo', 'bar', 'baz']) // => ['foo']
R.dropLast(2, 'foobar')  // => 'foob'
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.dropLast(2%2C%20%5B'foo'%2C%20'bar'%2C%20'baz'%5D)%20%2F%2F%20%3D%3E%20%5B'foo'%5D%0AR.dropLast(2%2C%20'foobar')%20%20%2F%2F%20%3D%3E%20'foob'">Try the above <strong>R.dropLast</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
dropLast<T>(howManyToDrop: number, listOrString: ReadonlyArray<T>): T[];
dropLast(howManyToDrop: number, listOrString: string): string;
dropLast<T>(howManyToDrop: number): {
  (listOrString: ReadonlyArray<T>): T[];
  (listOrString: string): string;
};
```

</details>

<details>

<summary><strong>R.dropLast</strong> source</summary>

```javascript
export function dropLast(howManyToDrop, listOrString){
  if (arguments.length === 1){
    return _listOrString => dropLast(howManyToDrop, _listOrString)
  }

  return howManyToDrop > 0 ?
    listOrString.slice(0, -howManyToDrop) :
    listOrString.slice()
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import assert from 'assert'

import { dropLast } from './dropLast'

test('with array', () => {
  expect(dropLast(2)([ 'foo', 'bar', 'baz' ])).toEqual([ 'foo' ])
  expect(dropLast(3, [ 'foo', 'bar', 'baz' ])).toEqual([])
  expect(dropLast(4, [ 'foo', 'bar', 'baz' ])).toEqual([])
})

test('with string', () => {
  expect(dropLast(3, 'rambda')).toEqual('ram')
})

test('with non-positive count', () => {
  expect(dropLast(0, [ 1, 2, 3 ])).toEqual([ 1, 2, 3 ])
  expect(dropLast(-1, [ 1, 2, 3 ])).toEqual([ 1, 2, 3 ])
  expect(dropLast(-Infinity, [ 1, 2, 3 ])).toEqual([ 1, 2, 3 ])
})

test('should return copy', () => {
  const xs = [ 1, 2, 3 ]

  assert.notStrictEqual(dropLast(0, xs), xs)
  assert.notStrictEqual(dropLast(-1, xs), xs)
})
```

</details>

<details>

<summary>5 failed <italic>Ramda.dropLast</italic> specs

> :boom: Reason for the failure: ramda method can act as a transducer
</summary>

```javascript
var assert = require('assert');

var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');
describe('dropLast', function() {
  it('can act as a transducer', function() {
    var dropLast2 = R.dropLast(2);
    assert.deepEqual(R.into([], dropLast2, [1, 3, 5, 7, 9, 1, 2]), [1, 3, 5, 7, 9]);
    assert.deepEqual(R.into([], dropLast2, [1]), []);
  });
});
```

</details>

### either

```typescript
either(firstPredicate: Pred, secondPredicate: Pred): Pred
```

It returns a new `predicate` function from `firstPredicate` and `secondPredicate` inputs.

This `predicate` function will return `true`, if any of the two input predicates return `true`.

```javascript
const firstPredicate = x => x > 10
const secondPredicate = x => x % 2 === 0
const predicate = R.either(firstPredicate, secondPredicate)

const result = [
  predicate(15),
  predicate(8),
  predicate(7),
]
//=> [true, true, false]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20firstPredicate%20%3D%20x%20%3D%3E%20x%20%3E%2010%0Aconst%20secondPredicate%20%3D%20x%20%3D%3E%20x%20%25%202%20%3D%3D%3D%200%0Aconst%20predicate%20%3D%20R.either(firstPredicate%2C%20secondPredicate)%0A%0Aconst%20result%20%3D%20%5B%0A%20%20predicate(15)%2C%0A%20%20predicate(8)%2C%0A%20%20predicate(7)%2C%0A%5D%0A%2F%2F%3D%3E%20%5Btrue%2C%20true%2C%20false%5D">Try the above <strong>R.either</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
either(firstPredicate: Pred, secondPredicate: Pred): Pred;
either(firstPredicate: Pred): (secondPredicate: Pred) => Pred;
```

</details>

<details>

<summary><strong>R.either</strong> source</summary>

```javascript
export function either(firstPredicate, secondPredicate){
  if (arguments.length === 1){
    return _secondPredicate => either(firstPredicate, _secondPredicate)
  }

  return (...input) =>
    Boolean(firstPredicate(...input) || secondPredicate(...input))
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { either } from './either'

test('with multiple inputs', () => {
  const between = function (
    a, b, c
  ){
    return a < b && b < c
  }
  const total20 = function (
    a, b, c
  ){
    return a + b + c === 20
  }
  const fn = either(between, total20)
  expect(fn(
    7, 8, 5
  )).toBeTrue()
})

test('skip evaluation of the second expression', () => {
  let effect = 'not evaluated'
  const F = function (){
    return true
  }
  const Z = function (){
    effect = 'Z got evaluated'
  }
  either(F, Z)()

  expect(effect).toBe('not evaluated')
})

test('case 1', () => {
  const firstFn = val => val > 0
  const secondFn = val => val * 5 > 10

  expect(either(firstFn, secondFn)(1)).toBeTrue()
})

test('case 2', () => {
  const firstFn = val => val > 0
  const secondFn = val => val === -10
  const fn = either(firstFn)(secondFn)

  expect(fn(-10)).toBeTrue()
})
```

</details>

<details>

<summary>1 failed <italic>Ramda.either</italic> specs

> :boom: Reason for the failure: ramda supports fantasy-land
</summary>

```javascript
var S = require('sanctuary');

var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');
describe('either', function() {
  it('accepts fantasy-land applicative functors', function() {
    var Just = S.Just;
    var Nothing = S.Nothing;
    eq(R.either(Just(true), Just(true)), Just(true));
    eq(R.either(Just(true), Just(false)), Just(true));
    eq(R.either(Just(false), Just(false)), Just(false));
    eq(R.either(Just(true), Nothing()), Nothing());
    eq(R.either(Nothing(), Just(false)), Nothing());
    eq(R.either(Nothing(), Nothing()), Nothing());
  });
});
```

</details>

### endsWith

```typescript
endsWith(target: string, str: string): boolean
```

Curried version of `String.prototype.endsWith`

```javascript
const str = 'foo-bar'
const target = '-bar'

const result = R.endsWith(target, str)
// => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20str%20%3D%20'foo-bar'%0Aconst%20target%20%3D%20'-bar'%0A%0Aconst%20result%20%3D%20R.endsWith(target%2C%20str)%0A%2F%2F%20%3D%3E%20true">Try the above <strong>R.endsWith</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
endsWith(target: string, str: string): boolean;
endsWith(target: string): (str: string) => boolean;
```

</details>

<details>

<summary><strong>R.endsWith</strong> source</summary>

```javascript
export function endsWith(target, str){
  if (arguments.length === 1) return _str => endsWith(target, _str)

  return str.endsWith(target)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { endsWith } from './endsWith'

test('happy', () => {
  expect(endsWith('bar', 'foo-bar')).toBeTrue()
  expect(endsWith('baz')('foo-bar')).toBeFalse()
})

test('does not work with arrays', () => {
  expect(() => endsWith([ 'c' ], [ 'a', 'b', 'c' ])).toThrow('str.endsWith is not a function')
})
```

</details>

<details>

<summary>4 failed <italic>Ramda.endsWith</italic> specs

> :boom: Reason for the failure: rambda doesn't support arrays
</summary>

```javascript
var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');

describe('startsWith', function() {
  it('should return true when an array ends with the provided value', function() {
    eq(R.endsWith(['c'], ['a', 'b', 'c']), true);
  });
  it('should return true when an array ends with the provided values', function() {
    eq(R.endsWith(['b', 'c'], ['a', 'b', 'c']), true);
  });
  it('should return false when an array does not end with the provided value', function() {
    eq(R.endsWith(['b'], ['a', 'b', 'c']), false);
  });
  it('should return false when an array does not end with the provided values', function() {
    eq(R.endsWith(['a', 'b'], ['a', 'b', 'c']), false);
  });
});
```

</details>

### equals

```typescript
equals<T>(a: T, b: T): boolean
```

It deeply compares `a` and `b` and returns `true` if they are equal.

```javascript
R.equals(
  [1, {a:2}, [{b: 3}]],
  [1, {a:2}, [{b: 3}]]
) // => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.equals(%0A%20%20%5B1%2C%20%7Ba%3A2%7D%2C%20%5B%7Bb%3A%203%7D%5D%5D%2C%0A%20%20%5B1%2C%20%7Ba%3A2%7D%2C%20%5B%7Bb%3A%203%7D%5D%5D%0A)%20%2F%2F%20%3D%3E%20true">Try the above <strong>R.equals</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
equals<T>(a: T, b: T): boolean;
equals<T>(a: T): (b: T) => boolean;
```

</details>

<details>

<summary><strong>R.equals</strong> source</summary>

```javascript
import { type } from './type'

function parseError(maybeError){
  const typeofError = maybeError.__proto__.toString()
  if (![ 'Error', 'TypeError' ].includes(typeofError)) return []

  return [ typeofError, maybeError.message ]
}

function parseDate(maybeDate){
  if (!maybeDate.toDateString) return [ false ]

  return [ true, maybeDate.getTime() ]
}

function parseRegex(maybeRegex){
  if (maybeRegex.constructor !== RegExp) return [ false ]

  return [ true, maybeRegex.toString() ]
}

export function equals(a, b){
  if (arguments.length === 1) return _b => equals(a, _b)

  const aType = type(a)

  if (aType !== type(b)) return false
  if ([ 'NaN', 'Undefined', 'Null' ].includes(aType)) return true
  if ([ 'Boolean', 'Number', 'String' ].includes(aType))
    return a.toString() === b.toString()

  if (aType === 'Array'){
    const aClone = Array.from(a)
    const bClone = Array.from(b)

    if (aClone.toString() !== bClone.toString()){
      return false
    }

    let loopArrayFlag = true
    aClone.forEach((aCloneInstance, aCloneIndex) => {
      if (loopArrayFlag){
        if (
          aCloneInstance !== bClone[ aCloneIndex ] &&
          !equals(aCloneInstance, bClone[ aCloneIndex ])
        ){
          loopArrayFlag = false
        }
      }
    })

    return loopArrayFlag
  }

  const aRegex = parseRegex(a)
  const bRegex = parseRegex(b)

  if (aRegex[ 0 ]){
    return bRegex[ 0 ] ? aRegex[ 1 ] === bRegex[ 1 ] : false
  } else if (bRegex[ 0 ]) return false

  const aDate = parseDate(a)
  const bDate = parseDate(b)

  if (aDate[ 0 ]){
    return bDate[ 0 ] ? aDate[ 1 ] === bDate[ 1 ] : false
  } else if (bDate[ 0 ]) return false

  const aError = parseError(a)
  const bError = parseError(b)

  if (aError[ 0 ]){
    return bError[ 0 ] ?
      aError[ 0 ] === bError[ 0 ] && aError[ 1 ] === bError[ 1 ] :
      false
  }

  if (aType === 'Object'){
    const aKeys = Object.keys(a)

    if (aKeys.length !== Object.keys(b).length){
      return false
    }

    let loopObjectFlag = true
    aKeys.forEach(aKeyInstance => {
      if (loopObjectFlag){
        const aValue = a[ aKeyInstance ]
        const bValue = b[ aKeyInstance ]

        if (aValue !== bValue && !equals(aValue, bValue)){
          loopObjectFlag = false
        }
      }
    })

    return loopObjectFlag
  }

  return false
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { equals } from './equals'

test('happy', () => {
  const result = equals([ 1, { a : 1 }, [ { b : 3 } ] ], [ 1, { a : 2 }, [ { b : 3 } ] ])

  expect(result).toBeFalse()
})

test('with regex', () => {
  expect(equals(/s/, /s/)).toEqual(true)
  expect(equals(/s/, /d/)).toEqual(false)
  expect(equals(/a/gi, /a/gi)).toEqual(true)
  expect(equals(/a/gim, /a/gim)).toEqual(true)
  expect(equals(/a/gi, /a/i)).toEqual(false)
})

test('not a number', () => {
  expect(equals([ NaN ], [ NaN ])).toBe(true)
})

test('new number', () => {
  expect(equals(new Number(0), new Number(0))).toEqual(true)
  expect(equals(new Number(0), new Number(1))).toEqual(false)
  expect(equals(new Number(1), new Number(0))).toEqual(false)
})

test('new string', () => {
  expect(equals(new String(''), new String(''))).toEqual(true)
  expect(equals(new String(''), new String('x'))).toEqual(false)
  expect(equals(new String('x'), new String(''))).toEqual(false)
  expect(equals(new String('foo'), new String('foo'))).toEqual(true)
  expect(equals(new String('foo'), new String('bar'))).toEqual(false)
  expect(equals(new String('bar'), new String('foo'))).toEqual(false)
})

test('new Boolean', () => {
  expect(equals(new Boolean(true), new Boolean(true))).toEqual(true)
  expect(equals(new Boolean(false), new Boolean(false))).toEqual(true)
  expect(equals(new Boolean(true), new Boolean(false))).toEqual(false)
  expect(equals(new Boolean(false), new Boolean(true))).toEqual(false)
})

test('new Error', () => {
  expect(equals(new Error('XXX'), {})).toEqual(false)
  expect(equals(new Error('XXX'), new TypeError('XXX'))).toEqual(false)
  expect(equals(new Error('XXX'), new Error('YYY'))).toEqual(false)
  expect(equals(new Error('XXX'), new Error('XXX'))).toEqual(true)
  expect(equals(new Error('XXX'), new TypeError('YYY'))).toEqual(false)
})

test('with dates', () => {
  expect(equals(new Date(0), new Date(0))).toEqual(true)
  expect(equals(new Date(1), new Date(1))).toEqual(true)
  expect(equals(new Date(0), new Date(1))).toEqual(false)
  expect(equals(new Date(1), new Date(0))).toEqual(false)
  expect(equals(new Date(0), {})).toEqual(false)
  expect(equals({}, new Date(0))).toEqual(false)
})

test('ramda spec', () => {
  expect(equals({}, {})).toEqual(true)

  expect(equals({
    a : 1,
    b : 2,
  },
  {
    a : 1,
    b : 2,
  })).toEqual(true)

  expect(equals({
    a : 2,
    b : 3,
  },
  {
    b : 3,
    a : 2,
  })).toEqual(true)

  expect(equals({
    a : 2,
    b : 3,
  },
  {
    a : 3,
    b : 3,
  })).toEqual(false)

  expect(equals({
    a : 2,
    b : 3,
    c : 1,
  },
  {
    a : 2,
    b : 3,
  })).toEqual(false)
})

test('works with boolean tuple', () => {
  expect(equals([ true, false ], [ true, false ])).toBeTrue()
  expect(equals([ true, false ], [ true, true ])).toBeFalse()
})

test('works with equal objects within array', () => {
  const objFirst = {
    a : {
      b : 1,
      c : 2,
      d : [ 1 ],
    },
  }
  const objSecond = {
    a : {
      b : 1,
      c : 2,
      d : [ 1 ],
    },
  }

  const x = [ 1, 2, objFirst, null, '', [] ]
  const y = [ 1, 2, objSecond, null, '', [] ]
  expect(equals(x, y)).toBeTrue()
})

test('works with different objects within array', () => {
  const objFirst = { a : { b : 1 } }
  const objSecond = { a : { b : 2 } }

  const x = [ 1, 2, objFirst, null, '', [] ]
  const y = [ 1, 2, objSecond, null, '', [] ]
  expect(equals(x, y)).toBeFalse()
})

test('works with undefined as second argument', () => {
  expect(equals(1, undefined)).toBeFalse()

  expect(equals(undefined, undefined)).toBeTrue()
})

test('various examples', () => {
  expect(equals([ 1, 2, 3 ])([ 1, 2, 3 ])).toBeTrue()

  expect(equals([ 1, 2, 3 ], [ 1, 2 ])).toBeFalse()

  expect(equals(1, 1)).toBeTrue()

  expect(equals(1, '1')).toBeFalse()

  expect(equals({}, {})).toBeTrue()

  expect(equals({
    a : 1,
    b : 2,
  },
  {
    b : 2,
    a : 1,
  })).toBeTrue()

  expect(equals({
    a : 1,
    b : 2,
  },
  {
    a : 1,
    b : 1,
  })).toBeFalse()

  expect(equals({
    a : 1,
    b : false,
  },
  {
    a : 1,
    b : 1,
  })).toBeFalse()

  expect(equals({
    a : 1,
    b : 2,
  },
  {
    b : 2,
    a : 1,
    c : 3,
  })).toBeFalse()

  expect(equals({
    x : {
      a : 1,
      b : 2,
    },
  },
  {
    x : {
      b : 2,
      a : 1,
      c : 3,
    },
  })).toBeFalse()

  expect(equals({
    a : 1,
    b : 2,
  },
  {
    b : 3,
    a : 1,
  })).toBeFalse()

  expect(equals({ a : { b : { c : 1 } } }, { a : { b : { c : 1 } } })).toBeTrue()

  expect(equals({ a : { b : { c : 1 } } }, { a : { b : { c : 2 } } })).toBeFalse()

  expect(equals({ a : {} }, { a : {} })).toBeTrue()

  expect(equals('', '')).toBeTrue()

  expect(equals('foo', 'foo')).toBeTrue()

  expect(equals('foo', 'bar')).toBeFalse()

  expect(equals(0, false)).toBeFalse()

  expect(equals(/\s/g, null)).toBeFalse()

  expect(equals(null, null)).toBeTrue()

  expect(equals(false)(null)).toBeFalse()
})
```

</details>

<details>

<summary>14 failed <italic>Ramda.equals</italic> specs

> :boom: Reason for the failure: rambda doesn't support recursive data structures, objects with same enumerable properties, map/weakmap type of variables | ramda dispatches to `equals` method recursively
</summary>

```javascript
/* global Map, Set, WeakMap, WeakSet */

var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');
describe('equals', function() {
  var a = [];
  var b = a;
  it('never considers Boolean primitive equal to Boolean object', function() {
    eq(R.equals(true, new Boolean(true)), false);
    eq(R.equals(new Boolean(true), true), false);
    eq(R.equals(false, new Boolean(false)), false);
    eq(R.equals(new Boolean(false), false), false);
  });
  it('never considers number primitive equal to Number object', function() {
    eq(R.equals(0, new Number(0)), false);
    eq(R.equals(new Number(0), 0), false);
  });
  it('never considers string primitive equal to String object', function() {
    eq(R.equals('', new String('')), false);
    eq(R.equals(new String(''), ''), false);
    eq(R.equals('x', new String('x')), false);
    eq(R.equals(new String('x'), 'x'), false);
  });
  var supportsSticky = false;
  try { RegExp('', 'y'); supportsSticky = true; } catch (e) {}
  var supportsUnicode = false;
  try { RegExp('', 'u'); supportsUnicode = true; } catch (e) {}
  var listA = [1, 2, 3];
  var listB = [1, 3, 2];
  var c = {}; c.v = c;
  var d = {}; d.v = d;
  var e = []; e.push(e);
  var f = []; f.push(f);
  var nestA = {a:[1, 2, {c:1}], b:1};
  var nestB = {a:[1, 2, {c:1}], b:1};
  var nestC = {a:[1, 2, {c:2}], b:1};
  it('handles recursive data structures', function() {
    eq(R.equals(c, d), true);
    eq(R.equals(e, f), true);
    eq(R.equals(nestA, nestB), true);
    eq(R.equals(nestA, nestC), false);
  });
  it('requires that both objects have the same enumerable properties with the same values', function() {
    var a1 = [];
    var a2 = [];
    a2.x = 0;
    var b1 = new Boolean(false);
    var b2 = new Boolean(false);
    b2.x = 0;
    var d1 = new Date(0);
    var d2 = new Date(0);
    d2.x = 0;
    var n1 = new Number(0);
    var n2 = new Number(0);
    n2.x = 0;
    var r1 = /(?:)/;
    var r2 = /(?:)/;
    r2.x = 0;
    var s1 = new String('');
    var s2 = new String('');
    s2.x = 0;
    eq(R.equals(a1, a2), false);
    eq(R.equals(b1, b2), false);
    eq(R.equals(d1, d2), false);
    eq(R.equals(n1, n2), false);
    eq(R.equals(r1, r2), false);
    eq(R.equals(s1, s2), false);
  });
  if (typeof ArrayBuffer !== 'undefined' && typeof Int8Array !== 'undefined') {
    var typArr1 = new ArrayBuffer(10);
    typArr1[0] = 1;
    var typArr2 = new ArrayBuffer(10);
    typArr2[0] = 1;
    var typArr3 = new ArrayBuffer(10);
    var intTypArr = new Int8Array(typArr1);
    typArr3[0] = 0;
    it('handles typed arrays', function() {
      eq(R.equals(typArr1, typArr2), true);
      eq(R.equals(typArr1, typArr3), false);
      eq(R.equals(typArr1, intTypArr), false);
    });
  }
  if (typeof Promise !== 'undefined') {
    it('compares Promise objects by identity', function() {
      var p = Promise.resolve(42);
      var q = Promise.resolve(42);
      eq(R.equals(p, p), true);
      eq(R.equals(p, q), false);
    });
  }
  if (typeof Map !== 'undefined') {
    it('compares Map objects by value', function() {
      eq(R.equals(new Map([]), new Map([])), true);
      eq(R.equals(new Map([]), new Map([[1, 'a']])), false);
      eq(R.equals(new Map([[1, 'a']]), new Map([])), false);
      eq(R.equals(new Map([[1, 'a']]), new Map([[1, 'a']])), true);
      eq(R.equals(new Map([[1, 'a'], [2, 'b']]), new Map([[2, 'b'], [1, 'a']])), true);
      eq(R.equals(new Map([[1, 'a']]), new Map([[2, 'a']])), false);
      eq(R.equals(new Map([[1, 'a']]), new Map([[1, 'b']])), false);
      eq(R.equals(new Map([[1, 'a'], [2, new Map([[3, 'c']])]]), new Map([[1, 'a'], [2, new Map([[3, 'c']])]])), true);
      eq(R.equals(new Map([[1, 'a'], [2, new Map([[3, 'c']])]]), new Map([[1, 'a'], [2, new Map([[3, 'd']])]])), false);
      eq(R.equals(new Map([[[1, 2, 3], [4, 5, 6]]]), new Map([[[1, 2, 3], [4, 5, 6]]])), true);
      eq(R.equals(new Map([[[1, 2, 3], [4, 5, 6]]]), new Map([[[1, 2, 3], [7, 8, 9]]])), false);
    });
    it('dispatches to `equals` method recursively in Set', function() {
      var a = new Map();
      var b = new Map();
      a.set(a, a);
      eq(R.equals(a, b), false);
      a.set(b, b);
      b.set(b, b);
      b.set(a, a);
      eq(R.equals(a, b), true);
    });
  }
  if (typeof Set !== 'undefined') {
    it('compares Set objects by value', function() {
      eq(R.equals(new Set([]), new Set([])), true);
      eq(R.equals(new Set([]), new Set([1])), false);
      eq(R.equals(new Set([1]), new Set([])), false);
      eq(R.equals(new Set([1, 2]), new Set([2, 1])), true);
      eq(R.equals(new Set([1, new Set([2, new Set([3])])]), new Set([1, new Set([2, new Set([3])])])), true);
      eq(R.equals(new Set([1, new Set([2, new Set([3])])]), new Set([1, new Set([2, new Set([4])])])), false);
      eq(R.equals(new Set([[1, 2, 3], [4, 5, 6]]), new Set([[1, 2, 3], [4, 5, 6]])), true);
      eq(R.equals(new Set([[1, 2, 3], [4, 5, 6]]), new Set([[1, 2, 3], [7, 8, 9]])), false);
    });
    it('dispatches to `equals` method recursively in Set', function() {
      var a = new Set();
      var b = new Set();
      a.add(a);
      eq(R.equals(a, b), false);
      a.add(b);
      b.add(b);
      b.add(a);
      eq(R.equals(a, b), true);
    });
  }
  if (typeof WeakMap !== 'undefined') {
    it('compares WeakMap objects by identity', function() {
      var m = new WeakMap([]);
      eq(R.equals(m, m), true);
      eq(R.equals(m, new WeakMap([])), false);
    });
  }
  if (typeof WeakSet !== 'undefined') {
    it('compares WeakSet objects by identity', function() {
      var s = new WeakSet([]);
      eq(R.equals(s, s), true);
      eq(R.equals(s, new WeakSet([])), false);
    });
  }
  it('dispatches to `equals` method recursively', function() {
    function Left(x) { this.value = x; }
    Left.prototype.equals = function(x) {
      return x instanceof Left && R.equals(x.value, this.value);
    };
    function Right(x) { this.value = x; }
    Right.prototype.equals = function(x) {
      return x instanceof Right && R.equals(x.value, this.value);
    };
    eq(R.equals(new Left([42]), new Left([42])), true);
    eq(R.equals(new Left([42]), new Left([43])), false);
    eq(R.equals(new Left(42), {value: 42}), false);
    eq(R.equals({value: 42}, new Left(42)), false);
    eq(R.equals(new Left(42), new Right(42)), false);
    eq(R.equals(new Right(42), new Left(42)), false);
    eq(R.equals([new Left(42)], [new Left(42)]), true);
    eq(R.equals([new Left(42)], [new Right(42)]), false);
    eq(R.equals([new Right(42)], [new Left(42)]), false);
    eq(R.equals([new Right(42)], [new Right(42)]), true);
  });
});
```

</details>

### F

```typescript
F(): boolean
```

```javascript
F() // => false
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20F()%20%2F%2F%20%3D%3E%20false">Try the above <strong>R.F</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
F(): boolean;
```

</details>

<details>

<summary><strong>R.F</strong> source</summary>

```javascript
export function F(){
  return false
}
```

</details>

### filter

```typescript
filter<T>(predicate: FilterFunctionArray<T>): (x: T[]) => T[]
```

It filters list or object `input` with `predicate`.

```javascript
const list = [3, 4, 3, 2]
const listPredicate = (x, index) => x - index > 2

const object = {abc: 'fo', xyz: 'bar', baz: 'foo'}
const objectPredicate = (x, prop) => x.length + prop.length > 5

const result = [
  R.filter(listPredicate, list),
  R.filter(objectPredicate, object)
]
// => [ [3, 4], { xyz: 'bar', baz: 'foo'} ]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B3%2C%204%2C%203%2C%202%5D%0Aconst%20listPredicate%20%3D%20(x%2C%20index)%20%3D%3E%20x%20-%20index%20%3E%202%0A%0Aconst%20object%20%3D%20%7Babc%3A%20'fo'%2C%20xyz%3A%20'bar'%2C%20baz%3A%20'foo'%7D%0Aconst%20objectPredicate%20%3D%20(x%2C%20prop)%20%3D%3E%20x.length%20%2B%20prop.length%20%3E%205%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.filter(listPredicate%2C%20list)%2C%0A%20%20R.filter(objectPredicate%2C%20object)%0A%5D%0A%2F%2F%20%3D%3E%20%5B%20%5B3%2C%204%5D%2C%20%7B%20xyz%3A%20'bar'%2C%20baz%3A%20'foo'%7D%20%5D">Try the above <strong>R.filter</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
filter<T>(predicate: FilterFunctionArray<T>): (x: T[]) => T[];
filter<T>(predicate: FilterFunctionArray<T>, x: T[]): T[];
filter<T, U>(predicate: FilterFunctionObject<T>): (x: Dictionary<T>) => Dictionary<T>;
filter<T>(predicate: FilterFunctionObject<T>, x: Dictionary<T>): Dictionary<T>;
```

</details>

<details>

<summary><strong>R.filter</strong> source</summary>

```javascript
import { _isArray } from './_internals/_isArray'

function filterObject(fn, obj){
  const willReturn = {}

  for (const prop in obj){
    if (fn(
      obj[ prop ], prop, obj
    )){
      willReturn[ prop ] = obj[ prop ]
    }
  }

  return willReturn
}

export function filter(predicate, list){
  if (arguments.length === 1) return _list => filter(predicate, _list)

  if (!list) return []

  if (!_isArray(list)){
    return filterObject(predicate, list)
  }

  let index = 0
  const len = list.length
  const willReturn = []

  while (index < len){
    const value = list[ index ]

    if (predicate(value, index)){
      willReturn.push(value)
    }

    index++
  }

  return willReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import Ramda from 'ramda'

import { F } from './F'
import { filter } from './filter'
import { T } from './T'

const sampleObject = {
  a : 1,
  b : 2,
  c : 3,
  d : 4,
}

test('happy', () => {
  const isEven = n => n % 2 === 0

  expect(filter(isEven, [ 1, 2, 3, 4 ])).toEqual([ 2, 4 ])
  expect(filter(isEven, {
    a : 1,
    b : 2,
    d : 3,
  })).toEqual({ b : 2 })
})

test('bad inputs', () => {
  expect(filter(T)(undefined)).toEqual([])
  expect(filter(F, null)).toEqual([])
  expect(() => Ramda.filter(T, null)).toThrow()
  expect(() => Ramda.filter(T, undefined)).toThrow()
})

test('predicate when input is object', () => {
  const obj = {
    a : 1,
    b : 2,
  }
  const predicate = (
    val, prop, inputObject
  ) => {
    expect(inputObject).toEqual(obj)
    expect(typeof prop).toEqual('string')

    return val < 2
  }
  expect(filter(predicate, obj)).toEqual({ a : 1 })
})

test('pass index as second argument', () => {
  let counter = 0
  filter((x, i) => {
    expect(i).toBe(counter)
    counter++
  },
  [ 10, 20, 30 ])
})

test('with object', () => {
  const isEven = n => n % 2 === 0
  const result = filter(isEven, sampleObject)
  const expectedResult = {
    b : 2,
    d : 4,
  }

  expect(result).toEqual(expectedResult)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {filter} from 'rambda'

describe('filter with array', () => {
  it('1 curry', () => {
    const x = filter<number>(a => {
      a // $ExpectType number
      return a > 1
    })([1, 2, 3])
    x // $ExpectType number[]
  })
  it('1', () => {
    const x = filter<number>(
      a => {
        a // $ExpectType number
        return a > 1
      },
      [1, 2, 3]
    )
    x // $ExpectType number[]
  })
  it('2', () => {
    const x = filter<number>(
      (a, b) => {
        a // $ExpectType number
        return a > 1
      },
      [1, 2, 3]
    )
    x // $ExpectType number[]
  })
})

describe('filter with objects', () => {
  it('curry', () => {
    const x = filter<number, number>((a, b, c) => {
      b // $ExpectType string
      c // $ExpectType Dictionary<number>

      return a > 1
    })({a: 1, b: 2})
    x // $ExpectType Dictionary<number>
  })

  it('object with three arguments predicate', () => {
    const x = filter<number>(
      (a, b, c) => {
        b // $ExpectType string
        c // $ExpectType Dictionary<number>

        return a > 1
      },
      {a: 1, b: 2}
    )
    x // $ExpectType Dictionary<number>
  })

  it('object with two arguments predicate', () => {
    const x = filter<number>(
      (a, b) => {
        b // $ExpectType string
        return a > 1
      },
      {a: 1, b: 2}
    )
    x // $ExpectType Dictionary<number>
  })
  it('object with one argument predicate', () => {
    const x = filter<number>(
      a => {
        a // $ExpectType number
        return a > 1
      },
      {a: 1, b: 2}
    )
    x // $ExpectType Dictionary<number>
  })
})
```

</details>

<details>

<summary>1 failed <italic>Ramda.filter</italic> specs

> :boom: Reason for the failure: ramda dispatches to `filter` method of object
</summary>

```javascript
var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');
var Maybe = require('./shared/Maybe');

describe('filter', function() {
  var even = function(x) {return x % 2 === 0;};
  it('dispatches to passed-in non-Array object with a `filter` method', function() {
    var f = {filter: function(f) { return f('called f.filter'); }};
    eq(R.filter(function(s) { return s; }, f), 'called f.filter');
  });
  it('correctly uses fantasy-land implementations', function() {
    var m1 = Maybe.Just(-1);
    var m2 = R.filter(function(x) { return x > 0; } , m1);
    eq(m2.isNothing, true);
  });
});
```

</details>

### filterAsync

```typescript
filterAsync<T>(fn: (x: T) => Promise<boolean>, list: T[]): Promise<T[]>
```

Asynchronous version of `R.filter`

```javascript
const predicate = async x => {
  await R.delay(100)
  return x % 2 === 1
}
const result = await R.filterAsync(predicate, [ 1, 2, 3 ])
// => [ 1, 3 ]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20predicate%20%3D%20async%20x%20%3D%3E%20%7B%0A%20%20await%20R.delay(100)%0A%20%20return%20x%20%25%202%20%3D%3D%3D%201%0A%7D%0Aconst%20result%20%3D%20await%20R.filterAsync(predicate%2C%20%5B%201%2C%202%2C%203%20%5D)%0A%2F%2F%20%3D%3E%20%5B%201%2C%203%20%5D">Try the above <strong>R.filterAsync</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
filterAsync<T>(fn: (x: T) => Promise<boolean>, list: T[]): Promise<T[]>;
filterAsync<T>(fn: (x: T) => Promise<boolean>, obj: object): Promise<{
  [prop: string]: T
}>;
```

</details>

<details>

<summary><strong>R.filterAsync</strong> source</summary>

```javascript
import { _isArray } from './_internals/_isArray'
import { filter } from './filter'
import { mapAsync } from './mapAsync'

export function filterAsync(predicate, listOrObject){
  if (arguments.length === 1){
    return async holder => filterAsync(predicate, holder)
  }

  return new Promise((resolve, reject) => {
    mapAsync(predicate, listOrObject)
      .then(predicateResult => {
        if (_isArray(predicateResult)){
          const filtered = listOrObject.filter((_, i) => predicateResult[ i ])

          return resolve(filtered)
        }
        const filtered = filter((_, prop) => predicateResult[ prop ],
          listOrObject)

        return resolve(filtered)
      })
      .catch(reject)
  })
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { delay } from './delay'
import { filterAsync } from './filterAsync'

test('happy', async () => {
  const predicate = async x => {
    await delay(100)

    return x % 2 === 1
  }
  const result = await filterAsync(predicate, [ 1, 2, 3 ])
  expect(result).toEqual([ 1, 3 ])
})

test('with object', async () => {
  const predicate = async (x, prop) => {
    expect(typeof prop).toBe('string')
    await delay(100)

    return x % 2 === 1
  }
  const result = await filterAsync(predicate, {
    a : 1,
    b : 2,
    c : 3,
    d : 4,
    e : 5,
  })

  expect(result).toEqual({
    a : 1,
    c : 3,
    e : 5,
  })
})
```

</details>

### find

```typescript
find<T>(predicate: (a: T) => boolean, arr: ReadonlyArray<T>): T | undefined
```

It returns the first element of `list` that satisfy the `predicate`.

If there is no such element, it returns `undefined`.

```javascript
const predicate = x => R.type(x.foo) === 'Number'
const list = [{foo: 'bar'}, {foo: 1}]

const result = R.find(predicate, list)
// => {foo: 1}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20predicate%20%3D%20x%20%3D%3E%20R.type(x.foo)%20%3D%3D%3D%20'Number'%0Aconst%20list%20%3D%20%5B%7Bfoo%3A%20'bar'%7D%2C%20%7Bfoo%3A%201%7D%5D%0A%0Aconst%20result%20%3D%20R.find(predicate%2C%20list)%0A%2F%2F%20%3D%3E%20%7Bfoo%3A%201%7D">Try the above <strong>R.find</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
find<T>(predicate: (a: T) => boolean, arr: ReadonlyArray<T>): T | undefined;
find<T>(predicate: (a: T) => boolean): (arr: ReadonlyArray<T>) => T | undefined;
```

</details>

<details>

<summary><strong>R.find</strong> source</summary>

```javascript
export function find(predicate, list){
  if (arguments.length === 1) return _list => find(predicate, _list)
  let index = 0
  const len = list.length

  while (index < len){
    const value = list[ index ]
    if (predicate(value, index)){
      return value
    }

    index++
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { find } from './find'
import { propEq } from './propEq'

const list = [ { a : 1 }, { a : 2 }, { a : 3 } ]

test('happy', () => {
  const fn = propEq('a', 2)
  expect(find(fn, list)).toEqual({ a : 2 })
})

test('with curry', () => {
  const fn = propEq('a', 4)
  expect(find(fn)(list)).toBeUndefined()
})

test('with empty list', () => {
  expect(find(() => true, [])).toBeUndefined()
})
```

</details>

### findIndex

```typescript
findIndex<T>(findFn: (a: T) => boolean, arr: ReadonlyArray<T>): number
```

It returns the index of the first element of `list` satisfying the `predicate` function.

If there is no such element, then `-1` is returned.

```javascript
const predicate = x => R.type(x.foo) === 'Number'
const list = [{foo: 'bar'}, {foo: 1}]

const result = R.findIndex(predicate, list)
// => 1
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20predicate%20%3D%20x%20%3D%3E%20R.type(x.foo)%20%3D%3D%3D%20'Number'%0Aconst%20list%20%3D%20%5B%7Bfoo%3A%20'bar'%7D%2C%20%7Bfoo%3A%201%7D%5D%0A%0Aconst%20result%20%3D%20R.findIndex(predicate%2C%20list)%0A%2F%2F%20%3D%3E%201">Try the above <strong>R.findIndex</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
findIndex<T>(findFn: (a: T) => boolean, arr: ReadonlyArray<T>): number;
findIndex<T>(findFn: (a: T) => boolean): (arr: ReadonlyArray<T>) => number;
```

</details>

<details>

<summary><strong>R.findIndex</strong> source</summary>

```javascript
export function findIndex(predicate, list){
  if (arguments.length === 1) return _list => findIndex(predicate, _list)

  const len = list.length
  let index = -1

  while (++index < len){
    if (predicate(list[ index ], index)){
      return index
    }
  }

  return -1
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { findIndex } from './findIndex'
import { propEq } from './propEq'

test('happy', () => {
  expect(findIndex(propEq('a', 2))([ { a : 1 }, { a : 2 }, { a : 3 } ])).toEqual(1)

  expect(findIndex(propEq('a', 1))([ { a : 1 }, { a : 2 }, { a : 3 } ])).toEqual(0)

  expect(findIndex(propEq('a', 4))([ { a : 1 }, { a : 2 }, { a : 3 } ])).toEqual(-1)
})

test('pass index as second argument', () => {
  findIndex((x, i) => {
    expect(typeof x).toBe('number')
    expect(typeof i).toBe('number')
  })([ 10, 12, 15 ])
})
```

</details>

### findLast

```typescript
findLast<T>(fn: (a: T) => boolean, list: T[]): T | undefined
```

It returns the last element of `list` satisfying the `predicate` function.

If there is no such element, then `undefined` is returned.

```javascript
const predicate = x => R.type(x.foo) === 'Number'
const list = [{foo: 0}, {foo: 1}]

const result = R.findLast(predicate, list)
// => {foo: 1}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20predicate%20%3D%20x%20%3D%3E%20R.type(x.foo)%20%3D%3D%3D%20'Number'%0Aconst%20list%20%3D%20%5B%7Bfoo%3A%200%7D%2C%20%7Bfoo%3A%201%7D%5D%0A%0Aconst%20result%20%3D%20R.findLast(predicate%2C%20list)%0A%2F%2F%20%3D%3E%20%7Bfoo%3A%201%7D">Try the above <strong>R.findLast</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
findLast<T>(fn: (a: T) => boolean, list: T[]): T | undefined;
findLast<T>(fn: (a: T) => boolean): (list: T[]) => T | undefined;
```

</details>

<details>

<summary><strong>R.findLast</strong> source</summary>

```javascript
export function findLast(predicate, list){
  if (arguments.length === 1) return _list => findLast(predicate, _list)

  let index = list.length

  while (--index >= 0){
    if (predicate(list[ index ], index)){
      return list[ index ]
    }
  }

  return undefined
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { findLast } from './findLast'

test('happy', () => {
  const result = findLast((x, i) => {
    expect(typeof i).toBe('number')

    return x > 1
  },
  [ 1, 1, 1, 2, 3, 4, 1 ])
  expect(result).toEqual(4)

  expect(findLast(x => x === 0, [ 0, 1, 1, 2, 3, 4, 1 ])).toEqual(0)
})

test('with curry', () => {
  expect(findLast(x => x > 1)([ 1, 1, 1, 2, 3, 4, 1 ])).toEqual(4)
})

const obj1 = { x : 100 }
const obj2 = { x : 200 }
const a = [ 11, 10, 9, 'cow', obj1, 8, 7, 100, 200, 300, obj2, 4, 3, 2, 1, 0 ]
const even = function (x){
  return x % 2 === 0
}
const gt100 = function (x){
  return x > 100
}
const isStr = function (x){
  return typeof x === 'string'
}
const xGt100 = function (o){
  return o && o.x > 100
}

test('ramda 1', () => {
  expect(findLast(even, a)).toEqual(0)
  expect(findLast(gt100, a)).toEqual(300)
  expect(findLast(isStr, a)).toEqual('cow')
  expect(findLast(xGt100, a)).toEqual(obj2)
})

test('ramda 2', () => {
  expect(findLast(even, [ 'zing' ])).toEqual(undefined)
})

test('ramda 3', () => {
  expect(findLast(even, [ 2, 3, 5 ])).toEqual(2)
})

test('ramda 4', () => {
  expect(findLast(even, [])).toEqual(undefined)
})
```

</details>

### findLastIndex

```typescript
findLastIndex<T>(fn: (a: T) => boolean, list: T[]): number
```

It returns the index of the last element of `list` satisfying the `predicate` function.

If there is no such element, then `-1` is returned.

```javascript
const predicate = x => R.type(x.foo) === 'Number'
const list = [{foo: 0}, {foo: 1}]

const result = R.findLastIndex(predicate, list)
// => 1
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20predicate%20%3D%20x%20%3D%3E%20R.type(x.foo)%20%3D%3D%3D%20'Number'%0Aconst%20list%20%3D%20%5B%7Bfoo%3A%200%7D%2C%20%7Bfoo%3A%201%7D%5D%0A%0Aconst%20result%20%3D%20R.findLastIndex(predicate%2C%20list)%0A%2F%2F%20%3D%3E%201">Try the above <strong>R.findLastIndex</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
findLastIndex<T>(fn: (a: T) => boolean, list: T[]): number;
findLastIndex<T>(fn: (a: T) => boolean): (list: T[]) => number;
```

</details>

<details>

<summary><strong>R.findLastIndex</strong> source</summary>

```javascript
export function findLastIndex(fn, list){
  if (arguments.length === 1) return _list => findLastIndex(fn, _list)

  let index = list.length

  while (--index >= 0){
    if (fn(list[ index ], index)){
      return index
    }
  }

  return -1
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { findLastIndex } from './findLastIndex'

test('happy', () => {
  const result = findLastIndex((x, i) => {
    expect(typeof i).toBe('number')

    return x > 1
  },
  [ 1, 1, 1, 2, 3, 4, 1 ])

  expect(result).toEqual(5)

  expect(findLastIndex(x => x === 0, [ 0, 1, 1, 2, 3, 4, 1 ])).toEqual(0)
})

test('with curry', () => {
  expect(findLastIndex(x => x > 1)([ 1, 1, 1, 2, 3, 4, 1 ])).toEqual(5)
})

const obj1 = { x : 100 }
const obj2 = { x : 200 }
const a = [ 11, 10, 9, 'cow', obj1, 8, 7, 100, 200, 300, obj2, 4, 3, 2, 1, 0 ]
const even = function (x){
  return x % 2 === 0
}
const gt100 = function (x){
  return x > 100
}
const isStr = function (x){
  return typeof x === 'string'
}
const xGt100 = function (o){
  return o && o.x > 100
}

test('ramda 1', () => {
  expect(findLastIndex(even, a)).toEqual(15)
  expect(findLastIndex(gt100, a)).toEqual(9)
  expect(findLastIndex(isStr, a)).toEqual(3)
  expect(findLastIndex(xGt100, a)).toEqual(10)
})

test('ramda 2', () => {
  expect(findLastIndex(even, [ 'zing' ])).toEqual(-1)
})

test('ramda 3', () => {
  expect(findLastIndex(even, [ 2, 3, 5 ])).toEqual(0)
})

test('ramda 4', () => {
  expect(findLastIndex(even, [])).toEqual(-1)
})
```

</details>

### flatten

```typescript
flatten<T>(x: ReadonlyArray<T> | ReadonlyArray<T[]> | ReadonlyArray<ReadonlyArray<T>>): T[]
```

It deeply flattens an array.

```javascript
const result = R.flatten([
  1, 
  2, 
  [3, 30, [300]], 
  [4]
])
// => [ 1, 2, 3, 30, 300, 4 ]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.flatten(%5B%0A%20%201%2C%20%0A%20%202%2C%20%0A%20%20%5B3%2C%2030%2C%20%5B300%5D%5D%2C%20%0A%20%20%5B4%5D%0A%5D)%0A%2F%2F%20%3D%3E%20%5B%201%2C%202%2C%203%2C%2030%2C%20300%2C%204%20%5D">Try the above <strong>R.flatten</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
flatten<T>(x: ReadonlyArray<T> | ReadonlyArray<T[]> | ReadonlyArray<ReadonlyArray<T>>): T[];
```

</details>

<details>

<summary><strong>R.flatten</strong> source</summary>

```javascript
import { _isArray } from './_internals/_isArray'

export function flatten(list, input){
  const willReturn = input === undefined ? [] : input

  for (let i = 0; i < list.length; i++){
    if (_isArray(list[ i ])){
      flatten(list[ i ], willReturn)
    } else {
      willReturn.push(list[ i ])
    }
  }

  return willReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { flatten } from './flatten'

test('happy', () => {
  expect(flatten([ 1, 2, 3, [ [ [ [ [ 4 ] ] ] ] ] ])).toEqual([ 1, 2, 3, 4 ])

  expect(flatten([ 1, [ 2, [ [ 3 ] ] ], [ 4 ] ])).toEqual([ 1, 2, 3, 4 ])

  expect(flatten([ 1, [ 2, [ [ [ 3 ] ] ] ], [ 4 ] ])).toEqual([ 1, 2, 3, 4 ])

  expect(flatten([ 1, 2, [ 3, 4 ], 5, [ 6, [ 7, 8, [ 9, [ 10, 11 ], 12 ] ] ] ])).toEqual([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ])
})

test('readme example', () => {
  const result = flatten([ 1, 2, [ 3, 30, [ 300 ] ], [ 4 ] ])
  expect(result).toEqual([ 1, 2, 3, 30, 300, 4 ])
})
```

</details>

### flip

```typescript
flip<T, U, TResult>(fn: (arg0: T, arg1: U) => TResult): (arg1: U, arg0?: T) => TResult
```

It returns function which calls `fn` with exchanged first and second argument.

```javascript
const subtractFlip = R.flip(R.subtract)

const result = [
  subtractFlip(1,7),
  R.flip(1,6)
]  
// => [6, -6]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20subtractFlip%20%3D%20R.flip(R.subtract)%0A%0Aconst%20result%20%3D%20%5B%0A%20%20subtractFlip(1%2C7)%2C%0A%20%20R.flip(1%2C6)%0A%5D%20%20%0A%2F%2F%20%3D%3E%20%5B6%2C%20-6%5D">Try the above <strong>R.flip</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
flip<T, U, TResult>(fn: (arg0: T, arg1: U) => TResult): (arg1: U, arg0?: T) => TResult;
flip<F extends (...args: any) => any, P extends FunctionToolbelt.Parameters<F>>(fn: F): FunctionToolbelt.Curry<(...args: ListToolbelt.Merge<[P[1], P[0]], P>) => FunctionToolbelt.Return<F>>;
```

</details>

<details>

<summary><strong>R.flip</strong> source</summary>

```javascript
import { curryN } from './curryN'

function flipExport(fn){
  const flipedFn = (...input) => {
    const missing = fn.length - input.length

    if (missing <= 0) return fn(
      input[ 1 ], input[ 0 ], ...input.slice(2)
    )

    if (input.length === 0) return flipedFn

    if (input.length === 1)
      return curryN(missing, (...rest) => {
        const args = [ rest[ 0 ], input[ 0 ], ...rest.slice(1) ]

        return fn(...args)
      })

    // input.length >= 2
    return curryN(missing, (...rest) => {
      const args = [ input[ 1 ], input[ 0 ], ...input.slice(2), ...rest ]

      return fn(...args)
    })
  }

  return flipedFn
}

export function flip(fn){
  return flipExport(fn)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { flip } from './flip'
import { subtract } from './subtract'
import { update } from './update'

test('function with arity of 2', () => {
  const subtractFlipped = flip(subtract)

  expect(subtractFlipped(1)(7)).toEqual(6)
  expect(subtractFlipped(1, 7)).toEqual(6)
  expect(subtractFlipped(
    1, 7, 9
  )).toEqual(6)
})

test('function with arity of 3', () => {
  const updateFlipped = flip(update)

  const result = updateFlipped(
    8, 0, [ 1, 2, 3 ]
  )
  const curriedResult = updateFlipped(8, 0)([ 1, 2, 3 ])
  const tripleCurriedResult = updateFlipped(8)(0)([ 1, 2, 3 ])

  expect(result).toEqual([ 8, 2, 3 ])
  expect(curriedResult).toEqual([ 8, 2, 3 ])
  expect(tripleCurriedResult).toEqual([ 8, 2, 3 ])
})

test('function with arity of 4', () => {
  const testFunction = (
    a, b, c, d
  ) => `${ a },${ b },${ c },${ d }`

  const flippedFn = flip(testFunction)

  const result1 = flippedFn(2)(1)(3)(4)
  const result2 = flippedFn(2)(
    1, 3, 4
  )
  const result3 = flippedFn(2, 1)(3, 4)
  const result4 = flippedFn(
    2, 1, 3
  )(4)
  const result5 = flippedFn(
    2, 1, 3, 4
  )

  const expected = '1,2,3,4'

  expect(result1).toEqual(expected)
  expect(result2).toEqual(expected)
  expect(result3).toEqual(expected)
  expect(result4).toEqual(expected)
  expect(result5).toEqual(expected)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import * as R from 'ramda'
import {flip, subtract} from 'rambda'

describe('R.flip', () => {
  it('function with arity of 2', () => {
    const subtractFlipped = flip(subtract)
    const result = subtractFlipped(1, 7)
    const curriedResult = subtractFlipped(1)(7)
    curriedResult // $ExpectType number

    // This is wrong
    // ============================================
    result // $ExpectType (y: number) => number
  })

  it('function with arity of 3', () => {
    function testFunction(a: number, b: string, c: number): string {
      return `${b}==${a + c}`
    }
    const flippedTestFunction = flip(testFunction)

    const result = flippedTestFunction('foo', 1, 2)
    result // $ExpectType string
  })
})

describe('Ramda.flip', () => {
  it('function with arity of 2', () => {
    const subtractFlipped = R.flip(R.subtract)
    const result = subtractFlipped(1, 7)
    const curriedResult = subtractFlipped(1)(7)
    curriedResult // $ExpectType number

    // This is wrong
    // ============================================
    result // $ExpectType (b: number) => number
  })
})
```

</details>

<details>

<summary>4 failed <italic>Ramda.flip</italic> specs

> :boom: Reason for the failure: rambda flip work only for functions with two arguments
</summary>

```javascript
var jsv = require('jsverify');

var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');
var funcN = require('./shared/funcN');
describe('flip', function() {
  it('returns a function which inverts the first two arguments to the supplied function', function() {
    var f = function(a, b, c) {return a + ' ' + b + ' ' + c;};
    var g = R.flip(f);
    eq(f('a', 'b', 'c'), 'a b c');
    eq(g('a', 'b', 'c'), 'b a c');
  });
  it('returns a curried function', function() {
    var f = function(a, b, c) {return a + ' ' + b + ' ' + c;};
    var g = R.flip(f)('a');
    eq(g('b', 'c'), 'b a c');
  });
  it('returns a function with the correct arity', function() {
    var f2 = function(a, b) {return a + ' ' + b;};
    var f3 = function(a, b, c) {return a + ' ' + b + ' ' + c;};
    eq(R.flip(f2).length, 2);
    eq(R.flip(f3).length, 3);
  });
});
describe('flip properties', function() {
  jsv.property('inverts first two arguments', funcN(3), jsv.json, jsv.json, jsv.json, function(f, a, b, c) {
    var g = R.flip(f);
    return R.equals(f(a, b, c), g(b, a, c));
  });
});
```

</details>

### forEach

```typescript
forEach<T>(fn: (x: T) => void, list: T[]): T[]
```

It applies `iterable` function over all members of `list` and returns `list`.

```javascript
const sideEffect = {}
const result = R.forEach(
  x => sideEffect[`foo${x}`] = x
)([1, 2])

sideEffect //=> {foo1: 1, foo2: 2}
result //=> [1, 2]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20sideEffect%20%3D%20%7B%7D%0Aconst%20result%20%3D%20R.forEach(%0A%20%20x%20%3D%3E%20sideEffect%5B%60foo%24%7Bx%7D%60%5D%20%3D%20x%0A)(%5B1%2C%202%5D)%0A%0AsideEffect%20%2F%2F%3D%3E%20%7Bfoo1%3A%201%2C%20foo2%3A%202%7D%0Aresult%20%2F%2F%3D%3E%20%5B1%2C%202%5D">Try the above <strong>R.forEach</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
forEach<T>(fn: (x: T) => void, list: T[]): T[];
forEach<T>(fn: (x: T) => void): (list: T[]) => T[];
forEach<T>(fn: (x: T) => void, list: ReadonlyArray<T>): ReadonlyArray<T>;
forEach<T>(fn: (x: T) => void): (list: ReadonlyArray<T>) => ReadonlyArray<T>;
forEach<T>(fn: (value: T, key: string, obj: { [key: string]: T }) => void, obj: { [key: string]: T }): void;
forEach<T>(fn: (value: T, key: string, obj: { [key: string]: T }) => void): (obj: { [key: string]: T }) => void;
```

</details>

<details>

<summary><strong>R.forEach</strong> source</summary>

```javascript
import {_isArray} from './_internals/_isArray'
import {_keys} from './_internals/_keys'

export function forEach(fn, list){
  if (arguments.length === 1) return _list => forEach(fn, _list)

  if (list === undefined){
    return
  }

  if (_isArray(list)) {
    let index = 0
    const len = list.length

    while (index < len){
      fn(list[ index ], index, list)
      index++
    }
  } else {
    let index = 0
    const keys = _keys(list)
    const len = keys.length

    while (index < len){
      const key = keys[ index ]
      fn(list[ key ], key, list)
      index++
    }
  }

  return list
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { forEach } from './forEach'
import { type } from './type'

test('iterate over object', () => {
  const obj = {
    a : 1,
    b : [ 1, 2 ],
    c : { d : 7 },
    f : 'foo',
  }
  const result = {}
  const returned = forEach((
    val, prop, inputObj
  ) => {
    expect(type(inputObj)).toBe('Object')
    result[ prop ] = `${ prop }-${ type(val) }`
  })(obj)

  const expected = {
    a : 'a-Number',
    b : 'b-Array',
    c : 'c-Object',
    f : 'f-String',
  }

  expect(result).toEqual(expected)
  expect(returned).toEqual(obj)
})

test('happy', () => {
  const sideEffect = {}
  forEach(x => sideEffect[ `foo${ x }` ] = x + 10)([ 1, 2 ])

  expect(sideEffect).toEqual({
    foo1 : 11,
    foo2 : 12,
  })
})

test('happy 2', () => {
  const list = [
    {
      x : 1,
      y : 2,
    },
    {
      x : 100,
      y : 200,
    },
    {
      x : 300,
      y : 400,
    },
    {
      x : 234,
      y : 345,
    },
  ]
  const sideEffect = {}
  const result = forEach(elem => {
    sideEffect[ elem.x ] = elem.y
  }, list)
  const expectedSideEffect = {
    1   : 2,
    100 : 200,
    300 : 400,
    234 : 345,
  }

  expect(sideEffect).toEqual(expectedSideEffect)
  expect(result).toEqual(list)
})

test('with empty list', () => {
  const list = []
  const result = forEach(x => x * x)(list)

  expect(result).toEqual(list)
})

test('returns the input', () => {
  const list = [ 1, 2, 3 ]
  const result = forEach(x => x * x)(list)

  expect(result).toEqual(list)
})

test('pass index as second argument', () => {
  const list = [ 11, 21, 31 ]
  const indexes = []
  const result = forEach((x, i) => indexes.push(i))(list)

  expect(indexes).toEqual([ 0, 1, 2 ])
})
```

</details>

<details>

<summary>1 failed <italic>Ramda.forEach</italic> specs

> :boom: Reason for the failure: ramda method dispatches to `forEach` method
</summary>

```javascript
var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');

describe('forEach', function() {
  var list = [{x: 1, y: 2}, {x: 100, y: 200}, {x: 300, y: 400}, {x: 234, y: 345}];
  it('dispatches to `forEach` method', function() {
    var dispatched = false;
    var fn = function() {};
    function DummyList() {}
    DummyList.prototype.forEach = function(callback) {
      dispatched = true;
      eq(callback, fn);
    };
    R.forEach(fn, new DummyList());
    eq(dispatched, true);
  });
});
```

</details>

### fromPairs

```typescript
fromPairs<V>(listOfPairs: KeyValuePair<string, V>[]): { [index: string]: V }
```

It transforms a `listOfPairs` to an object.

```javascript
const listOfPairs = [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', [ 3, 4 ] ] ]
const expected = {
  a : 1,
  b : 2,
  c : [ 3, 4 ],
}

const result = R.fromPairs(listOfPairs)
// => `result` is equal to `expected`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20listOfPairs%20%3D%20%5B%20%5B%20'a'%2C%201%20%5D%2C%20%5B%20'b'%2C%202%20%5D%2C%20%5B%20'c'%2C%20%5B%203%2C%204%20%5D%20%5D%20%5D%0Aconst%20expected%20%3D%20%7B%0A%20%20a%20%3A%201%2C%0A%20%20b%20%3A%202%2C%0A%20%20c%20%3A%20%5B%203%2C%204%20%5D%2C%0A%7D%0A%0Aconst%20result%20%3D%20R.fromPairs(listOfPairs)%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%60expected%60">Try the above <strong>R.fromPairs</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
fromPairs<V>(listOfPairs: KeyValuePair<string, V>[]): { [index: string]: V };
fromPairs<V>(listOfPairs: KeyValuePair<number, V>[]): { [index: number]: V };
```

</details>

<details>

<summary><strong>R.fromPairs</strong> source</summary>

```javascript
export function fromPairs(listOfPairs){
  const toReturn = {}
  listOfPairs.forEach(([ prop, value ]) => toReturn[ prop ] = value)

  return toReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { fromPairs } from './fromPairs'

const list = [
  [ 'a', 1 ],
  [ 'b', 2 ],
  [ 'c', [ 3, 4 ] ],
]
const expected = {
  a : 1,
  b : 2,
  c : [ 3, 4 ],
}

test('happy', () => {
  expect(fromPairs(list)).toEqual(expected)
})
```

</details>

### getter

```typescript
getter<T>(keyOrKeys: string | string[] | undefined): T
```

The set of methods `R.setter`, `R.getter` and `R.reset` allow different parts of your logic to access comminicate indirectly via shared cache object. 

Usually these methods show that you might need to refactor to classes. Still, they can be helpful meanwhile.

`R.getter`: It provides access to the cache object. If `undefined` is used as a key, this method will return the whole cache object. If `string` is passed, then it will return cache value for this key. If array of `string` is passed, then it assume that this is array of keys and it will return the corresponding cache values for these keys.

`R.setter`: It allows cache object's keys to be changed. You can either set individual key-value pairs with `R.setter(key, value)` or you pass directly object, which will be merged with the cache object.

`R.reset`: It resets the cache object.

```javascript
R.setter('foo','bar')
R.setter('a', 1)
R.getter(['foo','a']) // => {foo: 'bar', a: 1}

R.setter('a', 2)
R.getter('a') // => 2
R.reset()
R.getter('a') // => undefined
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.setter('foo'%2C'bar')%0AR.setter('a'%2C%201)%0AR.getter(%5B'foo'%2C'a'%5D)%20%2F%2F%20%3D%3E%20%7Bfoo%3A%20'bar'%2C%20a%3A%201%7D%0A%0AR.setter('a'%2C%202)%0AR.getter('a')%20%2F%2F%20%3D%3E%202%0AR.reset()%0AR.getter('a')%20%2F%2F%20%3D%3E%20undefined">Try the above <strong>R.getter</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
getter<T>(keyOrKeys: string | string[] | undefined): T;
```

</details>

<details>

<summary><strong>R.getter</strong> source</summary>

```javascript
import { merge } from './merge'
import { pick } from './pick'
import { type } from './type'

let holder = {}

/**
 * Pass string to get value
 * Pass array to get object of values
 * Pass undefined to get all data
 */
export function getter(key){
  const typeKey = type(key)

  if (typeKey === 'String') return holder[ key ]

  if (typeKey === 'Array') return pick(key, holder)

  return holder
}

export function setter(maybeKey, maybeValue){
  const typeKey = type(maybeKey)
  const typeValue = type(maybeValue)

  if (typeKey === 'String'){
    if (typeValue === 'Function'){
      return holder[ maybeKey ] = maybeValue(holder[ maybeKey ])
    }

    return holder[ maybeKey ] = maybeValue
  }

  if (typeKey !== 'Object') return

  holder = merge(holder, maybeKey)
}

export function reset(){
  holder = {}
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { add } from './add'
import { getter, reset, setter } from './getter'

afterEach(() => {
  reset()
})

test('happy', () => {
  const key = 'foo'
  setter(key, 1)

  expect(getter(key)).toBe(1)
})

test('docs example', () => {
  setter('foo', 'bar')
  setter('a', 1)
  expect(getter([ 'foo', 'a' ])).toEqual({
    foo : 'bar',
    a   : 1,
  })

  setter('a', 2)
  expect(getter('a')).toBe(2)
  reset()
  expect(getter('a')).toBeUndefined()
})

test('when array is key in getter', () => {
  setter({
    a : 1,
    b : 2,
    c : 3,
  })

  expect(getter([ 'a', 'b' ])).toEqual({
    a : 1,
    b : 2,
  })
})

test('getter with undefined as key returns all', () => {
  const data = {
    a : 1,
    b : 2,
    c : 3,
  }

  setter(data)

  expect(getter()).toEqual(data)
})

test('function as setter value', () => {
  const data = {
    a : 1,
    b : 2,
    c : 3,
  }

  setter(data)
  setter('a', add(10))

  expect(getter()).toEqual({
    a : 11,
    b : 2,
    c : 3,
  })
})

test('setter fallbacks to undefined', () => {
  expect(setter()).toBeUndefined
})
```

</details>

### glue

```typescript
glue(input: string, glueString?: string): string
```

It transforms multiline string to single line by gluing together the separate lines with the `glueString` and removing the empty spaces. By default `glueString` is equal to single space, so if that is what you need, then you can just pass a single argument.

```javascript
const result = R.glue(`
  foo
  bar
  baz
`)
// => 'foo bar baz'
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.glue(%60%0A%20%20foo%0A%20%20bar%0A%20%20baz%0A%60)%0A%2F%2F%20%3D%3E%20'foo%20bar%20baz'">Try the above <strong>R.glue</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
glue(input: string, glueString?: string): string;
```

</details>

<details>

<summary><strong>R.glue</strong> source</summary>

```javascript
export function glue(input, glueChar){
  return input
    .split('\n')
    .filter(x => x.trim().length > 0)
    .map(x => x.trim())
    .join(glueChar === undefined ? ' ' : glueChar)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { glue } from './glue'

test('empty string as a glue', () => {
  const result = glue(`
    foo
    bar
    baz
  `,
  '')

  const expectedResult = 'foobarbaz'

  expect(result).toBe(expectedResult)
})

test('case 0', () => {
  const zero = 'node node_modules/jest'
  const first = '--runInBand'
  const last = '-- src/a.spec.js'
  const flag = false
  const result = glue(`
    ${ zero }
    ${ first }
    ${ flag ? '--env=node' : '' }
    ${ last }
  `)

  const expectedResult = `${ zero } ${ first } ${ last }`

  expect(result).toBe(expectedResult)
})

test('case 1', () => {
  const zero = 'node node_modules/jest'
  const first = '--runInBand'
  const last = '-- src/a.spec.js'
  const flag = true
  const result = glue(`
    ${ zero }
    ${ first }
    ${ flag ? '--env=node' : '' }
    ${ last }
  `)

  const expectedResult = `${ zero } ${ first } --env=node ${ last }`

  expect(result).toBe(expectedResult)
})

test('case 2', () => {
  const first = '--runInBand'
  const result = glue(`
    zero
    ${ first }
    last
  `)
  const expectedResult = `zero ${ first } last`

  expect(result).toBe(expectedResult)
})

test('case 3', () => {
  const result = glue(`
    foo
    bar
    baz
  `)

  const expectedResult = 'foo bar baz'

  expect(result).toBe(expectedResult)
})

test('with glue', () => {
  const result = glue(`
    foo
    bar
    baz
  `,
  '==')

  const expectedResult = 'foo==bar==baz'

  expect(result).toBe(expectedResult)
})
```

</details>

### groupBy

```typescript
groupBy<T>(groupFn: (a: T) => string, list: ReadonlyArray<T>): { [index: string]: T[] }
```

It splits `list` according to a provided `groupFn` function and returns an object.

```javascript
const list = [ 'a', 'b', 'aa', 'bb' ]
const groupFn = x => x.length

const result = R.groupBy(groupFn, list)
// => { '1': ['a', 'b'], '2': ['aa', 'bb'] }
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%20'a'%2C%20'b'%2C%20'aa'%2C%20'bb'%20%5D%0Aconst%20groupFn%20%3D%20x%20%3D%3E%20x.length%0A%0Aconst%20result%20%3D%20R.groupBy(groupFn%2C%20list)%0A%2F%2F%20%3D%3E%20%7B%20'1'%3A%20%5B'a'%2C%20'b'%5D%2C%20'2'%3A%20%5B'aa'%2C%20'bb'%5D%20%7D">Try the above <strong>R.groupBy</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
groupBy<T>(groupFn: (a: T) => string, list: ReadonlyArray<T>): { [index: string]: T[] };
groupBy<T>(groupFn: (a: T) => string): (list: ReadonlyArray<T>) => { [index: string]: T[] };
```

</details>

<details>

<summary><strong>R.groupBy</strong> source</summary>

```javascript
export function groupBy(groupFn, list){
  if (arguments.length === 1) return _list => groupBy(groupFn, _list)

  const result = {}
  for (let i = 0; i < list.length; i++){
    const item = list[ i ]
    const key = groupFn(item)

    if (!result[ key ]){
      result[ key ] = []
    }

    result[ key ].push(item)
  }

  return result
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { groupBy } from './groupBy'
import { prop } from './prop'

test('groupBy', () => {
  const list = [
    {
      age  : 12,
      name : 'john',
    },
    {
      age  : 12,
      name : 'jack',
    },
    {
      age  : 24,
      name : 'mary',
    },
    {
      age  : 24,
      name : 'steve',
    },
  ]
  const expectedResult = {
    12 : [
      {
        age  : 12,
        name : 'john',
      },
      {
        age  : 12,
        name : 'jack',
      },
    ],
    24 : [
      {
        age  : 24,
        name : 'mary',
      },
      {
        age  : 24,
        name : 'steve',
      },
    ],
  }

  expect(groupBy(prop('age'))(list)).toEqual(expectedResult)
  expect(groupBy(prop('age'), list)).toEqual(expectedResult)
})
```

</details>

<details>

<summary>1 failed <italic>Ramda.groupBy</italic> specs

> :boom: Reason for the failure: ramda support transforms
</summary>

```javascript
var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');
var _isTransformer = require('rambda/internal/_isTransformer');

describe('groupBy', function() {
  it('dispatches on transformer objects in list position', function() {
    var byType = R.prop('type');
    var xf = {
      '@@transducer/init': function() { return {}; },
      '@@transducer/result': function(x) { return x; },
      '@@transducer/step': R.mergeRight
    };
    eq(_isTransformer(R.groupBy(byType, xf)), true);
  });
});
```

</details>

### groupWith

```typescript
groupWith<T>(compareFn: (x: T, y: T) => boolean): (list: ReadonlyArray<T>) => T[][]
```

It returns separated version of `list`, where separation is done with equality `compareFn` function.

```javascript
const compareFn = (x, y) => x === y
const list = [1, 2, 2, 1, 1, 2]

const result = R.groupWith(isConsecutive, list)
// => [[1], [2,2], [1,1], [2]]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20compareFn%20%3D%20(x%2C%20y)%20%3D%3E%20x%20%3D%3D%3D%20y%0Aconst%20list%20%3D%20%5B1%2C%202%2C%202%2C%201%2C%201%2C%202%5D%0A%0Aconst%20result%20%3D%20R.groupWith(isConsecutive%2C%20list)%0A%2F%2F%20%3D%3E%20%5B%5B1%5D%2C%20%5B2%2C2%5D%2C%20%5B1%2C1%5D%2C%20%5B2%5D%5D">Try the above <strong>R.groupWith</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
groupWith<T>(compareFn: (x: T, y: T) => boolean): (list: ReadonlyArray<T>) => T[][];
groupWith<T>(compareFn: (x: T, y: T) => boolean, list: ReadonlyArray<T>): T[][];
groupWith<T>(compareFn: (x: T, y: T) => boolean, list: string): string[];
```

</details>

<details>

<summary><strong>R.groupWith</strong> source</summary>

```javascript
import { _isArray } from './_internals/_isArray'

export function groupWith(compareFn, list){
  if (!_isArray(list)) throw new TypeError('list.reduce is not a function')

  const clone = list.slice()

  if (list.length === 1) return [ clone ]

  const toReturn = []
  let holder = []

  clone.reduce((
    prev, current, i
  ) => {
    if (i === 0) return current

    const okCompare = compareFn(prev, current)
    const holderIsEmpty = holder.length === 0
    const lastCall = i === list.length - 1

    if (okCompare){
      if (holderIsEmpty) holder.push(prev)
      holder.push(current)
      if (lastCall) toReturn.push(holder)

      return current
    }

    if (holderIsEmpty){
      toReturn.push([ prev ])
      if (lastCall) toReturn.push([ current ])

      return current
    }

    toReturn.push(holder)
    if (lastCall) toReturn.push([ current ])
    holder = []

    return current
  }, undefined)

  return toReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { equals } from './equals'
import { groupWith } from './groupWith'

test('issue is fixed', () => {
  const result = groupWith(equals, [ 1, 2, 2, 3 ])
  const expected = [ [ 1 ], [ 2, 2 ], [ 3 ] ]
  expect(result).toEqual(expected)
})

test('long list', () => {
  const result = groupWith(equals, [
    0,
    1,
    1,
    2,
    3,
    5,
    8,
    13,
    21,
    21,
    21,
    1,
    2,
  ])

  const expected = [
    [ 0 ],
    [ 1, 1 ],
    [ 2 ],
    [ 3 ],
    [ 5 ],
    [ 8 ],
    [ 13 ],
    [ 21, 21, 21 ],
    [ 1 ],
    [ 2 ],
  ]
  expect(result).toEqual(expected)
})

test('readme example', () => {
  const list = [ 4, 3, 6, 2, 2, 1 ]

  const result = groupWith((a, b) => a - b === 1, list)
  const expected = [ [ 4, 3 ], [ 6 ], [ 2 ], [ 2, 1 ] ]
  expect(result).toEqual(expected)
})

test('throw with string as input', () => {
  expect(() => groupWith(equals, 'Mississippi')).toThrowWithMessage(TypeError,
    'list.reduce is not a function')
})

const isConsecutive = function (a, b){
  return a + 1 === b
}

test('fix coverage', () => {
  expect(groupWith(isConsecutive, [ 1, 2, 3, 0 ])).toEqual([ [ 1, 2, 3 ], [ 0 ] ])
})

test('from ramda 0', () => {
  expect(groupWith(equals, [])).toEqual([])
  expect(groupWith(isConsecutive, [])).toEqual([])
})

test('from ramda 1', () => {
  expect(groupWith(isConsecutive, [ 4, 3, 2, 1 ])).toEqual([
    [ 4 ],
    [ 3 ],
    [ 2 ],
    [ 1 ],
  ])
})

test('from ramda 2', () => {
  expect(groupWith(isConsecutive, [ 1, 2, 3, 4 ])).toEqual([ [ 1, 2, 3, 4 ] ])
})

test('from ramda 3', () => {
  expect(groupWith(isConsecutive, [ 1, 2, 2, 3 ])).toEqual([
    [ 1, 2 ],
    [ 2, 3 ],
  ])
  expect(groupWith(isConsecutive, [ 1, 2, 9, 3, 4 ])).toEqual([
    [ 1, 2 ],
    [ 9 ],
    [ 3, 4 ],
  ])
})

test('list with single item', () => {
  const result = groupWith(equals, [ 0 ])

  const expected = [ [ 0 ] ]
  expect(result).toEqual(expected)
})
```

</details>

<details>

<summary>2 failed <italic>Ramda.groupWith</italic> specs

> :boom: Reason for the failure: ramda support string
</summary>

```javascript
var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');

describe('groupWith', function() {
  it('can be turned into the original list through concatenation', function() {
    var list = [1, 1, 2, 3, 4, 4, 5, 5];
    eq(R.unnest(R.groupWith(R.equals, list)), list);
    eq(R.unnest(R.groupWith(R.complement(R.equals), list)), list);
    eq(R.unnest(R.groupWith(R.T, list)), list);
    eq(R.unnest(R.groupWith(R.F, list)), list);
  });
  it('also works on strings', function() {
    eq(R.groupWith(R.equals)('Mississippi'), ['M','i','ss','i','ss','i','pp','i']);
  });
});
```

</details>

### has

```typescript
has<T>(prop: string, obj: T): boolean
```

It returns `true` if `obj` has property `prop`.

```javascript
const obj = {a: 1}

const result = [
  R.has('a', obj),
  R.has('b', obj)
]
// => [true, false]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20obj%20%3D%20%7Ba%3A%201%7D%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.has('a'%2C%20obj)%2C%0A%20%20R.has('b'%2C%20obj)%0A%5D%0A%2F%2F%20%3D%3E%20%5Btrue%2C%20false%5D">Try the above <strong>R.has</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
has<T>(prop: string, obj: T): boolean;
has(prop: string): <T>(obj: T) => boolean;
```

</details>

<details>

<summary><strong>R.has</strong> source</summary>

```javascript
export function has(prop, obj){
  if (arguments.length === 1) return _obj => has(prop, _obj)

  if (!obj) return false

  return obj[ prop ] !== undefined
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { has } from './has'

test('happy', () => {
  expect(has('a')({ a : 1 })).toBeTrue()
  expect(has('b', { a : 1 })).toBeFalse()
})

test('with non-object', () => {
  expect(has('a', undefined)).toEqual(false)
  expect(has('a', null)).toEqual(false)
  expect(has('a', true)).toEqual(false)
  expect(has('a', '')).toEqual(false)
  expect(has('a', /a/)).toEqual(false)
})
```

</details>

<details>

<summary>1 failed <italic>Ramda.has</italic> specs

> :boom: Reason for the failure: rambda does check properties from the prototype chain
</summary>

```javascript
var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');

describe('has', function() {
  var fred = {name: 'Fred', age: 23};
  var anon = {age: 99};
  it('does not check properties from the prototype chain', function() {
    var Person = function() {};
    Person.prototype.age = function() {};
    var bob = new Person();
    eq(R.has('age', bob), false);
  });
});
```

</details>

### hasPath

```typescript
hasPath<T>(
  path: string | string[],
  input: object
): boolean
```

It will return true, if `input` object has truthy `path`(calculated with `R.path`).

```javascript
const path = 'a.b'
const pathAsArray = ['a', 'b']
const obj = {a: {b: []}}

const result = [
  R.hasPath(path, obj),
  R.hasPath(pathAsArray, obj),
  R.hasPath('a.c', obj),
]
// => [true, true, false]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20path%20%3D%20'a.b'%0Aconst%20pathAsArray%20%3D%20%5B'a'%2C%20'b'%5D%0Aconst%20obj%20%3D%20%7Ba%3A%20%7Bb%3A%20%5B%5D%7D%7D%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.hasPath(path%2C%20obj)%2C%0A%20%20R.hasPath(pathAsArray%2C%20obj)%2C%0A%20%20R.hasPath('a.c'%2C%20obj)%2C%0A%5D%0A%2F%2F%20%3D%3E%20%5Btrue%2C%20true%2C%20false%5D">Try the above <strong>R.hasPath</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
hasPath<T>(
  path: string | string[],
  input: object
): boolean;
hasPath<T>(
  path: string | string[]
): (input: object) => boolean;
```

</details>

<details>

<summary><strong>R.hasPath</strong> source</summary>

```javascript
import { path } from './path'

export function hasPath(maybePath, obj){
  if (arguments.length === 1){
    return objHolder => hasPath(maybePath, objHolder)
  }

  return path(maybePath, obj) !== undefined
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { hasPath } from './hasPath'

test('when true', () => {
  const path = 'a.b'
  const obj = { a : { b : [] } }

  const result = hasPath(path)(obj)
  const expectedResult = true

  expect(result).toEqual(expectedResult)
})

test('when false', () => {
  const path = 'a.b'
  const obj = {}

  const result = hasPath(path, obj)
  const expectedResult = false

  expect(result).toEqual(expectedResult)
})
```

</details>

### head

```typescript
head<T>(listOrString: T[]): T | undefined
```

It returns the first element of `listOrString`.

```javascript
const result = [
  R.head([1, 2, 3]),
  R.head('foo') 
]
// => [1, 'f']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.head(%5B1%2C%202%2C%203%5D)%2C%0A%20%20R.head('foo')%20%0A%5D%0A%2F%2F%20%3D%3E%20%5B1%2C%20'f'%5D">Try the above <strong>R.head</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
head<T>(listOrString: T[]): T | undefined;
head(listOrString: string): string;
```

</details>

<details>

<summary><strong>R.head</strong> source</summary>

```javascript
export function head(listOrString){
  if (typeof listOrString === 'string') return listOrString[ 0 ] || ''

  return listOrString[ 0 ]
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { head } from './head'

test('head', () => {
  expect(head([ 'fi', 'fo', 'fum' ])).toEqual('fi')
  expect(head([])).toEqual(undefined)
  expect(head('foo')).toEqual('f')
  expect(head('')).toEqual('')
})
```

</details>

### identical

```typescript
identical<T>(a: T, b: T): boolean
```

It returns `true` if its arguments `a` and `b` are identical.

Otherwise, it returns `false`.

```javascript
const obj = {a: 1};
R.identical(obj, obj); //=> true
R.identical(1, 1); //=> true
R.identical(1, '1'); //=> false
R.identical([], []); //=> false
R.identical(0, -0); //=> false
R.identical(NaN, NaN); //=> true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20const%20obj%20%3D%20%7Ba%3A%201%7D%3B%0AR.identical(obj%2C%20obj)%3B%20%2F%2F%3D%3E%20true%0AR.identical(1%2C%201)%3B%20%2F%2F%3D%3E%20true%0AR.identical(1%2C%20'1')%3B%20%2F%2F%3D%3E%20false%0AR.identical(%5B%5D%2C%20%5B%5D)%3B%20%2F%2F%3D%3E%20false%0AR.identical(0%2C%20-0)%3B%20%2F%2F%3D%3E%20false%0AR.identical(NaN%2C%20NaN)%3B%20%2F%2F%3D%3E%20true">Try the above <strong>R.identical</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
identical<T>(a: T, b: T): boolean;
identical<T>(a: T): (b: T) => boolean;
```

</details>

<details>

<summary><strong>R.identical</strong> source</summary>

```javascript
import _objectIs from './_internals/_objectIs'

export function identical(a, b){
  if (arguments.length === 1) return _b => identical(a, _b)

  return _objectIs(a, b)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { F, T } from '../rambda'
import { _isInteger } from './_internals/_isInteger'
import { _objectIs } from './_internals/_objectIs'
import { identical } from './identical'

test('with boolean', () => {
  expect(F()).toBe(false)
  expect(T()).toBe(true)
})

test('internal isInteger', () => {
  expect(_isInteger(1)).toBe(true)
  expect(_isInteger(0.3)).toBe(false)
})

test('internal objectIs', () => {
  expect(_objectIs(1, 1)).toBe(true)
  expect(_objectIs(NaN, NaN)).toBe(true)
})

test('identical', () => {
  const a = {}

  expect(identical(100)(100)).toEqual(true)
  expect(identical(100, '100')).toEqual(false)
  expect(identical('string', 'string')).toEqual(true)
  expect(identical([], [])).toEqual(false)
  expect(identical(a, a)).toEqual(true)
  expect(identical(undefined, undefined)).toEqual(true)
  expect(identical(null, undefined)).toEqual(false)
})
```

</details>

### identity

```typescript
identity<T>(input: T): T
```

It just passes back the supplied `input` argument.

```javascript
R.identity(7) // => 7
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.identity(7)%20%2F%2F%20%3D%3E%207">Try the above <strong>R.identity</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
identity<T>(input: T): T;
```

</details>

<details>

<summary><strong>R.identity</strong> source</summary>

```javascript
export function identity(input){
  return input
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { identity } from './identity'

test('happy', () => {
  expect(identity(7)).toEqual(7)
  expect(identity(true)).toEqual(true)
  expect(identity({ a : 1 })).toEqual({ a : 1 })
})
```

</details>

### ifElse

```typescript
ifElse(condition: Pred, onTrue: Arity1Fn, onFalse: Arity1Fn): Arity1Fn
```

It expects `condition`, `onTrue` and `onFalse` functions as inputs and it returns a new function with example name of `fn`. 

When `fn`` is called with `input` argument, it will return either `onTrue(input)` or `onFalse(input)` depending on `condition(input)` evaluation.

```javascript
const fn = R.ifElse(
 x => x>10,
 x => x*2,
 x => x*10
)

const result = [ fn(8), fn(18) ]
// => [80, 36]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20fn%20%3D%20R.ifElse(%0A%20x%20%3D%3E%20x%3E10%2C%0A%20x%20%3D%3E%20x*2%2C%0A%20x%20%3D%3E%20x*10%0A)%0A%0Aconst%20result%20%3D%20%5B%20fn(8)%2C%20fn(18)%20%5D%0A%2F%2F%20%3D%3E%20%5B80%2C%2036%5D">Try the above <strong>R.ifElse</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
ifElse(condition: Pred, onTrue: Arity1Fn, onFalse: Arity1Fn): Arity1Fn;
ifElse(condition: Pred, onTrue: Arity2Fn, onFalse: Arity2Fn): Arity2Fn;
```

</details>

<details>

<summary><strong>R.ifElse</strong> source</summary>

```javascript
import { curry } from './curry'

function ifElseFn(
  condition, onTrue, onFalse
){
  return (...input) => {
    const conditionResult =
      typeof condition === 'boolean' ? condition : condition(...input)

    if (conditionResult === true){
      return onTrue(...input)
    }

    return onFalse(...input)
  }
}

export const ifElse = curry(ifElseFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { always } from './always'
import { has } from './has'
import { identity } from './identity'
import { ifElse } from './ifElse'
import { prop } from './prop'

const condition = has('foo')
const v = function (a){
  return typeof a === 'number'
}
const t = function (a){
  return a + 1
}
const ifFn = x => prop('foo', x).length
const elseFn = () => false

test('happy', () => {
  const fn = ifElse(condition, ifFn)(elseFn)

  expect(fn({ foo : 'bar' })).toEqual(3)
  expect(fn({ fo : 'bar' })).toEqual(false)
})

test('ramda spec', () => {
  const ifIsNumber = ifElse(v)
  expect(ifIsNumber(t, identity)(15)).toEqual(16)
  expect(ifIsNumber(t, identity)('hello')).toEqual('hello')
})

test('pass all arguments', () => {
  const identity = function (a){
    return a
  }
  const v = function (){
    return true
  }
  const onTrue = function (a, b){
    expect(a).toEqual(123)
    expect(b).toEqual('abc')
  }
  ifElse(
    v, onTrue, identity
  )(123, 'abc')
})

test('accept constant as condition', () => {
  const fn = ifElse(true)(always(true))(always(false))

  expect(fn()).toEqual(true)
})

test('accept constant as condition - case 2', () => {
  const fn = ifElse(
    false, always(true), always(false)
  )

  expect(fn()).toEqual(false)
})

test('curry 1', () => {
  const fn = ifElse(condition, ifFn)(elseFn)

  expect(fn({ foo : 'bar' })).toEqual(3)
  expect(fn({ fo : 'bar' })).toEqual(false)
})

test('curry 2', () => {
  const fn = ifElse(condition)(ifFn)(elseFn)

  expect(fn({ foo : 'bar' })).toEqual(3)
  expect(fn({ fo : 'bar' })).toEqual(false)
})
```

</details>

<details>

<summary>2 failed <italic>Ramda.ifElse</italic> specs

> :boom: Reason for the failure: rambda doesn't return a curried function
</summary>

```javascript
var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');

describe('ifElse', function() {
  var t = function(a) { return a + 1; };
  var identity = function(a) { return a; };
  var isArray = function(a) { return Object.prototype.toString.call(a) === '[object Array]'; };
  it('returns a function whose arity equals the max arity of the three arguments to `ifElse`', function() {
    function a0() { return 0; }
    function a1(x) { return x; }
    function a2(x, y) { return x + y; }
    eq(R.ifElse(a0, a1, a2).length, 2);
    eq(R.ifElse(a0, a2, a1).length, 2);
    eq(R.ifElse(a1, a0, a2).length, 2);
    eq(R.ifElse(a1, a2, a0).length, 2);
    eq(R.ifElse(a2, a0, a1).length, 2);
    eq(R.ifElse(a2, a1, a0).length, 2);
  });
  it('returns a curried function', function() {
    var v = function(a) { return typeof a === 'number'; };
    var ifIsNumber = R.ifElse(v);
    eq(ifIsNumber(t, identity)(15), 16);
    eq(ifIsNumber(t, identity)('hello'), 'hello');
    var fn = R.ifElse(R.gt, R.subtract, R.add);
    eq(fn(2)(7), 9);
    eq(fn(2, 7), 9);
    eq(fn(7)(2), 5);
    eq(fn(7, 2), 5);
  });
});
```

</details>

### ifElseAsync

```typescript
ifElseAsync<T>(
  condition: Async<any> | Func<any>,
  ifFn: Async<any> | Func<any>,
  elseFn: Async<any> | Func<any>
): Async<T>
```

Asynchronous version of `R.ifElse`. Any of `condition`, `ifFn` and `elseFn` can be either asynchronous or synchronous.

```javascript
const condition = async x => {
  await R.delay(100)
  return x>1
}
const ifFn = async x => {
  await R.delay(100)
  return x+1
}
const elseFn = async x => {
  await R.delay(100)
  return x-1
}

const result = R.ifElseAsync(
  condition,
  ifFn,
  elseFn  
)(1)
// => result resolves to `0`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20condition%20%3D%20async%20x%20%3D%3E%20%7B%0A%20%20await%20R.delay(100)%0A%20%20return%20x%3E1%0A%7D%0Aconst%20ifFn%20%3D%20async%20x%20%3D%3E%20%7B%0A%20%20await%20R.delay(100)%0A%20%20return%20x%2B1%0A%7D%0Aconst%20elseFn%20%3D%20async%20x%20%3D%3E%20%7B%0A%20%20await%20R.delay(100)%0A%20%20return%20x-1%0A%7D%0A%0Aconst%20result%20%3D%20R.ifElseAsync(%0A%20%20condition%2C%0A%20%20ifFn%2C%0A%20%20elseFn%20%20%0A)(1)%0A%2F%2F%20%3D%3E%20result%20resolves%20to%20%600%60">Try the above <strong>R.ifElseAsync</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
ifElseAsync<T>(
  condition: Async<any> | Func<any>,
  ifFn: Async<any> | Func<any>,
  elseFn: Async<any> | Func<any>
): Async<T>;
```

</details>

<details>

<summary><strong>R.ifElseAsync</strong> source</summary>

```javascript
function createThenable(x){
  return async function (input){
    return x(input)
  }
}

export function ifElseAsync(
  condition, ifFn, elseFn
){
  return input =>
    new Promise((resolve, reject) => {
      const conditionPromise = createThenable(condition)
      const ifFnPromise = createThenable(ifFn)
      const elseFnPromise = createThenable(elseFn)

      conditionPromise(input)
        .then(conditionResult => {
          const promised =
            conditionResult === true ? ifFnPromise : elseFnPromise

          promised(input).then(resolve)
            .catch(reject)
        })
        .catch(reject)
    })
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { delay } from './delay'
import { F } from './F'
import { ifElseAsync } from './ifElseAsync'
import { T } from './T'
import { type } from './type'

test('ok', async () => {
  const condition = async x => {
    const delayed = await delay(x * 80)

    return type(delayed) === 'String'
  }
  const conditionFalse = async x => {
    const delayed = await delay(x * 80)

    return type(delayed) === 'Array'
  }

  const ifFn = async x => {
    await delay(x * 60)

    return true
  }

  const elseFn = async x => {
    await delay(x * 60)

    return false
  }

  const result = await ifElseAsync(
    condition, ifFn, elseFn
  )(7)

  const resultFalse = await ifElseAsync(
    conditionFalse, ifFn, elseFn
  )(7)

  expect(result).toBe(true)
  expect(resultFalse).toBe(false)
})

test('works with regular functions', async () => {
  const result = await ifElseAsync(
    async x => type(await delay(x * 80)) === 'String',
    T,
    F
  )(7)

  expect(result).toEqual(true)
})
```

</details>

### inc

```typescript
inc(x: number): number
```

It increments a number.

```javascript
R.inc(1) // => 2
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.inc(1)%20%2F%2F%20%3D%3E%202">Try the above <strong>R.inc</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
inc(x: number): number;
```

</details>

<details>

<summary><strong>R.inc</strong> source</summary>

```javascript
export const inc = x => x + 1
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { inc } from './inc'

test('happy', () => {
  expect(inc(1)).toBe(2)
})
```

</details>

### includes

```typescript
includes(valueToFind: string, input: ReadonlyArray<string> | string): boolean
```

If `input` is string, then this method work as native `String.includes`.

If `input` is array, then `R.equals` is used to define if `valueToFind` belongs to the list.

```javascript
const result = [
  R.includes('oo', 'foo'),
  R.includes({a: 1}, [{a: 1}])
]
// => [true, true ]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.includes('oo'%2C%20'foo')%2C%0A%20%20R.includes(%7Ba%3A%201%7D%2C%20%5B%7Ba%3A%201%7D%5D)%0A%5D%0A%2F%2F%20%3D%3E%20%5Btrue%2C%20true%20%5D">Try the above <strong>R.includes</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
includes(valueToFind: string, input: ReadonlyArray<string> | string): boolean;
includes(valueToFind: string): (input: ReadonlyArray<string> | string) => boolean;
includes<T>(valueToFind: T, input: ReadonlyArray<T>): boolean;
includes<T>(valueToFind: T): (input: ReadonlyArray<T>) => boolean;
```

</details>

<details>

<summary><strong>R.includes</strong> source</summary>

```javascript
import { _isArray } from './_internals/_isArray'
import { equals } from './equals'

export function includes(valueToFind, input){
  if (arguments.length === 1) return _input => includes(valueToFind, _input)

  if (typeof input === 'string'){
    return input.includes(valueToFind)
  }
  if (!_isArray(input)) return false

  let index = -1

  while (++index < input.length){
    if (equals(input[ index ], valueToFind)){
      return true
    }
  }

  return false
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import R from 'ramda'

import { includes } from './includes'

test('includes with string', () => {
  const str = 'more is less'

  expect(includes('less')(str)).toBeTrue()
  expect(R.includes('less')(str)).toBeTrue()
  expect(includes('never', str)).toBeFalse()
  expect(R.includes('never', str)).toBeFalse()
})

test('includes with array', () => {
  const arr = [ 1, 2, 3 ]

  expect(includes(2)(arr)).toBeTrue()
  expect(R.includes(2)(arr)).toBeTrue()

  expect(includes(4, arr)).toBeFalse()
  expect(R.includes(4, arr)).toBeFalse()
})

test('return false if input is falsy', () => {
  expect(includes(2, null)).toBeFalse()
  expect(() => R.includes(2, null)).toThrowWithMessage(TypeError,
    'Cannot read property \'indexOf\' of null')
  expect(includes(4, undefined)).toBeFalse()
  expect(() => R.includes(4, undefined)).toThrowWithMessage(TypeError,
    'Cannot read property \'indexOf\' of undefined')
})
```

</details>

<details>

<summary>1 failed <italic>Ramda.includes</italic> specs

> :boom: Reason for the failure: ramda method pass to `equals` method if available
</summary>

```javascript
var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');

describe('includes', function() {
  it('has R.equals semantics', function() {
    function Just(x) { this.value = x; }
    Just.prototype.equals = function(x) {
      return x instanceof Just && R.equals(x.value, this.value);
    };
    eq(R.includes(0, [-0]), false);
    eq(R.includes(-0, [0]), false);
    eq(R.includes(NaN, [NaN]), true);
    eq(R.includes(new Just([42]), [new Just([42])]), true);
  });
});
```

</details>

### indexBy

```typescript
indexBy<T>(condition: (x: T) => string, list: ReadonlyArray<T>): { [key: string]: T }
```

It generates object with properties provided by `condition` and values provided by `list` array.

If `condition` is a function, then all list members are passed through it.

If `condition` is a string, then all list members are passed through `R.path(condition)`.

```javascript
const list = [ {id: 10}, {id: 20} ]

const withFunction = R.indexBy(
  x => x.id,
  list
)
const withString = R.indexBy(
  'id',
  list
)
const result = [
  withFunction, 
  R.equals(withFunction, withString)
]
// => [ { 10: {id: 10}, 20: {id: 20} }, true ]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%20%7Bid%3A%2010%7D%2C%20%7Bid%3A%2020%7D%20%5D%0A%0Aconst%20withFunction%20%3D%20R.indexBy(%0A%20%20x%20%3D%3E%20x.id%2C%0A%20%20list%0A)%0Aconst%20withString%20%3D%20R.indexBy(%0A%20%20'id'%2C%0A%20%20list%0A)%0Aconst%20result%20%3D%20%5B%0A%20%20withFunction%2C%20%0A%20%20R.equals(withFunction%2C%20withString)%0A%5D%0A%2F%2F%20%3D%3E%20%5B%20%7B%2010%3A%20%7Bid%3A%2010%7D%2C%2020%3A%20%7Bid%3A%2020%7D%20%7D%2C%20true%20%5D">Try the above <strong>R.indexBy</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
indexBy<T>(condition: (x: T) => string, list: ReadonlyArray<T>): { [key: string]: T };
indexBy<T>(condition: string, list: ReadonlyArray<T>): { [key: string]: T };
indexBy<T>(condition: (x: T) => string): (list: ReadonlyArray<T>) => { [key: string]: T };
indexBy<T>(condition: string): (list: ReadonlyArray<T>) => { [key: string]: T };
```

</details>

<details>

<summary><strong>R.indexBy</strong> source</summary>

```javascript
import { path } from './path'

function indexByPath(pathInput, list){
  const toReturn = {}
  for (let i = 0; i < list.length; i++){
    const item = list[ i ]
    toReturn[ path(pathInput, item) ] = item
  }

  return toReturn
}

export function indexBy(condition, list){
  if (arguments.length === 1){
    return _list => indexBy(condition, _list)
  }

  if (typeof condition === 'string'){
    return indexByPath(condition, list)
  }

  const toReturn = {}
  for (let i = 0; i < list.length; i++){
    const item = list[ i ]
    toReturn[ condition(item) ] = item
  }

  return toReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { indexBy } from './indexBy'
import { prop } from './prop'

test('happy', () => {
  const list = [
    { id : 1 },
    {
      id : 1,
      a  : 2,
    },
    { id : 2 },
    { id : 10 },
    { id : 'a' },
  ]

  expect(indexBy(prop('id'))(list)).toEqual({
    1 : {
      id : 1,
      a  : 2,
    },
    2  : { id : 2 },
    10 : { id : 10 },
    a  : { id : 'a' },
  })
})

test('with string as condition', () => {
  const list = [ { id : 1 }, { id : 2 }, { id : 10 }, { id : 'a' } ]
  const standardResult = indexBy(obj => obj.id, list)
  const suggestionResult = indexBy('id', list)

  expect(standardResult).toEqual(suggestionResult)
})

test('with string - bad path', () => {
  const list = [
    {
      a : {
        b : 1,
        c : 2,
      },
    },
    { a : { c : 4 } },
    {},
    {
      a : {
        b : 10,
        c : 20,
      },
    },
  ]

  const result = indexBy('a.b', list)
  const expected = {
    1 : {
      a : {
        b : 1,
        c : 2,
      },
    },
    10 : {
      a : {
        b : 10,
        c : 20,
      },
    },
    undefined : {},
  }

  expect(result).toEqual(expected)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {indexBy} from 'rambda'

const list = [{a: {b: '1'}}, {a: {c: '2'}}, {a: {b: '3'}}]

describe('indexBy', () => {
  it('happy', () => {
    const result = indexBy<any>(x => x.a.b, list)
    const resultCurried = indexBy<any>(x => x.a.b)(list)
    result // $ExpectType { [key: string]: any; }
    resultCurried // $ExpectType { [key: string]: any; }
  })

  it('with string', () => {
    const result = indexBy<any>('a.b', list)
    const resultCurried = indexBy<any>('a.b')(list)
    result // $ExpectType { [key: string]: any; }
    resultCurried // $ExpectType { [key: string]: any; }
  })

  it('with interface', () => {
    interface Foo {
      a: string,
    }
    const interfaceList = [{a: 'foo'}, {a: 'bar'}]
    const result = indexBy<Foo>(x => {
      x.a // $ExpectType string
      return x.a
    }, interfaceList)
    const resultCurried = indexBy<Foo>(x => {
      x.a // $ExpectType string
      return x.a
    })(interfaceList)
    result // $ExpectType { [key: string]: Foo; }
    resultCurried // $ExpectType { [key: string]: Foo; }
  })
})
```

</details>

<details>

<summary>1 failed <italic>Ramda.indexBy</italic> specs

> :boom: Reason for the failure: ramda method can act as a transducer
</summary>

```javascript
var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');

describe('indexBy', function() {
  it('can act as a transducer', function() {
    var list = [{id: 'xyz', title: 'A'}, {id: 'abc', title: 'B'}];
    var transducer = R.compose(
      R.indexBy(R.prop('id')),
      R.map(R.pipe(
        R.adjust(0, R.toUpper),
        R.adjust(1, R.omit(['id']))
      )));
    var result = R.into({}, transducer, list);
    eq(result, {ABC: {title: 'B'}, XYZ: {title: 'A'}});
  });
});
```

</details>

### indexOf

```typescript
indexOf<T>(valueToFind: T, list: ReadonlyArray<T>): number
```

It returns the index of the first element of `list` equals to `valueToFind`.

If there is no such element, it returns `-1`.

```javascript
const list = [0, 1, 2, 3]

const result = [
  R.indexOf(2, list),
  R.indexOf(0, list)
]
// => [2, -1]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B0%2C%201%2C%202%2C%203%5D%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.indexOf(2%2C%20list)%2C%0A%20%20R.indexOf(0%2C%20list)%0A%5D%0A%2F%2F%20%3D%3E%20%5B2%2C%20-1%5D">Try the above <strong>R.indexOf</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
indexOf<T>(valueToFind: T, list: ReadonlyArray<T>): number;
indexOf<T>(valueToFind: T): (list: ReadonlyArray<T>) => number;
```

</details>

<details>

<summary><strong>R.indexOf</strong> source</summary>

```javascript
export function indexOf(valueToFind, list){
  if (arguments.length === 1){
    return _list => indexOf(valueToFind, _list)
  }

  let index = -1
  const { length } = list

  while (++index < length){
    if (list[ index ] === valueToFind){
      return index
    }
  }

  return -1
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { indexOf } from './indexOf'

test('indexOf', () => {
  expect(indexOf(3, [ 1, 2, 3, 4 ])).toEqual(2)

  expect(indexOf(10)([ 1, 2, 3, 4 ])).toEqual(-1)
})
```

</details>

<details>

<summary>2 failed <italic>Ramda.indexOf</italic> specs

> :boom: Reason for the failure: ramda method dispatches to `indexOf` method
</summary>

```javascript
var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');

describe('indexOf', function() {
  var input = [1, 2, 3, 4, 5];
  var list = [1, 2, 3];
  list[-2] = 4; // Throw a wrench in the gears by assigning a non-valid array index as object property.
  it('has R.equals semantics', function() {
    function Just(x) { this.value = x; }
    Just.prototype.equals = function(x) {
      return x instanceof Just && R.equals(x.value, this.value);
    };
    eq(R.indexOf(0, [-0]), -1);
    eq(R.indexOf(-0, [0]), -1);
    eq(R.indexOf(NaN, [NaN]), 0);
    eq(R.indexOf(new Just([42]), [new Just([42])]), 0);
  });
  it('dispatches to `indexOf` method', function() {
    function Empty() {}
    Empty.prototype.indexOf = R.always(-1);
    function List(head, tail) {
      this.head = head;
      this.tail = tail;
    }
    List.prototype.indexOf = function(x) {
      var idx = this.tail.indexOf(x);
      return this.head === x ? 0 : idx >= 0 ? 1 + idx : -1;
    };
    var list = new List('b',
      new List('a',
        new List('n',
          new List('a',
            new List('n',
              new List('a',
                new Empty()
              )
            )
          )
        )
      )
    );
    eq(R.indexOf('a', 'banana'), 1);
    eq(R.indexOf('x', 'banana'), -1);
    eq(R.indexOf('a', list), 1);
    eq(R.indexOf('x', list), -1);
  });
});
```

</details>

### init

```typescript
init<T>(listOrString: ReadonlyArray<T>): T[]
```

It returns all but the last element of `listOrString`.

```javascript
const result = [
  R.init([1, 2, 3]) , 
  R.init('foo')  // => 'fo'
]
// => [[1, 2], 'fo']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.init(%5B1%2C%202%2C%203%5D)%20%2C%20%0A%20%20R.init('foo')%20%20%2F%2F%20%3D%3E%20'fo'%0A%5D%0A%2F%2F%20%3D%3E%20%5B%5B1%2C%202%5D%2C%20'fo'%5D">Try the above <strong>R.init</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
init<T>(listOrString: ReadonlyArray<T>): T[];
init(listOrString: string): string;
```

</details>

<details>

<summary><strong>R.init</strong> source</summary>

```javascript
import baseSlice from './_internals/baseSlice'

export function init(listOrString){
  if (typeof listOrString === 'string') return listOrString.slice(0, -1)

  return listOrString.length ? baseSlice(
    listOrString, 0, -1
  ) : []
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { init } from './init'

test('with array', () => {
  expect(init([ 1, 2, 3 ])).toEqual([ 1, 2 ])
  expect(init([ 1, 2 ])).toEqual([ 1 ])
  expect(init([ 1 ])).toEqual([])
  expect(init([])).toEqual([])
  expect(init([])).toEqual([])
  expect(init([ 1 ])).toEqual([])
})

test('with string', () => {
  expect(init('foo')).toEqual('fo')
  expect(init('f')).toEqual('')
  expect(init('')).toEqual('')
})
```

</details>

### intersection

```typescript
intersection<T>(listA: ReadonlyArray<T>, listB: ReadonlyArray<T>): T[]
```

It loops throw `listA` and `listB` and returns the intersection of the two according to `R.equals`.

```javascript
const listA = [ { id : 1 }, { id : 2 }, { id : 3 }, { id : 4 } ]
const listB = [ { id : 3 }, { id : 4 }, { id : 5 }, { id : 6 } ]

const result = intersection(listA, listB)
// => [{ id : 3 }, { id : 4 }]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20listA%20%3D%20%5B%20%7B%20id%20%3A%201%20%7D%2C%20%7B%20id%20%3A%202%20%7D%2C%20%7B%20id%20%3A%203%20%7D%2C%20%7B%20id%20%3A%204%20%7D%20%5D%0Aconst%20listB%20%3D%20%5B%20%7B%20id%20%3A%203%20%7D%2C%20%7B%20id%20%3A%204%20%7D%2C%20%7B%20id%20%3A%205%20%7D%2C%20%7B%20id%20%3A%206%20%7D%20%5D%0A%0Aconst%20result%20%3D%20intersection(listA%2C%20listB)%0A%2F%2F%20%3D%3E%20%5B%7B%20id%20%3A%203%20%7D%2C%20%7B%20id%20%3A%204%20%7D%5D">Try the above <strong>R.intersection</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
intersection<T>(listA: ReadonlyArray<T>, listB: ReadonlyArray<T>): T[];
intersection<T>(listA: ReadonlyArray<T>): (listB: ReadonlyArray<T>) => T[];
```

</details>

<details>

<summary><strong>R.intersection</strong> source</summary>

```javascript
import { filter } from './filter'
import { includes } from './includes'

export function intersection(listA, listB){
  if (arguments.length === 1) return _list => intersection(listA, _list)

  return filter(value => includes(value, listB), listA)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { intersection } from './intersection'

test('intersection', () => {
  const list1 = [ 1, 2, 3, 4 ]
  const list2 = [ 3, 4, 5, 6 ]
  expect(intersection(list1)(list2)).toEqual([ 3, 4 ])

  expect(intersection([], [])).toEqual([])
})

test('intersection with objects', () => {
  const list1 = [ { id : 1 }, { id : 2 }, { id : 3 }, { id : 4 } ]
  const list2 = [ { id : 3 }, { id : 4 }, { id : 5 }, { id : 6 } ]
  expect(intersection(list1)(list2)).toEqual([ { id : 3 }, { id : 4 } ])
})
```

</details>

### intersperse

```typescript
intersperse<T>(separator: T, list: ReadonlyArray<T>): T[]
```

It adds a `separator` between members of `list`.

```javascript
const list = [ 0, 1, 2, 3 ]
const separator = '|'
const result = intersperse(separator, list)
// => [0, '|', 1, '|', 2, '|', 3]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%200%2C%201%2C%202%2C%203%20%5D%0Aconst%20separator%20%3D%20'%7C'%0Aconst%20result%20%3D%20intersperse(separator%2C%20list)%0A%2F%2F%20%3D%3E%20%5B0%2C%20'%7C'%2C%201%2C%20'%7C'%2C%202%2C%20'%7C'%2C%203%5D">Try the above <strong>R.intersperse</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
intersperse<T>(separator: T, list: ReadonlyArray<T>): T[];
intersperse<T>(separator: T): (list: ReadonlyArray<T>) => T[];
```

</details>

<details>

<summary><strong>R.intersperse</strong> source</summary>

```javascript
export function intersperse(separator, list){
  if (arguments.length === 1) return _list => intersperse(separator, _list)

  let index = -1
  const len = list.length
  const willReturn = []

  while (++index < len){
    if (index === len - 1){
      willReturn.push(list[ index ])
    } else {
      willReturn.push(list[ index ], separator)
    }
  }

  return willReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { intersperse } from './intersperse'

test('intersperse', () => {
  const list = [ { id : 1 }, { id : 2 }, { id : 10 }, { id : 'a' } ]
  expect(intersperse('!', list)).toEqual([
    { id : 1 },
    '!',
    { id : 2 },
    '!',
    { id : 10 },
    '!',
    { id : 'a' },
  ])

  expect(intersperse('!')([])).toEqual([])
})
```

</details>

### is

```typescript
is(targetPrototype: any, x: any): boolean
```

It returns `true` is `x` is instance of `targetPrototype`.

```javascript
const result = [
  R.is(String, 'foo'),  
  R.is(Array, 1)
]
// => [true, false]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.is(String%2C%20'foo')%2C%20%20%0A%20%20R.is(Array%2C%201)%0A%5D%0A%2F%2F%20%3D%3E%20%5Btrue%2C%20false%5D">Try the above <strong>R.is</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
is(targetPrototype: any, x: any): boolean;
is(targetPrototype: any): (x: any) => boolean;
```

</details>

<details>

<summary><strong>R.is</strong> source</summary>

```javascript
export function is(targetPrototype, x){
  if (arguments.length === 1) return _x => is(targetPrototype, _x)

  return (
    x != null && x.constructor === targetPrototype ||
    x instanceof targetPrototype
  )
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { is } from './is'

test('works with built-in types', () => {
  expect(is(Array, undefined)).toBeFalse()
  expect(is(Array)([])).toBeTrue()
  expect(is(Boolean, new Boolean(false))).toBeTrue()
  expect(is(Date, new Date())).toBeTrue()
  expect(is(Function, () => {})).toBeTrue()
  expect(is(Number, new Number(0))).toBeTrue()
  expect(is(Object, {})).toBeTrue()
  expect(is(RegExp, /(?:)/)).toBeTrue()
  expect(is(String, new String(''))).toBeTrue()
})

test('works with user-defined types', () => {
  function Foo(){}
  function Bar(){}
  Bar.prototype = new Foo()

  const foo = new Foo()
  const bar = new Bar()

  expect(is(Foo, foo)).toBeTrue()
  expect(is(Bar, bar)).toBeTrue()
  expect(is(Foo, bar)).toBeTrue()
  expect(is(Bar, foo)).toBeFalse()
})

test('does not coerce', () => {
  expect(is(Boolean, 1)).toBeFalse()
  expect(is(Number, '1')).toBeFalse()
  expect(is(Number, false)).toBeFalse()
})

test('recognizes primitives as their object equivalents', () => {
  expect(is(Boolean, false)).toBeTrue()
  expect(is(Number, 0)).toBeTrue()
  expect(is(String, '')).toBeTrue()
})

test('does not consider primitives to be instances of Object', () => {
  expect(is(Object, false)).toBeFalse()
  expect(is(Object, 0)).toBeFalse()
  expect(is(Object, '')).toBeFalse()
})
```

</details>

### isEmpty

```typescript
isEmpty<T>(x: T): boolean
```

It returns `true` is `x` is `empty`.

```javascript
const result = [
  R.isEmpty(''),
  R.isEmpty({ x : 0 })
]
// => [true, false]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.isEmpty('')%2C%0A%20%20R.isEmpty(%7B%20x%20%3A%200%20%7D)%0A%5D%0A%2F%2F%20%3D%3E%20%5Btrue%2C%20false%5D">Try the above <strong>R.isEmpty</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
isEmpty<T>(x: T): boolean;
```

</details>

<details>

<summary><strong>R.isEmpty</strong> source</summary>

```javascript
import { type } from './type'

export function isEmpty(input){
  const inputType = type(input)
  if ([ 'Undefined', 'NaN', 'Number', 'Null' ].includes(inputType))
    return false
  if (!input) return true

  if (inputType === 'Object'){
    return Object.keys(input).length === 0
  }

  if (inputType === 'Array'){
    return input.length === 0
  }

  return false
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { isEmpty } from './isEmpty'

test('happy', () => {
  expect(isEmpty(undefined)).toEqual(false)
  expect(isEmpty('')).toEqual(true)
  expect(isEmpty(null)).toEqual(false)
  expect(isEmpty(' ')).toEqual(false)
  expect(isEmpty(new RegExp(''))).toEqual(false)
  expect(isEmpty([])).toEqual(true)
  expect(isEmpty([ [] ])).toEqual(false)
  expect(isEmpty({})).toEqual(true)
  expect(isEmpty({ x : 0 })).toEqual(false)
  expect(isEmpty(0)).toEqual(false)
  expect(isEmpty(NaN)).toEqual(false)
  expect(isEmpty([ '' ])).toEqual(false)
})
```

</details>

<details>

<summary>1 failed <italic>Ramda.isEmpty</italic> specs

> :boom: Reason for the failure: ramda supports typed arrays
</summary>

```javascript
var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');

describe('isEmpty', function() {
  it('returns true for empty typed array', function() {
    eq(R.isEmpty(Uint8Array.from('')), true);
    eq(R.isEmpty(Float32Array.from('')), true);
    eq(R.isEmpty(new Float32Array([])), true);
    eq(R.isEmpty(Uint8Array.from('1')), false);
    eq(R.isEmpty(Float32Array.from('1')), false);
    eq(R.isEmpty(new Float32Array([1])), false);
  });
});
```

</details>

### isFalsy

```typescript
isFalsy(input: any): boolean
```

It returns `true` if `input` is falsy.

```javascript
const result = [
  R.ifFalsy(null),
  R.ifFalsy(''),
  R.ifFalsy([]),
  R.ifFalsy({})
]
// => [true, true, true, true]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.ifFalsy(null)%2C%0A%20%20R.ifFalsy('')%2C%0A%20%20R.ifFalsy(%5B%5D)%2C%0A%20%20R.ifFalsy(%7B%7D)%0A%5D%0A%2F%2F%20%3D%3E%20%5Btrue%2C%20true%2C%20true%2C%20true%5D">Try the above <strong>R.isFalsy</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
isFalsy(input: any): boolean;
```

</details>

<details>

<summary><strong>R.isFalsy</strong> source</summary>

```javascript
import { type } from './type'

export function isFalsy(x){
  const typeIs = type(x)
  if ([ 'Array', 'String' ].includes(typeIs)) return x.length === 0
  if (typeIs === 'Object') return Object.keys(x).length === 0
  if ([ 'Null', 'Undefined' ].includes(typeIs)) return true

  return false
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { isFalsy } from './isFalsy'

test('when function', () => {
  expect(isFalsy(() => {})).toBeFalsy()
})

test('when empty string', () => {
  expect(isFalsy('')).toBeTruthy()
})

test('when empty object', () => {
  expect(isFalsy({})).toBeTruthy()
})

test('when null', () => {
  expect(isFalsy(null)).toBeTruthy
})
```

</details>

### isFunction

```typescript
isFunction(input: any): boolean
```

It returns `true` if **R.type** of `input` is `Async` or `Function`.

```javascript
const result = [
  R.isFunction(R.mapAsync),
  R.isFunction(R.add),
]
// => [true, true]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.isFunction(R.mapAsync)%2C%0A%20%20R.isFunction(R.add)%2C%0A%5D%0A%2F%2F%20%3D%3E%20%5Btrue%2C%20true%5D">Try the above <strong>R.isFunction</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
isFunction(input: any): boolean;
```

</details>

<details>

<summary><strong>R.isFunction</strong> source</summary>

```javascript
import { type } from './type'

export function isFunction(fn){
  return [ 'Async', 'Function' ].includes(type(fn))
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { isFunction } from './isFunction'

test('when function', () => {
  const fn = () => {}

  expect(isFunction(fn)).toEqual(true)
})

test('when promise', () => {
  const fn = Promise.resolve(2)

  expect(isFunction(fn)).toBeFalse()
})

test('when async', () => {
  const fn = async x => x

  expect(isFunction(fn)).toEqual(true)
})

test('when false', () => {
  expect(isFunction(null)).toEqual(false)
})
```

</details>

### isNil

```typescript
isNil(x: any): x is null | undefined
```

It returns `true` is `x` is either `null` or `undefined`.

```javascript
const result = [
  R.isNil(null),
  R.isNil(1),
]
// => [true, false]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.isNil(null)%2C%0A%20%20R.isNil(1)%2C%0A%5D%0A%2F%2F%20%3D%3E%20%5Btrue%2C%20false%5D">Try the above <strong>R.isNil</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
isNil(x: any): x is null | undefined;
```

</details>

<details>

<summary><strong>R.isNil</strong> source</summary>

```javascript
export function isNil(x){
  return x === undefined || x === null
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { isNil } from './isNil'

test('happy', () => {
  expect(isNil(null)).toBeTrue()

  expect(isNil(undefined)).toBeTrue()

  expect(isNil([])).toBeFalse()
})
```

</details>

### isPromise

```typescript
isPromise(input: any): boolean
```

<details>

<summary>All Typescript definitions</summary>

```typescript
isPromise(input: any): boolean;
```

</details>

### isTruthy

```typescript
isTruthy(input: any): boolean
```

It returns `true` if `input` is truthy.

```javascript
const result = [
  R.isTruthy([]),
  R.isTruthy({}),
  R.isTruthy([1]),
  R.isTruthy({a: 1})
]
// => [false, false, true, true]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.isTruthy(%5B%5D)%2C%0A%20%20R.isTruthy(%7B%7D)%2C%0A%20%20R.isTruthy(%5B1%5D)%2C%0A%20%20R.isTruthy(%7Ba%3A%201%7D)%0A%5D%0A%2F%2F%20%3D%3E%20%5Bfalse%2C%20false%2C%20true%2C%20true%5D">Try the above <strong>R.isTruthy</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
isTruthy(input: any): boolean;
```

</details>

### isType

```typescript
isType(targetType: RambdaTypes, input: any): boolean
```

It returns true if `targetType` is equal to type of `input` according to `R.type`.

```javascript
R.isType('Async',R.delay(1000))
// => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.isType('Async'%2CR.delay(1000))%0A%2F%2F%20%3D%3E%20true">Try the above <strong>R.isType</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
isType(targetType: RambdaTypes, input: any): boolean;
isType(targetType: RambdaTypes): (input: any) => boolean;
```

</details>

<details>

<summary><strong>R.isType</strong> source</summary>

```javascript
import { type } from './type'

export function isType(xType, x){
  if (arguments.length === 1){
    return xHolder => isType(xType, xHolder)
  }

  return type(x) === xType
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { isType } from './isType'

const list = [ 1, 2, 3 ]

test('array', () => {
  expect(isType('Array', list)).toBeTruthy()
  expect(isType('Array')([])).toBeTruthy()
})

test('promise', () => {
  expect(isType('Promise', Promise.resolve(1))).toBeTruthy()
})
```

</details>

### isValid

```typescript
isValid({input: object, schema: Schema}): boolean
```

It checks if `input` is following `schema` specifications.

If validation fails, it returns `false`.

Please [check the detailed explanation](https://github.com/selfrefactor/rambdax/blob/master/files/isValid.md) as it is hard to write a short description of this method.

Independently, somebody else came with very similar idea called [superstruct](https://github.com/ianstormtaylor/superstruct)

```javascript
R.isType('Promise',Promise.resolve(1))
// => true
const input = { a: ['foo', 'bar'] }
const invalidInput = { a: ['foo', 'bar', 1] }
const schema = {a: ['string'] }
const result = [
  R.isValid({schema, input}),
  R.isValid({schema, invalidInput}),
]
// => [true, false]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?R.isType('Promise'%2CPromise.resolve(1))%0A%2F%2F%20%3D%3E%20true%0Aconst%20input%20%3D%20%7B%20a%3A%20%5B'foo'%2C%20'bar'%5D%20%7D%0Aconst%20invalidInput%20%3D%20%7B%20a%3A%20%5B'foo'%2C%20'bar'%2C%201%5D%20%7D%0Aconst%20schema%20%3D%20%7Ba%3A%20%5B'string'%5D%20%7D%0Aconst%20result%20%3D%20%5B%0A%20%20R.isValid(%7Bschema%2C%20input%7D)%2C%0A%20%20R.isValid(%7Bschema%2C%20invalidInput%7D)%2C%0A%5D%0A%2F%2F%20%3D%3E%20%5Btrue%2C%20false%5D">Try the above <strong>R.isValid</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
isValid({input: object, schema: Schema}): boolean;
```

</details>

<details>

<summary><strong>R.isValid</strong> source</summary>

```javascript
import { _isArray } from './_internals/_isArray'
import { all } from './all'
import { any } from './any'
import { includes } from './includes'
import { init } from './init'
import { test } from './test'
import { toLower } from './toLower'
import { type } from './type'

export function isPrototype(input){
  const currentPrototype = input.prototype
  const list = [ Number, String, Boolean, Promise ]
  let toReturn = false
  let counter = -1
  while (++counter < list.length && !toReturn){
    if (currentPrototype === list[ counter ].prototype) toReturn = true
  }

  return toReturn
}

export function prototypeToString(input){
  const currentPrototype = input.prototype
  const list = [ Number, String, Boolean, Promise ]
  const translatedList = [ 'Number', 'String', 'Boolean', 'Promise' ]
  let found
  let counter = -1

  while (++counter < list.length){
    if (currentPrototype === list[ counter ].prototype) found = counter
  }

  return translatedList[ found ]
}

const typesWithoutPrototype = [ 'any', 'promise', 'async', 'function' ]

export function fromPrototypeToString(rule){
  if (
    _isArray(rule) ||
    rule === undefined ||
    rule === null ||
    rule.prototype === undefined ||
    typesWithoutPrototype.includes(rule)
  ){
    return {
      rule,
      parsed : false,
    }
  }
  if (String.prototype === rule.prototype){
    return {
      rule   : 'string',
      parsed : true,
    }
  }
  if (Boolean.prototype === rule.prototype){
    return {
      rule   : 'boolean',
      parsed : true,
    }
  }
  if (Number.prototype === rule.prototype){
    return {
      rule   : 'number',
      parsed : true,
    }
  }

  return {
    rule   : type(rule.prototype).toLowerCase(),
    parsed : true,
  }
}

function getRuleAndType(schema, requirementRaw){
  const ruleRaw = schema[ requirementRaw ]
  const typeIs = type(ruleRaw)
  const { rule, parsed } = fromPrototypeToString(ruleRaw)

  return {
    rule     : rule,
    ruleType : parsed ? 'String' : typeIs,
  }
}

export function isValid({ input, schema }){
  if (input === undefined || schema === undefined) return false

  let flag = true
  const boom = boomFlag => {
    if (!boomFlag){
      flag = false
    }
  }

  for (const requirementRaw in schema){
    if (flag){
      const isOptional = requirementRaw.endsWith('?')
      const requirement = isOptional ? init(requirementRaw) : requirementRaw

      const { rule, ruleType } = getRuleAndType(schema, requirementRaw)
      const inputProp = input[ requirement ]
      const inputPropType = type(input[ requirement ])

      const ok = isOptional && inputProp !== undefined || !isOptional

      if (!ok || rule === 'any' && inputProp != null || rule === inputProp)
        continue

      if (ruleType === 'Object'){
        /**
         * This rule is standalone schema, so we recursevly call `isValid`
         */
        const isValidResult = isValid({
          input  : inputProp,
          schema : rule,
        })
        boom(isValidResult)
      } else if (ruleType === 'String'){
        /**
         * Rule is actual rule such as 'number', so the two types are compared
         */
        boom(toLower(inputPropType) === rule)
      } else if (typeof rule === 'function'){
        /**
         * Rule is function so we pass to it the input
         */
        boom(rule(inputProp))
      } else if (ruleType === 'Array' && inputPropType === 'String'){
        /**
         * Enum case | rule is like a: ['foo', 'bar']
         */
        boom(includes(inputProp, rule))
      } else if (
        ruleType === 'Array' &&
        rule.length === 1 &&
        inputPropType === 'Array'
      ){
        /**
         * 1. array of type | rule is like a: ['number']
         * 2. rule is like a: [{foo: 'string', bar: 'number'}]
         */
        const [ currentRule ] = rule
        const currentRuleType = type(currentRule)

        //Check if rule is invalid
        boom(currentRuleType === 'String' ||
            currentRuleType === 'Object' ||
            isPrototype(currentRule))

        if (currentRuleType === 'Object' && flag){
          /**
           * 2. rule is like a: [{from: 'string'}]
           */
          const isValidResult = all(inputPropInstance =>
            isValid({
              input  : inputPropInstance,
              schema : currentRule,
            }),
          inputProp)
          boom(isValidResult)
        } else if (flag){
          /**
           * 1. array of type
           */

          const actualRule =
            currentRuleType === 'String' ?
              currentRule :
              prototypeToString(currentRule)
          const isInvalidResult = any(inputPropInstance =>
            type(inputPropInstance).toLowerCase() !==
              actualRule.toLowerCase(),
          inputProp)
          boom(!isInvalidResult)
        }
      } else if (ruleType === 'RegExp' && inputPropType === 'String'){
        boom(test(rule, inputProp))
      } else {
        boom(false)
      }
    }
  }

  return flag
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { delay } from './delay'
import { isPrototype, isValid } from './isValid'

test('is prototype', () => {
  expect(isPrototype(Promise)).toBe(true)
  expect(isPrototype(Number)).toBe(true)
  expect(isPrototype(Boolean)).toBe(true)
  expect(isPrototype(String)).toBe(true)
  expect(isPrototype(0)).toBe(false)
})

test('prototype inside array', () => {
  const input = { a : [ 1, 2, 3, 4 ] }
  const schema = { a : [ Number ] }
  expect(isValid({
    input,
    schema,
  })).toBeTruthy()
})

test('with Promise prototype', () => {
  const input = { a : [ delay(1), delay(2) ] }
  const schema = { a : [ Promise ] }
  expect(isValid({
    input,
    schema,
  })).toBeTruthy()
})

test('object prototype as rule - true', () => {
  const input = { a : {} }
  const schema = { a : Object }
  expect(isValid({
    input,
    schema,
  })).toBeTruthy()
})

test('list of functions', () => {
  const input = { a : [ () => {}, delay ] }
  const schema = { a : [ 'function' ] }

  expect(isValid({
    input,
    schema,
  })).toBeTruthy()
})

test('function schema type can be only string', () => {
  const input = { a : [ () => {}, delay ] }
  const schema = { a : [ Function ] }

  expect(isValid({
    input,
    schema,
  })).toBeFalsy()
})

test('object prototype as rule - false', () => {
  const input = { a : null }
  const schema = { a : Object }
  expect(isValid({
    input,
    schema,
  })).toBeFalsy()
})

test('number prototype as rule - true', () => {
  const input = { a : 1 }
  const schema = { a : Number }
  expect(isValid({
    input,
    schema,
  })).toBeTruthy()
})

test('array prototype as rule - true', () => {
  const input = { a : [ 1, 2, 3 ] }
  const schema = { a : Array }
  expect(isValid({
    input,
    schema,
  })).toBeTruthy()
})

test('array prototype as rule - false', () => {
  const input = { a : null }
  const schema = { a : Array }
  expect(isValid({
    input,
    schema,
  })).toBeFalsy()
})

test('string prototype as rule - true', () => {
  const input = { a : 'foo' }
  const schema = { a : String }
  expect(isValid({
    input,
    schema,
  })).toBeTruthy()
})

test('string prototype as rule - false', () => {
  const input = { a : null }
  const schema = { a : String }
  expect(isValid({
    input,
    schema,
  })).toBeFalsy()
})

test('boolean prototype as rule - true', () => {
  const input = { a : true }
  const schema = { a : Boolean }
  expect(isValid({
    input,
    schema,
  })).toBeTruthy()
})

test('boolean prototype as rule - false', () => {
  const input = { a : null }
  const schema = { a : Boolean }
  expect(isValid({
    input,
    schema,
  })).toBeFalsy()
})

test('regex prototype cannot be rule - true', () => {
  const input = { a : /foo/g }
  const schema = { a : new RegExp('foo') }
  expect(isValid({
    input,
    schema,
  })).toBeFalsy()
})

test('undefined as a rule - true', () => {
  const input = { a : undefined }
  const schema = { a : undefined }
  expect(isValid({
    input,
    schema,
  })).toBeTruthy()
})

test('undefined as a rule - false', () => {
  const input = { a : null }
  const schema = { a : undefined }
  expect(isValid({
    input,
    schema,
  })).toBeFalsy()
})

test('null as a rule - true', () => {
  const input = { a : null }
  const schema = { a : null }
  expect(isValid({
    input,
    schema,
  })).toBeTruthy()
})

test('null as a rule - false', () => {
  const input = { a : undefined }
  const schema = { a : null }
  expect(isValid({
    input,
    schema,
  })).toBeFalsy()
})

test('`any` safeguard against `null`', () => {
  const input = { a : null }
  const schema = { a : 'any' }
  expect(isValid({
    input,
    schema,
  })).toBeFalsy()
})

test('`any` safeguard against `undefined`', () => {
  const input = { a : undefined }
  const schema = { a : 'any' }
  expect(isValid({
    input,
    schema,
  })).toBeFalsy()
})

test('type can be `"any"`', () => {
  const input = { a : () => {} }
  const schema = { a : 'any' }
  expect(isValid({
    input,
    schema,
  })).toBeTruthy()
})

test('type can be `"function"`', () => {
  const input = { a : () => {} }
  const schema = { a : 'function' }
  expect(isValid({
    input,
    schema,
  })).toBeTruthy()
})

test('type can be `async`', () => {
  const input = { a : async () => {} }
  const schema = { a : 'async' }
  expect(isValid({
    input,
    schema,
  })).toBeTruthy()
})

test('type can be `promise`', () => {
  const input = { a : delay(1999) }
  const schema = { a : 'promise' }
  // TODO
  // ============================================
  // const schema = { a : Promise }
  expect(isValid({
    input,
    schema,
  })).toBeTruthy()
})

test('type can be `promise` list', () => {
  const input = { a : [ delay(1999) ] }
  const schema = { a : [ 'promise' ] }
  expect(isValid({
    input,
    schema,
  })).toBeTruthy()
})

test('function as schema - false', () => {
  const input = {
    a : {
      ab : () => true,
      ac : 3,
    },
    c : [ 1, 2 ],
  }
  const schema = {
    'a' : {
      ab : /fo/,
      ac : 'number',
    },
    'b?' : 'string',
    'c'  : [ 'number' ],
  }
  expect(isValid({
    input,
    schema,
  })).toBeFalsy()
})

test('regex ok', () => {
  const input = {
    a : {
      ab : 'foo',
      ac : 3,
    },
    c : [ 1, 2 ],
  }
  const schema = {
    'a' : {
      ab : /fo/,
      ac : 'number',
    },
    'b?' : 'string',
    'c'  : [ 'number' ],
  }
  expect(isValid({
    input,
    schema,
  })).toBeTruthy()
})

test('regex !ok', () => {
  const input = {
    a : {
      ab : 'foo',
      ac : 3,
    },
    c : [ 1, 2 ],
  }
  const schema = {
    'a' : {
      ab : /ba/,
      ac : 'number',
    },
    'b?' : 'string',
    'c'  : [ 'number' ],
  }
  expect(isValid({
    input,
    schema,
  })).toBeFalsy()
})

test('optional props is missing', () => {
  const input = {
    a : {
      ab : 'foo',
      ac : 3,
    },
    c : [ 1, 2 ],
  }
  const schema = {
    'a' : {
      ab : 'string',
      ac : 'number',
    },
    'b?' : 'string',
    'c'  : [ 'number' ],
  }
  expect(isValid({
    input,
    schema,
  })).toBeTruthy()
})

test('optional props is wrong type', () => {
  const input = {
    a : {
      ab : 'foo',
      ac : 3,
    },
    b : [],
    c : [ 1, 2 ],
  }
  const schema = {
    'a' : {
      ab : 'string',
      ac : 'number',
    },
    'b?' : 'string',
    'c'  : [ 'number' ],
  }
  expect(isValid({
    input,
    schema,
  })).toBeFalsy()
})

test('optional props - nested', () => {
  const input = {
    a : {
      ab : 'foo',
      ac : 3,
    },
    b : [],
    c : [ 1, 2 ],
  }
  const schema = {
    a : {
      'ab'  : 'string',
      'ac?' : 'number',
    },
    b : 'array',
    c : [ 'number' ],
  }
  expect(isValid({
    input,
    schema,
  })).toBeTruthy()
})

test('optional props is missing - nested', () => {
  const input = {
    a : { ab : 'foo' },
    b : [],
    c : [ 1, 2 ],
  }
  const schema = {
    a : {
      'ab'  : 'string',
      'ac?' : 'number',
    },
    b : 'array',
    c : [ 'number' ],
  }
  expect(isValid({
    input,
    schema,
  })).toBeTruthy()
})

test('optional props is wrong type - nested', () => {
  const input = {
    a : {
      ab : 'foo',
      ac : 'bar',
    },
    b : [],
    c : [ 1, 2 ],
  }
  const schema = {
    a : {
      'ab'  : 'string',
      'ac?' : 'number',
    },
    b : 'array',
    c : [ 'number' ],
  }
  expect(isValid({
    input,
    schema,
  })).toBeFalsy()
})

test('nested schema', () => {
  const input = {
    a : {
      b : 'str',
      c : 3,
      d : 'str',
    },
    b : 'foo',
  }
  const schema = {
    a : {
      b : 'string',
      c : 'number',
      d : 'string',
    },
    b : 'string',
  }

  expect(isValid({
    input,
    schema,
  })).toBeTruthy()

  const invalidInputFirst = {
    a : {
      b : 'str',
      c : 3,
      d : 'str',
    },
    b : 5,
  }

  expect(isValid({
    input : invalidInputFirst,
    schema,
  })).toBeFalsy()

  const invalidInputSecond = {
    a : {
      b : 'str',
      c : 'str',
      d : 'str',
    },
    b : 5,
  }

  expect(isValid({
    input : invalidInputSecond,
    schema,
  })).toBeFalsy()

  const invalidInputThird = {
    a : { b : 'str' },
    b : 5,
  }

  expect(isValid({
    input : invalidInputThird,
    schema,
  })).toBeFalsy()
})

test('array of type', () => {
  const input = {
    a : [ 1, 2 ],
    b : 'foo',
  }
  const schema = {
    a : [ 'number' ],
    b : 'string',
  }

  expect(isValid({
    input,
    schema,
  })).toBeTruthy()

  const invalidInput = {
    a : [ 1, '1' ],
    b : 'foo',
  }

  expect(isValid({
    input : invalidInput,
    schema,
  })).toBeFalsy()
})

test('function as rule', () => {
  const input = {
    a : [ 1, 2, 3, 4 ],
    b : 'foo',
  }
  const invalidInput = {
    a : [ 4 ],
    b : 'foo',
  }

  const schema = {
    a : x => x.length > 2,
    b : 'string',
  }

  expect(isValid({
    input,
    schema,
  })).toBeTruthy()

  expect(isValid({
    input : invalidInput,
    schema,
  })).toBeFalsy()
})

test('input prop is undefined', () => {
  const input = { b : 3 }
  const schema = { a : 'number' }

  expect(isValid({
    input,
    schema,
  })).toBeFalsy()
})

test('enum', () => {
  const input = { a : 'foo' }
  const invalidInput = { a : '' }

  const schema = { a : [ 'foo', 'bar', 'baz' ] }

  expect(isValid({
    input,
    schema,
  })).toBeTruthy()

  expect(isValid({
    input : invalidInput,
    schema,
  })).toBeFalsy()
})

test('readme example', () => {
  const basicSchema = { a : [ 'string' ] }
  const schema = {
    b : [ basicSchema ],
    c : {
      d : { e : 'boolean' },
      f : 'array',
    },
    g : [ 'foo', 'bar', 'baz' ],
  }
  const input = {
    b : [ { a : [ 'led', 'zeppelin' ] } ],
    c : {
      d : { e : true },
      f : [ 'any', 1, null, 'value' ],
    },
    g : 'foo',
  }

  expect(isValid({
    input,
    schema,
  })).toBeTruthy()
})

test('should allow additional properties', () => {
  const input = {
    title : 'You shook me',
    year  : 1969,
  }

  expect(isValid({
    input,
    schema : { title : 'string' },
  })).toBeTruthy()
})

test('accepts values as schemas', () => {
  const input = {
    title : 'You shook me',
    genre : 'Blues',
    year  : 1969,
  }
  const schema = {
    title : 'You shook me',
    year  : 1969,
  }
  expect(isValid({
    input,
    schema,
  })).toBeTruthy()
})

test('compatible schemas with nested object', () => {
  const input = {
    foo : 'bar',
    baz : { a : { b : 'c' } },
  }
  const invalidInputFirst = {
    foo : 'bar',
    baz : { a : { b : 1 } },
  }
  const invalidInputSecond = {
    foo : 'bar',
    baz : { a : { b : [] } },
  }
  const invalidInputThird = {
    foo : 'bar',
    baz : { a : { b : null } },
  }
  const schema = {
    foo : 'string',
    baz : { a : { b : 'string' } },
  }

  expect(isValid({
    input,
    schema,
  })).toBeTruthy()

  expect(isValid({
    input : invalidInputFirst,
    schema,
  })).toBeFalsy()
  expect(isValid({
    input : invalidInputSecond,
    schema,
  })).toBeFalsy()
  expect(isValid({
    input : invalidInputThird,
    schema,
  })).toBeFalsy()
})

test('should return true when schema is empty object', () => {
  expect(isValid({
    input  : { a : 1 },
    schema : {},
  })).toBeTruthy()
})

test('when schema is undefined', () => {
  expect(isValid({
    input  : { a : 1 },
    schema : undefined,
  })).toBeFalsy()
})

test('should return false with invalid schema rule', () => {
  const input = {
    foo : 'bar',
    a   : {},
  }
  const inputSecond = { foo : 'bar' }

  const schema = {
    foo : 'string',
    baz : { a : {} },
  }

  expect(isValid({
    input,
    schema,
  })).toBeFalsy()

  expect(isValid({
    input : inputSecond,
    schema,
  })).toBeFalsy()
})

test('array of schemas', () => {
  const input = {
    b : [
      {
        a : 'led',
        b : 1,
      },
      {
        a : 'dancing',
        b : 1,
      },
    ],
  }
  const basicSchema = {
    a : String,
    b : Number,
  }
  const schema = { b : [ basicSchema ] }
  const result = isValid({
    input,
    schema,
  })

  expect(result).toBeTruthy()
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {isValid} from 'rambda'

describe('isValid', () => {
  it('happy', () => {
    const input = {a: ['foo', 'bar']}
    const schema = {a: ['string']}
    const result = isValid({schema, input})
    result // $ExpectType boolean
  })
})
```

</details>

### isValidAsync

```typescript
isValidAsync(x: IsValidAsync): Promise<boolean>
```

<details>

<summary>All Typescript definitions</summary>

```typescript
isValidAsync(x: IsValidAsync): Promise<boolean>;
```

</details>

### join

```typescript
join(x: string, xs: ReadonlyArray<any>): string
```

It returns a string representing `list` instances joined with `glue`.

```javascript
R.join('-', [1, 2, 3])  // => '1-2-3'
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.join('-'%2C%20%5B1%2C%202%2C%203%5D)%20%20%2F%2F%20%3D%3E%20'1-2-3'">Try the above <strong>R.join</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
join(x: string, xs: ReadonlyArray<any>): string;
join(x: string): (xs: ReadonlyArray<any>) => string;
```

</details>

<details>

<summary><strong>R.join</strong> source</summary>

```javascript
export function join(glue, list){
  if (arguments.length === 1) return _list => join(glue, _list)

  return list.join(glue)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { join } from './join'

test('curry', () => {
  expect(join('|')([ 'foo', 'bar', 'baz' ])).toEqual('foo|bar|baz')

  expect(join('|', [ 1, 2, 3 ])).toEqual('1|2|3')

  const spacer = join(' ')

  expect(spacer([ 'a', 2, 3.4 ])).toEqual('a 2 3.4')
})
```

</details>

### keys

```typescript
keys<T extends object>(x: T): (keyof T)[]
```

It applies `Object.keys` over `x` and returns its keys.

```javascript
R.keys({a:1, b:2})  // => ['a', 'b']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.keys(%7Ba%3A1%2C%20b%3A2%7D)%20%20%2F%2F%20%3D%3E%20%5B'a'%2C%20'b'%5D">Try the above <strong>R.keys</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
keys<T extends object>(x: T): (keyof T)[];
keys<T>(x: T): string[];
```

</details>

<details>

<summary><strong>R.keys</strong> source</summary>

```javascript
export function keys(x){
  return Object.keys(x)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { keys } from './keys'

test('happy', () => {
  expect(keys({ a : 1 })).toEqual([ 'a' ])
})
```

</details>

<details>

<summary>1 failed <italic>Ramda.keys</italic> specs

> :boom: Reason for the failure: ramda method works for primitives
</summary>

```javascript
var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');

describe('keys', function() {
  var obj = {a: 100, b: [1, 2, 3], c: {x: 200, y: 300}, d: 'D', e: null, f: undefined};
  function C() { this.a = 100; this.b = 200; }
  C.prototype.x = function() { return 'x'; };
  C.prototype.y = 'y';
  var cobj = new C();
  it('works for primitives', function() {
    eq(R.keys(null), []);
    eq(R.keys(undefined), []);
    eq(R.keys(55), []);
    eq(R.keys('foo'), []);
    eq(R.keys(true), []);
    eq(R.keys(false), []);
    eq(R.keys(NaN), []);
    eq(R.keys(Infinity), []);
    eq(R.keys([]), []);
  });
});
```

</details>

### last

```typescript
last<T>(listOrString: T[]): T | undefined
```

It returns the last element of `listOrString`.

```javascript
const result = [
  R.last([1, 2, 3]),
  R.last('foo'),
]
// => [3, 'o']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.last(%5B1%2C%202%2C%203%5D)%2C%0A%20%20R.last('foo')%2C%0A%5D%0A%2F%2F%20%3D%3E%20%5B3%2C%20'o'%5D">Try the above <strong>R.last</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
last<T>(listOrString: T[]): T | undefined;
last(listOrString: string): string;
```

</details>

<details>

<summary><strong>R.last</strong> source</summary>

```javascript
export function last(listOrString){
  if (typeof listOrString === 'string'){
    return listOrString[ listOrString.length - 1 ] || ''
  }

  return listOrString[ listOrString.length - 1 ]
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { last } from './last'

test('happy', () => {
  expect(last([ 'foo', 'bar', 'baz' ])).toEqual('baz')
  expect(last([])).toEqual(undefined)
  expect(last('abc')).toEqual('c')
  expect(last('')).toEqual('')
})
```

</details>

### lastIndexOf

```typescript
lastIndexOf<T>(target: T, list: ReadonlyArray<T>): number
```

It returns the last index of `target` in `list` array.

`R.equals` is used to determine equality between `target` and members of `list`.

If there is no such index, then `-1` is returned.

```javascript
const list = [1, 2, 3, 1, 2, 3]
const result = [
  R.lastIndexOf(2, list),
  R.lastIndexOf(4, list),
]
// => [4, -1]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B1%2C%202%2C%203%2C%201%2C%202%2C%203%5D%0Aconst%20result%20%3D%20%5B%0A%20%20R.lastIndexOf(2%2C%20list)%2C%0A%20%20R.lastIndexOf(4%2C%20list)%2C%0A%5D%0A%2F%2F%20%3D%3E%20%5B4%2C%20-1%5D">Try the above <strong>R.lastIndexOf</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
lastIndexOf<T>(target: T, list: ReadonlyArray<T>): number;
lastIndexOf<T>(target: T): (list: ReadonlyArray<T>) => number;
```

</details>

<details>

<summary><strong>R.lastIndexOf</strong> source</summary>

```javascript
import { equals } from './equals'

export function lastIndexOf(target, list){
  if (arguments.length === 1) return _list => lastIndexOf(target, _list)

  let index = list.length

  while (--index > 0){
    if (equals(list[ index ], target)){
      return index
    }
  }

  return -1
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { lastIndexOf } from './lastIndexOf'

test('happy', () => {
  const a = lastIndexOf(1, [ 1, 2, 3, 1, 2 ])
  const b = lastIndexOf(1)([ 1, 2, 3, 1, 2 ])

  expect(a).toEqual(3)
  expect(b).toEqual(3)
})

test('false', () => {
  const a = lastIndexOf(10, [ 1, 2, 3, 1, 2 ])

  expect(a).toEqual(-1)
})
```

</details>

<details>

<summary>3 failed <italic>Ramda.lastIndexOf</italic> specs

> :boom: Reason for the failure: ramda method dispatches to `lastIndexOf` method
</summary>

```javascript
var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');

describe('lastIndexOf', function() {
  var input = [1, 2, 3, 4, 5, 1];
  var list = ['a', 1, 'a'];
  list[-2] = 'a'; // Throw a wrench in the gears by assigning a non-valid array index as object property.
  it('has R.equals semantics', function() {
    function Just(x) { this.value = x; }
    Just.prototype.equals = function(x) {
      return x instanceof Just && R.equals(x.value, this.value);
    };
    eq(R.lastIndexOf(0, [-0]), -1);
    eq(R.lastIndexOf(-0, [0]), -1);
    eq(R.lastIndexOf(NaN, [NaN]), 0);
    eq(R.lastIndexOf(new Just([42]), [new Just([42])]), 0);
  });
  it('dispatches to `lastIndexOf` method', function() {
    function Empty() {}
    Empty.prototype.lastIndexOf = R.always(-1);
    function List(head, tail) {
      this.head = head;
      this.tail = tail;
    }
    List.prototype.lastIndexOf = function(x) {
      var idx = this.tail.lastIndexOf(x);
      return idx >= 0 ? 1 + idx : this.head === x ? 0 : -1;
    };
    var list = new List('b',
      new List('a',
        new List('n',
          new List('a',
            new List('n',
              new List('a',
                new Empty()
              )
            )
          )
        )
      )
    );
    eq(R.lastIndexOf('a', 'banana'), 5);
    eq(R.lastIndexOf('x', 'banana'), -1);
    eq(R.lastIndexOf('a', list), 5);
    eq(R.lastIndexOf('x', list), -1);
  });
  it('finds function, compared by identity', function() {
    var f = function() {};
    var g = function() {};
    var list = [g, f, g, f];
    eq(R.lastIndexOf(f, list), 3);
  });
});
```

</details>

### length

```typescript
length<T>(listOrString: ReadonlyArray<T>): number
```

It returns the `length` property of `listOrString`.

```javascript
const result = [
  R.length([1, 2, 3, 4]),
  R.length('foo'),
]
// => [4, 3]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.length(%5B1%2C%202%2C%203%2C%204%5D)%2C%0A%20%20R.length('foo')%2C%0A%5D%0A%2F%2F%20%3D%3E%20%5B4%2C%203%5D">Try the above <strong>R.length</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
length<T>(listOrString: ReadonlyArray<T>): number;
```

</details>

<details>

<summary><strong>R.length</strong> source</summary>

```javascript
export function length(x){
  if (!x || x.length === undefined){
    return NaN
  }

  return x.length
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { length } from './length'

test('happy', () => {
  expect(length('foo')).toEqual(3)
  expect(length([ 1, 2, 3 ])).toEqual(3)
  expect(length([])).toEqual(0)
})

test('with bad input returns NaN', () => {
  expect(length(0)).toBeNaN()
  expect(length({})).toBeNaN()
  expect(length(null)).toBeNaN()
  expect(length(undefined)).toBeNaN()
})
```

</details>

<details>

<summary>1 failed <italic>Ramda.length</italic> specs

> :boom: Reason for the failure: ramda method supports object with `length` method
</summary>

```javascript
var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');

describe('length', function() {
  it('returns the length of a string', function() {
    eq(R.length(''), 0);
    eq(R.length('xyz'), 3);
  });
  it('returns NaN for length property of unexpected type', function() {
    eq(R.identical(NaN, R.length({length: ''})), true);
    eq(R.identical(NaN, R.length({length: '1.23'})), true);
    eq(R.identical(NaN, R.length({length: null})), true);
    eq(R.identical(NaN, R.length({length: undefined})), true);
    eq(R.identical(NaN, R.length({})), true);
  });
});
```

</details>

### lens

```typescript
lens<T, U, V>(getter: (s: T) => U, setter: (a: U, s: T) => V): Lens
```

It returns a `lens` for the given `getter` and `setter` functions. 

The `getter` **gets** the value of the focus; the `setter` **sets** the value of the focus. 

The setter should not mutate the data structure.

```javascript
const xLens = R.lens(R.prop('x'), R.assoc('x'));

R.view(xLens, {x: 1, y: 2}) // => 1
R.set(xLens, 4, {x: 1, y: 2}) // => {x: 4, y: 2}
R.over(xLens, R.negate, {x: 1, y: 2}) // => {x: -1, y: 2}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20const%20xLens%20%3D%20R.lens(R.prop('x')%2C%20R.assoc('x'))%3B%0A%0AR.view(xLens%2C%20%7Bx%3A%201%2C%20y%3A%202%7D)%20%2F%2F%20%3D%3E%201%0AR.set(xLens%2C%204%2C%20%7Bx%3A%201%2C%20y%3A%202%7D)%20%2F%2F%20%3D%3E%20%7Bx%3A%204%2C%20y%3A%202%7D%0AR.over(xLens%2C%20R.negate%2C%20%7Bx%3A%201%2C%20y%3A%202%7D)%20%2F%2F%20%3D%3E%20%7Bx%3A%20-1%2C%20y%3A%202%7D">Try the above <strong>R.lens</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
lens<T, U, V>(getter: (s: T) => U, setter: (a: U, s: T) => V): Lens;
lens<T, U, V>(getter: (s: T) => U, setter: (a: U, s: T) => V): Lens;
```

</details>

<details>

<summary><strong>R.lens</strong> source</summary>

```javascript
export function lens(getter, setter){
  if (arguments.length === 1) return _setter => lens(getter, _setter)

  return function (functor){
    return function (target){
      return functor(getter(target)).map(focus => setter(focus, target))
    }
  }
}
```

</details>

### lensIndex

```typescript
lensIndex(index: number): Lens
```

It returns a lens that focuses on specified `index`.

```javascript
const list = ['a', 'b', 'c']
const headLens = R.lensIndex(0)

R.view(headLens, list) // => 'a'
R.set(headLens, 'x', list) // => ['x', 'b', 'c']
R.over(headLens, R.toUpper, list) // => ['A', 'b', 'c']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20const%20list%20%3D%20%5B'a'%2C%20'b'%2C%20'c'%5D%0Aconst%20headLens%20%3D%20R.lensIndex(0)%0A%0AR.view(headLens%2C%20list)%20%2F%2F%20%3D%3E%20'a'%0AR.set(headLens%2C%20'x'%2C%20list)%20%2F%2F%20%3D%3E%20%5B'x'%2C%20'b'%2C%20'c'%5D%0AR.over(headLens%2C%20R.toUpper%2C%20list)%20%2F%2F%20%3D%3E%20%5B'A'%2C%20'b'%2C%20'c'%5D">Try the above <strong>R.lensIndex</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
lensIndex(index: number): Lens;
```

</details>

<details>

<summary><strong>R.lensIndex</strong> source</summary>

```javascript
import { lens } from './lens'
import { nth } from './nth'
import { update } from './update'

export function lensIndex(index){
  return lens(nth(index), update(index))
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { compose } from './compose'
import { keys } from './keys'
import { lensIndex } from './lensIndex'
import { over } from './over'
import { set } from './set'
import { view } from './view'

const testList = [ { a : 1 }, { b : 2 }, { c : 3 } ]

test('focuses list element at the specified index', () => {
  expect(view(lensIndex(0), testList)).toEqual({ a : 1 })
})

test('returns undefined if the specified index does not exist', () => {
  expect(view(lensIndex(10), testList)).toEqual(undefined)
})

test('sets the list value at the specified index', () => {
  expect(set(
    lensIndex(0), 0, testList
  )).toEqual([ 0, { b : 2 }, { c : 3 } ])
})

test('applies function to the value at the specified list index', () => {
  expect(over(
    lensIndex(2), keys, testList
  )).toEqual([ { a : 1 }, { b : 2 }, [ 'c' ] ])
})

test('can be composed', () => {
  const nestedList = [ 0, [ 10, 11, 12 ], 1, 2 ]
  const composedLens = compose(lensIndex(1), lensIndex(0))

  expect(view(composedLens, nestedList)).toEqual(10)
})

test('set s (get s) === s', () => {
  expect(set(
    lensIndex(0), view(lensIndex(0), testList), testList
  )).toEqual(testList)
})

test('get (set s v) === v', () => {
  expect(view(lensIndex(0), set(
    lensIndex(0), 0, testList
  ))).toEqual(0)
})

test('get (set(set s v1) v2) === v2', () => {
  expect(view(lensIndex(0),
    set(
      lensIndex(0), 11, set(
        lensIndex(0), 10, testList
      )
    ))).toEqual(11)
})
```

</details>

### lensPath

```typescript
lensPath(path: RamdaPath): Lens
```

It returns a lens that focuses on specified `path`.

```javascript
const lensPath = R.lensPath(['x', 0, 'y'])
const input = {x: [{y: 2, z: 3}, {y: 4, z: 5}]}

R.view(lensPath, input) //=> 2

R.set(lensPath, 1, input) 
//=> {x: [{y: 1, z: 3}, {y: 4, z: 5}]}

R.over(xHeadYLens, R.negate, input) 
//=> {x: [{y: -2, z: 3}, {y: 4, z: 5}]}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20const%20lensPath%20%3D%20R.lensPath(%5B'x'%2C%200%2C%20'y'%5D)%0Aconst%20input%20%3D%20%7Bx%3A%20%5B%7By%3A%202%2C%20z%3A%203%7D%2C%20%7By%3A%204%2C%20z%3A%205%7D%5D%7D%0A%0AR.view(lensPath%2C%20input)%20%2F%2F%3D%3E%202%0A%0AR.set(lensPath%2C%201%2C%20input)%20%0A%2F%2F%3D%3E%20%7Bx%3A%20%5B%7By%3A%201%2C%20z%3A%203%7D%2C%20%7By%3A%204%2C%20z%3A%205%7D%5D%7D%0A%0AR.over(xHeadYLens%2C%20R.negate%2C%20input)%20%0A%2F%2F%3D%3E%20%7Bx%3A%20%5B%7By%3A%20-2%2C%20z%3A%203%7D%2C%20%7By%3A%204%2C%20z%3A%205%7D%5D%7D">Try the above <strong>R.lensPath</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
lensPath(path: RamdaPath): Lens;
```

</details>

<details>

<summary><strong>R.lensPath</strong> source</summary>

```javascript
import { assocPath } from './assocPath'
import { lens } from './lens'
import { path } from './path'

export function lensPath(key){
  return lens(path(key), assocPath(key))
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { compose } from './compose'
import { identity } from './identity'
import { inc } from './inc'
import { lensPath } from './lensPath'
import { lensProp } from './lensProp'
import { over } from './over'
import { set } from './set'
import { view } from './view'

const testObj = {
  a : [ { b : 1 }, { b : 2 } ],
  d : 3,
}

test('view', () => {
  expect(view(lensPath('d'), testObj)).toEqual(3)
  expect(view(lensPath('a.0.b'), testObj)).toEqual(1)
  // this is different to ramda, ramda will return a clone of the input object
  expect(view(lensPath(''), testObj)).toEqual(undefined)
})

test('set', () => {
  expect(set(
    lensProp('d'), 0, testObj
  )).toEqual({
    a : [ { b : 1 }, { b : 2 } ],
    d : 0,
  })
  expect(set(
    lensPath('a.0.b'), 0, testObj
  )).toEqual({
    a : [ { b : 0 }, { b : 2 } ],
    d : 3,
  })
  expect(set(
    lensPath('a.0.X'), 0, testObj
  )).toEqual({
    a : [
      {
        b : 1,
        X : 0,
      },
      { b : 2 },
    ],
    d : 3,
  })
  expect(set(
    lensPath([]), 0, testObj
  )).toEqual(0)
})

test('over', () => {
  expect(over(
    lensPath('d'), inc, testObj
  )).toEqual({
    a : [ { b : 1 }, { b : 2 } ],
    d : 4,
  })
  expect(over(
    lensPath('a.1.b'), inc, testObj
  )).toEqual({
    a : [ { b : 1 }, { b : 3 } ],
    d : 3,
  })
  expect(over(
    lensProp('X'), identity, testObj
  )).toEqual({
    a : [ { b : 1 }, { b : 2 } ],
    d : 3,
    X : undefined,
  })
  expect(over(
    lensPath('a.0.X'), identity, testObj
  )).toEqual({
    a : [
      {
        b : 1,
        X : undefined,
      },
      { b : 2 },
    ],
    d : 3,
  })
})

test('compose', () => {
  const composedLens = compose(lensPath('a'), lensPath('1.b'))
  expect(view(composedLens, testObj)).toEqual(2)
})

test('set s (get s) === s', () => {
  expect(set(
    lensPath([ 'd' ]), view(lensPath([ 'd' ]), testObj), testObj
  )).toEqual(testObj)
  expect(set(
    lensPath([ 'a', 0, 'b' ]),
    view(lensPath([ 'a', 0, 'b' ]), testObj),
    testObj
  )).toEqual(testObj)
})

test('get (set s v) === v', () => {
  expect(view(lensPath([ 'd' ]), set(
    lensPath([ 'd' ]), 0, testObj
  ))).toEqual(0)
  expect(view(lensPath([ 'a', 0, 'b' ]), set(
    lensPath([ 'a', 0, 'b' ]), 0, testObj
  ))).toEqual(0)
})

test('get (set(set s v1) v2) === v2', () => {
  const p = [ 'd' ]
  const q = [ 'a', 0, 'b' ]
  expect(view(lensPath(p), set(
    lensPath(p), 11, set(
      lensPath(p), 10, testObj
    )
  ))).toEqual(11)
  expect(view(lensPath(q), set(
    lensPath(q), 11, set(
      lensPath(q), 10, testObj
    )
  ))).toEqual(11)
})
```

</details>

### lensProp

```typescript
lensProp(prop: string): {
  <T, U>(obj: T): U
```

It returns a lens that focuses on specified property `prop`.

```javascript
const xLens = R.lensProp('x');
const input = {x: 1, y: 2}

R.view(xLens, input) // => 1

R.set(xLens, 4, input) 
// => {x: 4, y: 2}

R.over(xLens, R.negate, input) 
// => {x: -1, y: 2}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20const%20xLens%20%3D%20R.lensProp('x')%3B%0Aconst%20input%20%3D%20%7Bx%3A%201%2C%20y%3A%202%7D%0A%0AR.view(xLens%2C%20input)%20%2F%2F%20%3D%3E%201%0A%0AR.set(xLens%2C%204%2C%20input)%20%0A%2F%2F%20%3D%3E%20%7Bx%3A%204%2C%20y%3A%202%7D%0A%0AR.over(xLens%2C%20R.negate%2C%20input)%20%0A%2F%2F%20%3D%3E%20%7Bx%3A%20-1%2C%20y%3A%202%7D">Try the above <strong>R.lensProp</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
lensProp(prop: string): {
  <T, U>(obj: T): U;
  set<T, U, V>(val: T, obj: U): V;
};
```

</details>

<details>

<summary><strong>R.lensProp</strong> source</summary>

```javascript
import { assoc } from './assoc'
import { lens } from './lens'
import { prop } from './prop'

export function lensProp(key){
  return lens(prop(key), assoc(key))
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { compose } from './compose'
import { identity } from './identity'
import { inc } from './inc'
import { lensProp } from './lensProp'
import { over } from './over'
import { set } from './set'
import { view } from './view'

const testObj = {
  a : 1,
  b : 2,
  c : 3,
}

test('focuses object the specified object property', () => {
  expect(view(lensProp('a'), testObj)).toEqual(1)
})

test('returns undefined if the specified property does not exist', () => {
  expect(view(lensProp('X'), testObj)).toEqual(undefined)
})

test('sets the value of the object property specified', () => {
  expect(set(
    lensProp('a'), 0, testObj
  )).toEqual({
    a : 0,
    b : 2,
    c : 3,
  })
})

test('adds the property to the object if it doesn\'t exist', () => {
  expect(set(
    lensProp('d'), 4, testObj
  )).toEqual({
    a : 1,
    b : 2,
    c : 3,
    d : 4,
  })
})

test('applies function to the value of the specified object property', () => {
  expect(over(
    lensProp('a'), inc, testObj
  )).toEqual({
    a : 2,
    b : 2,
    c : 3,
  })
})

test('applies function to undefined and adds the property if it doesn\'t exist', () => {
  expect(over(
    lensProp('X'), identity, testObj
  )).toEqual({
    a : 1,
    b : 2,
    c : 3,
    X : undefined,
  })
})

test('can be composed', () => {
  const nestedObj = {
    a : { b : 1 },
    c : 2,
  }
  const composedLens = compose(lensProp('a'), lensProp('b'))

  expect(view(composedLens, nestedObj)).toEqual(1)
})

test('set s (get s) === s', () => {
  expect(set(
    lensProp('a'), view(lensProp('a'), testObj), testObj
  )).toEqual(testObj)
})

test('get (set s v) === v', () => {
  expect(view(lensProp('a'), set(
    lensProp('a'), 0, testObj
  ))).toEqual(0)
})

test('get (set(set s v1) v2) === v2', () => {
  expect(view(lensProp('a'),
    set(
      lensProp('a'), 11, set(
        lensProp('a'), 10, testObj
      )
    ))).toEqual(11)
})
```

</details>

### map

```typescript
map<T, U>(fn: MapFunctionObject<T, U>, list: Dictionary<T>): Dictionary<U>
```

It returns the result of looping through `list` with `fn`.

It works with both array and object.

```javascript
const fn = (x, i) => (x * 2) + i
const fnWhenObject = (val, prop)=>{
  return `${prop}-${val}`
}

const list = [1, 2]
const obj = {a: 1, b: 2}

const result = [ 
  R.map(fn, list),
  R.map(fnWhenObject, obj)
]
// => [ [2, 5], {a: 'a-1', b: 'b-2'}]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20fn%20%3D%20(x%2C%20i)%20%3D%3E%20(x%20*%202)%20%2B%20i%0Aconst%20fnWhenObject%20%3D%20(val%2C%20prop)%3D%3E%7B%0A%20%20return%20%60%24%7Bprop%7D-%24%7Bval%7D%60%0A%7D%0A%0Aconst%20list%20%3D%20%5B1%2C%202%5D%0Aconst%20obj%20%3D%20%7Ba%3A%201%2C%20b%3A%202%7D%0A%0Aconst%20result%20%3D%20%5B%20%0A%20%20R.map(fn%2C%20list)%2C%0A%20%20R.map(fnWhenObject%2C%20obj)%0A%5D%0A%2F%2F%20%3D%3E%20%5B%20%5B2%2C%205%5D%2C%20%7Ba%3A%20'a-1'%2C%20b%3A%20'b-2'%7D%5D">Try the above <strong>R.map</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
map<T, U>(fn: MapFunctionObject<T, U>, list: Dictionary<T>): Dictionary<U>;
map<T, U>(fn: MapFunctionArray<T, U>, list: T[]): U[];
map<T, U>(fn: MapFunctionArray<T, U>): (list: T[]) => U[];
map<T, U, S>(fn: MapFunctionObject<T, U>): (list: Dictionary<T>) => Dictionary<U>;
map<T>(fn: MapFunctionArray<T, T>): (list: T[]) => T[];
map<T>(fn: MapFunctionArray<T, T>, list: ReadonlyArray<T>): T[];
```

</details>

<details>

<summary><strong>R.map</strong> source</summary>

```javascript
import { _isArray } from './_internals/_isArray'
import { _keys } from './_internals/_keys'

export function map(fn, list){
  if (arguments.length === 1) return _list => map(fn, _list)

  if (list === undefined){
    return []
  }

  if (_isArray(list)){
    let index = 0
    const len = list.length
    const willReturn = Array(len)

    while (index < len){
      willReturn[ index ] = fn(list[ index ], index, list)
      index++
    }

    return willReturn
  } else {
    let index = 0
    const keys = _keys(list)
    const len = keys.length
    const willReturn = {}

    while (index < len){
      const key = keys[ index ]
      willReturn[ key ] = fn(list[ key ], key, list)
      index++
    }

    return willReturn
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { map } from './map'

const double = x => x * 2

const sampleObject = {
  a : 1,
  b : 2,
  c : 3,
  d : 4,
}

test('with array', () => {
  expect(map(double, [ 1, 2, 3 ])).toEqual([ 2, 4, 6 ])
})

test('pass index as second argument', () => {
  map((x, i) => {
    expect(i).toBeNumber()
  },
  [ 10, 20, 30 ])
})

test('with object', () => {
  const obj = {
    a : 1,
    b : 2,
  }

  expect(map(double, obj)).toEqual({
    a : 2,
    b : 4,
  })
})

test('pass input object as third argument', () => {
  const obj = {
    a : 1,
    b : 2,
  }
  const iterator = (
    val, prop, inputObject
  ) => {
    expect(inputObject).toEqual(obj)

    return val * 2
  }

  expect(map(iterator, obj)).toEqual({
    a : 2,
    b : 4,
  })
})

test('with object passes property as second argument', () => {
  map((_, prop) => {
    expect(typeof prop).toEqual('string')
  })(sampleObject)
})

/**
 * https://github.com/selfrefactor/rambda/issues/77
 */
test('when undefined instead of array', () => {
  expect(map(double, undefined)).toEqual([])
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {map} from 'rambda'

describe('map with arrays', () => {
  it('only one type', () => {
    const x = map<number>(
      (a, b) => {
        a // $ExpectType number
        b // $ExpectType number
        return a + 2
      },
      [1, 2, 3]
    )
    x // $ExpectType number[]
  })
  it('only one type + curry', () => {
    const x = map<number>((a, b) => {
      a // $ExpectType number
      b // $ExpectType number
      return a + 2
    })([1, 2, 3])
    x // $ExpectType number[]
  })
  it('2 types', () => {
    const x = map<number, string>(
      (a, b) => {
        a // $ExpectType number
        b // $ExpectType number
        return `${a}`
      },
      [1, 2, 3]
    )
    x // $ExpectType string[]
  })
  it('2 types + curry', () => {
    const x = map<number, string>((a, b) => {
      a // $ExpectType number
      b // $ExpectType number
      return `${a}`
    })([1, 2, 3])
    x // $ExpectType string[]
  })
})

describe('map with objects', () => {
  it('curry', () => {
    // It requires dummy third typing argument
    // in order to distinguish compared to curry typings for arrays
    // ============================================
    const x = map<number, string, any>((a, b, c) => {
      a // $ExpectType number
      b // $ExpectType string
      c // $ExpectType Dictionary<number>
      return `${a}`
    })({a: 1, b: 2})
    x // $ExpectType Dictionary<string>
  })
  it('1', () => {
    const x = map<number, string>(
      (a, b, c) => {
        a // $ExpectType number
        b // $ExpectType string
        c // $ExpectType Dictionary<number>
        return `${a}`
      },
      {a: 1, b: 2}
    )
    x // $ExpectType Dictionary<string>
  })
  it('2', () => {
    const x = map<number, string>(
      (a, b) => {
        a // $ExpectType number
        b // $ExpectType string
        return `${a}`
      },
      {a: 1, b: 2}
    )
    x // $ExpectType Dictionary<string>
  })
  it('3', () => {
    const x = map<number, string>(
      a => {
        a // $ExpectType number
        return `${a}`
      },
      {a: 1, b: 2}
    )
    x // $ExpectType Dictionary<string>
  })
})
```

</details>

### mapAsync

```typescript
mapAsync<T>(fn: AsyncWithMap<any>, list: any[]): Promise<T[]>
```

Sequential asynchronous mapping with `fn` over members of `list`.

```javascript
async function fn(x){
  await R.delay(1000)

  return x+1
}

const result = R.mapAsync(fn, [1, 2, 3])
// `result` resolves after 3 seconds to `[2, 3, 4]`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?async%20function%20fn(x)%7B%0A%20%20await%20R.delay(1000)%0A%0A%20%20return%20x%2B1%0A%7D%0A%0Aconst%20result%20%3D%20R.mapAsync(fn%2C%20%5B1%2C%202%2C%203%5D)%0A%2F%2F%20%60result%60%20resolves%20after%203%20seconds%20to%20%60%5B2%2C%203%2C%204%5D%60">Try the above <strong>R.mapAsync</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
mapAsync<T>(fn: AsyncWithMap<any>, list: any[]): Promise<T[]>;
mapAsync<T>(fn: AsyncWithProp<any>, obj: object): Promise<T[]>;
mapAsync<T>(fn: AsyncWithMap<any>): (list: any[]) => Promise<T[]>;
mapAsync<T>(fn: AsyncWithProp<any>): (obj: object) => Promise<T[]>;
```

</details>

<details>

<summary><strong>R.mapAsync</strong> source</summary>

```javascript
import { _isArray } from './_internals/_isArray'

async function mapAsyncFn(fn, arr){
  if (_isArray(arr)){
    const willReturn = []
    let i = 0
    for (const a of arr){
      willReturn.push(await fn(a, i++))
    }

    return willReturn
  }

  const willReturn = {}
  for (const prop in arr){
    willReturn[ prop ] = await fn(arr[ prop ], prop)
  }

  return willReturn
}

export function mapAsync(fn, arr){
  if (arguments.length === 1){
    return async holder => mapAsyncFn(fn, holder)
  }

  return new Promise((resolve, reject) => {
    mapAsyncFn(fn, arr).then(resolve)
      .catch(reject)
  })
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { composeAsync } from './composeAsync'
import { map } from './map'
import { mapAsync } from './mapAsync'

const delay = a =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(a + 20)
    }, 100)
  })

const tap = a =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(a)
    }, 100)
  })

const rejectDelay = a =>
  new Promise((_, reject) => {
    setTimeout(() => {
      reject(a + 20)
    }, 100)
  })

test('', async () => {
  const result = await mapAsync(delay, [ 1, 2, 3 ])
  expect(result).toEqual([ 21, 22, 23 ])
})

test('with object', async () => {
  const result = await mapAsync(delay, {
    a : 1,
    b : 2,
    c : 3,
  })
  expect(result).toEqual({
    a : 21,
    b : 22,
    c : 23,
  })
})

test('with array', async () => {
  await mapAsync((x, i) => {
    expect(x % 10).toBe(0)
    expect(typeof i).toBe('number')
  },
  [ 10, 20, 30 ])
})

test('composeAsync', async () => {
  const result = await composeAsync(
    mapAsync(delay),
    mapAsync(async a => delay(a)),
    map(a => a * 10)
  )(await tap([ 1, 2, 3 ]))
  expect(result).toEqual([ 50, 60, 70 ])
})

test('error', async () => {
  try {
    await mapAsync(rejectDelay)([ 1, 2, 3 ])
  } catch (err){
    expect(err).toBe(21)
  }
})
```

</details>

### mapAsyncLimit

```typescript
mapAsyncLimit<T, U>(fn: (x: T) => Promise<U>, limit: number, list: T[]): Promise<U[]>
```

It is similar to `R.mapFastAsync` in that it uses `Promise.all` but not over the whole list, rather than with only slice from `list` with length `limit`.

<details>

<summary>All Typescript definitions</summary>

```typescript
mapAsyncLimit<T, U>(fn: (x: T) => Promise<U>, limit: number, list: T[]): Promise<U[]>;
mapAsyncLimit<T, U>(fn: (x: T) => Promise<U>, limit: number): (list: T[]) => Promise<U[]>;
```

</details>

<details>

<summary><strong>R.mapAsyncLimit</strong> source</summary>

```javascript
import { mapFastAsync, mapFastAsyncFn } from './mapFastAsync'
import { splitEvery } from './splitEvery'

export async function mapAsyncLimit(
  iterable, limit, list
){
  if (arguments.length === 2){
    return _list => mapAsyncLimit(
      iterable, limit, _list
    )
  }
  if (list.length < limit) return mapFastAsync(iterable, list)

  const slices = splitEvery(limit, list)

  let toReturn = []
  for (const slice of slices){
    const iterableResult = await mapFastAsyncFn(iterable, slice)
    toReturn = [ ...toReturn, ...iterableResult ]
  }

  return toReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import isCI from 'is-ci'

import { delay } from './delay'
import { mapAsync } from './mapAsync'
import { mapAsyncLimit } from './mapAsyncLimit'
import { toDecimal } from './toDecimal'

jest.setTimeout(30000)

test('happy', async () => {
  const limit = 3
  const startTime = new Date().getTime()
  const list = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
  const iterable = async x => {
    await delay(500)

    return x + 1
  }
  const result = await mapAsyncLimit(
    iterable, limit, list
  )
  const endTime = new Date().getTime()
  const diffTime = endTime - startTime

  const startTime2 = new Date().getTime()
  await mapAsync(iterable, list)
  const endTime2 = new Date().getTime()
  const diffTime2 = endTime2 - startTime2

  const methodScale = toDecimal((diffTime2 - diffTime) / 1000, 0)
  expect(result).toEqual([ 2, 3, 4, 5, 6, 7, 8, 9, 10 ])
  if (!isCI) expect(methodScale).toBe(limit)
})
```

</details>

### mapFastAsync

```typescript
mapFastAsync<T>(fn: AsyncWithMap<any>, list: any[]): Promise<T[]>
```

Parrallel asynchronous mapping with `fn` over members of `list`.

```javascript
async function fn(x){
  await R.delay(1000)

  return x+1
}

const result = R.mapFastAsync(fn, [1, 2, 3])
// `result` resolves after 1 second to `[2, 3, 4]`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?async%20function%20fn(x)%7B%0A%20%20await%20R.delay(1000)%0A%0A%20%20return%20x%2B1%0A%7D%0A%0Aconst%20result%20%3D%20R.mapFastAsync(fn%2C%20%5B1%2C%202%2C%203%5D)%0A%2F%2F%20%60result%60%20resolves%20after%201%20second%20to%20%60%5B2%2C%203%2C%204%5D%60">Try the above <strong>R.mapFastAsync</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
mapFastAsync<T>(fn: AsyncWithMap<any>, list: any[]): Promise<T[]>;
mapFastAsync<T>(fn: AsyncWithProp<any>, obj: object): Promise<T[]>;
mapFastAsync<T>(fn: AsyncWithMap<any>): (list: any[]) => Promise<T[]>;
mapFastAsync<T>(fn: AsyncWithProp<any>): (obj: object) => Promise<T[]>;
```

</details>

<details>

<summary><strong>R.mapFastAsync</strong> source</summary>

```javascript
export async function mapFastAsyncFn(fn, arr){
  const promised = arr.map((a, i) => fn(a, i))

  return Promise.all(promised)
}

export function mapFastAsync(fn, arr){
  if (arguments.length === 1){
    return async holder => mapFastAsyncFn(fn, holder)
  }

  return new Promise((resolve, reject) => {
    mapFastAsyncFn(fn, arr).then(resolve)
      .catch(reject)
  })
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { composeAsync } from './composeAsync'
import { map } from './map'
import { mapFastAsync } from './mapFastAsync'

const delay = a =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(a + 20)
    }, 100)
  })

const tap = a =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(a)
    }, 100)
  })

const rejectDelay = a =>
  new Promise((_, reject) => {
    setTimeout(() => {
      reject(a + 20)
    }, 100)
  })

test('happy path', async () => {
  const result = await mapFastAsync(delay, [ 1, 2, 3 ])
  expect(result).toEqual([ 21, 22, 23 ])
})

test('composeAsync', async () => {
  const result = await composeAsync(
    mapFastAsync(async a => delay(a)),
    mapFastAsync(delay),
    map(a => a * 10)
  )(await tap([ 1, 2, 3 ]))
  expect(result).toEqual([ 50, 60, 70 ])
})

test('error', async () => {
  try {
    const result = await mapFastAsync(rejectDelay)([ 1, 2, 3 ])
  } catch (err){
    expect(err).toBe(21)
  }
})

test('with array', async () => {
  await mapFastAsync((x, i) => {
    expect(x % 10).toBe(0)
    expect(typeof i).toBe('number')
  },
  [ 10, 20, 30 ])
})
```

</details>

### mapToObject

```typescript
mapToObject<T, U>(fn: (input: T) => object, list: T[]): U
```

This method allows to generate an object from a list using input function `fn`.

This function must return an object for every member of `list` input. All of the returns will be merged in the final result.

```javascript
const list = [1, 2, 3]
const fn = x => x%2 ? {[x]: x+1}: {[x]: x+10}

const result = mapToObject(fn, list)
const expected = { '1': 2, '2': 12, '3': 4 }
// => `result` is equal to `expected`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B1%2C%202%2C%203%5D%0Aconst%20fn%20%3D%20x%20%3D%3E%20x%252%20%3F%20%7B%5Bx%5D%3A%20x%2B1%7D%3A%20%7B%5Bx%5D%3A%20x%2B10%7D%0A%0Aconst%20result%20%3D%20mapToObject(fn%2C%20list)%0Aconst%20expected%20%3D%20%7B%20'1'%3A%202%2C%20'2'%3A%2012%2C%20'3'%3A%204%20%7D%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%60expected%60">Try the above <strong>R.mapToObject</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
mapToObject<T, U>(fn: (input: T) => object, list: T[]): U;
mapToObject<T, U>(fn: (input: T) => object): (list: T[]) => U;
```

</details>

<details>

<summary><strong>R.mapToObject</strong> source</summary>

```javascript
import { map } from './map'
import { mergeAll } from './mergeAll'
import { ok } from './ok'
import { type } from './type'

export function mapToObject(fn, list){
  if (arguments.length === 1){
    return listHolder => mapToObject(fn, listHolder)
  }
  ok(type(fn), type(list))('Function', 'Array')

  return mergeAll(map(fn, list))
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { mapToObject } from './mapToObject'
import { result } from 'lodash'

test('simple', ()=> {
  const list = [1, 2, 3]
  const fn = x => x%2 ? {[x]: x+1}: {[x]: x+10}
  const result = mapToObject(fn, list)
  const expected = { '1': 2, '2': 12, '3': 4 }

  expect(result).toEqual(expected)
})

test('happy', () => {
  const list = 'auto?bar=false?foo?baz=1.5?s=more?k=2'.split('?')
  const fn = x => {
    const [ key, value ] = x.split('=')
    if (value === undefined || value === 'true'){
      return { [ key ] : true }
    }
    if (value === 'false'){
      return { [ key ] : false }
    }

    if (Number.isNaN(Number(value))){
      return { [ key ] : value }
    }

    return { [ key ] : Number(value) }
  }

  const expectedResult = {
    auto : true,
    foo  : true,
    bar  : false,
    baz  : 1.5,
    s    : 'more',
    k    : 2,
  }
  const result = mapToObject(fn, list)
  const resultx = mapToObject(fn)(list)

  expect(result).toEqual(expectedResult)
  expect(resultx).toEqual(expectedResult)
})

test('bad path', () => {
  expect(() => mapToObject(1, null)).toThrow()
})
```

</details>

### match

```typescript
match(regExpression: RegExp, str: string): any[]
```

Curried version of `String.prototype.match` which returns empty array, when there is no match.

```javascript
const result = [
  R.match('a', 'foo'),
  R.match(/([a-z]a)/g, 'bananas')
]
// => [[], ['ba', 'na', 'na']]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.match('a'%2C%20'foo')%2C%0A%20%20R.match(%2F(%5Ba-z%5Da)%2Fg%2C%20'bananas')%0A%5D%0A%2F%2F%20%3D%3E%20%5B%5B%5D%2C%20%5B'ba'%2C%20'na'%2C%20'na'%5D%5D">Try the above <strong>R.match</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
match(regExpression: RegExp, str: string): any[];
match(regExpression: RegExp): (str: string) => any[];
```

</details>

<details>

<summary><strong>R.match</strong> source</summary>

```javascript
export function match(pattern, input){
  if (arguments.length === 1) return _input => match(pattern, _input)

  const willReturn = input.match(pattern)

  return willReturn === null ? [] : willReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { equals } from './equals'
import { match } from './match'

test('happy', () => {
  expect(match(/a./g)('foo bar baz')).toEqual([ 'ar', 'az' ])
})

test('fallback', () => {
  expect(match(/a./g)('foo')).toEqual([])
})

test('with string', () => {
  expect(match('a', 'foo')).toEqual([])
  expect(equals(match('o', 'foo'), [ 'o' ])).toBeTrue()
})

test('throwing', () => {
  expect(() => {
    match(/a./g, null)
  }).toThrowWithMessage(TypeError, 'Cannot read property \'match\' of null')
})
```

</details>

### mathMod

```typescript
mathMod(x: number, y: number): number
```

`R.mathMod` behaves like the modulo operator should mathematically, unlike the % operator (and by extension, `R.modulo`). So while `-17 % 5` is `-2`, `mathMod(-17, 5)` is `3`.

```javascript
const result = [
  R.mathMod(-17, 5),
  R.mathMod(17, 5),
  R.mathMod(17, -5),  
  R.mathMod(17, 0)   
]
// => [3, 2, NaN, NaN]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.mathMod(-17%2C%205)%2C%0A%20%20R.mathMod(17%2C%205)%2C%0A%20%20R.mathMod(17%2C%20-5)%2C%20%20%0A%20%20R.mathMod(17%2C%200)%20%20%20%0A%5D%0A%2F%2F%20%3D%3E%20%5B3%2C%202%2C%20NaN%2C%20NaN%5D">Try the above <strong>R.mathMod</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
mathMod(x: number, y: number): number;
mathMod(x: number): (y: number) => number;
```

</details>

<details>

<summary><strong>R.mathMod</strong> source</summary>

```javascript
import _isInteger from './_internals/_isInteger'

export function mathMod(x, y){
  if (arguments.length === 1) return _y => mathMod(x, _y)
  if (!_isInteger(x) || !_isInteger(y) || y < 1) return NaN

  return (x % y + y) % y
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { mathMod } from './mathMod'

test('happy', () => {
  expect(mathMod(-17)(5)).toEqual(3)
  expect(mathMod(17, 5)).toEqual(2)
  expect(mathMod(17, -5)).toBeNaN()
  expect(mathMod(17, 0)).toBeNaN()
  expect(mathMod('17', 5)).toBeNaN()
  expect(mathMod({}, 2)).toBeNaN()
  expect(mathMod([], 2)).toBeNaN()
  expect(mathMod(Symbol(), 2)).toBeNaN()
})
```

</details>

### max

```typescript
max<T extends Ord>(x: T, y: T): T
```

It returns the greater value between `x` and `y`.

```javascript
const result = [
  R.max(5, 7),  
  R.max('bar', 'foo'),  
]
// => [7, 'foo']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.max(5%2C%207)%2C%20%20%0A%20%20R.max('bar'%2C%20'foo')%2C%20%20%0A%5D%0A%2F%2F%20%3D%3E%20%5B7%2C%20'foo'%5D">Try the above <strong>R.max</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
max<T extends Ord>(x: T, y: T): T;
max<T extends Ord>(x: T): (y: T) => T;
```

</details>

<details>

<summary><strong>R.max</strong> source</summary>

```javascript
export function max(x, y){
  if (arguments.length === 1) return _y => max(x, _y)

  return y > x ? y : x
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { max } from './max'

test('with number', () => {
  expect(max(2, 1)).toBe(2)
})

test('with string', () => {
  expect(max('foo')('bar')).toBe('foo')
  expect(max('bar')('baz')).toBe('baz')
})
```

</details>

### maxBy

```typescript
maxBy<T>(compareFn: (input: T) => Ord, x: T, y: T): T
```

It returns the greater value between `x` and `y` according to `compareFn` function.

```javascript
const compareFn = Math.abs

R.maxBy(compareFn, 5, -7) // => -7
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20const%20compareFn%20%3D%20Math.abs%0A%0AR.maxBy(compareFn%2C%205%2C%20-7)%20%2F%2F%20%3D%3E%20-7">Try the above <strong>R.maxBy</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
maxBy<T>(compareFn: (input: T) => Ord, x: T, y: T): T;
maxBy<T>(compareFn: (input: T) => Ord, x: T): (y: T) => T;
maxBy<T>(compareFn: (input: T) => Ord): FunctionToolbelt.Curry<(x: T, y: T) => T>;
```

</details>

<details>

<summary><strong>R.maxBy</strong> source</summary>

```javascript
import { curry } from './curry'

export function maxByFn(
  compareFn, x, y
){
  return compareFn(y) > compareFn(x) ? y : x
}

export const maxBy = curry(maxByFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { maxBy } from './maxBy'

test('happy', () => {
  expect(maxBy(
    Math.abs, -5, 2
  )).toEqual(-5)
})

test('curried', () => {
  expect(maxBy(Math.abs)(2, -5)).toEqual(-5)
  expect(maxBy(Math.abs)(2)(-5)).toEqual(-5)
})
```

</details>

### maybe

```typescript
maybe<T>(ifRule: any, whenIf: any, whenElse: any): T
```

It acts as ternary operator and it is helpful when we have nested ternaries. 

All of the inputs can be either direct values or anonymous functions. This is helpful if we don't want to evaluate certain paths as we can wrap this logic in a function.

```javascript
const x = 4
const y = 8

const ifRule = x > 2
const elseRule = y > 10 ? 3 : 7
const whenElse = () => JSON.parse('{a:')

const result = R.maybe(
  ifRule,
  elseRule,
  whenElse,
)
// `result` is `7`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20x%20%3D%204%0Aconst%20y%20%3D%208%0A%0Aconst%20ifRule%20%3D%20x%20%3E%202%0Aconst%20elseRule%20%3D%20y%20%3E%2010%20%3F%203%20%3A%207%0Aconst%20whenElse%20%3D%20()%20%3D%3E%20JSON.parse('%7Ba%3A')%0A%0Aconst%20result%20%3D%20R.maybe(%0A%20%20ifRule%2C%0A%20%20elseRule%2C%0A%20%20whenElse%2C%0A)%0A%2F%2F%20%60result%60%20is%20%607%60">Try the above <strong>R.maybe</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
maybe<T>(ifRule: any, whenIf: any, whenElse: any): T;
```

</details>

<details>

<summary><strong>R.maybe</strong> source</summary>

```javascript
import { type } from './type'

export function maybe(
  ifRule, whenIfRaw, whenElseRaw
){
  const whenIf =
    ifRule && type(whenIfRaw) === 'Function' ? whenIfRaw() : whenIfRaw

  const whenElse =
    !ifRule && type(whenElseRaw) === 'Function' ? whenElseRaw() : whenElseRaw

  return ifRule ? whenIf : whenElse
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { maybe } from './maybe'

const whenIf = 7
const whenElse = 9

test('prevent type error', () => {
  const x = 5
  const y = null
  const ifRule = x > 3

  const result = maybe(
    ifRule, whenIf, () => y.a === 'foo'
  )
  const expectedResult = 7

  expect(result).toEqual(expectedResult)
})

test('function as whenElse', () => {
  const x = 2
  const y = { a : 1 }
  const ifRule = x > 3

  const result = maybe(
    ifRule, whenIf, () => y.a === 'foo'
  )
  const expectedResult = false

  expect(result).toEqual(expectedResult)
})

test('when if', () => {
  const x = 5
  const ifRule = x > 3

  const result = maybe(
    ifRule, whenIf, whenElse
  )
  const expectedResult = 7

  expect(result).toEqual(expectedResult)
})

test('when else', () => {
  const x = 1
  const ifRule = x > 3

  const result = maybe(
    ifRule, whenIf, whenElse
  )
  const expectedResult = 9

  expect(result).toEqual(expectedResult)
})
```

</details>

### mean

```typescript
mean(list: ReadonlyArray<number>): number
```

It returns the mean value of `list` input.

```javascript
R.mean([ 2, 7 ])
// => 4.5
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.mean(%5B%202%2C%207%20%5D)%0A%2F%2F%20%3D%3E%204.5">Try the above <strong>R.mean</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
mean(list: ReadonlyArray<number>): number;
```

</details>

<details>

<summary><strong>R.mean</strong> source</summary>

```javascript
import { sum } from './sum'

export function mean(list){
  return sum(list) / list.length
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { mean } from './mean'

test('happy', () => {
  expect(mean([ 2, 7 ])).toBe(4.5)
})

test('with NaN', () => {
  expect(mean([])).toBeNaN()
})
```

</details>

### median

```typescript
median(list: ReadonlyArray<number>): number
```

It returns the median value of `list` input.

```javascript
R.median([ 7, 2, 10, 9 ]) // => 8
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.median(%5B%207%2C%202%2C%2010%2C%209%20%5D)%20%2F%2F%20%3D%3E%208">Try the above <strong>R.median</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
median(list: ReadonlyArray<number>): number;
```

</details>

<details>

<summary><strong>R.median</strong> source</summary>

```javascript
import { mean } from './mean'

export function median(list){
  const len = list.length
  if (len === 0) return NaN
  const width = 2 - len % 2
  const idx = (len - width) / 2

  return mean(Array.prototype.slice
    .call(list, 0)
    .sort((a, b) => {
      if (a === b) return 0

      return a < b ? -1 : 1
    })
    .slice(idx, idx + width))
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { identical } from './identical'
import { median } from './median'

test('median', () => {
  expect(median([ 2 ])).toEqual(2)
  expect(median([ 7, 2, 10, 9 ])).toEqual(8)
  expect(identical(NaN, median([]))).toBeTrue()
})
```

</details>

### memoize

```typescript
memoize<T>(fn: Func<any> | Async<any>): T
```

When `fn` is called for a second time with the same input, then the cache result is returned instead of calling again `fn`.

```javascript
let result = 0
const fn = (a,b) =>{
  result++

  return a + b
}
const memoized = R.memoize(fn)
memoized(1, 2)
memoized(1, 2)

// => `result` is equal to `1`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20let%20result%20%3D%200%0Aconst%20fn%20%3D%20(a%2Cb)%20%3D%3E%7B%0A%20%20result%2B%2B%0A%0A%20%20return%20a%20%2B%20b%0A%7D%0Aconst%20memoized%20%3D%20R.memoize(fn)%0Amemoized(1%2C%202)%0Amemoized(1%2C%202)%0A%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%601%60">Try the above <strong>R.memoize</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
memoize<T>(fn: Func<any> | Async<any>): T;
```

</details>

<details>

<summary><strong>R.memoize</strong> source</summary>

```javascript
import { compose } from './compose'
import { map } from './map'
import { replace } from './replace'
import { sort } from './sort'
import { take } from './take'
import { type } from './type'

const cache = {}

const normalizeObject = obj => {
  const sortFn = (a, b) => a > b ? 1 : -1
  const willReturn = {}
  compose(map(prop => willReturn[ prop ] = obj[ prop ]),
    sort(sortFn))(Object.keys(obj))

  return willReturn
}

const stringify = a => {
  if (type(a) === 'String'){
    return a
  } else if ([ 'Function', 'Async' ].includes(type(a))){
    const compacted = replace(
      /\s{1,}/g, ' ', a.toString()
    )

    return replace(
      /\s/g, '_', take(15, compacted)
    )
  } else if (type(a) === 'Object'){
    return JSON.stringify(normalizeObject(a))
  }

  return JSON.stringify(a)
}

const generateProp = (fn, ...inputArguments) => {
  let propString = ''
  inputArguments.forEach(inputArgument => {
    propString += `${ stringify(inputArgument) }_`
  })

  return `${ propString }${ stringify(fn) }`
}
// with weakmaps
export function memoize(fn, ...inputArguments){
  if (arguments.length === 1){
    return (...inputArgumentsHolder) => memoize(fn, ...inputArgumentsHolder)
  }

  const prop = generateProp(fn, ...inputArguments)
  if (prop in cache) return cache[ prop ]

  if (type(fn) === 'Async'){
    return new Promise(resolve => {
      fn(...inputArguments).then(result => {
        cache[ prop ] = result
        resolve(result)
      })
    })
  }

  const result = fn(...inputArguments)
  cache[ prop ] = result

  return result
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { memoize } from './memoize'

test('memoize function without input arguments', () => {
  const fn = () => 4
  const memoized = memoize(fn)
  expect(typeof memoized()).toBe('function')
})

test('happy', () => {
  let counter = 0

  const fn = ({ a, b, c }) => {
    counter++

    return a + b - c
  }
  const memoized = memoize(fn)
  expect(memoized({
    a : 1,
    c : 3,
    b : 2,
  })).toBe(0)
  expect(counter).toBe(1)
  expect(memoized({
    c : 3,
    a : 1,
    b : 2,
  })).toBe(0)
  expect(counter).toBe(1)
})

test('normal function', () => {
  let counter = 0
  const fn = (a, b) => {
    counter++

    return a + b
  }
  const memoized = memoize(fn)
  expect(memoized(1, 2)).toBe(3)
  expect(memoized(1, 2)).toBe(3)
  expect(memoized(1, 2)).toBe(3)
  expect(counter).toBe(1)
  expect(memoized(2, 2)).toBe(4)
  expect(counter).toBe(2)
  expect(memoized(1, 2)).toBe(3)
  expect(counter).toBe(2)
})

test('async function', async () => {
  let counter = 0
  const delay = ms =>
    new Promise(resolve => {
      setTimeout(resolve, ms)
    })
  const fn = async (ms, a, b) => {
    await delay(ms)
    counter++

    return a + b
  }

  const memoized = memoize(fn)
  expect(await memoized(
    100, 1, 2
  )).toBe(3)
  expect(await memoized(
    100, 1, 2
  )).toBe(3)
  expect(await memoized(
    100, 1, 2
  )).toBe(3)
  expect(counter).toBe(1)
  expect(await memoized(
    100, 2, 2
  )).toBe(4)
  expect(counter).toBe(2)
  expect(await memoized(
    100, 1, 2
  )).toBe(3)
  expect(counter).toBe(2)
})

test('string as argument', () => {
  let count = 0
  const foo = 'foo'
  const tester = memoize(n => {
    count++

    return `${ n }bar`
  })
  tester(foo)
  tester(foo)
  tester(foo)

  expect(tester(foo)).toEqual('foobar')

  expect(count).toEqual(1)

  tester('baz')

  expect(tester('baz')).toEqual('bazbar')

  expect(count).toEqual(2)
})
```

</details>

### merge

```typescript
merge<O1 extends object, O2 extends object>(target: O1, newProps: O2): Merge<O2, O1, 'flat'>
```

It creates a copy of `target` object with overidden `newProps` properties.

```javascript
const target = { 'foo': 0, 'bar': 1 }
const newProps = { 'foo': 7 }

const result = R.merge(target, newProps)
// => { 'foo': 7, 'bar': 1 }
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20target%20%3D%20%7B%20'foo'%3A%200%2C%20'bar'%3A%201%20%7D%0Aconst%20newProps%20%3D%20%7B%20'foo'%3A%207%20%7D%0A%0Aconst%20result%20%3D%20R.merge(target%2C%20newProps)%0A%2F%2F%20%3D%3E%20%7B%20'foo'%3A%207%2C%20'bar'%3A%201%20%7D">Try the above <strong>R.merge</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
merge<O1 extends object, O2 extends object>(target: O1, newProps: O2): Merge<O2, O1, 'flat'>;
merge<O1 extends object>(target: O1): <O2 extends object>(newProps: O2) => Merge<O2, O1, 'flat'>;
```

</details>

<details>

<summary><strong>R.merge</strong> source</summary>

```javascript
export function merge(target, newProps){
  if (arguments.length === 1) return _newProps => merge(target, _newProps)

  return Object.assign(
    {}, target || {}, newProps || {}
  )
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { merge } from './merge'

const sample = {
  foo : 'bar',
  bar : 'bar',
}

test('merge', () => {
  expect(merge(sample)({ bar : 'baz' })).toEqual({
    foo : 'bar',
    bar : 'baz',
  })
})

/**
 * https://github.com/selfrefactor/rambda/issues/77
 */
test('when undefined or null instead of object', () => {
  expect(merge(null, undefined)).toEqual({})
  expect(merge(sample, null)).toEqual(sample)
  expect(merge(sample, undefined)).toEqual(sample)
  expect(merge(undefined, sample)).toEqual(sample)
})
```

</details>

### mergeAll

```typescript
mergeAll(list: object[]): object
```

It merges all objects of `list` array sequentially and returns the result.

```javascript
const list = [
  {a: 1},
  {b: 2},
  {c: 3}
]
const result = R.mergeAll(list)
const expected = {
  a: 1,
  b: 2,
  c: 3
}
// => `result` is equal to `expected`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%0A%20%20%7Ba%3A%201%7D%2C%0A%20%20%7Bb%3A%202%7D%2C%0A%20%20%7Bc%3A%203%7D%0A%5D%0Aconst%20result%20%3D%20R.mergeAll(list)%0Aconst%20expected%20%3D%20%7B%0A%20%20a%3A%201%2C%0A%20%20b%3A%202%2C%0A%20%20c%3A%203%0A%7D%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%60expected%60">Try the above <strong>R.mergeAll</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
mergeAll(list: object[]): object;
```

</details>

<details>

<summary><strong>R.mergeAll</strong> source</summary>

```javascript
import { map } from './map'
import { merge } from './merge'

export function mergeAll(arr){
  let willReturn = {}
  map(val => {
    willReturn = merge(willReturn, val)
  }, arr)

  return willReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { mergeAll } from './mergeAll'

test('case 1', () => {
  const arr = [ { a : 1 }, { b : 2 }, { c : 3 } ]
  const expectedResult = {
    a : 1,
    b : 2,
    c : 3,
  }
  expect(mergeAll(arr)).toEqual(expectedResult)
})

test('case 2', () => {
  expect(mergeAll([ { foo : 1 }, { bar : 2 }, { baz : 3 } ])).toEqual({
    foo : 1,
    bar : 2,
    baz : 3,
  })
})
```

</details>

### mergeDeepRight

```typescript
mergeDeepRight<O1 extends object, O2 extends object>(x: O1, y: O2): Merge<O2, O1, 'deep'>
```

Creates a new object with the own properties of the first object merged with the own properties of the second object. If a key exists in both objects:

  - and both values are objects, the two values will be recursively merged
  - otherwise the value from the second object will be used.

<details>

<summary>All Typescript definitions</summary>

```typescript
mergeDeepRight<O1 extends object, O2 extends object>(x: O1, y: O2): Merge<O2, O1, 'deep'>;
mergeDeepRight<O1 extends object>(x: O1): <O2 extends object>(y: O2) => Merge<O2, O1, 'deep'>;
```

</details>

<details>

<summary><strong>R.mergeDeepRight</strong> source</summary>

```javascript
import { type } from './type'

export function mergeDeepRight(target, source){
  if (arguments.length === 1){
    return sourceHolder => mergeDeepRight(target, sourceHolder)
  }

  const willReturn = JSON.parse(JSON.stringify(target))

  Object.keys(source).forEach(key => {
    if (type(source[ key ]) === 'Object'){
      if (type(target[ key ]) === 'Object'){
        willReturn[ key ] = mergeDeepRight(target[ key ], source[ key ])
      } else {
        willReturn[ key ] = source[ key ]
      }
    } else {
      willReturn[ key ] = source[ key ]
    }
  })

  return willReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
// import { mergeDeepRight } from 'ramda'
import { mergeDeepRight } from './mergeDeepRight'

const slave = {
  name    : 'evilMe',
  age     : 10,
  contact : {
    a     : 1,
    email : 'foo@example.com',
  },
}
const master = {
  age     : 40,
  contact : { email : 'baz@example.com' },
  songs   : { title : 'Remains the same' },
}

test('happy', () => {
  const result = mergeDeepRight(slave, master)
  const curryResult = mergeDeepRight(slave)(master)
  const expected = {
    age     : 40,
    name    : 'evilMe',
    contact : {
      a     : 1,
      email : 'baz@example.com',
    },
    songs : { title : 'Remains the same' },
  }

  expect(result).toEqual(expected)
  expect(curryResult).toEqual(expected)
})

test('ramda compatible test 1', () => {
  const a = {
    w : 1,
    x : 2,
    y : { z : 3 },
  }
  const b = {
    a : 4,
    b : 5,
    c : { d : 6 },
  }
  const result = mergeDeepRight(a, b)
  const expected = {
    w : 1,
    x : 2,
    y : { z : 3 },
    a : 4,
    b : 5,
    c : { d : 6 },
  }

  expect(result).toEqual(expected)
})

test('ramda compatible test 2', () => {
  const a = {
    a : {
      b : 1,
      c : 2,
    },
    y : 0,
  }
  const b = {
    a : {
      b : 3,
      d : 4,
    },
    z : 0,
  }
  const result = mergeDeepRight(a, b)
  const expected = {
    a : {
      b : 3,
      c : 2,
      d : 4,
    },
    y : 0,
    z : 0,
  }

  expect(result).toEqual(expected)
})

test('ramda compatible test 3', () => {
  const a = {
    w : 1,
    x : { y : 2 },
  }
  const result = mergeDeepRight(a, { x : { y : 3 } })
  const expected = {
    w : 1,
    x : { y : 3 },
  }
  expect(result).toEqual(expected)
})
```

</details>

### mergeRight

```typescript
mergeRight(x: object, y: object): object
```

Same as `R.merge`, but in opposite direction.

```javascript
const result = R.merge(
  {a:10},
  {a: 1, b: 2}
)
// => {a:10, b: 2}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.merge(%0A%20%20%7Ba%3A10%7D%2C%0A%20%20%7Ba%3A%201%2C%20b%3A%202%7D%0A)%0A%2F%2F%20%3D%3E%20%7Ba%3A10%2C%20b%3A%202%7D">Try the above <strong>R.mergeRight</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
mergeRight(x: object, y: object): object;
mergeRight(x: object): (y: object) => object;
```

</details>

<details>

<summary><strong>R.mergeRight</strong> source</summary>

```javascript
import { merge } from './merge'

export function mergeRight(x, y){
  return merge(y, x)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { mergeRight } from './mergeRight'

test('', () => {
  const x = { a : 10 }
  const y = {
    a : 0,
    b : 1,
    c : 2,
  }
  const result = mergeRight(x, y)
  expect(result).toEqual({
    a : 10,
    b : 1,
    c : 2,
  })
})
```

</details>

### min

```typescript
min<T extends Ord>(x: T, y: T): T
```

It returns the lesser value between `x` and `y`.

```javascript
const result = [
  R.min(5, 7),  
  R.min('bar', 'foo'),  
]
// => [5, 'bar']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.min(5%2C%207)%2C%20%20%0A%20%20R.min('bar'%2C%20'foo')%2C%20%20%0A%5D%0A%2F%2F%20%3D%3E%20%5B5%2C%20'bar'%5D">Try the above <strong>R.min</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
min<T extends Ord>(x: T, y: T): T;
min<T extends Ord>(x: T): (y: T) => T;
```

</details>

<details>

<summary><strong>R.min</strong> source</summary>

```javascript
export function min(x, y){
  if (arguments.length === 1) return _y => min(x, _y)

  return y < x ? y : x
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { min } from './min'

test('happy', () => {
  expect(min(2, 1)).toBe(1)
  expect(min(2)(1)).toBe(1)
})
```

</details>

### minBy

```typescript
minBy<T>(compareFn: (input: T) => Ord, x: T, y: T): T
```

It returns the lesser value between `x` and `y` according to `compareFn` function.

```javascript
const compareFn = Math.abs

R.minBy(compareFn, -5, 2) // => -5
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20const%20compareFn%20%3D%20Math.abs%0A%0AR.minBy(compareFn%2C%20-5%2C%202)%20%2F%2F%20%3D%3E%20-5">Try the above <strong>R.minBy</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
minBy<T>(compareFn: (input: T) => Ord, x: T, y: T): T;
minBy<T>(compareFn: (input: T) => Ord, x: T): (y: T) => T;
minBy<T>(compareFn: (input: T) => Ord): FunctionToolbelt.Curry<(x: T, y: T) => T>;
```

</details>

<details>

<summary><strong>R.minBy</strong> source</summary>

```javascript
import { curry } from './curry'

export function minByFn(
  compareFn, x, y
){
  return compareFn(y) < compareFn(x) ? y : x
}

export const minBy = curry(minByFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { minBy } from './minBy'

test('happy', () => {
  expect(minBy(
    Math.abs, -5, 2
  )).toEqual(2)
})

test('curried', () => {
  expect(minBy(Math.abs)(2, -5)).toEqual(2)
  expect(minBy(Math.abs)(2)(-5)).toEqual(2)
})
```

</details>

### modulo

```typescript
modulo(x: number, y: number): number
```

Curried version of `x%y`.

```javascript
R.modulo(17, 3) // => 2
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.modulo(17%2C%203)%20%2F%2F%20%3D%3E%202">Try the above <strong>R.modulo</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
modulo(x: number, y: number): number;
modulo(x: number): (y: number) => number;
```

</details>

<details>

<summary><strong>R.modulo</strong> source</summary>

```javascript
export function modulo(x, y){
  if (arguments.length === 1) return _y => modulo(x, _y)

  return x % y
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { modulo } from './modulo'

test('happy', () => {
  expect(modulo(17, 3)).toEqual(2)
  expect(modulo(15)(6)).toEqual(3)
})
```

</details>

### multiply

```typescript
multiply(x: number, y: number): number
```

Curried version of `x*y`.

```javascript
R.multiply(2, 4) // => 8
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.multiply(2%2C%204)%20%2F%2F%20%3D%3E%208">Try the above <strong>R.multiply</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
multiply(x: number, y: number): number;
multiply(x: number): (y: number) => number;
```

</details>

<details>

<summary><strong>R.multiply</strong> source</summary>

```javascript
export function multiply(x, y){
  if (arguments.length === 1) return _y => multiply(x, _y)

  return x * y
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { multiply } from './multiply'

test('happy', () => {
  expect(multiply(2, 4)).toEqual(8)
  expect(multiply(2)(4)).toEqual(8)
})
```

</details>

### negate

```typescript
negate(x: number): number
```

```javascript
R.negate(420)// => -420
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.negate(420)%2F%2F%20%3D%3E%20-420">Try the above <strong>R.negate</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
negate(x: number): number;
```

</details>

<details>

<summary><strong>R.negate</strong> source</summary>

```javascript
export function negate(x){
  return -x
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { negate } from './negate'

test('negate', () => {
  expect(negate(420)).toEqual(-420)
  expect(negate(-13)).toEqual(13)
})
```

</details>

### nextIndex

```typescript
nextIndex(index: number, list: any[]): number
```

It returns the next index of the list.

If we have reached the end of the list, then it will return `0`.

```javascript
const list = [1, 2, 3]

const result = [
  R.nextIndex(0, list),
  R.nextIndex(1, list),
  R.nextIndex(2, list),
  R.nextIndex(10, list)
]
// => [1, 2, 0, 0]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B1%2C%202%2C%203%5D%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.nextIndex(0%2C%20list)%2C%0A%20%20R.nextIndex(1%2C%20list)%2C%0A%20%20R.nextIndex(2%2C%20list)%2C%0A%20%20R.nextIndex(10%2C%20list)%0A%5D%0A%2F%2F%20%3D%3E%20%5B1%2C%202%2C%200%2C%200%5D">Try the above <strong>R.nextIndex</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
nextIndex(index: number, list: any[]): number;
```

</details>

<details>

<summary><strong>R.nextIndex</strong> source</summary>

```javascript
export function nextIndex(index, list){
  return index >= list.length - 1 ? 0 : index + 1
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { nextIndex } from './nextIndex'

const list = [ 1, 2, 3, 4 ]

test('happy path', () => {
  expect(nextIndex(2, list)).toEqual(3)
})

test('go back to the start', () => {
  expect(nextIndex(3, list)).toEqual(0)
})

test('current index is too big', () => {
  expect(nextIndex(32, list)).toEqual(0)
})

test('with number as second input', () => {
  expect(nextIndex(3, 5)).toEqual(4)
  expect(nextIndex(4, 5)).toEqual(0)
})
```

</details>

### none

```typescript
none<T>(predicate: (x: T) => boolean, list: ReadonlyArray<T>): boolean
```

It returns `true`, if all members of array `list` returns `false`, when applied as argument to `predicate` function.

```javascript
const list = [ 0, 1, 2, 3, 4 ]
const predicate = x => x > 6

const result = R.none(predicate, arr)
// => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%200%2C%201%2C%202%2C%203%2C%204%20%5D%0Aconst%20predicate%20%3D%20x%20%3D%3E%20x%20%3E%206%0A%0Aconst%20result%20%3D%20R.none(predicate%2C%20arr)%0A%2F%2F%20%3D%3E%20true">Try the above <strong>R.none</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
none<T>(predicate: (x: T) => boolean, list: ReadonlyArray<T>): boolean;
none<T>(predicate: (x: T) => boolean): (list: ReadonlyArray<T>) => boolean;
```

</details>

<details>

<summary><strong>R.none</strong> source</summary>

```javascript
export function none(predicate, list){
  if (arguments.length === 1) return _list => none(predicate, _list)

  return list.filter(predicate).length === 0
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { none } from './none'

const isEven = n => n % 2 === 0
const isOdd = n => n % 2 === 1
const arr = [ 1, 3, 5, 7, 9, 11 ]

test('when true', () => {
  expect(none(isEven, arr)).toBeTrue()
})

test('when false curried', () => {
  expect(none(isOdd)(arr)).toBeFalse()
})

test('passes index to predicate', () => {
  none((x, i) => {
    expect(typeof x).toBe('number')
    expect(typeof i).toBe('number')
  })([ 1, 2, 3 ])
})
```

</details>

### not

```typescript
not(input: any): boolean
```

It returns a boolean negated version of `input`.

```javascript
R.not(false) // true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.not(false)%20%2F%2F%20true">Try the above <strong>R.not</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
not(input: any): boolean;
```

</details>

<details>

<summary><strong>R.not</strong> source</summary>

```javascript
export function not(input){
  return !input
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { not } from './not'

test('not', () => {
  expect(not(false)).toEqual(true)
  expect(not(true)).toEqual(false)
  expect(not(0)).toEqual(true)
  expect(not(1)).toEqual(false)
})
```

</details>

### nth

```typescript
nth<T>(index: number, list: ReadonlyArray<T>): T | undefined
```

Curried version of `list[index]`.

```javascript
const list = [1, 2, 3]
const str = 'foo'

const result = [
  R.nth(2, list),
  R.nth(6, list),
  R.nth(0, str),
]
// => [3, undefined, 'f']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B1%2C%202%2C%203%5D%0Aconst%20str%20%3D%20'foo'%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.nth(2%2C%20list)%2C%0A%20%20R.nth(6%2C%20list)%2C%0A%20%20R.nth(0%2C%20str)%2C%0A%5D%0A%2F%2F%20%3D%3E%20%5B3%2C%20undefined%2C%20'f'%5D">Try the above <strong>R.nth</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
nth<T>(index: number, list: ReadonlyArray<T>): T | undefined;
nth(index: number): <T>(list: ReadonlyArray<T>) => T | undefined;
```

</details>

<details>

<summary><strong>R.nth</strong> source</summary>

```javascript
export function nth(index, list){
  if (arguments.length === 1) return _list => nth(index, _list)

  const idx = index < 0 ? list.length + index : index

  return Object.prototype.toString.call(list) === '[object String]' ?
    list.charAt(idx) :
    list[ idx ]
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { nth } from './nth'

test('happy', () => {
  expect(nth(2, [ 1, 2, 3, 4 ])).toEqual(3)
})

test('with curry', () => {
  expect(nth(2)([ 1, 2, 3, 4 ])).toEqual(3)
})

test('with string', () => {
  expect(nth(2)('foo')).toEqual('o')
})

test('with negative index', () => {
  expect(nth(-3)([ 1, 2, 3, 4 ])).toEqual(2)
})
```

</details>

### ok

```typescript
ok(...inputs: any[]): (...schemas: any[]) => void | never
```

It checks if `inputs` are following `schemas` specifications according to `R.isValid`.

If validation fails, it throws.

```javascript
const result = R.ok(
  1,
  ['foo', 'bar']
)(
  Number,
  [String]
)
// => undefined
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.ok(%0A%20%201%2C%0A%20%20%5B'foo'%2C%20'bar'%5D%0A)(%0A%20%20Number%2C%0A%20%20%5BString%5D%0A)%0A%2F%2F%20%3D%3E%20undefined">Try the above <strong>R.ok</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
ok(...inputs: any[]): (...schemas: any[]) => void | never;
```

</details>

<details>

<summary><strong>R.ok</strong> source</summary>

```javascript
import { any } from './any'
import { glue } from './glue'
import { fromPrototypeToString, isValid } from './isValid'
import { map } from './map'
import { type } from './type'

export function schemaToString(schema){
  if (type(schema) !== 'Object'){
    return fromPrototypeToString(schema).rule
  }

  return map(x => {
    const { rule, parsed } = fromPrototypeToString(x)
    const xType = type(x)

    if (xType === 'Function' && !parsed) return 'Function'

    return parsed ? rule : xType
  }, schema)
}

export function check(singleInput, schema){
  return isValid({
    input  : { singleInput },
    schema : { singleInput : schema },
  })
}

export function ok(...inputs){
  return (...schemas) => {
    let failedSchema

    const anyError = any((singleInput, i) => {
      const schema = schemas[ i ] === undefined ? schemas[ 0 ] : schemas[ i ]

      const checked = check(singleInput, schema)
      if (!checked){
        failedSchema = JSON.stringify({
          input  : singleInput,
          schema : schemaToString(schema),
        })
      }

      return !checked
    }, inputs)

    if (anyError){
      const errorMessage =
        inputs.length > 1 ?
          glue(`
        Failed R.ok -
        reason: ${ failedSchema }
        all inputs: ${ JSON.stringify(inputs) }
        all schemas: ${ JSON.stringify(schemas.map(schemaToString)) }
      `,
          '\n') :
          `Failed R.ok - ${ failedSchema }`

      throw new Error(errorMessage)
    }

  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { ok, schemaToString } from './ok'

test('happy', () => {
  expect(() => {
    ok(
      1, 'foo', {}
    )(
      'number', 'string', 'object'
    )
  }).not.toThrow()
})

test('when validation fails', () => {
  expect(() => ok(
    1, 'foo', {}
  )(
    'number', 'string', 'string'
  )).toThrow()
})

/*
  TODO
  What about
  {a: Function}
*/
test('schema in error message', () => {
  const result = schemaToString({
    _a : [ Number ],
    a  : Number,
    b  : x => x > 2,
    c  : [ 'foo', 'bar' ],
    d  : [ { a : String } ],
    e  : 'boolean',
    f  : Array,
    h  : Object,
  })

  expect(JSON.stringify(result)).toMatchInlineSnapshot('"{\\"_a\\":\\"Array\\",\\"a\\":\\"number\\",\\"b\\":\\"Function\\",\\"c\\":\\"Array\\",\\"d\\":\\"Array\\",\\"e\\":\\"String\\",\\"f\\":\\"array\\",\\"h\\":\\"object\\"}"')
})

test('error contains schema', () => {
  try {
    ok(
      1, 'foo', {}
    )(
      { a : Number }, String, String
    )
    expect(false).toBe(true)
  } catch (e){
    expect(e.message.startsWith('Failed R.ok -')).toBeTruthy()
    expect(e).toBeInstanceOf(Error)
  }
})

test('when not throws with single schema', () => {
  expect(() => ok(
    1, 2, 3
  )('number')).not.toThrow()
})

test('when throws with single schema', () => {
  expect(() => ok(
    1, 2, '3'
  )('number')).toThrow()
})
```

</details>

### omit

```typescript
omit<T, K extends string>(propsToOmit: readonly K[], obj: T): Omit<T, K>
```

It returns a partial copy of an `obj` without `propsToOmit` properties.

```javascript
const obj = {a: 1, b: 2, c: 3}
const propsToOmit = 'a,c,d'
const propsToOmitList = ['a', 'c', 'd']

const result = [
  R.omit(propsToOmit, obj), 
  R.omit(propsToOmitList, obj) 
]
// => [{b: 2}, {b: 2}]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20obj%20%3D%20%7Ba%3A%201%2C%20b%3A%202%2C%20c%3A%203%7D%0Aconst%20propsToOmit%20%3D%20'a%2Cc%2Cd'%0Aconst%20propsToOmitList%20%3D%20%5B'a'%2C%20'c'%2C%20'd'%5D%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.omit(propsToOmit%2C%20obj)%2C%20%0A%20%20R.omit(propsToOmitList%2C%20obj)%20%0A%5D%0A%2F%2F%20%3D%3E%20%5B%7Bb%3A%202%7D%2C%20%7Bb%3A%202%7D%5D">Try the above <strong>R.omit</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
omit<T, K extends string>(propsToOmit: readonly K[], obj: T): Omit<T, K>;
omit<K extends string>(propsToOmit: readonly K[]): <T>(obj: T) => Omit<T, K>;
omit<T, U>(propsToOmit: string, obj: T): U;
omit<T, U>(propsToOmit: string): (obj: T) => U;
omit<T>(propsToOmit: string, obj: object): T;
omit<T>(propsToOmit: string): (obj: object) => T;
```

</details>

<details>

<summary><strong>R.omit</strong> source</summary>

```javascript
export function omit(propsToOmit, obj){
  if (arguments.length === 1) return _obj => omit(propsToOmit, _obj)

  if (obj === null || obj === undefined){
    return undefined
  }

  const propsToOmitValue =
    typeof propsToOmit === 'string' ? propsToOmit.split(',') : propsToOmit

  const willReturn = {}

  for (const key in obj){
    if (!propsToOmitValue.includes(key)){
      willReturn[ key ] = obj[ key ]
    }
  }

  return willReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { omit } from './omit'

test('with string as condition', () => {
  const obj = {
    a : 1,
    b : 2,
    c : 3,
  }
  const result = omit('a,c', obj)
  const resultCurry = omit('a,c')(obj)
  const expectedResult = { b : 2 }

  expect(result).toEqual(expectedResult)
  expect(resultCurry).toEqual(expectedResult)
})

test('with null', () => {
  expect(omit('a,b', null)).toEqual(undefined)
})

test('doesn\'t work with number as property', () => {
  expect(omit([ 42 ], {
    a  : 1,
    42 : 2,
  })).toEqual({
    42 : 2,
    a  : 1,
  })
})

test('happy', () => {
  expect(omit([ 'a', 'c' ])({
    a : 'foo',
    b : 'bar',
    c : 'baz',
  })).toEqual({ b : 'bar' })
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {omit} from 'rambda'

describe('R.omit with array as props input', () => {
  it('allow Typescript to infer object type', () => {
    const input = {a: 'foo', b: 2, c: 3, d: 4}
    const result = omit(['b,c'], input)

    result.a // $ExpectType string
    result.d // $ExpectType number

    const curriedResult = omit(['a,c'], input)

    curriedResult.a // $ExpectType string
    curriedResult.d // $ExpectType number
  })

  it('declare type of input object', () => {
    interface Input {
      a: string,
      b: number,
      c: number,
      d: number,
    }
    const input: Input = {a: 'foo', b: 2, c: 3, d: 4}
    const result = omit(['b,c'], input)
    result // $ExpectType Pick<Input, "a" | "b" | "c" | "d">

    result.a // $ExpectType string
    result.d // $ExpectType number

    const curriedResult = omit(['a,c'], input)

    curriedResult.a // $ExpectType string
    curriedResult.d // $ExpectType number
  })
})

describe('R.omit with string as props input', () => {
  interface Output {
    b: number,
    d: number,
  }

  it('explicitly declare output', () => {
    const result = omit<Output>('a,c', {a: 1, b: 2, c: 3, d: 4})
    result // $ExpectType Output
    result.b // $ExpectType number

    const curriedResult = omit<Output>('a,c')({a: 1, b: 2, c: 3, d: 4})

    curriedResult.b // $ExpectType number
  })

  it('explicitly declare input and output', () => {
    interface Input {
      a: number,
      b: number,
      c: number,
      d: number,
    }
    const result = omit<Input, Output>('a,c', {a: 1, b: 2, c: 3, d: 4})
    result // $ExpectType Output
    result.b // $ExpectType number

    const curriedResult = omit<Input, Output>('a,c')({
      a: 1,
      b: 2,
      c: 3,
      d: 4,
    })

    curriedResult.b // $ExpectType number
  })

  it('without passing type', () => {
    const result = omit('a,c', {a: 1, b: 2, c: 3, d: 4})
    result // $ExpectType unknown
  })
})
```

</details>

### once

```typescript
once(fn: Func<any>): Func<any>
```

It returns a function, which invokes only once `fn` function.

```javascript
let result = 0
const addOnce = R.once((x) => result = result + x)

addOnce(1)
addOnce(1)
// => 1
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20let%20result%20%3D%200%0Aconst%20addOnce%20%3D%20R.once((x)%20%3D%3E%20result%20%3D%20result%20%2B%20x)%0A%0AaddOnce(1)%0AaddOnce(1)%0A%2F%2F%20%3D%3E%201">Try the above <strong>R.once</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
once(fn: Func<any>): Func<any>;
```

</details>

<details>

<summary><strong>R.once</strong> source</summary>

```javascript
import { curry } from './curry'

function onceFn(fn, context){
  let result

  return function (){
    if (fn){
      result = fn.apply(context || this, arguments)
      fn = null
    }

    return result
  }
}

export function once(fn, context){
  if (arguments.length === 1){
    const wrap = onceFn(fn, context)

    return curry(wrap)
  }

  return onceFn(fn, context)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { once } from './once'

test('with counter', () => {
  let counter = 0
  const runOnce = once(x => {
    counter++

    return x + 2
  })
  expect(runOnce(1)).toEqual(3)
  runOnce(1)
  runOnce(1)
  runOnce(1)
  expect(counter).toEqual(1)
})

test('happy path', () => {
  const addOneOnce = once((
    a, b, c
  ) => a + b + c, 1)

  expect(addOneOnce(
    10, 20, 30
  )).toBe(60)
  expect(addOneOnce(40)).toEqual(60)
})
```

</details>

### over

```typescript
over<T>(lens: Lens, fn: Arity1Fn, value: T): T
```

It returns a copied **Object** or **Array** with modified value received by applying function `fn` to `lens` focus.

```javascript
const headLens = R.lensIndex(0)
 
R.over(headLens, R.toUpper, ['foo', 'bar', 'baz']) //=> ['FOO', 'bar', 'baz']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20const%20headLens%20%3D%20R.lensIndex(0)%0A%20%0AR.over(headLens%2C%20R.toUpper%2C%20%5B'foo'%2C%20'bar'%2C%20'baz'%5D)%20%2F%2F%3D%3E%20%5B'FOO'%2C%20'bar'%2C%20'baz'%5D">Try the above <strong>R.over</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
over<T>(lens: Lens, fn: Arity1Fn, value: T): T;
over<T>(lens: Lens, fn: Arity1Fn, value: readonly T[]): T[];
over(lens: Lens, fn: Arity1Fn): <T>(value: T) => T;
over(lens: Lens, fn: Arity1Fn): <T>(value: readonly T[]) => T[];
over(lens: Lens): <T>(fn: Arity1Fn, value: T) => T;
over(lens: Lens): <T>(fn: Arity1Fn, value: readonly T[]) => T[];
```

</details>

<details>

<summary><strong>R.over</strong> source</summary>

```javascript
const Identity = x => ({
  x,
  map : fn => Identity(fn(x)),
})

export function over(
  lens, fn, object
){
  if (arguments.length === 1)
    return (_fn, _object) => over(
      lens, _fn, _object
    )
  if (arguments.length === 2) return _object => over(
    lens, fn, _object
  )

  return lens(x => Identity(fn(x)))(object).x
}
```

</details>

### partial

```typescript
partial<V0, V1, T>(fn: (x0: V0, x1: V1) => T, x0: V0): (x1: V1) => T
```

It is very similar to `R.curry`, but you can pass initial arguments when you create the curried function.

`R.partial` will keep returning a function until all the arguments that the function `fn` expects are passed.
The name comes from the fact that you partially inject the inputs.

```javascript
const fn = (title, firstName, lastName) => {
  return title + ' ' + firstName + ' ' + lastName + '!'
}

const canPassAnyNumberOfArguments = R.partial(fn, 'Hello')
const ramdaStyle = R.partial(fn, ['Hello'])

const finalFn = canPassAnyNumberOfArguments('Foo')

finalFn('Bar') // =>  'Hello, Foo Bar!'
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20const%20fn%20%3D%20(title%2C%20firstName%2C%20lastName)%20%3D%3E%20%7B%0A%20%20return%20title%20%2B%20'%20'%20%2B%20firstName%20%2B%20'%20'%20%2B%20lastName%20%2B%20'!'%0A%7D%0A%0Aconst%20canPassAnyNumberOfArguments%20%3D%20R.partial(fn%2C%20'Hello')%0Aconst%20ramdaStyle%20%3D%20R.partial(fn%2C%20%5B'Hello'%5D)%0A%0Aconst%20finalFn%20%3D%20canPassAnyNumberOfArguments('Foo')%0A%0AfinalFn('Bar')%20%2F%2F%20%3D%3E%20%20'Hello%2C%20Foo%20Bar!'">Try the above <strong>R.partial</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
partial<V0, V1, T>(fn: (x0: V0, x1: V1) => T, x0: V0): (x1: V1) => T;
partial<V0, V1, V2, T>(fn: (x0: V0, x1: V1, x2: V2) => T, x0: V0, x1: V1): (x2: V2) => T;
partial<V0, V1, V2, T>(fn: (x0: V0, x1: V1, x2: V2) => T, x0: V0): (x1: V1, x2: V2) => T;
partial<V0, V1, V2, V3, T>(fn: (x0: V0, x1: V1, x2: V2, x3: V3) => T, x0: V0, x1: V1, x2: V2): (x2: V3) => T;
partial<V0, V1, V2, V3, T>(fn: (x0: V0, x1: V1, x2: V2, x3: V3) => T, x0: V0, x1: V1): (x2: V2, x3: V3) => T;
partial<V0, V1, V2, V3, T>(fn: (x0: V0, x1: V1, x2: V2, x3: V3) => T, x0: V0): (x1: V1, x2: V2, x3: V3) => T;
partial<T>(fn: (...a: any[]) => T, ...args: any[]): (...a: any[]) => T;
```

</details>

<details>

<summary><strong>R.partial</strong> source</summary>

```javascript
export function partial(fn, ...args){
  const len = fn.length

  return (...rest) => {
    if (args.length + rest.length >= len){
      return fn(...args, ...rest)
    }

    return partial(fn, ...[ ...args, ...rest ])
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { partial } from './partial'
import { type } from './type'

const greet = (
  salutation, title, firstName, lastName
) =>
  salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!'

test('happy', () => {
  const canPassAnyNumberOfArguments = partial(
    greet, 'Hello', 'Ms.'
  )
  const fn = canPassAnyNumberOfArguments('foo')
  const sayHello = partial(greet, [ 'Hello' ])
  const sayHelloRamda = partial(sayHello, [ 'Ms.' ])

  expect(type(fn)).toBe('Function')

  expect(fn('bar')).toBe('Hello, Ms. foo bar!')
  expect(sayHelloRamda('foo', 'bar')).toBe('Hello, Ms. foo bar!')
})

test('extra arguments are ignored', () => {
  const canPassAnyNumberOfArguments = partial(
    greet, 'Hello', 'Ms.'
  )
  const fn = canPassAnyNumberOfArguments('foo')

  expect(type(fn)).toBe('Function')

  expect(fn(
    'bar', 1, 2
  )).toBe('Hello, Ms. foo bar!')
})

test('when array is input', () => {
  const fooFn = (
    a, b, c, d
  ) => ({
    a,
    b,
    c,
    d,
  })
  const barFn = partial(
    fooFn, [ 1, 2 ], []
  )

  expect(barFn(1, 2)).toEqual({
    a : [ 1, 2 ],
    b : [],
    c : 1,
    d : 2,
  })
})

test('ramda spec', () => {
  const sayHello = partial(greet, 'Hello')
  const sayHelloToMs = partial(sayHello, 'Ms.')

  expect(sayHelloToMs('Jane', 'Jones')).toBe('Hello, Ms. Jane Jones!')
})
```

</details>

### partition

```typescript
partition<T>(
  predicate: Predicatex<T>,
  input: T[]
): [T[], T[]]
```

It will return array of two objects/arrays according to `predicate` function. The first member holds all instanses of `input` that pass the `predicate` function, while the second member - those who doesn't.

`input` can be either an object or an array.

```javascript
const list = [1, 2, 3]
const obj = {a: 1, b: 2, c: 3}
const predicate = x => x > 2

const result = [
  R.partition(predicate, list),
  R.partition(predicate, obj)
]
const expected = [
  [[3], [1, 2]],
  [{c: 3},  {a: 1, b: 2}],
]
// `result` is equal to `expected`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B1%2C%202%2C%203%5D%0Aconst%20obj%20%3D%20%7Ba%3A%201%2C%20b%3A%202%2C%20c%3A%203%7D%0Aconst%20predicate%20%3D%20x%20%3D%3E%20x%20%3E%202%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.partition(predicate%2C%20list)%2C%0A%20%20R.partition(predicate%2C%20obj)%0A%5D%0Aconst%20expected%20%3D%20%5B%0A%20%20%5B%5B3%5D%2C%20%5B1%2C%202%5D%5D%2C%0A%20%20%5B%7Bc%3A%203%7D%2C%20%20%7Ba%3A%201%2C%20b%3A%202%7D%5D%2C%0A%5D%0A%2F%2F%20%60result%60%20is%20equal%20to%20%60expected%60">Try the above <strong>R.partition</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
partition<T>(
  predicate: Predicatex<T>,
  input: T[]
): [T[], T[]];
partition<T>(
  predicate: Predicatex<T>
): (input: T[]) => [T[], T[]];
```

</details>

<details>

<summary><strong>R.partition</strong> source</summary>

```javascript
import { _isArray } from './_internals/_isArray'

function whenObject(predicate, input){
  const yes = {}
  const no = {}
  Object.entries(input).forEach(([ prop, value ]) => {
    if (predicate(value, prop)){
      yes[ prop ] = value
    } else {
      no[ prop ] = value
    }
  })

  return [ yes, no ]
}

export function partition(predicate, input){
  if (arguments.length === 1){
    return listHolder => partition(predicate, listHolder)
  }
  if (!_isArray(input)) return whenObject(predicate, input)

  const yes = []
  const no = []
  let counter = -1

  while (counter++ < input.length - 1){
    if (predicate(input[ counter ], counter)){
      yes.push(input[ counter ])
    } else {
      no.push(input[ counter ])
    }
  }

  return [ yes, no ]
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { partition } from './partition'

test('with array', () => {
  const predicate = (x, i) => {
    expect(typeof i).toBe('number')

    return x > 2
  }
  const list = [ 1, 2, 3, 4 ]

  const result = partition(predicate, list)
  const expectedResult = [
    [ 3, 4 ],
    [ 1, 2 ],
  ]

  expect(result).toEqual(expectedResult)
})

test('with object', () => {
  const predicate = (value, prop) => {
    expect(typeof prop).toBe('string')

    return value > 2
  }
  const hash = {
    a : 1,
    b : 2,
    c : 3,
    d : 4,
  }

  const result = partition(predicate)(hash)
  const expectedResult = [
    {
      c : 3,
      d : 4,
    },
    {
      a : 1,
      b : 2,
    },
  ]

  expect(result).toEqual(expectedResult)
})

test('readme example', () => {
  const list = [ 1, 2, 3 ]
  const obj = {
    a : 1,
    b : 2,
    c : 3,
  }
  const predicate = x => x > 2

  const result = [ partition(predicate, list), partition(predicate, obj) ]
  const expected = [
    [ [ 3 ], [ 1, 2 ] ],
    [ { c : 3 }, {
      a : 1,
      b : 2,
    } ],
  ]
  expect(result).toEqual(expected)
})
```

</details>

### pass

```typescript
pass(...inputs: any[]): (...rules: any[]) => boolean
```

It checks if `inputs` are following `schemas` specifications according to `R.isValid`.

```javascript
const result = R.pass(
  1,
  ['foo','bar']
)(
  Number,
  [String]
)
// => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.pass(%0A%20%201%2C%0A%20%20%5B'foo'%2C'bar'%5D%0A)(%0A%20%20Number%2C%0A%20%20%5BString%5D%0A)%0A%2F%2F%20%3D%3E%20true">Try the above <strong>R.pass</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
pass(...inputs: any[]): (...rules: any[]) => boolean;
```

</details>

<details>

<summary><strong>R.pass</strong> source</summary>

```javascript
import { any } from './any'
import { check } from './ok'

export function pass(...inputs){
  return (...schemas) =>
    any((x, i) => {
      const schema = schemas[ i ] === undefined ? schemas[ 0 ] : schemas[ i ]

      return !check(x, schema)
    }, inputs) === false
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { pass } from './pass'

test('true on success', () => {
  const result = pass(
    1, 'foo', {}
  )(
    'number', 'string', 'object'
  )

  expect(result).toBe(true)
})

test('false on failure', () => {
  expect(pass(
    1, 'foo', {}
  )(
    'number', 'string', 'string'
  )).toBe(false)
})

test('true when single schema', () => {
  expect(pass(
    1, 2, 3
  )('number')).toBe(true)
})

test('false when single schema', () => {
  expect(pass(
    1, 'foo', {}
  )('number')).toBe(false)
})

test('array of schemas', () => {
  const result = pass([ { a : 1 }, { a : 2 }, { a : 3 } ])([ { a : Number } ])
  expect(result).toBeTruthy()
})

test('reame example', () => {
  const result = pass(1, [ 'foo', 'bar' ])(Number, [ String ])
  expect(result).toBeTruthy()
})
```

</details>

### path

```typescript
path<Input, T>(pathToSearch: string | string[], obj: Input): T | undefined
```

If `pathToSearch` is `'a.b'` then it will return `1` if `obj` is `{a:{b:1}}`.

It will return `undefined`, if such path is not found.

```javascript
const obj = {a: {b: 1}}
const pathToSearch = 'a.b'
const pathToSearchList = ['a', 'b']

const result = [
  R.path(pathToSearch, obj),
  R.path(pathToSearchList, obj),
  R.path('a.b.c.d', obj)
]
// => [1, 1, undefined]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20obj%20%3D%20%7Ba%3A%20%7Bb%3A%201%7D%7D%0Aconst%20pathToSearch%20%3D%20'a.b'%0Aconst%20pathToSearchList%20%3D%20%5B'a'%2C%20'b'%5D%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.path(pathToSearch%2C%20obj)%2C%0A%20%20R.path(pathToSearchList%2C%20obj)%2C%0A%20%20R.path('a.b.c.d'%2C%20obj)%0A%5D%0A%2F%2F%20%3D%3E%20%5B1%2C%201%2C%20undefined%5D">Try the above <strong>R.path</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
path<Input, T>(pathToSearch: string | string[], obj: Input): T | undefined;
path<T>(pathToSearch: string | string[], obj: any): T | undefined;
path<T>(pathToSearch: string | string[]): (obj: any) => T | undefined;
path<Input, T>(pathToSearch: string | string[]): (obj: Input) => T | undefined;
```

</details>

<details>

<summary><strong>R.path</strong> source</summary>

```javascript
export function path(list, obj){
  if (arguments.length === 1) return _obj => path(list, _obj)

  if (obj === null || obj === undefined){
    return undefined
  }
  let willReturn = obj
  let counter = 0

  const pathArrValue = typeof list === 'string' ? list.split('.') : list

  while (counter < pathArrValue.length){
    if (willReturn === null || willReturn === undefined){
      return undefined
    }
    willReturn = willReturn[ pathArrValue[ counter ] ]
    counter++
  }

  return willReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { path } from './path'

test('with array inside object', () => {
  const obj = { a : { b : [ 1, { c : 1 } ] } }

  expect(path('a.b.1.c', obj)).toBe(1)
})

test('works with undefined', () => {
  const obj = { a : { b : { c : 1 } } }

  expect(path('a.b.c.d.f', obj)).toBeUndefined()
  expect(path('foo.babaz', undefined)).toBeUndefined()
  expect(path('foo.babaz')(undefined)).toBeUndefined()
})

test('works with string instead of array', () => {
  expect(path('foo.bar.baz')({ foo : { bar : { baz : 'yes' } } })).toEqual('yes')
})

test('path', () => {
  expect(path([ 'foo', 'bar', 'baz' ])({ foo : { bar : { baz : 'yes' } } })).toEqual('yes')

  expect(path([ 'foo', 'bar', 'baz' ])(null)).toBeUndefined()

  expect(path([ 'foo', 'bar', 'baz' ])({ foo : { bar : 'baz' } })).toBeUndefined()
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {path} from 'rambda'

interface Input {
  a: number,
  b: {
    c: boolean,
  },
}

describe('path', () => {
  it('without specified input type', () => {
    const input = {a: 1, b: {c: true}}
    const result = path<boolean>('a.b.c', input)
    const resultCurried = path<boolean>('a.b.c')(input)
    result // $ExpectType boolean | undefined
    resultCurried // $ExpectType boolean | undefined
  })

  it('without specified output type', () => {
    const input = {a: 1, b: {c: true}}
    const result = path('a.b.c', input)
    result // $ExpectType unknown
  })

  it('with string as path', () => {
    const input: Input = {a: 1, b: {c: true}}
    const resultA = path<boolean>('a.b.c', input)
    const resultB = path<boolean>('a.b.c')(input)
    resultA // $ExpectType boolean | undefined
    resultB // $ExpectType boolean | undefined
  })
  it('with array as path', () => {
    const input: Input = {a: 1, b: {c: true}}
    const resultA = path<boolean>(['a', 'b', 'c'], input)
    const resultB = path<boolean>(['a', 'b', 'c'])(input)
    resultA // $ExpectType boolean | undefined
    resultB // $ExpectType boolean | undefined
  })
})

describe('path with specified input', () => {
  it('with string as path', () => {
    const input: Input = {a: 1, b: {c: true}}
    // const wrongInput = { a: 1, b: true }
    // const resultA = path<Input, boolean>('a.b.c', wrongInput)
    const resultA = path<Input, boolean>('a.b.c', input)
    const resultB = path<Input, boolean>('a.b.c')(input)
    resultA // $ExpectType boolean | undefined
    resultB // $ExpectType boolean | undefined
  })
  it('with array as path', () => {
    const input: Input = {a: 1, b: {c: true}}
    const resultA = path<Input, boolean>(['a', 'b', 'c'], input)
    const resultB = path<Input, boolean>(['a', 'b', 'c'])(input)
    resultA // $ExpectType boolean | undefined
    resultB // $ExpectType boolean | undefined
  })
})
```

</details>

<details>

<summary>1 failed <italic>Ramda.path</italic> specs

> :boom: Reason for the failure: ramda method supports negative indices
</summary>

```javascript
var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');

describe('path', function() {
  var deepObject = {a: {b: {c: 'c'}}, falseVal: false, nullVal: null, undefinedVal: undefined, arrayVal: ['arr']};
  it('takes a path that contains negative indices into arrays', function() {
    eq(R.path(['x', -2], {x: ['a', 'b', 'c', 'd']}), 'c');
    eq(R.path([-1, 'y'], [{x: 1, y: 99}, {x: 2, y: 98}, {x: 3, y: 97}]), 97);
  });
});
```

</details>

### pathEq

```typescript
pathEq(path: string | string[], target: any, input: object): boolean
```

```javascript
const path = 'a.b'
const target = 1
const input = {a: {b:1}}

const result = R.pathEq(
  path,
  target,
  input
)
// => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20path%20%3D%20'a.b'%0Aconst%20target%20%3D%201%0Aconst%20input%20%3D%20%7Ba%3A%20%7Bb%3A1%7D%7D%0A%0Aconst%20result%20%3D%20R.pathEq(%0A%20%20path%2C%0A%20%20target%2C%0A%20%20input%0A)%0A%2F%2F%20%3D%3E%20true">Try the above <strong>R.pathEq</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
pathEq(path: string | string[], target: any, input: object): boolean;
pathEq(path: string | string[], target: any): (input: object) => boolean;
```

</details>

<details>

<summary><strong>R.pathEq</strong> source</summary>

```javascript
import { path as pathModule } from './path'

export function pathEq(
  path, target, obj
){
  if (arguments.length === 2){
    return objHolder => pathEq(
      path, target, objHolder
    )
  }

  return pathModule(path, obj) === target
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { pathEq } from './pathEq'

test('when true', () => {
  const path = 'a.b'
  const obj = { a : { b : 1 } }
  const target = 1

  expect(pathEq(
    path, target, obj
  )).toBe(true)
})

test('when false', () => {
  const path = 'a.b'
  const obj = { a : { b : 1 } }
  const target = 2

  expect(pathEq(path, target)(obj)).toBe(false)
})

test('when wrong path', () => {
  const path = 'foo.bar'
  const obj = { a : { b : 1 } }
  const target = 2

  expect(pathEq(
    path, target, obj
  )).toBe(false)
})
```

</details>

### pathOr

```typescript
pathOr<T>(defaultValue: T, pathToSearch: Path, obj: any): T
```

It reads `obj` input and returns either `R.path(pathToSearch, obj)` result or `defaultValue` input.

```javascript
const defaultValue = 'DEFAULT_VALUE'
const pathToSearch = 'a.b'
const pathToSearchList = ['a', 'b']

const obj = {
  a : {
    b : 1
  }
}

const result = [
  R.pathOr(DEFAULT_VALUE, pathToSearch, obj) 
  R.pathOr(DEFAULT_VALUE, pathToSearchList, obj) 
  R.pathOr(DEFAULT_VALUE, 'a.b.c', obj) 
]
// => [1, 1, 'DEFAULT_VALUE']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20defaultValue%20%3D%20'DEFAULT_VALUE'%0Aconst%20pathToSearch%20%3D%20'a.b'%0Aconst%20pathToSearchList%20%3D%20%5B'a'%2C%20'b'%5D%0A%0Aconst%20obj%20%3D%20%7B%0A%20%20a%20%3A%20%7B%0A%20%20%20%20b%20%3A%201%0A%20%20%7D%0A%7D%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.pathOr(DEFAULT_VALUE%2C%20pathToSearch%2C%20obj)%20%0A%20%20R.pathOr(DEFAULT_VALUE%2C%20pathToSearchList%2C%20obj)%20%0A%20%20R.pathOr(DEFAULT_VALUE%2C%20'a.b.c'%2C%20obj)%20%0A%5D%0A%2F%2F%20%3D%3E%20%5B1%2C%201%2C%20'DEFAULT_VALUE'%5D">Try the above <strong>R.pathOr</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
pathOr<T>(defaultValue: T, pathToSearch: Path, obj: any): T;
pathOr<T>(defaultValue: T, pathToSearch: Path): (obj: any) => T;
pathOr<T>(defaultValue: T): FunctionToolbelt.Curry<(a: Path, b: any) => T>;
```

</details>

<details>

<summary><strong>R.pathOr</strong> source</summary>

```javascript
import { curry } from './curry'
import { defaultTo } from './defaultTo'
import { path } from './path'

function pathOrFn(
  defaultValue, list, obj
){
  return defaultTo(defaultValue, path(list, obj))
}

export const pathOr = curry(pathOrFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { pathOr } from './pathOr'

test('with undefined', () => {
  const result = pathOr(
    'foo', 'x.y', { x : { y : 1 } }
  )

  expect(result).toEqual(1)
})

test('with null', () => {
  const result = pathOr(
    'foo', 'x.y', null
  )

  expect(result).toEqual('foo')
})

test('with NaN', () => {
  const result = pathOr(
    'foo', 'x.y', NaN
  )

  expect(result).toEqual('foo')
})

test('curry case (x)(y)(z)', () => {
  const result = pathOr('foo')('x.y.z')({ x : { y : { a : 1 } } })

  expect(result).toEqual('foo')
})

test('curry case (x)(y,z)', () => {
  const result = pathOr('foo', 'x.y.z')({ x : { y : { a : 1 } } })

  expect(result).toEqual('foo')
})

test('curry case (x,y)(z)', () => {
  const result = pathOr('foo')('x.y.z', { x : { y : { a : 1 } } })

  expect(result).toEqual('foo')
})
```

</details>

### paths

```typescript
paths<Input, T>(pathsToSearch: Path[], obj: Input): (T | undefined)[]
```

It loops over members of `pathsToSearch` as `singlePath` and returns the array produced by `R.path(singlePath, obj)`.

Because it calls `R.path`, then `singlePath` can be either string or a list.

```javascript
const obj = {
  a : {
    b : {
      c : 1,
      d : 2
    }
  }
}

const result = R.paths([
  'a.b.c',
  'a.b.c.d',
  'a.b.c.d.e',
], obj)
// => [1, 2, undefined]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20obj%20%3D%20%7B%0A%20%20a%20%3A%20%7B%0A%20%20%20%20b%20%3A%20%7B%0A%20%20%20%20%20%20c%20%3A%201%2C%0A%20%20%20%20%20%20d%20%3A%202%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%0Aconst%20result%20%3D%20R.paths(%5B%0A%20%20'a.b.c'%2C%0A%20%20'a.b.c.d'%2C%0A%20%20'a.b.c.d.e'%2C%0A%5D%2C%20obj)%0A%2F%2F%20%3D%3E%20%5B1%2C%202%2C%20undefined%5D">Try the above <strong>R.paths</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
paths<Input, T>(pathsToSearch: Path[], obj: Input): (T | undefined)[];
paths<Input, T>(pathsToSearch: Path[]): (obj: Input) => (T | undefined)[];
paths<T>(pathsToSearch: Path[], obj: any): (T | undefined)[];
paths<T>(pathsToSearch: Path[]): (obj: any) => (T | undefined)[];
```

</details>

<details>

<summary><strong>R.paths</strong> source</summary>

```javascript
import { path } from './path'

export function paths(pathsToSearch, obj){
  if (arguments.length === 1){
    return _obj => paths(pathsToSearch, _obj)
  }

  return pathsToSearch.map(singlePath => path(singlePath, obj))
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { paths } from './paths'

const obj = {
  a : {
    b : {
      c : 1,
      d : 2,
    },
  },
  p : [ { q : 3 }, 'Hi' ],
  x : {
    y : 'Alice',
    z : [ [ {} ] ],
  },
}

test('with string path + curry', () => {
  const pathsInput = [ 'a.b.d', 'p.q' ]
  const expected = [ 2, undefined ]
  const result = paths(pathsInput, obj)
  const curriedResult = paths(pathsInput)(obj)

  expect(result).toEqual(expected)
  expect(curriedResult).toEqual(expected)
})

test('with array path', () => {
  const result = paths([
    [ 'a', 'b', 'c' ],
    [ 'x', 'y' ],
  ],
  obj)

  expect(result).toEqual([ 1, 'Alice' ])
})

test('takes a paths that contains indices into arrays', () => {
  expect(paths([
    [ 'p', 0, 'q' ],
    [ 'x', 'z', 0, 0 ],
  ],
  obj)).toEqual([ 3, {} ])
  expect(paths([
    [ 'p', 0, 'q' ],
    [ 'x', 'z', 2, 1 ],
  ],
  obj)).toEqual([ 3, undefined ])
})

test('gets a deep property\'s value from objects', () => {
  expect(paths([ [ 'a', 'b' ] ], obj)).toEqual([ obj.a.b ])
  expect(paths([ [ 'p', 0 ] ], obj)).toEqual([ obj.p[ 0 ] ])
})

test('returns undefined for items not found', () => {
  expect(paths([ [ 'a', 'x', 'y' ] ], obj)).toEqual([ undefined ])
  expect(paths([ [ 'p', 2 ] ], obj)).toEqual([ undefined ])
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {paths} from 'rambda'

interface Input {
  a: number,
  b: number,
  c: number,
}

const input: Input = {a: 1, b: 2, c: 3}

describe('paths', () => {
  it('with dot notation', () => {
    const result = paths<number>(['a.b.c', 'foo.bar'], input)
    result // $ExpectType (number | undefined)[]
  })

  it('without type', () => {
    const result = paths(['a.b.c', 'foo.bar'], input)
    result // $ExpectType unknown[]
  })

  it('with array as path', () => {
    const result = paths<number>([['a', 'b', 'c'], ['foo.bar']], input)
    result // $ExpectType (number | undefined)[]
  })

  it('with curry', () => {
    const result = paths<number>([['a', 'b', 'c'], ['foo.bar']])(input)
    result // $ExpectType (number | undefined)[]
  })
})
```

</details>

<details>

<summary>1 failed <italic>Ramda.paths</italic> specs

> :boom: Reason for the failure: ramda method supports negative indices
</summary>

```javascript
var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');

describe('paths', function() {
  var obj = {
    a: {
      b: {
        c: 1,
        d: 2
      }
    },
    p: [{q: 3}, 'Hi'],
    x: {
      y: 'Alice',
      z: [[{}]]
    }
  };
  it('takes a path that contains negative indices into arrays', function() {
    eq(R.paths([['p', -2, 'q'], ['p', -1]], obj), [3, 'Hi']);
    eq(R.paths([['p', -4, 'q'], ['x', 'z', -1, 0]], obj), [undefined, {}]);
  });
});
```

</details>

### pick

```typescript
pick<T, K extends string | number | symbol>(propsToPick: readonly K[], input: T): Pick<T, Exclude<keyof T, Exclude<keyof T, K>>>
```

It returns a partial copy of an `input` containing only `propsToPick` properties.

`input` can be either an object or an array.

String anotation of `propsToPick` is one of the differences between `Rambda` and `Ramda`.

```javascript
const obj = {
  a : 1,
  b : false,
  foo: 'cherry'
}
const list = [1, 2, 3, 4]
const propsToPick = 'a,foo'
const propsToPickList = ['a', 'foo']

const result = [
  R.pick(propsToPick, obj),
  R.pick(propsToPickList, obj),
  R.pick('a,bar', obj),
  R.pick('bar', obj),
  R.pick([0, 3], list),
  R.pick('0,3', list),
]

const expected = [
  {a:1, foo: 'cherry'},
  {a:1, foo: 'cherry'},
  {a:1},
  {},
  [1,4],
  [1,4]
]
// => `result` is equal to `expected`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20obj%20%3D%20%7B%0A%20%20a%20%3A%201%2C%0A%20%20b%20%3A%20false%2C%0A%20%20foo%3A%20'cherry'%0A%7D%0Aconst%20list%20%3D%20%5B1%2C%202%2C%203%2C%204%5D%0Aconst%20propsToPick%20%3D%20'a%2Cfoo'%0Aconst%20propsToPickList%20%3D%20%5B'a'%2C%20'foo'%5D%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.pick(propsToPick%2C%20obj)%2C%0A%20%20R.pick(propsToPickList%2C%20obj)%2C%0A%20%20R.pick('a%2Cbar'%2C%20obj)%2C%0A%20%20R.pick('bar'%2C%20obj)%2C%0A%20%20R.pick(%5B0%2C%203%5D%2C%20list)%2C%0A%20%20R.pick('0%2C3'%2C%20list)%2C%0A%5D%0A%0Aconst%20expected%20%3D%20%5B%0A%20%20%7Ba%3A1%2C%20foo%3A%20'cherry'%7D%2C%0A%20%20%7Ba%3A1%2C%20foo%3A%20'cherry'%7D%2C%0A%20%20%7Ba%3A1%7D%2C%0A%20%20%7B%7D%2C%0A%20%20%5B1%2C4%5D%2C%0A%20%20%5B1%2C4%5D%0A%5D%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%60expected%60">Try the above <strong>R.pick</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
pick<T, K extends string | number | symbol>(propsToPick: readonly K[], input: T): Pick<T, Exclude<keyof T, Exclude<keyof T, K>>>;
pick<K extends string | number | symbol>(propsToPick: readonly K[]): <T>(input: T) => Pick<T, Exclude<keyof T, Exclude<keyof T, K>>>;
pick<T, U>(propsToPick: string, input: T): U;
pick<T, U>(propsToPick: string): (input: T) => U;
pick<T>(propsToPick: string, input: object): T;
pick<T>(propsToPick: string): (input: object) => T;
```

</details>

<details>

<summary><strong>R.pick</strong> source</summary>

```javascript
export function pick(propsToPick, input){
  if (arguments.length === 1) return _input => pick(propsToPick, _input)

  if (input === null || input === undefined){
    return undefined
  }
  const keys =
    typeof propsToPick === 'string' ? propsToPick.split(',') : propsToPick

  const willReturn = {}
  let counter = 0

  while (counter < keys.length){
    if (keys[ counter ] in input){
      willReturn[ keys[ counter ] ] = input[ keys[ counter ] ]
    }
    counter++
  }

  return willReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { pick } from './pick'

test('props to pick is a string', () => {
  const obj = {
    a : 1,
    b : 2,
    c : 3,
  }
  const result = pick('a,c', obj)
  const resultCurry = pick('a,c')(obj)
  const expectedResult = {
    a : 1,
    c : 3,
  }

  expect(result).toEqual(expectedResult)
  expect(resultCurry).toEqual(expectedResult)
})

test('props to pick is an array', () => {
  expect(pick([ 'a', 'c' ])({
    a : 'foo',
    b : 'bar',
    c : 'baz',
  })).toEqual({
    a : 'foo',
    c : 'baz',
  })

  expect(pick([ 'a', 'd', 'e', 'f' ])({
    a : 'foo',
    b : 'bar',
    c : 'baz',
  })).toEqual({ a : 'foo' })

  expect(pick('a,d,e,f')(null)).toEqual(undefined)
})

test('works with list as input and number as props - props to pick is an array', () => {
  const result = pick([ 1, 2 ], [ 'a', 'b', 'c', 'd' ])
  expect(result).toEqual({
    1 : 'b',
    2 : 'c',
  })
})

test('works with list as input and number as props - props to pick is a string', () => {
  const result = pick('1,2', [ 'a', 'b', 'c', 'd' ])
  expect(result).toEqual({
    1 : 'b',
    2 : 'c',
  })
})

test('with symbol', () => {
  const symbolProp = Symbol('s')
  expect(pick([ symbolProp ], { [ symbolProp ] : 'a' })).toMatchInlineSnapshot(`
    Object {
      Symbol(s): "a",
    }
  `)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {pick} from 'rambda'

describe('pick with array as props input', () => {
  interface Input {
    a: string,
    b: number,
    c: number,
    d: number,
  }

  it('need to declare the types of input and props to pick - string as prop', () => {
    const input = {a: 'foo', b: 2, c: 3, d: 4}
    const result = pick<Input, string>(['a,c'], input)
    result // $ExpectType Pick<Input, "a" | "b" | "c" | "d">
    result.a // $ExpectType string
    result.b // $ExpectType number

    const curriedResult = pick<Input, string>(['a,c'], input)
    curriedResult // $ExpectType Pick<Input, "a" | "b" | "c" | "d">
  })

  it('need to declare the types of input and props to pick - number as prop', () => {
    const result = pick<string[], number>([1, 2], ['a', 'b', 'c', 'd'])
    result[1] // $ExpectType string
    result[2] // $ExpectType string
    result[3] // should not be possible but it is
  })

  it('need to declare the types of input and props to pick - symbol as prop', () => {
    const symbolProp = Symbol('s')
    const result = pick([symbolProp], {[symbolProp]: 'a'})

    result // $ExpectType Pick<{ [symbolProp]: string; }, typeof symbolProp>
  })
})

describe('R.pick with string as props input', () => {
  interface Output {
    a: number,
    c: number,
  }

  it('explicitly declare output', () => {
    const result = pick<Output>('a,c', {a: 1, b: 2, c: 3, d: 4})
    result // $ExpectType Output
    result.a // $ExpectType number

    const curriedResult = pick<Output>('a,c')({a: 1, b: 2, c: 3, d: 4})

    curriedResult.a // $ExpectType number
  })

  it('explicitly declare input and output', () => {
    interface Input {
      a: number,
      b: number,
      c: number,
      d: number,
    }
    const result = pick<Input, Output>('a,c', {a: 1, b: 2, c: 3, d: 4})
    result // $ExpectType Output
    result.a // $ExpectType number

    const curriedResult = pick<Input, Output>('a,c')({
      a: 1,
      b: 2,
      c: 3,
      d: 4,
    })

    curriedResult.a // $ExpectType number
  })

  it('without passing type', () => {
    const result = pick('a,c', {a: 1, b: 2, c: 3, d: 4})
    result // $ExpectType unknown
  })
})
```

</details>

### pickAll

```typescript
pickAll<T, U>(propsToPick: ReadonlyArray<string>, obj: T): U
```

Same as `R.pick` but it won't skip the missing props, i.e. it will assign them to `undefined`.

```javascript
const obj = {
  a : 1,
  b : false,
  foo: 'cherry'
}
const propsToPick = 'a,foo,bar'
const propsToPickList = ['a', 'foo', 'bar']

const result = [
  R.pickAll(propsToPick, obj),
  R.pickAll(propsToPickList, obj),
  R.pickAll('a,bar', obj),
  R.pickAll('bar', obj),
]
const expected = [
  {a:1, foo: 'cherry', bar: undefined},
  {a:1, foo: 'cherry', bar: undefined},
  {a:1, bar: undefined},
  {bar: undefined}
]
// => `result` is equal to `expected`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20obj%20%3D%20%7B%0A%20%20a%20%3A%201%2C%0A%20%20b%20%3A%20false%2C%0A%20%20foo%3A%20'cherry'%0A%7D%0Aconst%20propsToPick%20%3D%20'a%2Cfoo%2Cbar'%0Aconst%20propsToPickList%20%3D%20%5B'a'%2C%20'foo'%2C%20'bar'%5D%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.pickAll(propsToPick%2C%20obj)%2C%0A%20%20R.pickAll(propsToPickList%2C%20obj)%2C%0A%20%20R.pickAll('a%2Cbar'%2C%20obj)%2C%0A%20%20R.pickAll('bar'%2C%20obj)%2C%0A%5D%0Aconst%20expected%20%3D%20%5B%0A%20%20%7Ba%3A1%2C%20foo%3A%20'cherry'%2C%20bar%3A%20undefined%7D%2C%0A%20%20%7Ba%3A1%2C%20foo%3A%20'cherry'%2C%20bar%3A%20undefined%7D%2C%0A%20%20%7Ba%3A1%2C%20bar%3A%20undefined%7D%2C%0A%20%20%7Bbar%3A%20undefined%7D%0A%5D%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%60expected%60">Try the above <strong>R.pickAll</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
pickAll<T, U>(propsToPick: ReadonlyArray<string>, obj: T): U;
pickAll(propsToPick: ReadonlyArray<string>): <T, U>(obj: T) => U;
```

</details>

<details>

<summary><strong>R.pickAll</strong> source</summary>

```javascript
export function pickAll(propsToPick, obj){
  if (arguments.length === 1) return _obj => pickAll(propsToPick, _obj)

  if (obj === null || obj === undefined){
    return undefined
  }
  const keysValue =
    typeof propsToPick === 'string' ? propsToPick.split(',') : propsToPick

  const willReturn = {}
  let counter = 0

  while (counter < keysValue.length){
    if (keysValue[ counter ] in obj){
      willReturn[ keysValue[ counter ] ] = obj[ keysValue[ counter ] ]
    } else {
      willReturn[ keysValue[ counter ] ] = undefined
    }
    counter++
  }

  return willReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { pickAll } from './pickAll'

test('when input is undefined or null', () => {
  expect(pickAll('a', null)).toBe(undefined)
  expect(pickAll('a', undefined)).toBe(undefined)
})

test('with string as condition', () => {
  const obj = {
    a : 1,
    b : 2,
    c : 3,
  }
  const result = pickAll('a,c', obj)
  const resultCurry = pickAll('a,c')(obj)
  const expectedResult = {
    a : 1,
    b : undefined,
    c : 3,
  }

  expect(result).toEqual(expectedResult)
  expect(resultCurry).toEqual(expectedResult)
})

test('with array as condition', () => {
  expect(pickAll([ 'a', 'b', 'c' ], {
    a : 'foo',
    c : 'baz',
  })).toEqual({
    a : 'foo',
    b : undefined,
    c : 'baz',
  })
})
```

</details>

### pipe

```typescript
pipe<T1>(fn0: () => T1): () => T1
```

It performs left-to-right function composition.

```javascript
const result = R.pipe(
  R.filter(val => val > 2),
  R.map(a => a * 2)
)([1, 2, 3, 4])

// => [6, 8]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.pipe(%0A%20%20R.filter(val%20%3D%3E%20val%20%3E%202)%2C%0A%20%20R.map(a%20%3D%3E%20a%20*%202)%0A)(%5B1%2C%202%2C%203%2C%204%5D)%0A%0A%2F%2F%20%3D%3E%20%5B6%2C%208%5D">Try the above <strong>R.pipe</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
pipe<T1>(fn0: () => T1): () => T1;
pipe<V0, T1>(fn0: (x0: V0) => T1): (x0: V0) => T1;
pipe<V0, V1, T1>(fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T1;
pipe<V0, V1, V2, T1>(fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T1;
```

</details>

<details>

<summary><strong>R.pipe</strong> source</summary>

```javascript
import { compose } from './compose'

export function pipe(...fns){
  if (fns.length === 0)
    throw new Error('pipe requires at least one argument')

  return compose(...fns.reverse())
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { add, last, map } from '../rambda'
import { pipe } from './pipe'

test('happy', () => {
  const list = [ 1, 2, 3 ]

  const result = pipe(
    map(add(1)), map(add(10)), last
  )(list)

  expect(result).toEqual(14)
})

test('with bad input', () => {
  expect(() => pipe()).toThrow('pipe requires at least one argument')
})
```

</details>

<details>

<summary>3 failed <italic>Ramda.pipe</italic> specs

> :boom: Reason for the failure: ramda passes context to functions | rambda composed functions have no length
</summary>

```javascript
var assert = require('assert');

var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');
describe('pipe', function() {
  it('performs left-to-right function composition', function() {
    //  f :: (String, Number?) -> ([Number] -> [Number])
    var f = R.pipe(parseInt, R.multiply, R.map);
    eq(f.length, 2);
    eq(f('10')([1, 2, 3]), [10, 20, 30]);
    eq(f('10', 2)([1, 2, 3]), [2, 4, 6]);
  });
  it('passes context to functions', function() {
    function x(val) {
      return this.x * val;
    }
    function y(val) {
      return this.y * val;
    }
    function z(val) {
      return this.z * val;
    }
    var context = {
      a: R.pipe(x, y, z),
      x: 4,
      y: 2,
      z: 1
    };
    eq(context.a(5), 40);
  });
  it('can be applied to one argument', function() {
    var f = function(a, b, c) { return [a, b, c]; };
    var g = R.pipe(f);
    eq(g.length, 3);
    eq(g(1, 2, 3), [1, 2, 3]);
  });
});
```

</details>

### piped

```typescript
piped<T>(input: any, ...fnList: Func<any>[]): T
```

It is basically `R.pipe`, but instead of passing `input` argument as `R.pipe(...)(input)`, you pass it as the first argument.

```javascript
const result = piped(
  [1, 2, 3],
  R.filter(x => x > 1),
  R.map(x => x*10),
)
// => [20, 30]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20piped(%0A%20%20%5B1%2C%202%2C%203%5D%2C%0A%20%20R.filter(x%20%3D%3E%20x%20%3E%201)%2C%0A%20%20R.map(x%20%3D%3E%20x*10)%2C%0A)%0A%2F%2F%20%3D%3E%20%5B20%2C%2030%5D">Try the above <strong>R.piped</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
piped<T>(input: any, ...fnList: Func<any>[]): T;
```

</details>

<details>

<summary><strong>R.piped</strong> source</summary>

```javascript
import { pipe } from './pipe'

export function piped(...inputs){
  const [ input, ...fnList ] = inputs

  return pipe(...fnList)(input)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { add } from './add'
import { filter } from './filter'
import { map } from './map'
import { piped } from './piped'

test('happy', () => {
  const result = piped(
    [ 1, 2, 3 ],
    filter(x => x > 1),
    map(x => x * 10),
    map(add(1))
  )
  const expectedResult = [ 21, 31 ]

  expect(result).toEqual(expectedResult)
})
```

</details>

### pipedAsync

```typescript
pipedAsync<T>(
  input: any,
  ...fns: (Func<any> | Async<any>)[]
): Promise<T>
```

<details>

<summary>All Typescript definitions</summary>

```typescript
pipedAsync<T>(
  input: any,
  ...fns: (Func<any> | Async<any>)[]
): Promise<T>;
```

</details>

### pluck

```typescript
pluck<T>(property: number, list: ReadonlyArray<T>): T
```

It returns list of the values of `property` taken from the all objects inside `list`.

```javascript
const list = [{a: 1}, {a: 2}, {b: 3}]
const property = 'a'

R.pluck(list, property) 
// => [1, 2]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20const%20list%20%3D%20%5B%7Ba%3A%201%7D%2C%20%7Ba%3A%202%7D%2C%20%7Bb%3A%203%7D%5D%0Aconst%20property%20%3D%20'a'%0A%0AR.pluck(list%2C%20property)%20%0A%2F%2F%20%3D%3E%20%5B1%2C%202%5D">Try the above <strong>R.pluck</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
pluck<T>(property: number, list: ReadonlyArray<T>): T;
pluck<K extends keyof T, T>(property: K, list: ReadonlyArray<T>): T[K][];
pluck(property: number): <T>(list: ReadonlyArray<T>) => T;
pluck<P extends string>(property: P): <T>(list: ReadonlyArray<Record<P, T>>) => T[];
```

</details>

<details>

<summary><strong>R.pluck</strong> source</summary>

```javascript
import { map } from './map'

export function pluck(property, list){
  if (arguments.length === 1) return _list => pluck(property, _list)

  const willReturn = []

  map(x => {
    if (x[ property ] !== undefined){
      willReturn.push(x[ property ])
    }
  }, list)

  return willReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { pluck } from './pluck'

test('happy', () => {
  expect(pluck('a')([ { a : 1 }, { a : 2 }, { b : 1 } ])).toEqual([ 1, 2 ])
})

test('with number', () => {
  const input = [
    [ 1, 2 ],
    [ 3, 4 ],
  ]

  expect(pluck(0, input)).toEqual([ 1, 3 ])
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {pluck} from 'rambda'

describe('pluck', () => {
  it('with object', () => {
    interface ListMember {
      a: number,
      b: string,
    }
    const input: ListMember[] = [
      {a: 1, b: 'foo'},
      {a: 2, b: 'bar'},
    ]
    const resultA = pluck('a', input)
    const resultB = pluck('b')(input)
    resultA // $ExpectType number[]
    resultB // $ExpectType string[]
  })

  it('with array', () => {
    const input = [
      [1, 2],
      [3, 4],
      [5, 6],
    ]
    const result = pluck(0, input)
    const resultCurry = pluck(0)(input)
    result // $ExpectType number[]
    resultCurry // $ExpectType number[]
  })
})
```

</details>

<details>

<summary>1 failed <italic>Ramda.pluck</italic> specs

> :boom: Reason for the failure: ramda method behaves as a transducer
</summary>

```javascript
var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');

describe('pluck', function() {
  var people = [
    {name: 'Fred', age: 23},
    {name: 'Wilma', age: 21},
    {name: 'Pebbles', age: 2}
  ];
  it('behaves as a transducer when given a transducer in list position', function() {
    var numbers = [{a: 1}, {a: 2}, {a: 3}, {a: 4}];
    var transducer = R.compose(R.pluck('a'), R.map(R.add(1)), R.take(2));
    eq(R.transduce(transducer, R.flip(R.append), [], numbers), [2, 3]);
  });
});
```

</details>

### prepend

```typescript
prepend<T>(x: T, listOrString: ReadonlyArray<T>): T[]
```

It adds element `x` at the beginning of `listOrString`.

```javascript
const x = 'foo'

const result = [
  R.prepend(x, '_cherry'),
  R.prepend(x, ['bar', 'baz'])
]
// => ['foo_cherry', ['foo', 'bar', 'baz']]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20x%20%3D%20'foo'%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.prepend(x%2C%20'_cherry')%2C%0A%20%20R.prepend(x%2C%20%5B'bar'%2C%20'baz'%5D)%0A%5D%0A%2F%2F%20%3D%3E%20%5B'foo_cherry'%2C%20%5B'foo'%2C%20'bar'%2C%20'baz'%5D%5D">Try the above <strong>R.prepend</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
prepend<T>(x: T, listOrString: ReadonlyArray<T>): T[];
prepend<T>(x: T): (listOrString: ReadonlyArray<T>) => T[];
```

</details>

<details>

<summary><strong>R.prepend</strong> source</summary>

```javascript
export function prepend(x, listOrString){
  if (arguments.length === 1)
    return _listOrString => prepend(x, _listOrString)

  if (typeof listOrString === 'string') return `${ x }${ listOrString }`

  return [ x ].concat(listOrString)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { prepend } from './prepend'

test('happy', () => {
  expect(prepend('f', 'oo')).toEqual('foo')
})

test('prepend', () => {
  expect(prepend('yes', [ 'foo', 'bar', 'baz' ])).toEqual([
    'yes',
    'foo',
    'bar',
    'baz',
  ])

  expect(prepend('foo')([])).toEqual([ 'foo' ])
})
```

</details>

### prevIndex

```typescript
prevIndex(index: number, list: any[]): number
```

It returns the next index of the list when the order is descending.

If we have reached the beginning of the list, then it will return the last index of the list.

```javascript
const list = [1, 2, 3]

const result = [
  R.prevIndex(0, list),
  R.prevIndex(1, list),
  R.prevIndex(2, list),
]
// => [2, 0, 1]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B1%2C%202%2C%203%5D%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.prevIndex(0%2C%20list)%2C%0A%20%20R.prevIndex(1%2C%20list)%2C%0A%20%20R.prevIndex(2%2C%20list)%2C%0A%5D%0A%2F%2F%20%3D%3E%20%5B2%2C%200%2C%201%5D">Try the above <strong>R.prevIndex</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
prevIndex(index: number, list: any[]): number;
```

</details>

<details>

<summary><strong>R.prevIndex</strong> source</summary>

```javascript
export function prevIndex(index, list){
  return index === 0 ? list.length - 1 : index - 1
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { prevIndex } from './prevIndex'

const list = [ 1, 2, 3, 4 ]

test('happy path 1', () => {
  expect(prevIndex(2, list)).toEqual(1)
})

test('happy path 2', () => {
  expect(prevIndex(0, list)).toEqual(3)
})
```

</details>

### produce

```typescript
produce<T>(
  rules: any,
  input: any
): T
```

It returns an object created by applying each value of `rules` to `input` argument

`rules` input is an object with synchronous or asynchronous functions as values.

If there is at least one member of `rules` that is asynchronous, then the return value is a promise.

```javascript
const rules = {
  foo: x =>  > 10,
  bar: x => ({baz: x})
}
const input = 7
const result = R.produce(rules, input)

const expected = {
  foo: false,
  bar: {baz: 7}
}
// => `result` is equal to `expected`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20rules%20%3D%20%7B%0A%20%20foo%3A%20x%20%3D%3E%20%20%3E%2010%2C%0A%20%20bar%3A%20x%20%3D%3E%20(%7Bbaz%3A%20x%7D)%0A%7D%0Aconst%20input%20%3D%207%0Aconst%20result%20%3D%20R.produce(rules%2C%20input)%0A%0Aconst%20expected%20%3D%20%7B%0A%20%20foo%3A%20false%2C%0A%20%20bar%3A%20%7Bbaz%3A%207%7D%0A%7D%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%60expected%60">Try the above <strong>R.produce</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
produce<T>(
  rules: any,
  input: any
): T;
produce<T>(
  rules: any,
): (input: any) => T;
```

</details>

<details>

<summary><strong>R.produce</strong> source</summary>

```javascript
import { map } from './map'
import { type } from './type'

function helper({ condition, inputArgument, prop }){
  return new Promise((resolve, reject) => {
    if (type(condition) !== 'Async'){
      return resolve({
        type    : prop,
        payload : condition(inputArgument),
      })
    }

    condition(inputArgument)
      .then(result => {
        resolve({
          type    : prop,
          payload : result,
        })
      })
      .catch(err => reject(err))
  })
}

export function produce(conditions, inputArgument){
  if (arguments.length === 1){
    return inputArgumentHolder => produce(conditions, inputArgumentHolder)
  }
  let asyncConditionsFlag = false
  for (const prop in conditions){
    if (
      asyncConditionsFlag === false &&
      type(conditions[ prop ]) === 'Async'
    ){
      asyncConditionsFlag = true
    }
  }

  if (asyncConditionsFlag === false){
    const willReturn = {}
    for (const prop in conditions){
      willReturn[ prop ] = conditions[ prop ](inputArgument)
    }

    return willReturn
  }

  const promised = []
  for (const prop in conditions){
    const condition = conditions[ prop ]
    promised.push(helper({
      inputArgument,
      condition,
      prop,
    }))
  }

  return new Promise((resolve, reject) => {
    Promise.all(promised)
      .then(results => {
        const willReturn = {}

        map(result => willReturn[ result.type ] = result.payload, results)

        resolve(willReturn)
      })
      .catch(err => reject(err))
  })
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { delay } from './delay'
import { produce } from './produce'

test('async', async () => {
  const fn = produce({
    foo : async x => {
      await delay(100)

      return `${ x }_ZEPPELIN`
    },
    bar : inputArgument => inputArgument === 5,
  })
  const expected = {
    foo : 'LED_ZEPPELIN',
    bar : false,
  }

  const result = await fn('LED')
  expect(result).toEqual(expected)
})

test('async with error', async () => {
  const fn = produce({
    foo : async x => {
      await delay(100)
      throw new Error(`${ x }_ZEPPELIN`)
    },
    bar : inputArgument => inputArgument === 5,
  })

  try {
    await fn('LED')
    expect(1).toBe(2)
  } catch (e){
    expect(e.message).toBe('LED_ZEPPELIN')
  }
})

test('sync', () => {
  const fn = produce({
    foo : x => x + 1,
    bar : inputArgument => inputArgument === 5,
  })
  const expected = {
    foo : 6,
    bar : true,
  }

  const result = fn(5)
  expect(result).toEqual(expected)
})
```

</details>

### product

```typescript
product(list: ReadonlyArray<number>): number
```

```javascript
R.product([ 2, 3, 4 ])
// => 24)
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.product(%5B%202%2C%203%2C%204%20%5D)%0A%2F%2F%20%3D%3E%2024)">Try the above <strong>R.product</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
product(list: ReadonlyArray<number>): number;
```

</details>

<details>

<summary><strong>R.product</strong> source</summary>

```javascript
import { multiply } from './multiply'
import { reduce } from './reduce'

export const product = reduce(multiply, 1)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { product } from './product'

test('happy', () => {
  expect(product([ 2, 3, 4 ])).toEqual(24)
})

test('bad input', () => {
  expect(product([ null ])).toEqual(0)
  expect(product([])).toEqual(1)
})
```

</details>

### promiseAllObject

```typescript
promiseAllObject<T>(
  input: ObjectWithPromises
): Promise<T>
```

`Promise.all` version, which accept object of asynchronous functions as input.

```javascript
const fn = ms => new Promise(resolve => {
  setTimeout(() => {
    resolve(ms + 10)
  }, ms)
})
const promises = {
  a : fn(1),
  b : fn(2),
}

const result = R.promiseAllObject(promises)
const expected = { a:11, b:12 }
// `result` resolves to `expected`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20fn%20%3D%20ms%20%3D%3E%20new%20Promise(resolve%20%3D%3E%20%7B%0A%20%20setTimeout(()%20%3D%3E%20%7B%0A%20%20%20%20resolve(ms%20%2B%2010)%0A%20%20%7D%2C%20ms)%0A%7D)%0Aconst%20promises%20%3D%20%7B%0A%20%20a%20%3A%20fn(1)%2C%0A%20%20b%20%3A%20fn(2)%2C%0A%7D%0A%0Aconst%20result%20%3D%20R.promiseAllObject(promises)%0Aconst%20expected%20%3D%20%7B%20a%3A11%2C%20b%3A12%20%7D%0A%2F%2F%20%60result%60%20resolves%20to%20%60expected%60">Try the above <strong>R.promiseAllObject</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
promiseAllObject<T>(
  input: ObjectWithPromises
): Promise<T>;
```

</details>

<details>

<summary><strong>R.promiseAllObject</strong> source</summary>

```javascript
export function promiseAllObject(promises){
  return new Promise((res, rej) => {
    let counter = 0
    const props = {}
    const promisedArr = []

    for (const prop in promises){
      props[ counter ] = prop
      promisedArr.push(promises[ prop ])
      counter++
    }

    Promise.all(promisedArr)
      .then(result => {
        const willReturn = {}
        result.map((val, key) => {
          const prop = props[ key ]
          willReturn[ prop ] = val
        })

        res(willReturn)
      })
      .catch(rej)
  })
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { promiseAllObject } from './promiseAllObject'

test('happy', async () => {
  const delay = ms =>
    new Promise(res => {
      setTimeout(() => {
        res(ms)
      }, ms)
    })
  const promises = {
    a : delay(1),
    b : delay(2),
    c : delay(3),
  }
  const result = await promiseAllObject(promises)

  expect(result).toEqual({
    a : 1,
    b : 2,
    c : 3,
  })
})
```

</details>

### prop

```typescript
prop<P extends keyof T, T>(propToFind: P, obj: T): T[P]
```

It returns the value of property `propToFind` in `obj`.

If there is no such property, it returns `undefined`.

```javascript
const result = [
  R.prop('x', {x: 100}), 
  R.prop('x', {a: 1}) 
]
// => [100, undefined]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.prop('x'%2C%20%7Bx%3A%20100%7D)%2C%20%0A%20%20R.prop('x'%2C%20%7Ba%3A%201%7D)%20%0A%5D%0A%2F%2F%20%3D%3E%20%5B100%2C%20undefined%5D">Try the above <strong>R.prop</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
prop<P extends keyof T, T>(propToFind: P, obj: T): T[P];
prop<P extends string>(p: P): <T>(propToFind: Record<P, T>) => T;
prop<P extends string, T>(p: P): (propToFind: Record<P, T>) => T;
```

</details>

<details>

<summary><strong>R.prop</strong> source</summary>

```javascript
export function prop(propToFind, obj){
  if (arguments.length === 1) return _obj => prop(propToFind, _obj)

  if (!obj) return undefined

  return obj[ propToFind ]
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { prop } from './prop'

test('prop', () => {
  expect(prop('foo')({ foo : 'baz' })).toEqual('baz')

  expect(prop('bar')({ foo : 'baz' })).toEqual(undefined)

  expect(prop('bar')(null)).toEqual(undefined)
})
```

</details>

### propEq

```typescript
propEq<T, K extends keyof T>(propToFind: K, valueToMatch: T[K], obj: T): boolean
```

It returns true if `obj` has property `propToFind` and its value is equal to `valueToMatch`.

```javascript
const obj = { foo: 'bar' }
const secondObj = { foo: 1 }

const propToFind = 'foo'
const valueToMatch = 'bar'

const result = [
  R.propEq(propToFind, valueToMatch, obj),
  R.propEq(propToFind, valueToMatch, secondObj)
]
// => [true, false]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20obj%20%3D%20%7B%20foo%3A%20'bar'%20%7D%0Aconst%20secondObj%20%3D%20%7B%20foo%3A%201%20%7D%0A%0Aconst%20propToFind%20%3D%20'foo'%0Aconst%20valueToMatch%20%3D%20'bar'%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.propEq(propToFind%2C%20valueToMatch%2C%20obj)%2C%0A%20%20R.propEq(propToFind%2C%20valueToMatch%2C%20secondObj)%0A%5D%0A%2F%2F%20%3D%3E%20%5Btrue%2C%20false%5D">Try the above <strong>R.propEq</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
propEq<T, K extends keyof T>(propToFind: K, valueToMatch: T[K], obj: T): boolean;
propEq<T, K extends keyof T>(propToFind: K, valueToMatch: T[K]): (obj: T) => boolean;
propEq<T, K extends keyof T>(propToFind: K): {
   (valueToMatch: T[K], obj: T): boolean;
   (valueToMatch: T[K]): (obj: T) => boolean;
};
```

</details>

<details>

<summary><strong>R.propEq</strong> source</summary>

```javascript
import { curry } from './curry'

function propEqFn(
  propToFind, valueToMatch, obj
){
  if (!obj) return false

  return obj[ propToFind ] === valueToMatch
}

export const propEq = curry(propEqFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { propEq } from './propEq'

test('happy', () => {
  expect(propEq('foo', 'bar')({ foo : 'bar' })).toBeTrue()
  expect(propEq('foo', 'bar')({ foo : 'baz' })).toBeFalse()
  expect(propEq('foo')('bar')({ foo : 'baz' })).toBeFalse()
  expect(propEq(
    'foo', 'bar', null
  )).toBeFalse()
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {propEq} from 'rambda'

const property = 'foo'
const numberProperty = 1
const value = 'bar'
const obj = {[property]: value}
const objWithNumberIndex = {[numberProperty]: value}

describe('propEq', () => {
  it('happy', () => {
    const result = propEq(property, value, obj)
    result // $ExpectType boolean
  })
  it('number is property', () => {
    const result = propEq(1, value, objWithNumberIndex)
    result // $ExpectType boolean
  })
  it('with optional property', () => {
    interface MyType {
      optional?: string | number,
    }

    const myObject: MyType = {}
    const valueToFind = '1111'
    const optionalValueToFind: string | number | undefined = '1111'
    const result = propEq('optional', valueToFind, myObject)
    const result2 = propEq('optional', optionalValueToFind, myObject)
    result // $ExpectType boolean
    result2 // $ExpectType boolean
  })
})
```

</details>

<details>

<summary>1 failed <italic>Ramda.propEq</italic> specs

> :boom: Reason for the failure: ramda method pass to `equals` method if available
</summary>

```javascript
var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');

describe('propEq', function() {
  var obj1 = {name: 'Abby', age: 7, hair: 'blond'};
  var obj2 = {name: 'Fred', age: 12, hair: 'brown'};
  it('handles number as property', function() {
    var deities = ['Cthulhu', 'Dagon', 'Yog-Sothoth'];
    eq(R.propEq(0, 'Cthulhu', deities), true);
    eq(R.propEq(1, 'Dagon', deities), true);
    eq(R.propEq(2, 'Yog-Sothoth', deities), true);
    eq(R.propEq(-1, 'Yog-Sothoth', deities), true);
    eq(R.propEq(3, undefined, deities), true);
  });
  it('has R.equals semantics', function() {
    function Just(x) { this.value = x; }
    Just.prototype.equals = function(x) {
      return x instanceof Just && R.equals(x.value, this.value);
    };
    eq(R.propEq('value', 0, {value: -0}), false);
    eq(R.propEq('value', -0, {value: 0}), false);
    eq(R.propEq('value', NaN, {value: NaN}), true);
    eq(R.propEq('value', new Just([42]), {value: new Just([42])}), true);
  });
});
```

</details>

### propIs

```typescript
propIs(type: any, name: string, obj: any): boolean
```

It returns `true` if `property` of `obj` is from `target` type.

```javascript
const obj = {a:1, b: 'foo'}
const property = 'foo'

const result = [
  R.propIs(String, property, obj),
  R.propIs(Number, property, obj)
]
// => [true, false]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20obj%20%3D%20%7Ba%3A1%2C%20b%3A%20'foo'%7D%0Aconst%20property%20%3D%20'foo'%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.propIs(String%2C%20property%2C%20obj)%2C%0A%20%20R.propIs(Number%2C%20property%2C%20obj)%0A%5D%0A%2F%2F%20%3D%3E%20%5Btrue%2C%20false%5D">Try the above <strong>R.propIs</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
propIs(type: any, name: string, obj: any): boolean;
propIs(type: any, name: string): (obj: any) => boolean;
propIs(type: any): {
    (name: string, obj: any): boolean;
    (name: string): (obj: any) => boolean;
};
```

</details>

<details>

<summary><strong>R.propIs</strong> source</summary>

```javascript
import { curry } from './curry'
import { is } from './is'

function propIsFn(
  targetPrototype, property, obj
){
  return is(targetPrototype, obj[ property ])
}

export const propIs = curry(propIsFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { propIs } from './propIs'

const obj = { value : 1 }
const property = 'value'

test('when true', () => {
  expect(propIs(
    Number, property, obj
  )).toBeTrue()
})

test('when false', () => {
  expect(propIs(
    String, property, obj
  )).toBeFalse()
  expect(propIs(
    String, property, {}
  )).toBeFalse()
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {propIs} from 'rambda'

const property = 'a'
const obj = {a: 1}

describe('propIs', () => {
  it('happy', () => {
    const result = propIs(Number, property, obj)
    result // $ExpectType boolean
  })

  it('curried', () => {
    const result = propIs(Number, property)(obj)
    result // $ExpectType boolean
  })
})
```

</details>

### propOr

```typescript
propOr<T, U, V>(defaultValue: T, property: string, obj: U): V
```

It returns either `defaultValue` or the value of `property` in `obj`.

```javascript
const obj = {a: 1}
const defaultValue = 'DEFAULT_VALUE'
const property = 'a'

const result = [
  R.propOr(defaultValue, property, obj),
  R.propOr(defaultValue, 'foo', obj)
]
// => [1, 'DEFAULT_VALUE']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20obj%20%3D%20%7Ba%3A%201%7D%0Aconst%20defaultValue%20%3D%20'DEFAULT_VALUE'%0Aconst%20property%20%3D%20'a'%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.propOr(defaultValue%2C%20property%2C%20obj)%2C%0A%20%20R.propOr(defaultValue%2C%20'foo'%2C%20obj)%0A%5D%0A%2F%2F%20%3D%3E%20%5B1%2C%20'DEFAULT_VALUE'%5D">Try the above <strong>R.propOr</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
propOr<T, U, V>(defaultValue: T, property: string, obj: U): V;
propOr<T>(defaultValue: T, property: string): <U, V>(obj: U) => V;
propOr<T>(defaultValue: T): <U, V>(property: string, obj: U) => V;
```

</details>

<details>

<summary><strong>R.propOr</strong> source</summary>

```javascript
import { curry } from './curry'
import { defaultTo } from './defaultTo'

function propOrFn(
  defaultValue, property, obj
){
  if (!obj) return defaultValue

  return defaultTo(defaultValue, obj[ property ])
}

export const propOr = curry(propOrFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { propOr } from './propOr'

test('propOr (result)', () => {
  const obj = { a : 1 }
  expect(propOr(
    'default', 'a', obj
  )).toEqual(1)
  expect(propOr(
    'default', 'notExist', obj
  )).toEqual('default')
  expect(propOr(
    'default', 'notExist', null
  )).toEqual('default')
})

test('propOr (currying)', () => {
  const obj = { a : 1 }
  expect(propOr('default')('a', obj)).toEqual(1)
  expect(propOr('default', 'a')(obj)).toEqual(1)
  expect(propOr('default')('notExist', obj)).toEqual('default')
  expect(propOr('default', 'notExist')(obj)).toEqual('default')
})
```

</details>

### random

```typescript
random(minInclusive: number, maxInclusive: number): number
```

It returns a random number between `min` inclusive and `max` inclusive.

<details>

<summary>All Typescript definitions</summary>

```typescript
random(minInclusive: number, maxInclusive: number): number;
```

</details>

<details>

<summary><strong>R.random</strong> source</summary>

```javascript
export function random(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {random} from './random'
import {range} from './range'

test('when returns true', () => {
  range(0, 100).map(() => {
    const randomResult = random(1, 10)
    expect(randomResult).toBeLessThanOrEqual(10)
    expect(randomResult).toBeGreaterThanOrEqual(1)
  })
})
```

</details>

### randomString

```typescript
randomString(length?: number, alphabetOnlyFlag?: boolean): string
```

<details>

<summary>All Typescript definitions</summary>

```typescript
randomString(length?: number, alphabetOnlyFlag?: boolean): string;
```

</details>

<details>

<summary><strong>R.randomString</strong> source</summary>

```javascript
import { head } from './head'
import { range } from './range'
import { shuffle } from './shuffle'

const charCodesString = [ ...range(65, 90), ...range(97, 122) ]
const charCodes = [ ...charCodesString, ...range(49, 57) ]

export function randomString(length = 8, stringTag = false){
  const loops = range(0, length)
  const charSet = stringTag ? charCodesString : charCodes

  return loops.map(x => String.fromCharCode(head(shuffle(charSet)))).join('')
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { randomString } from './randomString'

test('happy', () => {
  expect(randomString().length).toBe(8)
})

test('with length', () => {
  expect(randomString(3).length).toBe(3)
})

test('only string randomString', () => {
  expect(randomString(3, true).length).toBe(3)
})
```

</details>

### range

```typescript
range(start: number, end: number): number[]
```

It returns list of numbers between `start`(inclusive) to `end`(exclusive) numbers.

```javascript
R.range(0, 5)
// => [0, 1, 2, 3, 4]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.range(0%2C%205)%0A%2F%2F%20%3D%3E%20%5B0%2C%201%2C%202%2C%203%2C%204%5D">Try the above <strong>R.range</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
range(start: number, end: number): number[];
range(start: number): (end: number) => number[];
```

</details>

<details>

<summary><strong>R.range</strong> source</summary>

```javascript
export function range(start, end){
  if (arguments.length === 1) return _end => range(start, _end)

  if (Number.isNaN(Number(start)) || Number.isNaN(Number(end))){
    throw new TypeError('Both arguments to range must be numbers')
  }

  if (end < start) return []

  const len = end - start
  const willReturn = Array(len)

  for (let i = 0; i < len; i++){
    willReturn[ i ] = start + i
  }

  return willReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { range } from './range'

test('happy', () => {
  expect(range(0, 10)).toEqual([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ])
})

test('end range is bigger than start range', () => {
  expect(range(7, 3)).toEqual([])
  expect(range(5, 5)).toEqual([])
})

test('with bad input', () => {
  const throwMessage = 'Both arguments to range must be numbers'
  expect(() => range('a', 6)).toThrow(throwMessage)
  expect(() => range(6, 'z')).toThrow(throwMessage)
})

test('curry', () => {
  expect(range(0)(10)).toEqual([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ])
})
```

</details>

### reduce

```typescript
reduce<T, TResult>(reducer: (prev: TResult, current: T, i: number) => TResult, initialValue: TResult, list: ReadonlyArray<T>): TResult
```

```javascript
const list = [1, 2, 3]
const initialValue = 10
const reducer = (prev, current) => prev * current

const result = R.reduce(reducer, initialValue, list)
// => 60
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B1%2C%202%2C%203%5D%0Aconst%20initialValue%20%3D%2010%0Aconst%20reducer%20%3D%20(prev%2C%20current)%20%3D%3E%20prev%20*%20current%0A%0Aconst%20result%20%3D%20R.reduce(reducer%2C%20initialValue%2C%20list)%0A%2F%2F%20%3D%3E%2060">Try the above <strong>R.reduce</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
reduce<T, TResult>(reducer: (prev: TResult, current: T, i: number) => TResult, initialValue: TResult, list: ReadonlyArray<T>): TResult;
reduce<T, TResult>(reducer: (prev: TResult, current: T) => TResult, initialValue: TResult, list: ReadonlyArray<T>): TResult;
reduce<T, TResult>(reducer: (prev: TResult, current: T, i?: number) => TResult): (initialValue: TResult, list: ReadonlyArray<T>) => TResult;
reduce<T, TResult>(reducer: (prev: TResult, current: T, i?: number) => TResult, initialValue: TResult): (list: ReadonlyArray<T>) => TResult;
```

</details>

<details>

<summary><strong>R.reduce</strong> source</summary>

```javascript
import { curry } from './curry'
import { _isArray } from './_internals/_isArray'
import { _keys } from './_internals/_keys'

function reduceFn(
  reducer, acc, list
){
  if (list === undefined){
    return acc
  }

  if (_isArray(list)){
    let index = 0
    const len = list.length

    while (index < len){
      acc = reducer(acc, list[ index ], index, list)
      index++
    }
  } else {
    let index = 0
    const keys = _keys(list)
    const len = keys.length

    while (index < len){
      const key = keys[ index ]
      acc = reducer(acc, key, list[ key ], list)
      index++
    }
  }

  return acc
}

export const reduce = curry(reduceFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { reduce } from './reduce'

test('happy', () => {
  const reducer = (
    prev, current, i
  ) => {
    expect(i).toBeNumber()

    return prev + current
  }
  const initialValue = 1
  const list = [ 1, 2, 3 ]

  expect(reduce(
    reducer, initialValue, list
  )).toEqual(7)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {reduce} from 'rambda'

describe('reduce', () => {
  it('happy', () => {
    const result = reduce<number, number>(
      (acc, elem) => {
        acc // $ExpectType number
        elem // $ExpectType number
        return acc + elem
      },
      1,
      [1, 2, 3]
    )

    result // $ExpectType number
  })

  it('with two types', () => {
    const result = reduce<number, string>(
      (acc, elem) => {
        acc // $ExpectType string
        elem // $ExpectType number

        return `${acc}${elem}`
      },
      'foo',
      [1, 2, 3]
    )

    result // $ExpectType string
  })

  it('with index', () => {
    const result = reduce<number, number>(
      (acc, elem, i) => {
        acc // $ExpectType number
        elem // $ExpectType number
        i // $ExpectType number
        return acc + elem
      },
      1,
      [1, 2, 3]
    )

    result // $ExpectType number
  })

  it('fallback', () => {
    const result = reduce(
      (acc, val) => {
        acc // $ExpectType number
        return acc + val
      },
      1,
      [1, 2, 3]
    )

    result // $ExpectType number
  })

  it('fallback with index', () => {
    const result = reduce(
      (acc, val, i) => {
        acc // $ExpectType number
        i // $ExpectType number
        return acc + val
      },
      1,
      [1, 2, 3]
    )

    result // $ExpectType number
  })

  it('fallback with two types', () => {
    const result = reduce(
      (acc, val) => {
        acc // $ExpectType string
        return acc + val
      },
      'foo',
      [1, 2, 3]
    )

    result // $ExpectType string
  })
})
```

</details>

<details>

<summary>2 failed <italic>Ramda.reduce</italic> specs

> :boom: Reason for the failure: rambda doesn't have `R.reduced` method | ramda method pass to `reduce` method
</summary>

```javascript
var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');

describe('reduce', function() {
  var add = function(a, b) {return a + b;};
  var mult = function(a, b) {return a * b;};
  it('Prefers the use of the iterator of an object over reduce (and handles short-circuits)', function() {
    var symIterator = (typeof Symbol !== 'undefined') ? Symbol.iterator : '@@iterator';
    function Reducible(arr) {
      this.arr = arr;
    }
    Reducible.prototype.reduce = function(f, init) {
      var acc = init;
      for (var i = 0; i < this.arr.length; i += 1) {
        acc = f(acc, this.arr[i]);
      }
      return acc;
    };
    Reducible.prototype[symIterator] = function() {
      var a = this.arr;
      return {
        _pos: 0,
        next: function() {
          if (this._pos < a.length) {
            var v = a[this._pos];
            this._pos += 1;
            return {
              value: v,
              done: false
            };
          } else {
            return {
              done: true
            };
          }
        }
      };
    };
    var xf = R.take(2);
    var apendingT = { };
    apendingT['@@transducer/result'] = R.identity;
    apendingT['@@transducer/step'] = R.flip(R.append);
    var rfn = xf(apendingT);
    var list = new Reducible([1, 2, 3, 4, 5, 6]);
    eq(R.reduce(rfn, [], list), [1, 2]);
  });
  it('short circuits with reduced', function() {
    var addWithMaxOf10 = function(acc, val) {return acc + val > 10 ? R.reduced(acc) : acc + val;};
    eq(R.reduce(addWithMaxOf10, 0, [1, 2, 3, 4]), 10);
    eq(R.reduce(addWithMaxOf10, 0, [2, 4, 6, 8]), 6);
  });
});
```

</details>

### reject

```typescript
reject<T>(predicate: FilterFunctionArray<T>): (x: T[]) => T[]
```

It has the opposite effect of `R.filter`.

It will return those members of `list` that return `false` when applied to `predicate` function.

```javascript
const list = [1, 2, 3, 4]
const predicate = x => x > 2

const result = [
  R.reject(predicate, list)
]
// => [1, 2]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B1%2C%202%2C%203%2C%204%5D%0Aconst%20predicate%20%3D%20x%20%3D%3E%20x%20%3E%202%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.reject(predicate%2C%20list)%0A%5D%0A%2F%2F%20%3D%3E%20%5B1%2C%202%5D">Try the above <strong>R.reject</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
reject<T>(predicate: FilterFunctionArray<T>): (x: T[]) => T[];
reject<T>(predicate: FilterFunctionArray<T>, x: T[]): T[];
reject<T, U>(predicate: FilterFunctionObject<T>): (x: Dictionary<T>) => Dictionary<T>;
reject<T>(predicate: FilterFunctionObject<T>, x: Dictionary<T>): Dictionary<T>;
```

</details>

<details>

<summary><strong>R.reject</strong> source</summary>

```javascript
import { filter } from './filter'

export function reject(predicate, list){
  if (arguments.length === 1) return _list => reject(predicate, _list)

  return filter((x, i) => !predicate(x, i), list)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { reject } from './reject'

const isOdd = n => n % 2 === 1

test('with array', () => {
  expect(reject(isOdd, [ 1, 2, 3, 4 ])).toEqual([ 2, 4 ])
})

test('with object', () => {
  expect(reject(isOdd, {
    a : 1,
    b : 2,
    c : 3,
    d : 4,
  })).toEqual({
    b : 2,
    d : 4,
  })
})

test('pass index as second argument', () => {
  reject((x, i) => {
    expect(typeof x).toBe('number')
    expect(typeof i).toBe('number')
  },
  [ 10, 12, 15 ])
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {reject} from 'rambda'

describe('reject with array', () => {
  it('1 curry', () => {
    const x = reject<number>(a => {
      a // $ExpectType number
      return a > 1
    })([1, 2, 3])
    x // $ExpectType number[]
  })
  it('1', () => {
    const x = reject<number>(
      a => {
        a // $ExpectType number
        return a > 1
      },
      [1, 2, 3]
    )
    x // $ExpectType number[]
  })
  it('2', () => {
    const x = reject<number>(
      (a, b) => {
        a // $ExpectType number
        return a > 1
      },
      [1, 2, 3]
    )
    x // $ExpectType number[]
  })
})

describe('reject with objects', () => {
  it('curry', () => {
    const x = reject<number, number>((a, b, c) => {
      b // $ExpectType string
      c // $ExpectType Dictionary<number>

      return a > 1
    })({a: 1, b: 2})
    x // $ExpectType Dictionary<number>
  })

  it('object with three arguments predicate', () => {
    const x = reject<number>(
      (a, b, c) => {
        b // $ExpectType string
        c // $ExpectType Dictionary<number>

        return a > 1
      },
      {a: 1, b: 2}
    )
    x // $ExpectType Dictionary<number>
  })

  it('object with two arguments predicate', () => {
    const x = reject<number>(
      (a, b) => {
        b // $ExpectType string
        return a > 1
      },
      {a: 1, b: 2}
    )
    x // $ExpectType Dictionary<number>
  })
  it('object with one argument predicate', () => {
    const x = reject<number>(
      a => {
        a // $ExpectType number
        return a > 1
      },
      {a: 1, b: 2}
    )
    x // $ExpectType Dictionary<number>
  })
})
```

</details>

<details>

<summary>1 failed <italic>Ramda.reject</italic> specs

> :boom: Reason for the failure: ramda method dispatches to `filter` method
</summary>

```javascript
var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');

describe('reject', function() {
  var even = function(x) {return x % 2 === 0;};
  it('dispatches to `filter` method', function() {
    function Nothing() {}
    Nothing.value = new Nothing();
    Nothing.prototype.filter = function() {
      return this;
    };
    function Just(x) { this.value = x; }
    Just.prototype.filter = function(pred) {
      return pred(this.value) ? this : Nothing.value;
    };
    var m = new Just(42);
    eq(R.filter(R.T, m), m);
    eq(R.filter(R.F, m), Nothing.value);
    eq(R.reject(R.T, m), Nothing.value);
    eq(R.reject(R.F, m), m);
  });
});
```

</details>

### remove

```typescript
remove(
  toRemove: string | RegExp | (string | RegExp)[],
  text: string
): string
```

It will remove all `toRemove` entries from `text` sequentially. 

`toRemove` argument can be either a list of strings/regular expressions or a single string/regular expression.

```javascript
const result = remove(
  ['foo','bar'],
  'foo bar baz foo'
)
// => 'baz foo'
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20remove(%0A%20%20%5B'foo'%2C'bar'%5D%2C%0A%20%20'foo%20bar%20baz%20foo'%0A)%0A%2F%2F%20%3D%3E%20'baz%20foo'">Try the above <strong>R.remove</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
remove(
  toRemove: string | RegExp | (string | RegExp)[],
  text: string
): string;
remove(
  toRemove: string | RegExp | (string | RegExp)[]
): (text: string) => string;
```

</details>

<details>

<summary><strong>R.remove</strong> source</summary>

```javascript
import { replace } from './replace'
import { type } from './type'

export function remove(inputs, text){
  if (arguments.length === 1){
    return textHolder => remove(inputs, textHolder)
  }

  if (type(text) !== 'String'){
    throw new Error(`R.remove requires string not ${ type(text) }`)
  }

  if (type(inputs) !== 'Array'){
    return replace(
      inputs, '', text
    ).trim()
  }

  let textCopy = text

  inputs.forEach(singleInput => {
    textCopy = replace(
      singleInput, '', textCopy
    ).trim()
  })

  return textCopy
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { remove } from './remove'

test('happy', () => {
  const inputs = [ /foo/, /not\shere/, /also/, 'bar' ]
  const text = 'foo bar baz foo'

  const result = remove(inputs)(text)
  const expectedResult = 'baz foo'

  expect(result).toEqual(expectedResult)
})

test('with strings + curry', () => {
  const inputs = [ 'foo', 'bar' ]
  const text = 'foo bar baz foo'

  const result = remove(inputs)(text)
  const expectedResult = 'baz foo'

  expect(result).toEqual(expectedResult)
})

test('with strings and regex', () => {
  const inputs = [ /foo/g, 'bar' ]
  const text = 'foo bar baz foo'

  const result = remove(inputs, text)
  const expectedResult = 'baz'

  expect(result).toEqual(expectedResult)
})

test('text is not string', () => {
  const inputs = [ /foo/g, 'bar' ]
  const text = null

  expect(() => remove(inputs, text)).toThrow()
})

test('with regexes', () => {
  const inputs = [ /foo/g, /bar/ ]
  const text = 'foo bar baz foo'

  const result = remove(inputs, text)
  const expectedResult = 'baz'

  expect(result).toEqual(expectedResult)
})

test('with single rule', () => {
  const inputs = /foo/g
  const text = 'foo bar baz foo'

  const result = remove(inputs, text)
  const expectedResult = 'bar baz'

  expect(result).toEqual(expectedResult)
})
```

</details>

### renameProps

```typescript
renameProps(rules: object, input: object): object
```

If property `prop` of `rules` is also a property in `input`, then rename `input` property to `rules[prop]`.

<details>

<summary>All Typescript definitions</summary>

```typescript
renameProps(rules: object, input: object): object;
renameProps(rules: object): (input: object) => object;
```

</details>

<details>

<summary><strong>R.renameProps</strong> source</summary>

```javascript
import { merge } from './merge'
import { omit } from './omit'

export function renameProps(conditions, inputObject){
  if (inputObject === undefined){
    return inputObjectHolder => renameProps(conditions, inputObjectHolder)
  }
  const renamed = {}
  Object.keys(conditions).forEach(renameConditionProp => {
    if (Object.keys(inputObject).includes(renameConditionProp)){
      renamed[ conditions[ renameConditionProp ] ] =
        inputObject[ renameConditionProp ]
    }
  })

  return merge(renamed, omit(Object.keys(conditions), inputObject))
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { renameProps } from './renameProps'

test('renameProps', () => {
  const rules = {
    f : 'foo',
    b : 'bar',
  }
  const input = {
    f : 1,
    b : 2,
  }
  const result = renameProps(rules, input)
  const expectedResult = {
    foo : 1,
    bar : 2,
  }
  expect(result).toEqual(expectedResult)
})

test('curry', () => {
  const rules = {
    f : 'foo',
    b : 'bar',
  }
  const input = {
    f : 1,
    b : 2,
  }
  const result = renameProps(rules)(input)
  const expectedResult = {
    foo : 1,
    bar : 2,
  }
  expect(result).toEqual(expectedResult)
})
```

</details>

### repeat

```typescript
repeat<T>(x: T, timesToRepeat: number): T[]
```

It returns a list of `x` input repeated `timesToRepeat` input.

```javascript
R.repeat('foo', 3)
// => ['foo', 'foo', 'foo']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.repeat('foo'%2C%203)%0A%2F%2F%20%3D%3E%20%5B'foo'%2C%20'foo'%2C%20'foo'%5D">Try the above <strong>R.repeat</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
repeat<T>(x: T, timesToRepeat: number): T[];
repeat<T>(x: T): (timesToRepeat: number) => T[];
```

</details>

<details>

<summary><strong>R.repeat</strong> source</summary>

```javascript
export function repeat(x, timesToRepeat){
  if (arguments.length === 1){
    return _timesToRepeat => repeat(x, _timesToRepeat)
  }

  return Array(timesToRepeat).fill(x)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { repeat } from './repeat'

test('repeat', () => {
  expect(repeat('')(3)).toEqual([ '', '', '' ])
  expect(repeat('foo', 3)).toEqual([ 'foo', 'foo', 'foo' ])

  const obj = {}
  const arr = repeat(obj, 3)

  expect(arr).toEqual([ {}, {}, {} ])

  expect(arr[ 0 ] === arr[ 1 ]).toBeTrue()
})
```

</details>

### replace

```typescript
replace(strOrRegex: RegExp | string, replacer: string, str: string): string
```

It replaces `strOrRegex` found in `str` with `replacer`.

```javascript
const strOrRegex = /o/g

const result = R.replace(strOrRegex, '|0|', 'foo')
// => 'f|0||0|'
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20strOrRegex%20%3D%20%2Fo%2Fg%0A%0Aconst%20result%20%3D%20R.replace(strOrRegex%2C%20'%7C0%7C'%2C%20'foo')%0A%2F%2F%20%3D%3E%20'f%7C0%7C%7C0%7C'">Try the above <strong>R.replace</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
replace(strOrRegex: RegExp | string, replacer: string, str: string): string;
replace(strOrRegex: RegExp | string, replacer: string): (str: string) => string;
replace(strOrRegex: RegExp | string): (replacer: string) => (str: string) => string;
```

</details>

<details>

<summary><strong>R.replace</strong> source</summary>

```javascript
export function replace(
  pattern, replacer, str
){
  if (replacer === undefined){
    return (_replacer, _str) => replace(
      pattern, _replacer, _str
    )
  } else if (str === undefined){
    return _str => replace(
      pattern, replacer, _str
    )
  }

  return str.replace(pattern, replacer)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { replace } from './replace'

test('happy', () => {
  expect(replace(
    'foo', 'yes', 'foo bar baz'
  )).toEqual('yes bar baz')
})

test('1', () => {
  expect(replace(/\s/g)('|')('foo bar baz')).toEqual('foo|bar|baz')
})

test('2', () => {
  expect(replace(/\s/g)('|', 'foo bar baz')).toEqual('foo|bar|baz')
})

test('3', () => {
  expect(replace(/\s/g, '|')('foo bar baz')).toEqual('foo|bar|baz')
})
```

</details>

### reset

```typescript
reset(): void
```

<details>

<summary>All Typescript definitions</summary>

```typescript
reset(): void;
```

</details>

### reverse

```typescript
reverse<T>(listOrString: ReadonlyArray<T>): T[]
```

It returns a reversed copy of `listOrString` input.

```javascript
const result = [
  R.reverse('foo'),
  R.reverse([1, 2, 3])
]
// => ['oof', [3, 2, 1]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.reverse('foo')%2C%0A%20%20R.reverse(%5B1%2C%202%2C%203%5D)%0A%5D%0A%2F%2F%20%3D%3E%20%5B'oof'%2C%20%5B3%2C%202%2C%201%5D">Try the above <strong>R.reverse</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
reverse<T>(listOrString: ReadonlyArray<T>): T[];
reverse(listOrString: string): string;
```

</details>

<details>

<summary><strong>R.reverse</strong> source</summary>

```javascript
export function reverse(listOrString){
  if (typeof listOrString === 'string'){
    return listOrString.split('').reverse()
      .join('')
  }

  const clone = listOrString.slice()

  return clone.reverse()
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { reverse } from './reverse'

test('happy', () => {
  expect(reverse([ 1, 2, 3 ])).toEqual([ 3, 2, 1 ])
})

test('with string', () => {
  expect(reverse('baz')).toEqual('zab')
})

test('it doesn\'t mutate', () => {
  const arr = [ 1, 2, 3 ]

  expect(reverse(arr)).toEqual([ 3, 2, 1 ])

  expect(arr).toEqual([ 1, 2, 3 ])
})
```

</details>

### set

```typescript
set<T, U>(lens: Lens, replacer: U, obj: T): T
```

It returns a copied **Object** or **Array** with modified `lens` focus set to `replacer` value.

```javascript
const input = {x: 1, y: 2}
const xLens = R.lensProp('x')

R.set(xLens, 4, input) //=> {x: 4, y: 2}
R.set(xLens, 8, input) //=> {x: 8, y: 2}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20const%20input%20%3D%20%7Bx%3A%201%2C%20y%3A%202%7D%0Aconst%20xLens%20%3D%20R.lensProp('x')%0A%0AR.set(xLens%2C%204%2C%20input)%20%2F%2F%3D%3E%20%7Bx%3A%204%2C%20y%3A%202%7D%0AR.set(xLens%2C%208%2C%20input)%20%2F%2F%3D%3E%20%7Bx%3A%208%2C%20y%3A%202%7D">Try the above <strong>R.set</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
set<T, U>(lens: Lens, replacer: U, obj: T): T;
set<U>(lens: Lens, replacer: U): <T>(obj: T) => T;
set(lens: Lens): <T, U>(replacer: U, obj: T) => T;
```

</details>

<details>

<summary><strong>R.set</strong> source</summary>

```javascript
import { always } from './always'
import { over } from './over'

export function set(
  lens, replacer, x
){
  if (arguments.length === 1) return (_v, _x) => set(
    lens, _v, _x
  )
  if (arguments.length === 2) return _x => set(
    lens, replacer, _x
  )

  return over(
    lens, always(replacer), x
  )
}
```

</details>

### setter

```typescript
setter(keyOrObject: string | object, value?: any): void
```

<details>

<summary>All Typescript definitions</summary>

```typescript
setter(keyOrObject: string | object, value?: any): void;
```

</details>

### shuffle

```typescript
shuffle<T>(list: T[]): T[]
```

It returns a randomized copy of array.

<details>

<summary>All Typescript definitions</summary>

```typescript
shuffle<T>(list: T[]): T[];
```

</details>

<details>

<summary><strong>R.shuffle</strong> source</summary>

```javascript
export function shuffle(arrayRaw){
  const array = arrayRaw.concat()
  let counter = array.length
  while (counter > 0){
    const index = Math.floor(Math.random() * counter)
    counter--
    const temp = array[ counter ]
    array[ counter ] = array[ index ]
    array[ index ] = temp
  }

  return array
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { range } from './range'
import { shuffle } from './shuffle'
import { uniq } from './uniq'

test('happy', () => {
  const list = range(0, 7)
  const result = range(0, 300).map(() => shuffle(list))
  const allUniq = uniq(result)
  expect(allUniq.length > 150).toBe(true)
})
```

</details>

### slice

```typescript
slice(from: number, to: number, list: string): string
```

It returns `listOrString` between `from` and `to` indexes.

```javascript
const list = [0, 1, 2, 3, 4, 5]
const str = 'FOO_BAR'
const from = 1
const to = 4

const result = [
  R.slice(str, to, list),
  R.slice(from, to, list)
]
// => ['OO_', [1, 2, 3]]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B0%2C%201%2C%202%2C%203%2C%204%2C%205%5D%0Aconst%20str%20%3D%20'FOO_BAR'%0Aconst%20from%20%3D%201%0Aconst%20to%20%3D%204%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.slice(str%2C%20to%2C%20list)%2C%0A%20%20R.slice(from%2C%20to%2C%20list)%0A%5D%0A%2F%2F%20%3D%3E%20%5B'OO_'%2C%20%5B1%2C%202%2C%203%5D%5D">Try the above <strong>R.slice</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
slice(from: number, to: number, list: string): string;
slice<T>(from: number, to: number, list: T[]): T[];
slice(from: number, to: number): {
  (list: string): string;
  <T>(list: T[]): T[];
};
slice(from: number): {
  (to: number, list: string): string;
  <T>(to: number, list: T[]): T[];
};
```

</details>

<details>

<summary><strong>R.slice</strong> source</summary>

```javascript
import { curry } from './curry'

function sliceFn(
  from, to, list
){
  return list.slice(from, to)
}

export const slice = curry(sliceFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { slice } from './slice'

test('slice', () => {
  expect(slice(
    1, 3, [ 'a', 'b', 'c', 'd' ]
  )).toEqual([ 'b', 'c' ])
  expect(slice(
    1, Infinity, [ 'a', 'b', 'c', 'd' ]
  )).toEqual([ 'b', 'c', 'd' ])
  expect(slice(
    0, -1, [ 'a', 'b', 'c', 'd' ]
  )).toEqual([ 'a', 'b', 'c' ])
  expect(slice(
    -3, -1, [ 'a', 'b', 'c', 'd' ]
  )).toEqual([ 'b', 'c' ])
  expect(slice(
    0, 3, 'ramda'
  )).toEqual('ram')
})
```

</details>

### sort

```typescript
sort<T>(sortFn: (a: T, b: T) => number, list: ReadonlyArray<T>): T[]
```

It returns copy of `list` sorted by `sortFn` function.

```javascript
const list = [
  {a: 2},
  {a: 3},
  {a: 1}
]
const sortFn = (x, y) => {
  return x.a > y.a ? 1 : -1
}

const result = R.sort(list, sortFn)
const expected = [
  {a: 1},
  {a: 2},
  {a: 3}
]
// => `result` is equal to `expected`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%0A%20%20%7Ba%3A%202%7D%2C%0A%20%20%7Ba%3A%203%7D%2C%0A%20%20%7Ba%3A%201%7D%0A%5D%0Aconst%20sortFn%20%3D%20(x%2C%20y)%20%3D%3E%20%7B%0A%20%20return%20x.a%20%3E%20y.a%20%3F%201%20%3A%20-1%0A%7D%0A%0Aconst%20result%20%3D%20R.sort(list%2C%20sortFn)%0Aconst%20expected%20%3D%20%5B%0A%20%20%7Ba%3A%201%7D%2C%0A%20%20%7Ba%3A%202%7D%2C%0A%20%20%7Ba%3A%203%7D%0A%5D%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%60expected%60">Try the above <strong>R.sort</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
sort<T>(sortFn: (a: T, b: T) => number, list: ReadonlyArray<T>): T[];
sort<T>(sortFn: (a: T, b: T) => number): (list: ReadonlyArray<T>) => T[];
```

</details>

<details>

<summary><strong>R.sort</strong> source</summary>

```javascript
export function sort(sortFn, list){
  if (arguments.length === 1) return _list => sort(sortFn, _list)

  const clone = list.slice()

  return clone.sort(sortFn)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { sort } from './sort'

const fn = (a, b) => a > b ? 1 : -1

test('sort', () => {
  expect(sort((a, b) => a - b)([ 2, 3, 1 ])).toEqual([ 1, 2, 3 ])
})

test('it doesn\'t mutate', () => {
  const list = [ 'foo', 'bar', 'baz' ]

  expect(sort(fn, list)).toEqual([ 'bar', 'baz', 'foo' ])

  expect(list[ 0 ]).toBe('foo')
  expect(list[ 1 ]).toBe('bar')
  expect(list[ 2 ]).toBe('baz')
})
```

</details>

### sortBy

```typescript
sortBy<T>(sortFn: (a: T) => Ord, list: ReadonlyArray<T>): T[]
```

It returns copy of `list` sorted by `sortFn` function.

```javascript
const list = [
  {a: 2},
  {a: 3},
  {a: 1}
]
const sortFn = x => x.a

const result = R.sortBy(list, sortFn)
const expected = [
  {a: 1},
  {a: 2},
  {a: 3}
]
// => `result` is equal to `expected`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%0A%20%20%7Ba%3A%202%7D%2C%0A%20%20%7Ba%3A%203%7D%2C%0A%20%20%7Ba%3A%201%7D%0A%5D%0Aconst%20sortFn%20%3D%20x%20%3D%3E%20x.a%0A%0Aconst%20result%20%3D%20R.sortBy(list%2C%20sortFn)%0Aconst%20expected%20%3D%20%5B%0A%20%20%7Ba%3A%201%7D%2C%0A%20%20%7Ba%3A%202%7D%2C%0A%20%20%7Ba%3A%203%7D%0A%5D%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%60expected%60">Try the above <strong>R.sortBy</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
sortBy<T>(sortFn: (a: T) => Ord, list: ReadonlyArray<T>): T[];
sortBy(sortFn: (a: any) => Ord): <T>(list: ReadonlyArray<T>) => T[];
```

</details>

<details>

<summary><strong>R.sortBy</strong> source</summary>

```javascript
export function sortBy(sortFn, list){
  if (arguments.length === 1) return _list => sortBy(sortFn, _list)

  const clone = list.slice()

  return clone.sort((a, b) => {
    const aSortResult = sortFn(a)
    const bSortResult = sortFn(b)

    if (aSortResult === bSortResult) return 0

    return aSortResult < bSortResult ? -1 : 1
  })
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { compose } from './compose'
import { prop } from './prop'
import { sortBy } from './sortBy'
import { toLower } from './toLower'

test('happy', () => {
  const input = [ { a : 2 }, { a : 1 }, { a : 1 }, { a : 3 } ]
  const expected = [ { a : 1 }, { a : 1 }, { a : 2 }, { a : 3 } ]

  const result = sortBy(x => x.a)(input)
  expect(result).toEqual(expected)
})

test('with compose', () => {
  const alice = {
    name : 'ALICE',
    age  : 101,
  }
  const bob = {
    name : 'Bob',
    age  : -10,
  }
  const clara = {
    name : 'clara',
    age  : 314.159,
  }
  const people = [ clara, bob, alice ]
  const sortByNameCaseInsensitive = sortBy(compose(toLower, prop('name')))

  expect(sortByNameCaseInsensitive(people)).toEqual([ alice, bob, clara ])
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {sortBy} from 'rambda'

describe('sortBy', () => {
  it('happy', () => {
    interface Input {
      a: number,
    }

    function fn(x: Input): number {
      return x.a
    }

    const input: Input[] = [{a: 2}, {a: 1}, {a: 0}]
    const result = sortBy(fn, input)

    result // $ExpectType Input[]
    result[0].a // $ExpectType number
  })
})
```

</details>

<details>

<summary>1 failed <italic>Ramda.sortBy</italic> specs

> :boom: Reason for the failure: ramda works with array-like objects
</summary>

```javascript
var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');

var albums = [
  {title: 'Art of the Fugue', artist: 'Glenn Gould', genre: 'Baroque'},
  {title: 'A Farewell to Kings', artist: 'Rush', genre: 'Rock'},
  {title: 'Timeout', artist: 'Dave Brubeck Quartet', genre: 'Jazz'},
  {title: 'Fly By Night', artist: 'Rush', genre: 'Rock'},
  {title: 'Goldberg Variations', artist: 'Daniel Barenboim', genre: 'Baroque'},
  {title: 'New World Symphony', artist: 'Leonard Bernstein', genre: 'Romantic'},
  {title: 'Romance with the Unseen', artist: 'Don Byron', genre: 'Jazz'},
  {title: 'Somewhere In Time', artist: 'Iron Maiden', genre: 'Metal'},
  {title: 'In Times of Desparation', artist: 'Danny Holt', genre: 'Modern'},
  {title: 'Evita', artist: 'Various', genre: 'Broadway'},
  {title: 'Five Leaves Left', artist: 'Nick Drake', genre: 'Folk'},
  {title: 'The Magic Flute', artist: 'John Eliot Gardiner', genre: 'Classical'}
];
describe('sortBy', function() {
  it('sorts array-like object', function() {
    var args = (function() { return arguments; }('c', 'a', 'b'));
    var result = R.sortBy(R.identity, args);
    eq(result[0], 'a');
    eq(result[1], 'b');
    eq(result[2], 'c');
  });
});
```

</details>

### sortObject

```typescript
sortObject<T>(predicate: SortObjectPredicate<T>, input: { [key: string]: T }): { [keyOutput: string]: T }
```

It returns a sorted version of `input` object.

```javascript
const predicate = (propA, propB, valueA, valueB) => valueA > valueB ? -1 : 1

const result = R.sortObject(predicate, {a:1, b: 4, c: 2})
// => {b: 4, c: 2, a: 1}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20predicate%20%3D%20(propA%2C%20propB%2C%20valueA%2C%20valueB)%20%3D%3E%20valueA%20%3E%20valueB%20%3F%20-1%20%3A%201%0A%0Aconst%20result%20%3D%20R.sortObject(predicate%2C%20%7Ba%3A1%2C%20b%3A%204%2C%20c%3A%202%7D)%0A%2F%2F%20%3D%3E%20%7Bb%3A%204%2C%20c%3A%202%2C%20a%3A%201%7D">Try the above <strong>R.sortObject</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
sortObject<T>(predicate: SortObjectPredicate<T>, input: { [key: string]: T }): { [keyOutput: string]: T };
sortObject<T>(predicate: SortObjectPredicate<T>): (input: { [key: string]: T }) => { [keyOutput: string]: T };
```

</details>

<details>

<summary><strong>R.sortObject</strong> source</summary>

```javascript
import { sort } from './sort'

export function sortObject(predicate, obj){
  if (arguments.length === 1){
    return _obj => sortObject(predicate, _obj)
  }
  const keys = Object.keys(obj)
  const sortedKeys = sort((a, b) => predicate(
    a, b, obj[ a ], obj[ b ]
  ), keys)
  const toReturn = {}
  sortedKeys.forEach(singleKey => {
    toReturn[ singleKey ] = obj[ singleKey ]
  })

  return toReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { runTests } from 'helpers-fn'

import { equals } from './equals'
import { sortObject } from './sortObject'

const obj = {
  c : 1,
  a : 2,
  b : 3,
}
const predicateA = (
  propA, propB, valueA, valueB
) => propA > propB ? -1 : 1
const expectationA = [ 'c', 'b', 'a' ]
const predicateB = (
  propA, propB, valueA, valueB
) => propA < propB ? -1 : 1
const expectationB = [ 'a', 'b', 'c' ]
const predicateC = (
  propA, propB, valueA, valueB
) =>
  valueA > valueB ? -1 : 1
const expectationC = [ 'b', 'a', 'c' ]

const fn = ([ predicate, expectation ]) => {
  const result = sortObject(predicate, obj)
  const sortedKeys = Object.keys(result)
  const isSameObject = equals(obj, result)

  return isSameObject && equals(sortedKeys, expectation)
}

const testData = {
  label : 'foo',
  data  : [
    { ok : [ predicateA, expectationA ] },
    { ok : [ predicateB, expectationB ] },
    { ok : [ predicateC, expectationC ] },
  ],
  fn,
}

runTests(testData)
```

</details>

### split

```typescript
split(separator: string | RegExp): (str: string) => string[]
```

Curried version of `String.prototype.split`

```javascript
const str = 'foo|bar|baz'
const separator = |'
const result = R.split(separator, str))
// => [ 'foo', 'bar', 'baz' ]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20str%20%3D%20'foo%7Cbar%7Cbaz'%0Aconst%20separator%20%3D%20%7C'%0Aconst%20result%20%3D%20R.split(separator%2C%20str))%0A%2F%2F%20%3D%3E%20%5B%20'foo'%2C%20'bar'%2C%20'baz'%20%5D">Try the above <strong>R.split</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
split(separator: string | RegExp): (str: string) => string[];
split(separator: string | RegExp, str: string): string[];
```

</details>

<details>

<summary><strong>R.split</strong> source</summary>

```javascript
export function split(separator, str){
  if (arguments.length === 1) return _str => split(separator, _str)

  return str.split(separator)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { split } from './split'

test('split', () => {
  expect(split('|')('foo|bar|baz')).toEqual([ 'foo', 'bar', 'baz' ])

  expect(split('.', 'a.b.c.xyz.d')).toEqual([ 'a', 'b', 'c', 'xyz', 'd' ])
})
```

</details>

### splitEvery

```typescript
splitEvery<T>(sliceLength: number, listOrString: ReadonlyArray<T>): T[][]
```

It splits `listOrString` into slices of `sliceLength`.

```javascript
const result = [
  R.splitEvery(2, [1, 2, 3]), 
  R.splitEvery(3, 'foobar') 
]

const expected = [
  [[1, 2], [3]],
  ['foo', 'bar']
]
// => `result` is equal to `expected`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.splitEvery(2%2C%20%5B1%2C%202%2C%203%5D)%2C%20%0A%20%20R.splitEvery(3%2C%20'foobar')%20%0A%5D%0A%0Aconst%20expected%20%3D%20%5B%0A%20%20%5B%5B1%2C%202%5D%2C%20%5B3%5D%5D%2C%0A%20%20%5B'foo'%2C%20'bar'%5D%0A%5D%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%60expected%60">Try the above <strong>R.splitEvery</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
splitEvery<T>(sliceLength: number, listOrString: ReadonlyArray<T>): T[][];
splitEvery(sliceLength: number, listOrString: string): string[];
splitEvery(sliceLength: number): {
  (listOrString: string): string[];
  <T>(listOrString: ReadonlyArray<T>): T[][];
};
```

</details>

<details>

<summary><strong>R.splitEvery</strong> source</summary>

```javascript
export function splitEvery(sliceLength, listOrString){
  if (arguments.length === 1){
    return _listOrString => splitEvery(sliceLength, _listOrString)
  }

  if (sliceLength < 1){
    throw new Error('First argument to splitEvery must be a positive integer')
  }

  const willReturn = []
  let counter = 0

  while (counter < listOrString.length){
    willReturn.push(listOrString.slice(counter, counter += sliceLength))
  }

  return willReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { splitEvery } from './splitEvery'

test('happy', () => {
  expect(splitEvery(3, [ 1, 2, 3, 4, 5, 6, 7 ])).toEqual([
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7 ],
  ])

  expect(splitEvery(3)('foobarbaz')).toEqual([ 'foo', 'bar', 'baz' ])
})

test('with bad input', () => {
  expect(() =>
    expect(splitEvery(0)('foo')).toEqual([ 'f', 'o', 'o' ])).toThrow('First argument to splitEvery must be a positive integer')
})
```

</details>

### startsWith

```typescript
startsWith(target: string, str: string): boolean
```

Curried version of `String.prototype.startsWith`

```javascript
const str = 'foo-bar'

const result = [
  R.startsWith('foo', str),
  R.startsWith('bar', str)
]
// => [true, false]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20str%20%3D%20'foo-bar'%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.startsWith('foo'%2C%20str)%2C%0A%20%20R.startsWith('bar'%2C%20str)%0A%5D%0A%2F%2F%20%3D%3E%20%5Btrue%2C%20false%5D">Try the above <strong>R.startsWith</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
startsWith(target: string, str: string): boolean;
startsWith(target: string): (str: string) => boolean;
```

</details>

<details>

<summary><strong>R.startsWith</strong> source</summary>

```javascript
export function startsWith(target, str){
  if (arguments.length === 1) return _str => startsWith(target, _str)

  return str.startsWith(target)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { startsWith } from './startsWith'

test('true', () => {
  const result = startsWith('foo', 'foo-bar')

  expect(result).toBeTrue()
})

test('false', () => {
  const result = startsWith('baz')('foo-bar')

  expect(result).toBeFalse()
})
```

</details>

<details>

<summary>4 failed <italic>Ramda.startsWith</italic> specs

> :boom: Reason for the failure: rambda doesn't support arrays
</summary>

```javascript
var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');

describe('startsWith', function() {
  it('should return true when an array starts with the provided value', function() {
    eq(R.startsWith(['a'], ['a', 'b', 'c']), true);
  });
  it('should return true when an array starts with the provided values', function() {
    eq(R.startsWith(['a', 'b'], ['a', 'b', 'c']), true);
  });
  it('should return false when an array does not start with the provided value', function() {
    eq(R.startsWith(['b'], ['a', 'b', 'c']), false);
  });
  it('should return false when an array does not start with the provided values', function() {
    eq(R.startsWith(['b', 'c'], ['a', 'b', 'c']), false);
  });
});
```

</details>

### subtract

```typescript
subtract(x: number, y: number): number
```

Curried version of `x - y`

```javascript
const x = 3
const y = 1

R.subtract(x, y) 
// => 2
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20const%20x%20%3D%203%0Aconst%20y%20%3D%201%0A%0AR.subtract(x%2C%20y)%20%0A%2F%2F%20%3D%3E%202">Try the above <strong>R.subtract</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
subtract(x: number, y: number): number;
subtract(x: number): (y: number) => number;
```

</details>

<details>

<summary><strong>R.subtract</strong> source</summary>

```javascript
export function subtract(a, b){
  if (arguments.length === 1) return _b => subtract(a, _b)

  return a - b
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { subtract } from './subtract'

test('happy', () => {
  expect(subtract(2, 1)).toEqual(1)
  expect(subtract(2)(1)).toEqual(1)
})
```

</details>

### sum

```typescript
sum(list: ReadonlyArray<number>): number
```

```javascript
R.sum([1, 2, 3, 4, 5]) 
// => 15
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.sum(%5B1%2C%202%2C%203%2C%204%2C%205%5D)%20%0A%2F%2F%20%3D%3E%2015">Try the above <strong>R.sum</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
sum(list: ReadonlyArray<number>): number;
```

</details>

<details>

<summary><strong>R.sum</strong> source</summary>

```javascript
export function sum(list){
  return list.reduce((prev, current) => prev + current, 0)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { sum } from './sum'

test('happy', () => {
  expect(sum([ 1, 2, 3, 4, 5 ])).toBe(15)
})
```

</details>

### switcher

```typescript
switcher<T>(valueToMatch: any): Switchem<T>
```

Edited fork of [Switchem](https://github.com/planttheidea/switchem) library.

```javascript
const valueToMatch = {foo: 1}

const result = R.switcher(valueToMatch)
  .is('baz', 'is baz')
  .is(x => typeof x === 'boolean', 'is boolean')
  .is({foo: 1}, 'Property foo is 1')
  .default('is bar')

// => 'Property foo is 1'
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20valueToMatch%20%3D%20%7Bfoo%3A%201%7D%0A%0Aconst%20result%20%3D%20R.switcher(valueToMatch)%0A%20%20.is('baz'%2C%20'is%20baz')%0A%20%20.is(x%20%3D%3E%20typeof%20x%20%3D%3D%3D%20'boolean'%2C%20'is%20boolean')%0A%20%20.is(%7Bfoo%3A%201%7D%2C%20'Property%20foo%20is%201')%0A%20%20.default('is%20bar')%0A%0A%2F%2F%20%3D%3E%20'Property%20foo%20is%201'">Try the above <strong>R.switcher</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
switcher<T>(valueToMatch: any): Switchem<T>;
```

</details>

<details>

<summary><strong>R.switcher</strong> source</summary>

```javascript
import { equals } from './equals'

const NO_MATCH_FOUND = Symbol ? Symbol('NO_MATCH_FOUND') : undefined

const getMatchingKeyValuePair = (
  cases, testValue, defaultValue
) => {
  let iterationValue

  for (let index = 0; index < cases.length; index++){
    iterationValue = cases[ index ].test(testValue)

    if (iterationValue !== NO_MATCH_FOUND){
      return iterationValue
    }
  }

  return defaultValue
}

const isEqual = (testValue, matchValue) => {
  const willReturn =
    typeof testValue === 'function' ?
      testValue(matchValue) :
      equals(testValue, matchValue)

  return willReturn
}

const is = (testValue, matchResult = true) => ({
  key  : testValue,
  test : matchValue =>
    isEqual(testValue, matchValue) ? matchResult : NO_MATCH_FOUND,
})

class Switchem{
  constructor(
    defaultValue, cases, willMatch
  ){
    if (
      defaultValue !== undefined &&
      cases === undefined &&
      willMatch === undefined
    ){
      this.cases = []
      this.defaultValue = undefined
      this.willMatch = defaultValue
    } else {
      this.cases = cases
      this.defaultValue = defaultValue
      this.willMatch = willMatch
    }

    return this
  }

  default(defaultValue){
    const holder = new Switchem(
      defaultValue, this.cases, this.willMatch
    )

    return holder.match(this.willMatch)
  }

  is(testValue, matchResult){
    return new Switchem(
      this.defaultValue,
      [ ...this.cases, is(testValue, matchResult) ],
      this.willMatch
    )
  }

  match(matchValue){
    return getMatchingKeyValuePair(
      this.cases, matchValue, this.defaultValue
    )
  }
}

export function switcher(input){
  return new Switchem(input)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { add } from './add'
import { delay } from './delay'
import { identity } from './identity'
import { switcher } from './switcher'
import { tap } from './tap'
import { trim } from './trim'
import { type } from './type'

test('accept function as answers', () => {
  const fn = switcher('foo').is('bar', tap)
    .is('foo', add(1))
    .default(trim)

  expect(fn(2)).toEqual(3)
})

test('with boolean tuple', () => {
  const a = true
  const b = false
  const result = switcher([ a, b ])
    .is([ false, false ], '0')
    .is([ false, true ], '1')
    .is([ true, true ], '2')
    .default('3')

  expect(result).toEqual('3')
})

test('with boolean tuple - second test', () => {
  const a = true
  const b = true
  const result = switcher([ a, b ])
    .is([ false, false ], '0')
    .is([ false, true ], '1')
    .is([ true, true ], '2')
    .default('3')

  expect(result).toEqual('2')
})

test('works with objects as arguments', () => {
  const result = switcher({ a : 1 })
    .is({ a : 1 }, 'it is bar')
    .is('baz', 'it is baz')
    .default('it is default')

  expect(result).toEqual('it is bar')
})

const switchFn = input =>
  switcher(input)
    .is({ a : 1 }, 'it is bar')
    .is(x => x.length && x.length === 7, 'has length of 7')
    .is('baz', 'it is baz')
    .default('it is default')

test('hits default of no matches', () => {
  expect(switchFn(1)).toEqual('it is default')
})

test('works with function as condition', () => {
  expect(switchFn([ 0, 1, 2, 3, 4, 5, 6 ])).toEqual('has length of 7')
})

test('works with string as condition', () => {
  expect(switchFn('baz')).toEqual('it is baz')
})

test('works with functions as condition result', () => {
  const input = 'foo'
  const result = switcher(input).is('foo', delay)
    .default(identity)

  expect(type(result())).toEqual('Promise')
})
```

</details>

### symmetricDifference

```typescript
symmetricDifference<T>(x: ReadonlyArray<T>, y: ReadonlyArray<T>): T[]
```

It returns a merged list of `x` and `y` with all equal elements removed.

```javascript
const x = [ 1, 2, 3, 4 ]
const y = [ 3, 4, 5, 6 ]

const result = symmetricDifference(x, y)
// => [ 1, 2, 5, 6 ]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20x%20%3D%20%5B%201%2C%202%2C%203%2C%204%20%5D%0Aconst%20y%20%3D%20%5B%203%2C%204%2C%205%2C%206%20%5D%0A%0Aconst%20result%20%3D%20symmetricDifference(x%2C%20y)%0A%2F%2F%20%3D%3E%20%5B%201%2C%202%2C%205%2C%206%20%5D">Try the above <strong>R.symmetricDifference</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
symmetricDifference<T>(x: ReadonlyArray<T>, y: ReadonlyArray<T>): T[];
symmetricDifference<T>(x: ReadonlyArray<T>): <T>(y: ReadonlyArray<T>) => T[];
```

</details>

<details>

<summary><strong>R.symmetricDifference</strong> source</summary>

```javascript
import { concat } from './concat'
import { filter } from './filter'
import { includes } from './includes'

export function symmetricDifference(x, y){
  if (arguments.length === 1){
    return _y => symmetricDifference(x, _y)
  }

  return concat(filter(value => !includes(value, y), x),
    filter(value => !includes(value, x), y))
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { symmetricDifference } from './symmetricDifference'

test('symmetricDifference', () => {
  const list1 = [ 1, 2, 3, 4 ]
  const list2 = [ 3, 4, 5, 6 ]
  expect(symmetricDifference(list1)(list2)).toEqual([ 1, 2, 5, 6 ])

  expect(symmetricDifference([], [])).toEqual([])
})

test('symmetricDifference with objects', () => {
  const list1 = [ { id : 1 }, { id : 2 }, { id : 3 }, { id : 4 } ]
  const list2 = [ { id : 3 }, { id : 4 }, { id : 5 }, { id : 6 } ]
  expect(symmetricDifference(list1)(list2)).toEqual([
    { id : 1 },
    { id : 2 },
    { id : 5 },
    { id : 6 },
  ])
})
```

</details>

### T

```typescript
T(): boolean
```

```javascript
R.T() 
// => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.T()%20%0A%2F%2F%20%3D%3E%20true">Try the above <strong>R.T</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
T(): boolean;
```

</details>

<details>

<summary><strong>R.T</strong> source</summary>

```javascript
export function T(){
  return true
}
```

</details>

### tail

```typescript
tail<T>(listOrString: ReadonlyArray<T>): T[]
```

It returns all but the first element of `listOrString`.

```javascript
const result = [
  R.tail([1, 2, 3]),  
  R.tail('foo') 
]
// => [[2, 3], 'oo']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.tail(%5B1%2C%202%2C%203%5D)%2C%20%20%0A%20%20R.tail('foo')%20%0A%5D%0A%2F%2F%20%3D%3E%20%5B%5B2%2C%203%5D%2C%20'oo'%5D">Try the above <strong>R.tail</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
tail<T>(listOrString: ReadonlyArray<T>): T[];
tail(listOrString: string): string;
```

</details>

<details>

<summary><strong>R.tail</strong> source</summary>

```javascript
import { drop } from './drop'

export function tail(listOrString){
  return drop(1, listOrString)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { tail } from './tail'

test('tail', () => {
  expect(tail([ 1, 2, 3 ])).toEqual([ 2, 3 ])
  expect(tail([ 1, 2 ])).toEqual([ 2 ])
  expect(tail([ 1 ])).toEqual([])
  expect(tail([])).toEqual([])

  expect(tail('abc')).toEqual('bc')
  expect(tail('ab')).toEqual('b')
  expect(tail('a')).toEqual('')
  expect(tail('')).toEqual('')
})
```

</details>

### take

```typescript
take<T>(howMany: number, listOrString: ReadonlyArray<T>): T[]
```

It returns the first `howMany` elements of `listOrString`.

```javascript
const howMany = 2

const result = [
  R.take(howMany, [1, 2, 3]),
  R.take(howMany, 'foobar'),
]
// => [[1, 2], 'fo']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20howMany%20%3D%202%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.take(howMany%2C%20%5B1%2C%202%2C%203%5D)%2C%0A%20%20R.take(howMany%2C%20'foobar')%2C%0A%5D%0A%2F%2F%20%3D%3E%20%5B%5B1%2C%202%5D%2C%20'fo'%5D">Try the above <strong>R.take</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
take<T>(howMany: number, listOrString: ReadonlyArray<T>): T[];
take(howMany: number, listOrString: string): string;
take<T>(howMany: number): {
  (listOrString: string): string;
  (listOrString: ReadonlyArray<T>): T[];
};
```

</details>

<details>

<summary><strong>R.take</strong> source</summary>

```javascript
import baseSlice from './_internals/baseSlice'

export function take(howMany, listOrString){
  if (arguments.length === 1)
    return _listOrString => take(howMany, _listOrString)
  if (howMany < 0) return listOrString.slice()
  if (typeof listOrString === 'string') return listOrString.slice(0, howMany)

  return baseSlice(
    listOrString, 0, howMany
  )
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { take } from './take'

test('happy', () => {
  const arr = [ 'foo', 'bar', 'baz' ]

  expect(take(1, arr)).toEqual([ 'foo' ])

  expect(arr).toEqual([ 'foo', 'bar', 'baz' ])

  expect(take(2)([ 'foo', 'bar', 'baz' ])).toEqual([ 'foo', 'bar' ])
  expect(take(3, [ 'foo', 'bar', 'baz' ])).toEqual([ 'foo', 'bar', 'baz' ])
  expect(take(4, [ 'foo', 'bar', 'baz' ])).toEqual([ 'foo', 'bar', 'baz' ])
  expect(take(3)('rambda')).toEqual('ram')
})

test('with negative index', () => {
  expect(take(-1, [ 1, 2, 3 ])).toEqual([ 1, 2, 3 ])
  expect(take(-Infinity, [ 1, 2, 3 ])).toEqual([ 1, 2, 3 ])
})

test('with zero index', () => {
  expect(take(0, [ 1, 2, 3 ])).toEqual([])
})
```

</details>

<details>

<summary>3 failed <italic>Ramda.take</italic> specs

> :boom: Reason for the failure: rambda doesn't have 'R.into` method
</summary>

```javascript
var assert = require('assert');
var sinon = require('sinon');

var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');
describe('take', function() {
  it('handles zero correctly (#1224)', function() {
    eq(R.into([], R.take(0), [1, 2, 3]), []);
  });
  it('steps correct number of times', function() {
    var spy = sinon.spy();
    R.into([], R.compose(R.map(spy), R.take(2)), [1, 2, 3]);
    sinon.assert.calledTwice(spy);
  });
  it('transducer called for every member of list if `n` is < 0', function() {
    var spy = sinon.spy();
    R.into([], R.compose(R.map(spy), R.take(-1)), [1, 2, 3]);
    sinon.assert.calledThrice(spy);
  });
});
```

</details>

### takeLast

```typescript
takeLast<T>(howMany: number, listOrString: ReadonlyArray<T>): T[]
```

It returns the last `howMany` elements of `listOrString`.

```javascript
const howMany = 2

const result = [
  R.takeLast(howMany, [1, 2, 3]),
  R.takeLast(howMany, 'foobar'),
]
// => [[2, 3], 'ar']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20howMany%20%3D%202%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.takeLast(howMany%2C%20%5B1%2C%202%2C%203%5D)%2C%0A%20%20R.takeLast(howMany%2C%20'foobar')%2C%0A%5D%0A%2F%2F%20%3D%3E%20%5B%5B2%2C%203%5D%2C%20'ar'%5D">Try the above <strong>R.takeLast</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
takeLast<T>(howMany: number, listOrString: ReadonlyArray<T>): T[];
takeLast(howMany: number, listOrString: string): string;
takeLast<T>(howMany: number): {
  (listOrString: string): string;
  (listOrString: ReadonlyArray<T>): T[];
};
```

</details>

<details>

<summary><strong>R.takeLast</strong> source</summary>

```javascript
import baseSlice from './_internals/baseSlice'

export function takeLast(howMany, listOrString){
  if (arguments.length === 1)
    return _listOrString => takeLast(howMany, _listOrString)

  const len = listOrString.length
  if (howMany < 0) return listOrString.slice()
  let numValue = howMany > len ? len : howMany

  if (typeof listOrString === 'string')
    return listOrString.slice(len - numValue)

  numValue = len - numValue

  return baseSlice(
    listOrString, numValue, len
  )
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { takeLast } from './takeLast'

test('with arrays', () => {
  expect(takeLast(1, [ 'foo', 'bar', 'baz' ])).toEqual([ 'baz' ])

  expect(takeLast(2)([ 'foo', 'bar', 'baz' ])).toEqual([ 'bar', 'baz' ])

  expect(takeLast(3, [ 'foo', 'bar', 'baz' ])).toEqual([ 'foo', 'bar', 'baz' ])

  expect(takeLast(4, [ 'foo', 'bar', 'baz' ])).toEqual([ 'foo', 'bar', 'baz' ])

  expect(takeLast(10, [ 'foo', 'bar', 'baz' ])).toEqual([ 'foo', 'bar', 'baz' ])
})

test('with strings', () => {
  expect(takeLast(3, 'rambda')).toEqual('bda')

  expect(takeLast(7, 'rambda')).toEqual('rambda')
})

test('with negative index', () => {
  expect(takeLast(-1, [ 1, 2, 3 ])).toEqual([ 1, 2, 3 ])
  expect(takeLast(-Infinity, [ 1, 2, 3 ])).toEqual([ 1, 2, 3 ])
})
```

</details>

### tap

```typescript
tap<T>(fn: (a: T) => any, x: T): T
```

It applies function `fn` to input `x` and returns `x`. 

One use case is debuging in the middle of `R.compose`.

```javascript
const list = [1, 2, 3]

R.compose(
  R.map(x => x * 2)
  R.tap(console.log),
  R.filter(x => x > 1)
)(list)
// => `2` and `3` will be logged
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B1%2C%202%2C%203%5D%0A%0AR.compose(%0A%20%20R.map(x%20%3D%3E%20x%20*%202)%0A%20%20R.tap(console.log)%2C%0A%20%20R.filter(x%20%3D%3E%20x%20%3E%201)%0A)(list)%0A%2F%2F%20%3D%3E%20%602%60%20and%20%603%60%20will%20be%20logged">Try the above <strong>R.tap</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
tap<T>(fn: (a: T) => any, x: T): T;
tap<T>(fn: (a: T) => any): (x: T) => T;
```

</details>

<details>

<summary><strong>R.tap</strong> source</summary>

```javascript
export function tap(fn, x){
  if (arguments.length === 1) return _x => tap(fn, _x)

  fn(x)

  return x
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { tap } from './tap'

test('tap', () => {
  let a = 1
  const sayX = x => a = x

  expect(tap(sayX, 100)).toEqual(100)
  expect(tap(sayX)(100)).toEqual(100)
  expect(a).toEqual(100)
})
```

</details>

<details>

<summary>2 failed <italic>Ramda.tap</italic> specs

> :boom: Reason for the failure: ramda can act as a transducer
</summary>

```javascript
var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');
var listXf = require('./helpers/listXf');
var _curry2 = require('rambda/internal/_curry2');

describe('tap', function() {
  var pushToList = _curry2(function(lst, x) { lst.push(x); });
  it('can act as a transducer', function() {
    var sideEffect = [];
    var numbers = [1,2,3,4,5];
    var xf = R.compose(R.map(R.identity), R.tap(pushToList(sideEffect)));
    eq(R.into([], xf, numbers), numbers);
    eq(sideEffect, numbers);
  });
  it('dispatches to transformer objects', function() {
    var sideEffect = [];
    var pushToSideEffect = pushToList(sideEffect);
    eq(R.tap(pushToSideEffect, listXf), {
      f: pushToSideEffect,
      xf: listXf
    });
  });
});
```

</details>

### tapAsync

```typescript
tapAsync<T>(fn: Func<any> | Promise<any>, input: T): T
```

Asynchronous version of `R.tap`.

<details>

<summary>All Typescript definitions</summary>

```typescript
tapAsync<T>(fn: Func<any> | Promise<any>, input: T): T;
tapAsync<T>(fn: Func<any> | Promise<any>): (input: T) => T;
```

</details>

<details>

<summary><strong>R.tapAsync</strong> source</summary>

```javascript
import { isPromise } from './isPromise'

export function tapAsync(fn, input){
  if (arguments.length === 1){
    return inputHolder => tapAsync(fn, inputHolder)
  }
  if (isPromise(fn) === true){
    return new Promise((resolve, reject) => {
      fn(input)
        .then(() => {
          resolve(input)
        })
        .catch(reject)
    })
  }
  fn(input)

  return input
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { delay } from './delay'
import { tapAsync } from './tapAsync'

test('', async () => {
  const result = await tapAsync(delay)(1)
  expect(result).toEqual(1)
})
```

</details>

### template

```typescript
template(inputWithTags: string, templateArguments: object): string
```

It generages a new string from `inputWithTags` by replacing all `{{x}}` occurances with values provided by `templateArguments`.

```javascript
const inputWithTags = 'foo is {{bar}} even {{a}} more'
const templateArguments = {"bar":"BAR", a: 1}

const result = R.template(inputWithTags, templateArguments)
const expected = 'foo is BAR even 1 more'
// => `result` is equal to `expected`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20inputWithTags%20%3D%20'foo%20is%20%7B%7Bbar%7D%7D%20even%20%7B%7Ba%7D%7D%20more'%0Aconst%20templateArguments%20%3D%20%7B%22bar%22%3A%22BAR%22%2C%20a%3A%201%7D%0A%0Aconst%20result%20%3D%20R.template(inputWithTags%2C%20templateArguments)%0Aconst%20expected%20%3D%20'foo%20is%20BAR%20even%201%20more'%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%60expected%60">Try the above <strong>R.template</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
template(inputWithTags: string, templateArguments: object): string;
template(inputWithTags: string): (templateArguments: object) => string;
```

</details>

<details>

<summary><strong>R.template</strong> source</summary>

```javascript
const escapeSpecialCharacters = s =>
  s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\{{rambdaSource}}')

const getOccurances = input => input.match(/{{\s*.+?\s*}}/g)

const getOccuranceProp = occurance => occurance.replace(/{{\s*|\s*}}/g, '')

const replace = ({ inputHolder, prop, replacer }) =>
  inputHolder.replace(new RegExp(`{{\\s*${ escapeSpecialCharacters(prop) }\\s*}}`),
    replacer)

export function template(input, templateInput){
  if (arguments.length === 1){
    return templateInputHolder => template(input, templateInputHolder)
  }

  const occurances = getOccurances(input)
  if (occurances === null) return input
  let inputHolder = input
  for (const occurance of occurances){
    const prop = getOccuranceProp(occurance)

    try {
      const replacer = new Function('templateInput',
        `with(templateInput) { return ${ prop } }`)(templateInput)

      inputHolder = replace({
        inputHolder,
        prop,
        replacer,
      })
    } catch (e){}
  }

  return inputHolder
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { template } from './template'

test('within bracets', () => {
  const input = 'foo is { {{bar}} } even {{a}} more'
  const templateInput = {
    bar : 'BAR',
    a   : 1,
  }

  const result = template(input, templateInput)
  const expectedResult = 'foo is { BAR } even 1 more'

  expect(result).toEqual(expectedResult)
})

test('happy', () => {
  const input = 'foo is {{bar}} even {{a}} more'
  const templateInput = {
    bar : 'BAR',
    a   : 1,
  }

  const result = template(input, templateInput)
  const expectedResult = 'foo is BAR even 1 more'

  expect(result).toEqual(expectedResult)
})

test('no interpolation + curry', () => {
  const input = 'foo is bar even more'
  const templateInput = { bar : 'BAR' }

  const result = template(input)(templateInput)
  const expectedResult = 'foo is bar even more'

  expect(result).toEqual(expectedResult)
})

test('with missing template input', () => {
  const input = 'foo is {{bar}} even {{a}} more'
  const templateInput = {
    baz : 'BAR',
    a   : 1,
  }

  const result = template(input, templateInput)
  const expectedResult = 'foo is {{bar}} even 1 more'

  expect(result).toEqual(expectedResult)
})

test('with arbitrary expression', () => {
  const input = '1 + 2 = {{ 1 + 2 }}'
  const templateInput = {}

  const expectedResult = '1 + 2 = 3'
  const result = template(input, templateInput)

  expect(result).toEqual(expectedResult)
})
```

</details>

### test

```typescript
test(regExpression: RegExp): (str: string) => boolean
```

It determines whether `str` matches `regExpression`.

```javascript
R.test(/^f/, 'foo')
// => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.test(%2F%5Ef%2F%2C%20'foo')%0A%2F%2F%20%3D%3E%20true">Try the above <strong>R.test</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
test(regExpression: RegExp): (str: string) => boolean;
test(regExpression: RegExp, str: string): boolean;
```

</details>

<details>

<summary><strong>R.test</strong> source</summary>

```javascript
export function test(pattern, str){
  if (arguments.length === 1) return _str => test(pattern, _str)

  if (typeof pattern === 'string'){
    throw new TypeError(`‘test’ requires a value of type RegExp as its first argument; received "${ pattern }"`)
  }

  return str.search(pattern) !== -1
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { test as testMethod } from './test'

test('happy', () => {
  expect(testMethod(/^x/, 'xyz')).toBeTrue()

  expect(testMethod(/^y/)('xyz')).toBeFalse()
})

test('throws if first argument is not regex', () => {
  expect(() => testMethod('foo', 'bar')).toThrow('‘test’ requires a value of type RegExp as its first argument; received "foo"')
})
```

</details>

### throttle

```typescript
throttle<T>(fn: T, ms: number): (input: T) => T
```

It creates a throttled function that invokes `fn` maximum once for a `period` of milliseconds.

```javascript
let counter = 0
const inc = () => {
  counter++
}

const throttledInc = R.throttle(inc, 800)

const result = async () => {
  throttledInc()
  await R.delay(500)
  throttledInc()

  return counter
}
// `result` resolves to `1`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?let%20counter%20%3D%200%0Aconst%20inc%20%3D%20()%20%3D%3E%20%7B%0A%20%20counter%2B%2B%0A%7D%0A%0Aconst%20throttledInc%20%3D%20R.throttle(inc%2C%20800)%0A%0Aconst%20result%20%3D%20async%20()%20%3D%3E%20%7B%0A%20%20throttledInc()%0A%20%20await%20R.delay(500)%0A%20%20throttledInc()%0A%0A%20%20return%20counter%0A%7D%0A%2F%2F%20%60result%60%20resolves%20to%20%601%60">Try the above <strong>R.throttle</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
throttle<T>(fn: T, ms: number): (input: T) => T;
```

</details>

<details>

<summary><strong>R.throttle</strong> source</summary>

```javascript
export function throttle(fn, ms){
  let wait = false

  return function (...input){
    if (!wait){
      fn.apply(null, input)
      wait = true
      setTimeout(() => {
        wait = false
      }, ms)
    }
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { delay } from './delay'
import { throttle } from './throttle'

test('', async () => {
  let counter = 0
  let aHolder
  let bHolder

  const inc = (a, b) => {
    aHolder = a
    bHolder = b
    counter++
  }

  const incWrapped = throttle(inc, 1000)

  incWrapped(1, 2)

  await delay(500)

  incWrapped(2, 3)
  incWrapped(3, 4)

  expect(counter).toBe(1)
  expect(aHolder).toBe(1)
  expect(bHolder).toBe(2)

  await delay(1000)

  incWrapped(5, 6)

  expect(counter).toBe(2)
  expect(aHolder).toBe(5)
  expect(bHolder).toBe(6)
})
```

</details>

### times

```typescript
times<T>(fn: (i: number) => T, howMany: number): T[]
```

It returns the result of applying function `fn` over members of range array.

The range array includes numbers between `0` and `howMany`(exclusive).

```javascript
const fn = x => x * 2
const howMany = 5

R.times(fn, howMany)
//=> [0, 2, 4, 6, 8]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20const%20fn%20%3D%20x%20%3D%3E%20x%20*%202%0Aconst%20howMany%20%3D%205%0A%0AR.times(fn%2C%20howMany)%0A%2F%2F%3D%3E%20%5B0%2C%202%2C%204%2C%206%2C%208%5D">Try the above <strong>R.times</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
times<T>(fn: (i: number) => T, howMany: number): T[];
times<T>(fn: (i: number) => T): (howMany: number) => T[];
```

</details>

<details>

<summary><strong>R.times</strong> source</summary>

```javascript
import { map } from './map'
import { range } from './range'

export function times(fn, howMany){
  if (arguments.length === 1) return _howMany => times(fn, _howMany)
  if (!Number.isInteger(howMany) || howMany < 0){
    throw new RangeError('n must be an integer')
  }

  return map(fn, range(0, howMany))
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import assert from 'assert'

import { identity } from './identity'
import { times } from './times'

test('happy', () => {
  const result = times(identity, 5)

  expect(result).toEqual([ 0, 1, 2, 3, 4 ])
})

test('with bad input', () => {
  assert.throws(() => {
    times(3)('cheers!')
  }, RangeError)
  assert.throws(() => {
    times(identity, -1)
  }, RangeError)
})

test('curry', () => {
  const result = times(identity)(5)

  expect(result).toEqual([ 0, 1, 2, 3, 4 ])
})
```

</details>

### toDecimal

```typescript
toDecimal(num: number, charsAfterDecimalPoint?: number): number
```

```javascript
R.toDecimal(2.45464,2) // => 2.45
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.toDecimal(2.45464%2C2)%20%2F%2F%20%3D%3E%202.45">Try the above <strong>R.toDecimal</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
toDecimal(num: number, charsAfterDecimalPoint?: number): number;
```

</details>

<details>

<summary><strong>R.toDecimal</strong> source</summary>

```javascript
export function toDecimal(number, charsAfterDecimalPoint = 2){
  return Number(parseFloat(String(number)).toFixed(charsAfterDecimalPoint))
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { toDecimal } from './toDecimal'

test('', () => {
  expect(toDecimal(2.2789, 1)).toBe(2.3)
  expect(toDecimal(2.2789, 3)).toBe(2.279)
  expect(toDecimal(2.2789)).toBe(2.28)
  expect(toDecimal(2.45464)).toBe(2.45)
})
```

</details>

### toLower

```typescript
toLower(str: string): string
```

```javascript
R.toLower('FOO')
// => 'foo'
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.toLower('FOO')%0A%2F%2F%20%3D%3E%20'foo'">Try the above <strong>R.toLower</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
toLower(str: string): string;
```

</details>

<details>

<summary><strong>R.toLower</strong> source</summary>

```javascript
export function toLower(str){
  return str.toLowerCase()
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { toLower } from './toLower'

test('toLower', () => {
  expect(toLower('FOO|BAR|BAZ')).toEqual('foo|bar|baz')
})
```

</details>

### toPairs

```typescript
toPairs<S>(obj: { [k: string]: S } | { [k: number]: S }): [string, S][]
```

It transforms an object to a list.

```javascript
const list = {
  a : 1,
  b : 2,
  c : [ 3, 4 ],
}
const expected = [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', [ 3, 4 ] ] ]

const result = R.toPairs(list)
// => `result` is equal to `expected`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%7B%0A%20%20a%20%3A%201%2C%0A%20%20b%20%3A%202%2C%0A%20%20c%20%3A%20%5B%203%2C%204%20%5D%2C%0A%7D%0Aconst%20expected%20%3D%20%5B%20%5B%20'a'%2C%201%20%5D%2C%20%5B%20'b'%2C%202%20%5D%2C%20%5B%20'c'%2C%20%5B%203%2C%204%20%5D%20%5D%20%5D%0A%0Aconst%20result%20%3D%20R.toPairs(list)%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%60expected%60">Try the above <strong>R.toPairs</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
toPairs<S>(obj: { [k: string]: S } | { [k: number]: S }): [string, S][];
```

</details>

<details>

<summary><strong>R.toPairs</strong> source</summary>

```javascript
export function toPairs(obj){
  return Object.entries(obj)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { toPairs } from './toPairs'

const obj = {
  a : 1,
  b : 2,
  c : [ 3, 4 ],
}
const expected = [
  [ 'a', 1 ],
  [ 'b', 2 ],
  [ 'c', [ 3, 4 ] ],
]

test('happy', () => {
  expect(toPairs(obj)).toEqual(expected)
})
```

</details>

### toString

```typescript
toString<T>(x: T): string
```

```javascript
R.toString([1, 2]) 
// => '1,2'
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.toString(%5B1%2C%202%5D)%20%0A%2F%2F%20%3D%3E%20'1%2C2'">Try the above <strong>R.toString</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
toString<T>(x: T): string;
```

</details>

<details>

<summary><strong>R.toString</strong> source</summary>

```javascript
export function toString(val){
  return val.toString()
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { toString } from './toString'

test('happy', () => {
  expect(toString([ 1, 2, 3 ])).toEqual('1,2,3')
})
```

</details>

### toUpper

```typescript
toUpper(str: string): string
```

```javascript
R.toUpper('foo')
// => 'FOO'
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.toUpper('foo')%0A%2F%2F%20%3D%3E%20'FOO'">Try the above <strong>R.toUpper</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
toUpper(str: string): string;
```

</details>

<details>

<summary><strong>R.toUpper</strong> source</summary>

```javascript
export function toUpper(str){
  return str.toUpperCase()
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { toUpper } from './toUpper'

test('toUpper', () => {
  expect(toUpper('foo|bar|baz')).toEqual('FOO|BAR|BAZ')
})
```

</details>

### transpose

```typescript
transpose<T>(list: T[][]): T[][]
```

```javascript
const list = [[10, 11], [20], [], [30, 31, 32]]
const expected = [[10, 20, 30], [11, 31], [32]]

const result = R.transpose(list)
// => `result` is equal to `expected`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%5B10%2C%2011%5D%2C%20%5B20%5D%2C%20%5B%5D%2C%20%5B30%2C%2031%2C%2032%5D%5D%0Aconst%20expected%20%3D%20%5B%5B10%2C%2020%2C%2030%5D%2C%20%5B11%2C%2031%5D%2C%20%5B32%5D%5D%0A%0Aconst%20result%20%3D%20R.transpose(list)%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%60expected%60">Try the above <strong>R.transpose</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
transpose<T>(list: T[][]): T[][];
```

</details>

<details>

<summary><strong>R.transpose</strong> source</summary>

```javascript
import { _isArray } from './_internals/_isArray'

export function transpose(array){
  return array.reduce((acc, el) => {
    el.forEach((nestedEl, i) =>
      _isArray(acc[ i ]) ? acc[ i ].push(nestedEl) : acc.push([ nestedEl ]))

    return acc
  }, [])
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { transpose } from './transpose'

test('happy', () => {
  const input = [
    [ 'a', 1 ],
    [ 'b', 2 ],
    [ 'c', 3 ],
  ]

  expect(transpose(input)).toEqual([
    [ 'a', 'b', 'c' ],
    [ 1, 2, 3 ],
  ])
})

test('when rows are shorter', () => {
  const actual = transpose([ [ 10, 11 ], [ 20 ], [], [ 30, 31, 32 ] ])
  const expected = [ [ 10, 20, 30 ], [ 11, 31 ], [ 32 ] ]
  expect(actual).toEqual(expected)
})

test('with empty array', () => {
  expect(transpose([])).toEqual([])
})

test('array with falsy values', () => {
  const actual = transpose([
    [ true, false, undefined, null ],
    [ null, undefined, false, true ],
  ])
  const expected = [
    [ true, null ],
    [ false, undefined ],
    [ undefined, false ],
    [ null, true ],
  ]
  expect(actual).toEqual(expected)
})
```

</details>

### trim

```typescript
trim(str: string): string
```

```javascript
R.trim('  foo  ') 
// => 'foo'
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.trim('%20%20foo%20%20')%20%0A%2F%2F%20%3D%3E%20'foo'">Try the above <strong>R.trim</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
trim(str: string): string;
```

</details>

<details>

<summary><strong>R.trim</strong> source</summary>

```javascript
export function trim(str){
  return str.trim()
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { trim } from './trim'

test('trim', () => {
  expect(trim(' foo ')).toEqual('foo')
})
```

</details>

<details>

<summary>1 failed <italic>Ramda.trim</italic> specs

> :boom: Reason for the failure: ramda trims all ES5 whitespace
</summary>

```javascript
var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');

describe('trim', function() {
  var test = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFFHello, World!\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';
  it('trims all ES5 whitespace', function() {
    eq(R.trim(test), 'Hello, World!');
    eq(R.trim(test).length, 13);
  });
  if (typeof String.prototype.trim !== 'function') {
    it('falls back to a shim if String.prototype.trim is not present', function() {
      eq(R.trim('   xyz  '), 'xyz');
      eq(R.trim(test), 'Hello, World!');
      eq(R.trim(test).length, 13);
      eq(R.trim('\u200b'), '\u200b');
      eq(R.trim('\u200b').length, 1);
    });
  }
});
```

</details>

### tryCatch

```typescript
tryCatch<T>(
  fn: any,
  fallback: any
): (...inputs: any[]) => Async<T> | T
```

<details>

<summary>All Typescript definitions</summary>

```typescript
tryCatch<T>(
  fn: any,
  fallback: any
): (...inputs: any[]) => Async<T> | T;
```

</details>

### type

```typescript
type(x: any): "Object" | "Number" | "Boolean" | "String" | "Null" | "Array" | "Function" | "Undefined" | "Async" | "Promise" | "RegExp" | "NaN"
```

It accepts any input and it returns its type.

```javascript
R.type(() => {}) // => 'Function'
R.type(async () => {}) // => 'Async'
R.type([]) // => 'Array'
R.type({}) // => 'Object'
R.type('foo') // => 'String'
R.type(1) // => 'Number'
R.type(true) // => 'Boolean'
R.type(null) // => 'Null'
R.type(/[A-z]/) // => 'RegExp'
R.type('foo'*1) // => 'NaN'

const delay = ms => new Promise(resolve => {
  setTimeout(function () {
    resolve()
  }, ms)
})
R.type(delay) // => 'Promise'
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.type(()%20%3D%3E%20%7B%7D)%20%2F%2F%20%3D%3E%20'Function'%0AR.type(async%20()%20%3D%3E%20%7B%7D)%20%2F%2F%20%3D%3E%20'Async'%0AR.type(%5B%5D)%20%2F%2F%20%3D%3E%20'Array'%0AR.type(%7B%7D)%20%2F%2F%20%3D%3E%20'Object'%0AR.type('foo')%20%2F%2F%20%3D%3E%20'String'%0AR.type(1)%20%2F%2F%20%3D%3E%20'Number'%0AR.type(true)%20%2F%2F%20%3D%3E%20'Boolean'%0AR.type(null)%20%2F%2F%20%3D%3E%20'Null'%0AR.type(%2F%5BA-z%5D%2F)%20%2F%2F%20%3D%3E%20'RegExp'%0AR.type('foo'*1)%20%2F%2F%20%3D%3E%20'NaN'%0A%0Aconst%20delay%20%3D%20ms%20%3D%3E%20new%20Promise(resolve%20%3D%3E%20%7B%0A%20%20setTimeout(function%20()%20%7B%0A%20%20%20%20resolve()%0A%20%20%7D%2C%20ms)%0A%7D)%0AR.type(delay)%20%2F%2F%20%3D%3E%20'Promise'">Try the above <strong>R.type</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
type(x: any): "Object" | "Number" | "Boolean" | "String" | "Null" | "Array" | "Function" | "Undefined" | "Async" | "Promise" | "RegExp" | "NaN";
```

</details>

<details>

<summary><strong>R.type</strong> source</summary>

```javascript
import { _isArray } from './_internals/_isArray'

export function type(input){
  const typeOf = typeof input

  if (input === null){
    return 'Null'
  } else if (input === undefined){
    return 'Undefined'
  } else if (typeOf === 'boolean'){
    return 'Boolean'
  } else if (typeOf === 'number'){
    return Number.isNaN(input) ? 'NaN' : 'Number'
  } else if (typeOf === 'string'){
    return 'String'
  } else if (_isArray(input)){
    return 'Array'
  } else if (input instanceof RegExp){
    return 'RegExp'
  }

  const asStr = input && input.toString ? input.toString() : ''

  if ([ 'true', 'false' ].includes(asStr)) return 'Boolean'
  if (!Number.isNaN(Number(asStr))) return 'Number'
  if (asStr.startsWith('async')) return 'Async'
  if (asStr === '[object Promise]') return 'Promise'
  if (typeOf === 'function') return 'Function'
  if (input instanceof String) return 'String'

  return 'Object'
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { type as ramdaType } from 'ramda'

import { type } from './type'

test('with simple promise', () => {
  expect(type(Promise.resolve(1))).toBe('Promise')
})

test('with new Boolean', () => {
  expect(type(new Boolean(true))).toBe('Boolean')
})

test('with new String', () => {
  expect(type(new String('I am a String object'))).toEqual('String')
})

test('with new Number', () => {
  expect(type(new Number(1))).toBe('Number')
})

test('with new promise', () => {
  const delay = ms =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(ms + 110)
      }, ms)
    })

  expect(type(delay(10))).toEqual('Promise')
})

test('async function', () => {
  expect(type(async () => {})).toEqual('Async')
})

test('async arrow', () => {
  const asyncArrow = async () => {}
  expect(type(asyncArrow)).toBe('Async')
})

test('function', () => {
  const fn1 = () => {}
  const fn2 = function (){}

  function fn3(){}

  ;[ () => {}, fn1, fn2, fn3 ].map(val => {
    expect(type(val)).toEqual('Function')
  })
})

test('object', () => {
  expect(type({})).toEqual('Object')
})

test('number', () => {
  expect(type(1)).toEqual('Number')
})

test('boolean', () => {
  expect(type(false)).toEqual('Boolean')
})

test('string', () => {
  expect(type('foo')).toEqual('String')
})

test('null', () => {
  expect(type(null)).toEqual('Null')
})

test('array', () => {
  expect(type([])).toEqual('Array')
  expect(type([ 1, 2, 3 ])).toEqual('Array')
})

test('regex', () => {
  expect(type(/\s/g)).toEqual('RegExp')
})

test('undefined', () => {
  expect(type(undefined)).toEqual('Undefined')
})

test('not a number', () => {
  expect(type(Number('s'))).toBe('NaN')
})

test('function inside object 1', () => {
  const obj = {
    f(){
      return 4
    },
  }

  expect(type(obj.f)).toBe('Function')
  expect(ramdaType(obj.f)).toBe('Function')
})

test('function inside object 2', () => {
  const name = 'f'
  const obj = {
    [ name ](){
      return 4
    },
  }
  expect(type(obj.f)).toBe('Function')
  expect(ramdaType(obj.f)).toBe('Function')
})
```

</details>

<details>

<summary>1 failed <italic>Ramda.type</italic> specs

> :boom: Reason for the failure: ramda returns 'Number' type to NaN input, while rambda returns 'NaN'
</summary>

```javascript
var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');

describe('type', function() {
  // it('"Arguments" if given an arguments object', function() {
  //   var args = (function() { return arguments; }());
  //   eq(R.type(args), 'Arguments');
  // });
  it('"Number" if given the NaN value', function() {
    eq(R.type(NaN), 'Number');
  });
});
```

</details>

### uniq

```typescript
uniq<T>(list: ReadonlyArray<T>): T[]
```

It returns a new array containing only one copy of each element of `list`.

```javascript
const list = [1, 1, {a: 1}, {a: 2}, {a:1}]

R.uniq(list)
// => [1, {a: 1}, {a: 2}]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20const%20list%20%3D%20%5B1%2C%201%2C%20%7Ba%3A%201%7D%2C%20%7Ba%3A%202%7D%2C%20%7Ba%3A1%7D%5D%0A%0AR.uniq(list)%0A%2F%2F%20%3D%3E%20%5B1%2C%20%7Ba%3A%201%7D%2C%20%7Ba%3A%202%7D%5D">Try the above <strong>R.uniq</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
uniq<T>(list: ReadonlyArray<T>): T[];
```

</details>

<details>

<summary><strong>R.uniq</strong> source</summary>

```javascript
import { includes } from './includes'

export function uniq(list){
  let index = -1
  const willReturn = []

  while (++index < list.length){
    const value = list[ index ]

    if (!includes(value, willReturn)){
      willReturn.push(value)
    }
  }

  return willReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { uniq } from './uniq'

test('uniq', () => {
  expect(uniq([ 1, 2, 3, 3, 3, 1, 2, 0 ])).toEqual([ 1, 2, 3, 0 ])
  expect(uniq([ 1, 1, 2, 1 ])).toEqual([ 1, 2 ])
  expect([ 1, '1' ]).toEqual([ 1, '1' ])
  expect(uniq([ [ 42 ], [ 42 ] ])).toEqual([ [ 42 ] ])
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {uniq} from 'rambda'

describe('uniq', () => {
  it('happy', () => {
    const result = uniq([1, 2, 3, 3, 3, 1, 2, 0])
    result // $ExpectType number[]
  })
})
```

</details>

<details>

<summary>2 failed <italic>Ramda.uniq</italic> specs

> :boom: Reason for the failure: ramda pass to `uniq` method | ramda method uses reference equality for functions
</summary>

```javascript
var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');

describe('uniq', function() {
  it('has R.equals semantics', function() {
    function Just(x) { this.value = x; }
    Just.prototype.equals = function(x) {
      return x instanceof Just && R.equals(x.value, this.value);
    };
    eq(R.uniq([-0, -0]).length, 1);
    eq(R.uniq([0, -0]).length, 2);
    eq(R.uniq([NaN, NaN]).length, 1);
    eq(R.uniq([[1], [1]]).length, 1);
    eq(R.uniq([new Just([42]), new Just([42])]).length, 1);
  it('handles null and undefined elements', function() {
    eq(R.uniq([void 0, null, void 0, null]), [void 0, null]);
  it('uses reference equality for functions', function() {
    eq(R.uniq([R.add, R.identity, R.add, R.identity, R.add, R.identity]).length, 2);
});
```

</details>

### uniqWith

```typescript
uniqWith<T, U>(uniqFn: (x: T, y: T) => boolean, list: ReadonlyArray<T>): T[]
```

It returns a new array containing only one copy of each element in `list` according to boolean returning function `uniqFn`.

```javascript
const list = [
  {id: 0, title:'foo'},
  {id: 1, title:'bar'},
  {id: 2, title:'baz'},
  {id: 3, title:'foo'},
  {id: 4, title:'bar'},
]

const expected = [
  {id: 0, title:'foo'},
  {id: 1, title:'bar'},
  {id: 2, title:'baz'},
]

const uniqFn = (x,y) => x.title === y.title

const result = R.uniqWith(uniqFn, list)
// => `result` is equal to `expected`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%0A%20%20%7Bid%3A%200%2C%20title%3A'foo'%7D%2C%0A%20%20%7Bid%3A%201%2C%20title%3A'bar'%7D%2C%0A%20%20%7Bid%3A%202%2C%20title%3A'baz'%7D%2C%0A%20%20%7Bid%3A%203%2C%20title%3A'foo'%7D%2C%0A%20%20%7Bid%3A%204%2C%20title%3A'bar'%7D%2C%0A%5D%0A%0Aconst%20expected%20%3D%20%5B%0A%20%20%7Bid%3A%200%2C%20title%3A'foo'%7D%2C%0A%20%20%7Bid%3A%201%2C%20title%3A'bar'%7D%2C%0A%20%20%7Bid%3A%202%2C%20title%3A'baz'%7D%2C%0A%5D%0A%0Aconst%20uniqFn%20%3D%20(x%2Cy)%20%3D%3E%20x.title%20%3D%3D%3D%20y.title%0A%0Aconst%20result%20%3D%20R.uniqWith(uniqFn%2C%20list)%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%60expected%60">Try the above <strong>R.uniqWith</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
uniqWith<T, U>(uniqFn: (x: T, y: T) => boolean, list: ReadonlyArray<T>): T[];
uniqWith<T, U>(uniqFn: (x: T, y: T) => boolean): (list: ReadonlyArray<T>) => T[];
```

</details>

<details>

<summary><strong>R.uniqWith</strong> source</summary>

```javascript
import { any } from './any'

export function uniqWith(fn, list){
  if (arguments.length === 1) return _list => uniqWith(fn, _list)

  let index = -1
  const len = list.length
  const willReturn = []

  while (++index < len){
    const value = list[ index ]
    const flag = any(willReturnInstance => fn(value, willReturnInstance),
      willReturn)

    if (!flag){
      willReturn.push(value)
    }
  }

  return willReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { uniqWith } from './uniqWith'

test('happy', () => {
  const input = [
    {
      id    : 0,
      title : 'foo',
    },
    {
      id    : 1,
      title : 'bar',
    },
    {
      id    : 2,
      title : 'baz',
    },
    {
      id    : 3,
      title : 'foo',
    },
    {
      id    : 4,
      title : 'bar',
    },
  ]

  const expectedResult = [
    {
      id    : 0,
      title : 'foo',
    },
    {
      id    : 1,
      title : 'bar',
    },
    {
      id    : 2,
      title : 'baz',
    },
  ]

  const fn = (x, y) => x.title === y.title

  const result = uniqWith(fn, input)
  const curriedResult = uniqWith(fn)(input)

  expect(result).toEqual(expectedResult)

  expect(curriedResult).toEqual(expectedResult)
})

test('uniqWith', () => {
  const input = [
    {
      id    : 0,
      title : 'foo',
    },
    {
      id    : 1,
      title : 'bar',
    },
    {
      id    : 2,
      title : 'baz',
    },
    {
      id    : 3,
      title : 'foo',
    },
    {
      id    : 4,
      title : 'bar',
    },
  ]

  const expectedResult = [
    {
      id    : 0,
      title : 'foo',
    },
    {
      id    : 1,
      title : 'bar',
    },
    {
      id    : 2,
      title : 'baz',
    },
  ]

  const fn = (x, y) => x.title === y.title

  const result = uniqWith(fn, input)
  //const result = uniqWith(Ramda.eqBy(Ramda.prop('title')), input)

  expect(result).toEqual(expectedResult)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {uniqWith} from 'rambda'

describe('uniqWith', () => {
  it('happy', () => {
    const input = [
      {
        id: 0,
        title: 'foo',
      },
      {
        id: 1,
        title: 'bar',
      },
      {
        id: 2,
        title: 'baz',
      },
      {
        id: 3,
        title: 'foo',
      },
      {
        id: 4,
        title: 'bar',
      },
    ]

    const fn = (x: any, y: any) => x.title === y.title

    const result = uniqWith(fn, input)
    result // $ExpectType { id: number; title: string; }[]
  })
})
```

</details>

### unless

```typescript
unless<T, U>(predicate: (a: T) => boolean, whenFalseFn: (a: T) => U, obj: T): U
```

The method returns function that will be called with argument `input`.

If `predicate(input)` returns `false`, then the end result will be the outcome of `whenFalse(input)`. 

In the other case, the final output will be the `input` itself.

```javascript
const fn = R.unless(
  x => x > 2,
  x => x + 10
)

const result = [
  fn(1),
  fn(5)
]
// => [11, 5]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20fn%20%3D%20R.unless(%0A%20%20x%20%3D%3E%20x%20%3E%202%2C%0A%20%20x%20%3D%3E%20x%20%2B%2010%0A)%0A%0Aconst%20result%20%3D%20%5B%0A%20%20fn(1)%2C%0A%20%20fn(5)%0A%5D%0A%2F%2F%20%3D%3E%20%5B11%2C%205%5D">Try the above <strong>R.unless</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
unless<T, U>(predicate: (a: T) => boolean, whenFalseFn: (a: T) => U, obj: T): U;
unless<T, U>(predicate: (a: T) => boolean, whenFalseFn: (a: T) => U): (obj: T) => U;
```

</details>

<details>

<summary><strong>R.unless</strong> source</summary>

```javascript
export function unless(condition, whenFalse){
  if (arguments.length === 1){
    return whenFalseHolder => unless(condition, whenFalseHolder)
  }

  return input => {
    if (condition(input)) return input

    return whenFalse(input)
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { inc } from './inc'
import { isNil } from './isNil'
import { unless } from './unless'

const safeInc = unless(isNil, inc)

test('happy', () => {
  expect(safeInc(null)).toBeNull()
  expect(safeInc(1)).toBe(2)
})

test('curried', () => {
  const safeIncCurried = unless(isNil)(inc)
  expect(safeInc(null)).toBeNull()
  expect(safeInc(1)).toBe(2)
})
```

</details>

### update

```typescript
update<T>(index: number, newValue: T, list: ReadonlyArray<T>): T[]
```

It returns a copy of `list` with updated element at `index` with `newValue`.

```javascript
const index = 2
const newValue = 88
const list = [1, 2, 3, 4, 5]

const result = R.update(index, newValue, list)
// => [1, 2, 88, 4, 5]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20index%20%3D%202%0Aconst%20newValue%20%3D%2088%0Aconst%20list%20%3D%20%5B1%2C%202%2C%203%2C%204%2C%205%5D%0A%0Aconst%20result%20%3D%20R.update(index%2C%20newValue%2C%20list)%0A%2F%2F%20%3D%3E%20%5B1%2C%202%2C%2088%2C%204%2C%205%5D">Try the above <strong>R.update</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
update<T>(index: number, newValue: T, list: ReadonlyArray<T>): T[];
update<T>(index: number, newValue: T): (list: ReadonlyArray<T>) => T[];
```

</details>

<details>

<summary><strong>R.update</strong> source</summary>

```javascript
import { curry } from './curry'

function updateFn(
  index, newValue, list
){
  const arrClone = list.slice()

  return arrClone.fill(
    newValue, index, index + 1
  )
}

export const update = curry(updateFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { update } from './update'

const list = [ 1, 2, 3 ]

test('happy', () => {
  const newValue = 8
  const index = 1
  const result = update(
    index, newValue, list
  )
  const curriedResult = update(index, newValue)(list)
  const tripleCurriedResult = update(index)(newValue)(list)

  const expected = [ 1, 8, 3 ]
  expect(result).toEqual(expected)
  expect(curriedResult).toEqual(expected)
  expect(tripleCurriedResult).toEqual(expected)
})

test('list has no such index', () => {
  const newValue = 8
  const index = 10
  const result = update(
    index, newValue, list
  )

  expect(result).toEqual(list)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {update} from 'rambda'

describe('update', () => {
  it('happy', () => {
    const result = update(1, 0, [1, 2, 3])
    result // $ExpectType number[]
  })
})
```

</details>

<details>

<summary>1 failed <italic>Ramda.update</italic> specs

> :boom: Reason for the failure: ramda accepts an array-like object
</summary>

```javascript
var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');

describe('update', function() {
  it('accepts an array-like object', function() {
    function args() {
      return arguments;
    }
    eq(R.update(2, 4, args(0, 1, 2, 3)), [0, 1, 4, 3]);
  });
});
```

</details>

### values

```typescript
values<T extends object, K extends keyof T>(obj: T): T[K][]
```

With correct input, this is nothing more than `Object.values(obj)`. If `obj` is not an object, then it returns an empty array.

```javascript
const obj = {a:1, b:2}

R.values(obj)
// => [1, 2]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20const%20obj%20%3D%20%7Ba%3A1%2C%20b%3A2%7D%0A%0AR.values(obj)%0A%2F%2F%20%3D%3E%20%5B1%2C%202%5D">Try the above <strong>R.values</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
values<T extends object, K extends keyof T>(obj: T): T[K][];
```

</details>

<details>

<summary><strong>R.values</strong> source</summary>

```javascript
import { type } from './type'

export function values(obj){
  if (type(obj) !== 'Object') return []

  return Object.values(obj)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { values } from './values'

test('happy', () => {
  expect(values({
    a : 1,
    b : 2,
    c : 3,
  })).toEqual([ 1, 2, 3 ])
})

test('with bad input', () => {
  expect(values(null)).toEqual([])
  expect(values(undefined)).toEqual([])
  expect(values(55)).toEqual([])
  expect(values('foo')).toEqual([])
  expect(values(true)).toEqual([])
  expect(values(false)).toEqual([])
  expect(values(NaN)).toEqual([])
  expect(values(Infinity)).toEqual([])
  expect(values([])).toEqual([])
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {values} from 'rambda'

describe('values', () => {
  it('happy', () => {
    const result = values({
      a: 1,
      b: 2,
      c: 3,
    })
    result // $ExpectType number[]
  })
})
```

</details>

### view

```typescript
view<T, U>(lens: Lens): (target: T) => U
```

It returns the value of `lens` focus over `target` object.

```javascript
const lens = R.lensProp('x')

R.view(lens, {x: 1, y: 2}) //=> 1
R.view(lens, {x: 4, y: 2}) //=> 4
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20const%20lens%20%3D%20R.lensProp('x')%0A%0AR.view(lens%2C%20%7Bx%3A%201%2C%20y%3A%202%7D)%20%2F%2F%3D%3E%201%0AR.view(lens%2C%20%7Bx%3A%204%2C%20y%3A%202%7D)%20%2F%2F%3D%3E%204">Try the above <strong>R.view</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
view<T, U>(lens: Lens): (target: T) => U;
view<T, U>(lens: Lens, target: T): U;
```

</details>

<details>

<summary><strong>R.view</strong> source</summary>

```javascript
const Const = x => ({
  x,
  map : fn => Const(x),
})

export function view(lens, target){
  if (arguments.length === 1) return _target => view(lens, _target)

  return lens(Const)(target).x
}
```

</details>

### wait

```typescript
wait<T>(fn: Async<T>): Promise<[T, Error]>
```

It provides `Golang`-like interface for handling promises.

```javascript
const [result, err] = await R.wait(R.delay(1000))
// => err is undefined
// => result is `RAMBDAX_DELAY`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20const%20%5Bresult%2C%20err%5D%20%3D%20await%20R.wait(R.delay(1000))%0A%2F%2F%20%3D%3E%20err%20is%20undefined%0A%2F%2F%20%3D%3E%20result%20is%20%60RAMBDAX_DELAY%60">Try the above <strong>R.wait</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
wait<T>(fn: Async<T>): Promise<[T, Error]>;
```

</details>

<details>

<summary><strong>R.wait</strong> source</summary>

```javascript
export function wait(fn){
  return new Promise(resolve => {
    fn.then(result => resolve([ result, undefined ])).catch(e =>
      resolve([ undefined, e ]))
  })
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { wait } from './wait'

test('happy path', async () => {
  const fn = x => Promise.resolve(x + 1)
  const [ result, err ] = await wait(fn(1))

  expect(result).toBe(2)
  expect(err).toBeUndefined()
})

test('when promise is rejected', async () => {
  const fn = x => Promise.reject(Error('foo'))
  const [ result, err ] = await wait(fn(1))

  expect(result).toBeUndefined()
  expect(err).toEqual(Error('foo'))
})
```

</details>

### waitFor

```typescript
waitFor(
  waitForTrueCondition: () => any | Promise<any>,
  howLong: number,
  loops?: number
): (input?: any) => Promise<any>
```

It returns `true`, if `condition` returns `true` within `howLong` milisececonds time period.

The method accepts an optional third argument `loops`(default to 10), which is the number of times `waitForTrueCondition` will be evaluated for `howLong` period. Once this function returns a value different from `false`, this value will be the final result. 

Otherwise, `R.waitFor` will return `false`.

<details>

<summary>All Typescript definitions</summary>

```typescript
waitFor(
  waitForTrueCondition: () => any | Promise<any>,
  howLong: number,
  loops?: number
): (input?: any) => Promise<any>;
```

</details>

<details>

<summary><strong>R.waitFor</strong> source</summary>

```javascript
import { delay } from './delay'
import { range } from './range'
import { type } from './type'

export function waitFor(
  condition, howLong, loops = 10
){
  const typeCondition = type(condition)

  const passPromise = typeCondition === 'Async'
  const passFunction = typeCondition === 'Function'
  const interval = Math.floor(howLong / loops)

  if (!(passPromise || passFunction)){
    throw new Error('R.waitFor')
  }

  return async (...inputs) => {
    for (const _ of range(0, loops)){
      const resultCondition = await condition(...inputs)

      if (resultCondition === false){
        await delay(interval)
      } else {
        return resultCondition
      }
    }

    return false
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { delay } from './delay'
import { waitFor } from './waitFor'

const howLong = 1000

test('true', async () => {
  let counter = 0
  const condition = x => {
    counter++

    return counter > x
  }

  const result = await waitFor(condition, howLong)(6)
  expect(result).toEqual(true)
})

test('false', async () => {
  let counter = 0
  const condition = x => {
    counter++

    return counter > x
  }

  const result = await waitFor(condition, howLong)(12)
  expect(result).toEqual(false)
})

test('async condition | true', async () => {
  let counter = 0
  const condition = async x => {
    counter++
    await delay(10)

    return counter > x
  }

  const result = await waitFor(condition, howLong)(6)
  expect(result).toEqual(true)
})

test('async condition | false', async () => {
  let counter = 0
  const condition = async x => {
    counter++
    await delay(10)

    return counter > x
  }

  const result = await waitFor(condition, howLong)(12)
  expect(result).toEqual(false)
})

test('throws when fn is not function', () => {
  const fn = 'foo'

  expect(() => waitFor(fn, howLong)()).toThrow('R.waitFor')
})
```

</details>

### when

```typescript
when<T>(
  rule: Func<boolean>, resultOrFunction: T | IdentityFunction<T>
): IdentityFunction<T>
```

```javascript
It accepts `rule` and `resultOrFunction` as arguments and returns a function with `input`.

This function will return `input` if `rule(input)` is false.

If `resultOrFunction` is function, it will return `resultOrFunction(input)`.

If `resultOrFunction` is not function, it will return `resultOrFunction`.

Maybe the example use will do a better job in explaining this method.

const rule = x => typeof x === 'number'
const whenTrueResult = 6345789
const whenTrueFn = R.add(11)

const fnWithResult = when(rule, whenTrueResult)
const fnWithFunction = when(rule, whenTrueFn)

const goodInput = 88
const badInput = 'foo'

const result = [
  fnWithResult(goodInput),
  fnWithResult(badInput),
  fnWithFn(goodInput)
  fnWithFn(badInput),
]

const expected = [
  6345789,
  'foo',
  99,
  'foo'
]
// => `result` is equal to `expected`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?It%20accepts%20%60rule%60%20and%20%60resultOrFunction%60%20as%20arguments%20and%20returns%20a%20function%20with%20%60input%60.%0A%0AThis%20function%20will%20return%20%60input%60%20if%20%60rule(input)%60%20is%20false.%0A%0AIf%20%60resultOrFunction%60%20is%20function%2C%20it%20will%20return%20%60resultOrFunction(input)%60.%0A%0AIf%20%60resultOrFunction%60%20is%20not%20function%2C%20it%20will%20return%20%60resultOrFunction%60.%0A%0AMaybe%20the%20example%20use%20will%20do%20a%20better%20job%20in%20explaining%20this%20method.%0A%0A%0Aconst%20rule%20%3D%20x%20%3D%3E%20typeof%20x%20%3D%3D%3D%20'number'%0Aconst%20whenTrueResult%20%3D%206345789%0Aconst%20whenTrueFn%20%3D%20R.add(11)%0A%0Aconst%20fnWithResult%20%3D%20when(rule%2C%20whenTrueResult)%0Aconst%20fnWithFunction%20%3D%20when(rule%2C%20whenTrueFn)%0A%0Aconst%20goodInput%20%3D%2088%0Aconst%20badInput%20%3D%20'foo'%0A%0Aconst%20result%20%3D%20%5B%0A%20%20fnWithResult(goodInput)%2C%0A%20%20fnWithResult(badInput)%2C%0A%20%20fnWithFn(goodInput)%0A%20%20fnWithFn(badInput)%2C%0A%5D%0A%0Aconst%20expected%20%3D%20%5B%0A%20%206345789%2C%0A%20%20'foo'%2C%0A%20%2099%2C%0A%20%20'foo'%0A%5D%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%60expected%60">Try the above <strong>R.when</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
when<T>(
  rule: Func<boolean>, resultOrFunction: T | IdentityFunction<T>
): IdentityFunction<T>;
when<T>(
  rule: Func<boolean>
): (resultOrFunction: T | IdentityFunction<T>) => IdentityFunction<T>;
```

</details>

<details>

<summary><strong>R.when</strong> source</summary>

```javascript
import { isFunction } from './isFunction'

export function when(rule, resultOrFunction){
  if (arguments.length === 1){
    return whenTrueHolder => when(rule, whenTrueHolder)
  }

  return input => {
    if (!rule(input)) return input

    return isFunction(resultOrFunction) ?
      resultOrFunction(input) :
      resultOrFunction
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { add } from './add'
import { is } from './is'
import { when } from './when'

const ruleResult = 'RULE_RESULT'
const rule = x => typeof x === 'number'
const fn = when(rule, ruleResult)
const curriedFn = when(rule)(ruleResult)

test('when rule returns true', () => {
  const input = 7

  expect(fn(input)).toBe(ruleResult)
})

test('when rule returns false', () => {
  const input = 'foo'

  expect(fn(input)).toBe(input)
  expect(curriedFn(input)).toBe(input)
})

test('second argument can be a function', () => {
  const fn = when(is(Number), add(1))
  expect(fn(10)).toBe(11)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {when, add} from 'rambda'

const ruleResult = 88
const rule = (x: number) => x > 2

describe('when', () => {
  it('without passing type - happy', () => {
    const fn = when(rule, ruleResult)
    const result = [fn(1), fn(2)]
    result[0] // $ExpectType number
    result[1] // $ExpectType number
  })

  it('without passing type - second argument is function', () => {
    const fn = when(rule, add(1))
    const fnCurried = when(rule)(add(1))
    const [result1, result2] = [fn(1), fnCurried(2)]
    result1 // $ExpectType number
    result2 // $ExpectType unknown
  })

  it('with passing type', () => {
    const fn = when<number>(rule, ruleResult)
    const result = fn(1)
    result // $ExpectType number
  })

  it('with passing type - second argument is function', () => {
    const fn = when<number>(rule, add(1))
    const fnCurried = when<number>(rule)(add(1))
    const [result1, result2] = [fn(1), fnCurried(2)]
    result1 // $ExpectType number
    result2 // $ExpectType number
  })

  it('curry', () => {
    const fn = when<number>(rule)(ruleResult)
    const result = fn(1)
    result // $ExpectType number
  })
})
```

</details>

### where

```typescript
where<T, U>(conditions: T, input: U): boolean
```

It returns `true` if all each property in `conditions` returns `true` when applied to corresponding property in `input` object.

```javascript
const condition = R.where({
  a : x => typeof x === "string",
  b : x => x === 4
})
const input = {
  a : "foo",
  b : 4,
  c : 11,
}

const result = condition(input) 
// => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20condition%20%3D%20R.where(%7B%0A%20%20a%20%3A%20x%20%3D%3E%20typeof%20x%20%3D%3D%3D%20%22string%22%2C%0A%20%20b%20%3A%20x%20%3D%3E%20x%20%3D%3D%3D%204%0A%7D)%0Aconst%20input%20%3D%20%7B%0A%20%20a%20%3A%20%22foo%22%2C%0A%20%20b%20%3A%204%2C%0A%20%20c%20%3A%2011%2C%0A%7D%0A%0Aconst%20result%20%3D%20condition(input)%20%0A%2F%2F%20%3D%3E%20true">Try the above <strong>R.where</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
where<T, U>(conditions: T, input: U): boolean;
where<T>(conditions: T): <U>(input: U) => boolean;
where<ObjFunc2, U>(conditions: ObjFunc2, input: U): boolean;
where<ObjFunc2>(conditions: ObjFunc2): <U>(input: U) => boolean;
```

</details>

<details>

<summary><strong>R.where</strong> source</summary>

```javascript
export function where(conditions, input){
  if (input === undefined){
    return _input => where(conditions, _input)
  }
  let flag = true
  for (const prop in conditions){
    const result = conditions[ prop ](input[ prop ])
    if (flag && result === false){
      flag = false
    }
  }

  return flag
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { equals } from './equals'
import { where } from './where'

test('when true', () => {
  const pred = where({
    a : equals('foo'),
    b : equals('bar'),
  })
  expect(pred({
    a : 'foo',
    b : 'bar',
    x : 11,
    y : 19,
  })).toEqual(true)
})

test('when false', () => {
  const pred = where({
    a : equals('foo'),
    b : equals('baz'),
  })
  expect(pred({
    a : 'foo',
    b : 'bar',
    x : 11,
    y : 19,
  })).toEqual(false)
})
```

</details>

### whereEq

```typescript
whereEq<T, U>(condition: T, input: U): boolean
```

It will return `true` if all of `input` object fully or partially include `rule` object.

```javascript
const condition = { a : { b : 1 } }
const input = {
  a : { b : 1 },
  c : 2
}

const result = whereEq(condition, input)
//=> true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20condition%20%3D%20%7B%20a%20%3A%20%7B%20b%20%3A%201%20%7D%20%7D%0Aconst%20input%20%3D%20%7B%0A%20%20a%20%3A%20%7B%20b%20%3A%201%20%7D%2C%0A%20%20c%20%3A%202%0A%7D%0A%0Aconst%20result%20%3D%20whereEq(condition%2C%20input)%0A%2F%2F%3D%3E%20true">Try the above <strong>R.whereEq</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
whereEq<T, U>(condition: T, input: U): boolean;
whereEq<T>(condition: T): <U>(input: U) => boolean;

// RAMBDAX_MARKER_END
// ============================================

export as namespace R
```

</details>

<details>

<summary><strong>R.whereEq</strong> source</summary>

```javascript
import { equals } from './equals'
import { filter } from './filter'

export function whereEq(condition, input){
  if (arguments.length === 1){
    return _input => whereEq(condition, _input)
  }

  const result = filter(
    (conditionValue, conditionProp) => equals(conditionValue, input[ conditionProp ]),
    condition
  )

  return Object.keys(result).length === Object.keys(condition).length
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { whereEq } from './whereEq'

test('when true', () => {
  const condition = { a : 1 }
  const input = {
    a : 1,
    b : 2,
  }

  const result = whereEq(condition, input)
  const expectedResult = true

  expect(result).toEqual(expectedResult)
})

test('when false', () => {
  const condition = { a : 1 }
  const input = { b : 2 }

  const result = whereEq(condition, input)
  const expectedResult = false

  expect(result).toEqual(expectedResult)
})

test('with nested object', () => {
  const condition = { a : { b : 1 } }
  const input = {
    a : { b : 1 },
    c : 2,
  }

  const result = whereEq(condition)(input)
  const expectedResult = true

  expect(result).toEqual(expectedResult)
})

test('with wrong input', () => {
  const condition = { a : { b : 1 } }

  expect(() => whereEq(condition, null)).toThrowWithMessage(TypeError, "Cannot read property 'a' of null")
})
```

</details>

### without

```typescript
without<T>(matchAgainst: ReadonlyArray<T>, source: ReadonlyArray<T>): T[]
```

It will return a new array, based on all members of `source` list that are not part of `matchAgainst` list.

```javascript
const source = [1, 2, 3, 4]
const matchAgainst = [2, 3]

const result = R.without(matchAgainst, source)
// => [1, 4]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20source%20%3D%20%5B1%2C%202%2C%203%2C%204%5D%0Aconst%20matchAgainst%20%3D%20%5B2%2C%203%5D%0A%0Aconst%20result%20%3D%20R.without(matchAgainst%2C%20source)%0A%2F%2F%20%3D%3E%20%5B1%2C%204%5D">Try the above <strong>R.without</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
without<T>(matchAgainst: ReadonlyArray<T>, source: ReadonlyArray<T>): T[];
without<T>(matchAgainst: ReadonlyArray<T>): (source: ReadonlyArray<T>) => T[];
```

</details>

<details>

<summary><strong>R.without</strong> source</summary>

```javascript
import { includes } from './includes'
import { reduce } from './reduce'

export function without(matchAgainst, source){
  if (source === undefined){
    return _source => without(matchAgainst, _source)
  }

  return reduce(
    (prev, current) =>
      includes(current, matchAgainst) ? prev : prev.concat(current),
    [],
    source
  )
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { without } from './without'

test('should return a new list without values in the first argument ', () => {
  const itemsToOmit = [ 'A', 'B', 'C' ]
  const collection = [ 'A', 'B', 'C', 'D', 'E', 'F' ]

  expect(without(itemsToOmit, collection)).toEqual([ 'D', 'E', 'F' ])
  expect(without(itemsToOmit)(collection)).toEqual([ 'D', 'E', 'F' ])
})

test('ramda test', () => {
  expect(without([ 1, 2 ])([ 1, 2, 1, 3, 4 ])).toEqual([ 3, 4 ])
})
```

</details>

<details>

<summary>2 failed <italic>Ramda.without</italic> specs

> :boom: Reason for the failure: ramda method act as a transducer | ramda method pass to `equals` method
</summary>

```javascript
var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');

describe('without', function() {
  it('can act as a transducer', function() {
    eq(R.into([], R.without([1]), [1]), []);
  });
  it('has R.equals semantics', function() {
    function Just(x) { this.value = x; }
    Just.prototype.equals = function(x) {
      return x instanceof Just && R.equals(x.value, this.value);
    };
    eq(R.without([0], [-0]).length, 1);
    eq(R.without([-0], [0]).length, 1);
    eq(R.without([NaN], [NaN]).length, 0);
    eq(R.without([[1]], [[1]]).length, 0);
    eq(R.without([new Just([42])], [new Just([42])]).length, 0);
  });
});
```

</details>

### xor

```typescript
xor(x: boolean, y: boolean): boolean
```

```javascript
const result = [
  xor(true, true),
  xor(false, false),
  xor(false, true),
]
// => [false, false, true]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20xor(true%2C%20true)%2C%0A%20%20xor(false%2C%20false)%2C%0A%20%20xor(false%2C%20true)%2C%0A%5D%0A%2F%2F%20%3D%3E%20%5Bfalse%2C%20false%2C%20true%5D">Try the above <strong>R.xor</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
xor(x: boolean, y: boolean): boolean;
xor(y: boolean): (y: boolean) => boolean;
```

</details>

<details>

<summary><strong>R.xor</strong> source</summary>

```javascript
export function xor(a, b){
  if (arguments.length === 1) return _b => xor(a, _b)

  return Boolean(a) && !b || Boolean(b) && !a
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { xor } from './xor'

test('compares two values with exclusive or', () => {
  expect(xor(true, true)).toEqual(false)
  expect(xor(true, false)).toEqual(true)
  expect(xor(false, true)).toEqual(true)
  expect(xor(false, false)).toEqual(false)
})

test('when both values are truthy, it should return false', () => {
  expect(xor(true, 'foo')).toEqual(false)
  expect(xor(42, true)).toEqual(false)
  expect(xor('foo', 42)).toEqual(false)
  expect(xor({}, true)).toEqual(false)
  expect(xor(true, [])).toEqual(false)
  expect(xor([], {})).toEqual(false)
  expect(xor(new Date(), true)).toEqual(false)
  expect(xor(true, Infinity)).toEqual(false)
  expect(xor(Infinity, new Date())).toEqual(false)
})

test('when both values are falsy, it should return false', () => {
  expect(xor(null, false)).toEqual(false)
  expect(xor(false, undefined)).toEqual(false)
  expect(xor(undefined, null)).toEqual(false)
  expect(xor(0, false)).toEqual(false)
  expect(xor(false, NaN)).toEqual(false)
  expect(xor(NaN, 0)).toEqual(false)
  expect(xor('', false)).toEqual(false)
})

test('when one argument is truthy and the other is falsy, it should return true', () => {
  expect(xor('foo', null)).toEqual(true)
  expect(xor(null, 'foo')).toEqual(true)
  expect(xor(undefined, 42)).toEqual(true)
  expect(xor(42, undefined)).toEqual(true)
  expect(xor(Infinity, NaN)).toEqual(true)
  expect(xor(NaN, Infinity)).toEqual(true)
  expect(xor({}, '')).toEqual(true)
  expect(xor('', {})).toEqual(true)
  expect(xor(new Date(), 0)).toEqual(true)
  expect(xor(0, new Date())).toEqual(true)
  expect(xor([], null)).toEqual(true)
  expect(xor(undefined, [])).toEqual(true)
})

test.skip('returns a curried function', () => {
  expect(xor()(true)(true)).toEqual(false)
  expect(xor()(true)(false)).toEqual(true)
  expect(xor()(false)(true)).toEqual(true)
  expect(xor()(false)(false)).toEqual(false)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {xor} from 'rambda'

describe('xor', () => {
  it('happy', () => {
    xor(true, false) // $ExpectType boolean
  })
  it('curry', () => {
    xor(true)(false) // $ExpectType boolean
  })
})
```

</details>

<details>

<summary>1 failed <italic>Ramda.xor</italic> specs

> :boom: Reason for the failure: ramda support empty call of method
</summary>

```javascript
var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');

describe('xor', function() {
  it('returns a curried function', function() {
    eq(R.xor()(true)(true), false);
    eq(R.xor()(true)(false), true);
    eq(R.xor()(false)(true), true);
    eq(R.xor()(false)(false), false);
  });
});
```

</details>

### zip

```typescript
zip<K, V>(x: ReadonlyArray<K>, y: ReadonlyArray<V>): KeyValuePair<K, V>[]
```

It will return a new array containing tuples of equally positions items from both `x` and `y` lists. 

The returned list will be truncated to match the length of the shortest supplied list.

```javascript
const x = [1, 2]
const y = ['A', 'B']
R.zip(x, y)
// => [[1, 'A'], [2, 'B']]

// truncates to shortest list
R.zip([...x, 3], ['A', 'B'])
// => [[1, 'A'], [2, 'B']]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20const%20x%20%3D%20%5B1%2C%202%5D%0Aconst%20y%20%3D%20%5B'A'%2C%20'B'%5D%0AR.zip(x%2C%20y)%0A%2F%2F%20%3D%3E%20%5B%5B1%2C%20'A'%5D%2C%20%5B2%2C%20'B'%5D%5D%0A%0A%2F%2F%20truncates%20to%20shortest%20list%0AR.zip(%5B...x%2C%203%5D%2C%20%5B'A'%2C%20'B'%5D)%0A%2F%2F%20%3D%3E%20%5B%5B1%2C%20'A'%5D%2C%20%5B2%2C%20'B'%5D%5D">Try the above <strong>R.zip</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
zip<K, V>(x: ReadonlyArray<K>, y: ReadonlyArray<V>): KeyValuePair<K, V>[];
zip<K>(x: ReadonlyArray<K>): <V>(y: ReadonlyArray<V>) => KeyValuePair<K, V>[];
```

</details>

<details>

<summary><strong>R.zip</strong> source</summary>

```javascript
export function zip(left, right){
  if (arguments.length === 1) return _right => zip(left, _right)

  const result = []
  const length = Math.min(left.length, right.length)

  for (let i = 0; i < length; i++){
    result[ i ] = [ left[ i ], right[ i ] ]
  }

  return result
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { zip } from './zip'

const array1 = [ 1, 2, 3 ]
const array2 = [ 'A', 'B', 'C' ]

test('should return an array', () => {
  const actual = zip(array1)(array2)
  expect(actual).toBeInstanceOf(Array)
})

test('should return and array or tuples', () => {
  const expected = [
    [ 1, 'A' ],
    [ 2, 'B' ],
    [ 3, 'C' ],
  ]
  const actual = zip(array1, array2)
  expect(actual).toEqual(expected)
})

test('should truncate result to length of shorted input list', () => {
  const expectedA = [
    [ 1, 'A' ],
    [ 2, 'B' ],
  ]
  const actualA = zip([ 1, 2 ], array2)
  expect(actualA).toEqual(expectedA)

  const expectedB = [
    [ 1, 'A' ],
    [ 2, 'B' ],
  ]
  const actualB = zip(array1, [ 'A', 'B' ])
  expect(actualB).toEqual(expectedB)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {zip} from 'rambda'

describe('zip', () => {
  it('happy', () => {
    const array1 = [1, 2, 3]
    const array2 = ['A', 'B', 'C']

    const result = zip(array1)(array2)
    result // $ExpectType KeyValuePair<number, string>[]
  })
})
```

</details>

### zipObj

```typescript
zipObj<T>(keys: ReadonlyArray<string>, values: ReadonlyArray<T>): { [index: string]: T }
```

It will return a new object with keys of `keys` array and values of `values` array.

```javascript
const keys = ['a', 'b', 'c']

R.zipObj(keys, [1, 2, 3])
//=> {a: 1, b: 2, c: 3}

// truncates to shortest list
R.zipObj(keys, [1, 2])
//=> {a: 1, b: 2}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20const%20keys%20%3D%20%5B'a'%2C%20'b'%2C%20'c'%5D%0A%0AR.zipObj(keys%2C%20%5B1%2C%202%2C%203%5D)%0A%2F%2F%3D%3E%20%7Ba%3A%201%2C%20b%3A%202%2C%20c%3A%203%7D%0A%0A%2F%2F%20truncates%20to%20shortest%20list%0AR.zipObj(keys%2C%20%5B1%2C%202%5D)%0A%2F%2F%3D%3E%20%7Ba%3A%201%2C%20b%3A%202%7D">Try the above <strong>R.zipObj</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
zipObj<T>(keys: ReadonlyArray<string>, values: ReadonlyArray<T>): { [index: string]: T };
zipObj(keys: ReadonlyArray<string>): <T>(values: ReadonlyArray<T>) => { [index: string]: T };

// RAMBDAX_MARKER_START
```

</details>

<details>

<summary><strong>R.zipObj</strong> source</summary>

```javascript
import { take } from './take'

export function zipObj(keys, values){
  if (arguments.length === 1) return yHolder => zipObj(keys, yHolder)

  return take(values.length, keys).reduce((
    prev, xInstance, i
  ) => {
    prev[ xInstance ] = values[ i ]

    return prev
  }, {})
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { equals } from './equals'
import { zipObj } from './zipObj'

test('zipObj', () => {
  expect(zipObj([ 'a', 'b', 'c' ], [ 1, 2, 3 ])).toEqual({
    a : 1,
    b : 2,
    c : 3,
  })
})

test('0', () => {
  expect(zipObj([ 'a', 'b' ])([ 1, 2, 3 ])).toEqual({
    a : 1,
    b : 2,
  })
})

test('1', () => {
  expect(zipObj([ 'a', 'b', 'c' ])([ 1, 2 ])).toEqual({
    a : 1,
    b : 2,
  })
})

test('ignore extra keys', () => {
  const result = zipObj([ 'a', 'b', 'c', 'd', 'e', 'f' ], [ 1, 2, 3 ])
  const expected = {
    a : 1,
    b : 2,
    c : 3,
  }

  expect(equals(result, expected)).toBeTrue()
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {zipObj} from 'rambda'

describe('zipObj', () => {
  it('happy', () => {
    const result = zipObj(['a', 'b', 'c', 'd', 'e', 'f'], [1, 2, 3])
    result // $ExpectType { [index: string]: number; }
  })
})
```

</details>

## CHANGELOG

# CHANGELOG

4.0.0

Move the following methods to `Rambda` and change their logic to match `Ramda` implementation(if necessary):

- `R.hasPath`(already there)

The rest will need `Ramda` compatibility specs to be started again

- `R.unless`
- `R.tryCatch`
- `R.where`
- `R.whereEq`

Deprecate the following methods:

- `R.s`
- `R.toggle`
- `R.composed`
- `R.defaultToStrict`
- `R.findInObject`
- `R.headObject`
- `R.includesType`
- `R.inject`
- `R.isAttach`
- `R.opposite`
- `R.otherwise`
- `R.resolve` ?
- `R.whenAsync`

Also these changes:

- Improve `R.ok` throwed error message

- `R.ok` returns `undefined` instead of `true` when validation passes.

- `R.mergeDeep` is renamed to `R.mergeDeepLeft`

- Add `R.pipeAsync`

- Change how Typescript definitions are exported

- Rename `R.uuid` to `R.randomString`

- Take `R.partialCurry` from `Rambda` as it is deprecated there

3.7.0

> Sync with Rambda

Add `R.lens`

Add `R.lensIndex`

Add `R.lensPath`

Add `R.lensProp`

Add `R.over`

Add `R.set`

Add `R.view`

Add `R.paths`

Add `R.xor`

Add `R.cond`

3.6.0

- Add `R.mapAsyncLimit`

- Add `R.toggle`, match Ramda upcoming method specification

- Add `R.isValidAsync`

- Extend `R.template` without introducing breaking change

3.5.0 Sync with `Rambda` - add methods descriptions to Typescript definitions

3.4.0 Sync with `Rambda` and close [Issue #42](https://github.com/selfrefactor/rambdax/pull/42)

3.3.0 Fix `R.sortObject` typing

3.3.0 Add `R.filterAsync` and `R.sortObject` methods

3.2.0 `R.uuid` accept second argument in order to return string only uuid

3.1.0 Dynamic set of exports lead to adding previously ommited Rambda exports such as `R.identical`

3.0.3 Sync with Rambda - new functionality of `R.isEmpty`

3.0.2 Add typings for `R.mapToObject`

3.0.1 Fix typings

3.0.0 Breaking change as `Rambda` also has breaking changes

Read more about it in `Rambda` changelog

Also with this versions, typings tests are provided and several definitions are changed.

- R.anyTrue, R.anyFalse, R.allTrue, R.allFalse use internal `isTruthy` and `isFalsy` methods. Empty array and object with zero length are considered falsy.

- Deprecate `R.contains`

- Deprecate `R.defaultToWhen`

- Moved `R.runTests` to `helpers` repo

2.17.0 Change in `R.runTests` logic. It will be removed from Rambdax to `helpers` repo.

2.16.0 Restore `R.runTests` but without documentation

- export `getEvaluations`, `getPositiveEvaluation`, `getNegativeEvaluation` in the context of `R.runTests`

2.15.0 Several changes

- Typescript definitions have been updated and typings tests are introduced

- `R.mapAsync` and `R.mapFastAsync` pass index as second argument

2.14.1 Restore `R.contains`

2.14.0 Several changes:

- `R.inject` accept before flag as fourth argument

- Remove `R.includesAny`

- Improve typing of `R.partition`

- `R.nextIndex` and `R.prevIndex` work also with number as second argument

2.13.1 Deprecate `R.log` and `R.runTests`

2.12.3 Add 'dist' directory to `files`

2.12.2 Add `R.mapToObject` typings

2.12.0 Sync with Rambda

2.11.1 Fix `R.waitFor`

2.11.0 Add `R.toDecimal`

2.10.2 Fix [issue 32](https://github.com/selfrefactor/rambdax/issues/32)

2.10.0 deprecate `R._`

2.9.1 R.fromPairs/toPairs typing

2.9.0 npm doesn't update version on their site

2.8.2 R.map typing

2.8.0 Sync with Rambda | no need for create types script

2.7.0 Add `R.prevIndex`

2.6.2 Sync with Rambda

2.6.0 `R.log` depends on `RAMBDAX_LOG`

2.5.0 Rambda's `partial`

2.4.0 Add `R.uuid`

2.3.0 `R._` parse to constant case

> This introduce breaking change for ie11 as noted in [issue 31](https://github.com/selfrefactor/rambdax/issues/31) which is fixed with `2.10.0` which deprecates this method

2.2.1 Add `R.log`, `R.logInit` and `R.logHolder`

2.1.0 Add `R._`

2.0.0 Add `R.toggle`

1.9.0 Add `R.pushUniq`

1.8.2 No need for sourcemaps

1.8.1 Fix building with `regeneratorRuntime`

1.8.0 Upgrade to new major Rollup release

- Restore `R.headObject`

- Add `R.hasPath` method

1.7.2 `R.memoize` contains dev console.logs

1.7.1 Forgot to build types

1.7.0 Rename `R.then` to `R.resolve` because of Ramda issue with `R.then`(they rename it to `R.andThen`)

- Add `R.isFalsy`, `R.nextIndex` and `R.mergeDeep`

1.6.3 Forgot to export `R.unless`(credit to @mobily for the PR)

1.6.0 Restore `R.compact` method

1.5.6 `R.maybe` accepts also anonymous functions as second and third argument

1.5.5 Add `R.maybe` method

- Fix errors caugth by `DeepScan` service
- Fix Typescript definitions for `R.then` and `R.otherwise`
- `R.change` increase nesting level to 4

1.4.1 `R.isValid` didn't work with `Number` prototype

1.4.0 Add multiple methods

- Add `R.defaultToStrict`
- Add `R.defaultToWhen`
- Add `R.whereEq`
- Add `R.partition`
- Add `R.negate` is renamed to `R.opposite`
- Add `R.then`
- Add `R.otherwise`
- `R.isValid` accepts prototypes as rules, i.e. `schema = {a: String}`
- The prevoious point leads to the same change applied to the methods depending on `R.isValid`, i.e. `R.ok`, `R.pass` and `R.isAttach`

  1.3.0 Add `R.unless`

- `R.when` accepts both function and value for `whenTrue` argument. The same is valid for `R.unless`

- export `R.negate` which is the same as `R.complement`

  1.2.0 Export `src` folder

  1.1.0 Restore `promiseAllObject` and `flatMap`

  1.0.1 Fix typings

  1.0.0 Deprecate the following methods:

- compact
- evolve
- flatMap
- greater
- intersection
- less
- omitBy
- pickBy
- promiseAllObject
- promiseAllSecure
- rangeBy

> Also pass deprecation of `addIndex` from `Rambda@2.0.0`

0.24.0 add `R.pipedAsync`, replace `R.multiline` with `R.glue`, remove `R.validate`

0.23.0 Add `R.count`

0.22.0 Add `R.includesAny`

0.21.0 Add `R.includesType`

0.20.1 `R.pass` and `R.ok` work with single schema.

0.20.0 Add `R.pathEq`

0.19.0 Add `R.wait`, expose already complete `R.waitFor`

0.18.0 Add`R.anyType` and `R.allType`

0.17.0 Rename `R.is` to `R.pass` and restore `R.is` original functionality.

0.16.0 getter, setter, reset methods

0.15.3 No more `prepublish` script

0.15.2 curry in `remove`

> Last version with `lib` folder exposed

## Additional info

> Running benchmarks

TODO

> Rambda references

- [Interview with Dejan Totef at SurviveJS blog](https://survivejs.com/blog/rambda-interview/)

- [Awesome functional Javascript programming libraries](https://github.com/stoeffel/awesome-fp-js#libraries)

> Links to Rambda

- (https://mailchi.mp/webtoolsweekly/web-tools-280)[Web Tools Weekly]

- (https://github.com/stoeffel/awesome-fp-js)[awesome-fp-js]

- (https://github.com/docsifyjs/awesome-docsify)[awesome-docsify]