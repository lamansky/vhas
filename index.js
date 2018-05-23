'use strict'

const get = require('vget')
const is = require('is-instance-of')
const iterify = require('iterify')
const some = require('@lamansky/some')
const typedArrays = require('typed-arrays').names()
const xfn = require('xfn')

const notFound = Symbol('notFound')

module.exports = xfn({
  pluralArg: 1,
  pluralProp: 'any',
}, function has (obj, valuesToCheck, options = {}) {
  valuesToCheck = iterify(valuesToCheck)
  const useMethod = method => some(valuesToCheck, val => obj[method](val))
  const {arrays = [], loose, sets = [], weakSets = []} = options
  if (is(obj, ['WeakSet', weakSets])) return useMethod('has')
  if (!loose) { // Use built-in methods if possible
    if (is(obj, ['Array', arrays, typedArrays])) return useMethod('includes')
    if (is(obj, ['Set', sets])) return useMethod('has')
  }
  // It’s less overhead if `preferStrict` and `reverse` are `false`
  return get.any(obj, valuesToCheck, {...options, elseReturn: notFound, preferStrict: false, reverse: false}) !== notFound
})
