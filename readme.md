# vhas

Checks whether a collection contains a value.

## Installation

Requires [Node.js](https://nodejs.org/) 8.3.0 or above.

```bash
npm i vhas
```

## API

The module exports a `has()` function that has one other function attached to it as a method: `has.any()`.

### `has()`

#### Parameters

1. Bindable: `collection` (Array, Iterator, Map, Object, Set, string, Typed Array, or WeakSet): The collection from which to retrieve a value.
2. `valueToCheck` (any): The value whose presence in the collection is in question.
3. Optional: Object argument:
    * `arrays` / `maps` / `sets` / `weakSets` (arrays of classes/strings): Arrays of classes and/or string names of classes that should be treated as equivalent to `Array`/`Map`/`Set`/`WeakSet` (respectively).
    * `inObj` (boolean): Whether or not to search inherited properties if `collection` is an Object (i.e. not another recognized type). Defaults to `false`.
    * `loose` (boolean): Whether or not to identify values loosely (as defined by `looselyEquals`). Defaults to `false`.
    * `looselyEquals` (function): A callback that accepts two values and returns `true` if they are to be considered equivalent or `false` otherwise. This argument is only used if `loose` is `true`. If omitted, the default behavior will, among other things, consider arrays/objects to be equal if they have the same entries.
    * `reflectObj` (boolean): Whether or not to use reflection to include non-enumerable Object property values. Only takes effect if `collection` is an Object (i.e. not another recognized type). Defaults to `false`.

#### Return Values

* Returns `true` if `valueToCheck` matches an element in the `collection`. The match can be strict or loose depending on the configured options.
* Otherwise, returns `false`.

#### Example

```javascript
const has = require('vhas')

const emptyObj = {}
const collection = [emptyObj]

has(collection, {}, {loose: true}) // true
```

### `has.any()`

Use this function if you want to check whether a collection contains any one of a set of values. The signature is the same as the main function except that the second parameter is called `valuesToCheck` and takes an iterable (such as an array or string).

#### Example

```javascript
const has = require('vhas')

const vowels = 'aeiou'

has.any('test', vowels) // true
has.any('xyz', vowels) // false
```

## Related

The “k” family of modules works on keyed/indexed collections.

* [khas](https://github.com/lamansky/khas)
* [kget](https://github.com/lamansky/kget)
* [kedit](https://github.com/lamansky/kedit)
* [kset](https://github.com/lamansky/kset)
* [kinc](https://github.com/lamansky/kinc)
* [kdel](https://github.com/lamansky/kdel)

The “v” family of modules works on any collection of values.

* [vget](https://github.com/lamansky/vget)
* [vsize](https://github.com/lamansky/vsize)
* [vadd](https://github.com/lamansky/vadd)
* [vdel](https://github.com/lamansky/vdel)
