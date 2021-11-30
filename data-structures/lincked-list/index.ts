import { LinkedList } from './LickedList'

const list = new LinkedList<number>()
list.append(1)
list.append(5)
list.append(8)
list.append(10)

list.prepend(900)

// list.delete(900)
// list.delete(10)
// list.delete(5)

list.print()

console.log(list.search(5))
