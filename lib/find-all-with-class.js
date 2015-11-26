var findAll = require('deku-component-find-all')
var isNode = require('deku-component-is-node')

/**
 * Finds all instances of components in the tree with a class that matches
 * `className`.
 *
 * @param  {DekuComponent} tree  the rendered tree to traverse
 * @param  {String} className     the class to find
 * @return {Array}                all matching components
 */
function findAllWithClass (tree, className) {
  return findAll(tree, function (component) {
    if (isNode(component)) {
      if (component.attributes.class) {
        if (className.indexOf('.') !== -1) {
          var classNameList = className.split('.')
          return classNameList.every(function (val) {
            return component.attributes.class.indexOf(val) !== -1
          })
        }
        var nodeClasses = classes(component.attributes.class)
        return nodeClasses.indexOf(className) !== -1
      }
      return false
    }
    return false
  })
}

/**
 * Parse the given `input` into an `Array` of class names. Will always return
 * an `Array`, even if it's empty.
 *
 * @param {String} [input]  The class attribute string.
 * @return {Array}
 */
function classes (input) {
  if (!input) return []
  if (typeof input !== 'string') return []
  if (!input.trim()) return []
  return input.trim().split(/\s+/g)
}

module.exports = findAllWithClass
