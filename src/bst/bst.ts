console.log('Bst')

interface IBST {
  name: () => void
}

export class BST implements IBST {
  constructor() {

  }

  name() {
    return "Hi!"
  }
}

