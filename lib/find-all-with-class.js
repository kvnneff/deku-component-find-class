var findAll = require('deku-component-find-all')
var isNode = require('deku-component-is-node')

/**
 * Returns true if the given parameter classNameList contains the
 * given paramter className.
 *
 * @param  {String}  classNameList String of all class names
 * @param  {String}  className     The class name to search for
 * @return {Boolean}
 */
function hasClassName (classNameList, className) {
  return ` ${classNameList} `.indexOf(` ${className} `) !== -1
}

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
            return hasClassName(component.attributes.class, val)
          })
        }
        return hasClassName(component.attributes.class, className)
      }
      return false
    }
    return false
  })
}

module.exports = findAllWithClass
