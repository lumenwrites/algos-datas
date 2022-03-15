

interface IListNode {
  val: any, // piece of data it holds

}

export class ListNode<T> {
  val: T
  next: ListNode<T> | null = null // contains a pointer to the next node
  constructor(val: T) {
    this.val = val
    this.next = null
  }
}

export class SinglyLinkedList<T> {
  length: number = 0
  head: ListNode<T> | null = null
  tail: ListNode<T> | null = null
  constructor() {
    this.length = 0
    this.head = null
    this.tail = null
  }
  push(val: T) {
    let newNode = new ListNode<T>(val)
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      // Make the current tail point to the new node
      // https://stackoverflow.com/questions/40349987/how-to-suppress-error-ts2533-object-is-possibly-null-or-undefined0
      // You can add ! (exclamation mark) after a property/variable name.
      // This feature is called “Non - null assertion operator“, basically it means that 
      // when you add the exclamation mark after a value, you are telling TypeScript that 
      // you are certain that value is not null or undefined.
      this.tail!.next = newNode
      // Set the new node as the new tail
      this.tail = newNode
    }
    this.length += 1
    return this
  }
  pop(): ListNode<T> | undefined {
    if (!this.head) return undefined
    // Loop through the nodes as long as there's a pointer to the next one
    let current: ListNode<T> | null = this.head
    let prev: ListNode<T> | null = current
    while (current.next) {
      // prev is lagging behind. setting it to the old current, 
      // moving current a step forward
      prev = current
      current = current.next
    }
    this.tail = prev // Point the tail to the next to last node
    this.tail.next = null // remove the very last node
    this.length -= 1
    return current
  }
  traverse() {
    // Loop through the nodes as long as there's a pointer to the next one
    let current = this.head
    while (current) {
      console.log(current.val)
      current = current.next
    }
  }
}

let newList = new SinglyLinkedList<string>()
console.log(newList.push("a"))
console.log(newList.push("b"))
