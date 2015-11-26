# deku-component-find-class [![Build Status](https://travis-ci.org/kvnneff/deku-component-find-class.svg?branch=master)](https://travis-ci.org/kvnneff/deku-component-find-class)

Traverse a [Deku](https://github.com/dekujs/deku) component tree and return all components with a given class name.

Adapted from  [react-shallow-testutils](https://github.com/sheepsteak/react-shallow-testutils)

## Example

```js
import {findAll, findWithClass} from 'deku-component-find-class'
import element from 'virtual-element'
import Mock from 'component-mock'

const Component = {
  render: function () {
    element('div', {class: 'Main'}, [
      element('span', {class: 'Main-greeting'}, 'Hello World!'),
      element('ul', {class: 'Main-names Names'}, [
        element('li', {class: 'Names-item'}, 'Foo'),
        element('li', {class: 'Names-item'}, 'Bar'),
        element('li', {class: 'Names-item'}, 'Baz')
      ])
    ])
  }
}

const mock = Mock(Component)
const node = mock.render()

// Return a Deku node
let greetingElement = findWithClass(node, 'Main-greeting')
console.log(greetingElement.attributes.class) //=> `Main-greeting`

// Return an array of Deku nodes
let listItems = findWithClass(node, 'Names-item')
console.log(listItems.length) //=> `3`

// Search for multiple class names
let listElement = findWithClass(node, 'Main-names.Names')

// This will throw
let listItem = findWithClass(node, 'Names-item')
```

## API

### findWithClass(node, class)

  Returns a single node found within `node` that has `class`.  This will throw an error if more than one node is found.

### findAllWithClass(node, class)

  Returns an array of nodes found within `node` that have `class`.

## License
MIT
