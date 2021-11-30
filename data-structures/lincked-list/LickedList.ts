export class Node<T> {
  public next?: Node<T>
  public previous?: Node<T>
  constructor(public value: T) {}
}

export class LinkedList<T> {
  private head?: Node<T>
  private tail?: Node<T>

  append(value: T) {
    if (!this.tail) this.tail = this.head = new Node(value)
    else {
      // store reference to "current" tail of the list
      let oldTail = this.tail

      // move tail to brand new Node
      this.tail = new Node(value)

      // create next refference for our "new" tail
      oldTail.next = this.tail

      // create previous reference to our previous tail
      this.tail.previous = oldTail
    }
  }

  prepend(value: T) {
    if (!this.head) this.head = this.tail = new Node(value)
    else {
      // store reference to "current" head of the list
      let oldHead = this.head

      // move the head pointer to a brand new Node
      this.head = new Node(value)

      // connect old head to new head
      oldHead.previous = this.head

      // create the back reference
      this.head.next = oldHead
    }
  }

  delete(value: T): void {
    if (!this.head) return
    if (this.head?.value === value) {
      this.head = this.head.next
      if (this.head) this.head.previous = undefined
      return
    }

    let current: Node<T> | undefined = this.head
    let previous = current.previous
    let next = current.next

    while (current !== undefined && current.value !== value) {
      previous = current
      current = next
      if (current !== undefined) next = current.next
    }

    if (previous) previous.next = next
    if (next) next.previous = previous
  }

  search(value: T) {
    let current = this.head
    while (current !== undefined) {
      if (current.value === value) return current
      current = current.next
    }
    return
  }

  print() {
    let current = this.head
    while (current) {
      console.log(current.value)
      current = current.next
    }
  }
}
