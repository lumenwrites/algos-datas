import { BST } from '../../src/bst/bst'

test('testing basics', () => {
  let tree = new BST()
  expect(tree.name()).toBe('Hi!')
});
