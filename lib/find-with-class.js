var findAllWithClass = require('./find-all-with-class')

/**
 * Find only one instance of a component in the tree with a class that matches
 * `className`.
 *
 * @param  {DekuComponent} tree  the rendered tree to traverse
 * @param  {String} className     the class to find
 * @return {ReactComponent}       the matching component
 */
function findWithClass (root, className) {
  var found = findAllWithClass(root, className)

  if (found.length !== 1) {
    throw new Error('Did not find exactly once match for class: ' + className)
  }

  return found[0]
}

module.exports = findWithClass
