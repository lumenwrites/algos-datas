import { SinglyLinkedList, ListNode } from './linkedList';

describe("singly linked list", () => {
  let newList = new SinglyLinkedList<string>()
  newList.push("a")
  newList.push("b")
  newList.push("c")
  newList.push("d")

  test('push works', () => {
    expect(newList.head!.val).toBe("a")
    expect(newList.head!.next!.val).toBe("b")
    expect(newList.tail!.val).toBe("d")
  })

  test('pop works', () => {
    let node = new ListNode("d")
    expect(newList.pop()).toEqual(node)
    expect(newList.tail!.val).toBe("c")
  })
})
