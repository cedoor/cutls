const tape = require('tape')
const cutls = require('../dist/cutls')

tape('Strings module tests', function (test) {
  test.equal(cutls.strings.capitalizeWord('hello'), 'Hello')
  test.equal(cutls.strings.capitalizeWords('hello world'), 'Hello World')
  test.deepEqual(cutls.strings.capitalizeWordList(['hello', 'world']), ['Hello', 'World'])
  test.end()
})
