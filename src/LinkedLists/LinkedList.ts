

interface IListNode {
  val: any, // piece of data it holds

}

export class ListNode {
  val = null
  next = null // contains a pointer to the next node
  constructor(val: any) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  length: number = 0
  head = null as any
  tail = null as any
  constructor() {
    this.length = 0
    this.head = null
    this.tail = null
  }
  push(val: any) {
    let newNode = new ListNode(val)
    this.length += 1
    if (!this.head && !this.tail) {
      this.head = newNode
      this.tail = newNode
    }
  }
}
