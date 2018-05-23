'use strict'

const assert = require('assert')
const has = require('.')

const v = Symbol('v')

describe('has()', function () {
  it('should return true if value is contained in an array', function () {
    assert.strictEqual(has([123], 123), true)
  })

  it('should return true if value is contained in a Map', function () {
    assert.strictEqual(has(new Map([['key', v]]), v), true)
  })

  it('should return true if value is contained in an object', function () {
    assert.strictEqual(has({k: v}, v), true)
  })

  it('should return true if value is contained in a Set', function () {
    assert.strictEqual(has(new Set([v]), v), true)
  })

  it('should return true if value is contained in a WeakSet', function () {
    const obj = {}
    assert.strictEqual(has(new WeakSet([obj]), obj), true)
  })

  it('should return false if value is not contained in an array', function () {
    assert.strictEqual(has([], 123), false)
  })

  it('should return false if value is not contained in a Map', function () {
    assert.strictEqual(has(new Map([['key', 'value']]), v), false)
  })

  it('should return false if value is not contained in an object', function () {
    assert.strictEqual(has({}, v), false)
  })

  it('should return false if value is not contained in a Set', function () {
    assert.strictEqual(has(new Set(), v), false)
  })

  it('should return false if value is not contained in a WeakSet', function () {
    assert.strictEqual(has(new WeakSet(), {}), false)
  })

  it('should return true if loose match is found when `loose` is true', function () {
    assert.strictEqual(has([[]], [], {loose: true}), true)
  })

  it('should support the bind operator', function () {
    assert.strictEqual(has.call([123], 123), true)
  })

  describe('#any()', function () {
    it('should return true if any value matches', function () {
      assert.strictEqual(has.any([1, 2, 3], [2, 3]), true)
    })

    it('should return true if single value matches', function () {
      assert.strictEqual(has.any([1, 2, 3], 2), true)
    })

    it('should return false if no match is found', function () {
      assert.strictEqual(has.any(new Map([['key', 'value']]), [v]), false)
    })

    it('should work on strings', function () {
      assert.strictEqual(has.any('test', 'aeiou'), true)
      assert.strictEqual(has.any('xyz', 'aeiou'), false)
    })

    it('should support the bind operator', function () {
      assert.strictEqual(has.any.call([1, 2, 3], [2, 3]), true)
    })
  })
})
