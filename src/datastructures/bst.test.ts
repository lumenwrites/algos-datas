import { BST } from './bst'

test('Test function returns string', () => {
  let tree = new BST()
  expect(tree.name()).toBe('Hi!')
});


// toEqual - works with different places in memory
// not.toBe
