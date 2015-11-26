/*global describe, it*/
var findAllWithClass = require('../').findAllWithClass
var Mock = require('component-mock')
var dom = require('virtual-element')
var assert = require('assert')

var component = {
  render: function () {
    return dom('div', {class: 'test-class'}, [
      dom('span', [
        dom('div', {class: 'test-class test-class--modified'}),
        dom('div', {class: 'test-class2 test-class2--modified'}),
        dom('div', {class: 'test-class2 test-class2--modified'}),
        dom('div', {class: 'test-class3 test-class3--modified'})
      ])
    ])
  }
}

describe('findAllWithClass(component, className)', function () {
  var mock = Mock(component)
  var node = mock.render()

  it('finds two `test-class` components', function () {
    var found = findAllWithClass(node, 'test-class')
    assert.equal(found.length, 2)
  })

  it('finds two `test-class2--modified` components', function () {
    var found = findAllWithClass(node, 'test-class2--modified')
    assert.equal(found.length, 2)
  })

  it('finds two `test-class2.test-class2--modified` components', function () {
    var found = findAllWithClass(node, 'test-class2.test-class2--modified')
    assert.equal(found.length, 2)
  })

  it('finds no `test-class2.test-class10--modified` components', function () {
    var found = findAllWithClass(node, 'test-class2.test-class10--modified')
    assert.equal(found.length, 0)
  })

  it('finds no `test-class10` components', function () {
    var found = findAllWithClass(node, 'test-class10')
    assert.equal(found.length, 0)
  })
})
