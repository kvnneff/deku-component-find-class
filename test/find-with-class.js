/*global describe, it*/
var findWithClass = require('../').findWithClass
var Mock = require('component-mock')
var dom = require('virtual-element')
var assert = require('assert')

var component = {
  render: function () {
    return dom('div', {class: 'test-class'}, [
      dom('span', [
        dom('div', {class: 'test-class test-class--modified'}),
        dom('div', {class: 'test-class2 test-class2--modified'}),
        dom('div', {class: 'test-class3 test-class3--modified'})
      ])
    ])
  }
}

describe('findWithClass(component, className)', function () {
  var mock = Mock(component)
  var node = mock.render()

  it('finds `test-class2` component', function () {
    assert.doesNotThrow(function () {
      findWithClass(node, 'test-class2')
    })
  })

  it('finds one `test-class2--modified` component', function () {
    assert.doesNotThrow(function () {
      findWithClass(node, 'test-class2--modified')
    })
  })

  it('finds one `test-class2.test-class2--modified` component', function () {
    assert.doesNotThrow(function () {
      findWithClass(node, 'test-class2.test-class2--modified')
    })
  })

  it('does not find exactly one `test-class` component', function () {
    assert.throws(function () {
      findWithClass(node, 'test-class')
    })
  })

  it('does not find `test-class10` component', function () {
    assert.throws(function () {
      findWithClass(node, 'test-class10')
    })
  })
})
