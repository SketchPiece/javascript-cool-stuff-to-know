/*
  What is the Iterator design pattern?
  The Iterator pattern is a pattern that allows you to effectively loop over a collection of objects. A common programming task is to traverse and manipulate a collection of objects. These collections may be stored as an array or perhaps something more complex, such as a tree or graph structure. In addition, you may need to access the items in the collection in a certain order, such as, front to back, back to front, depth first (as in tree searches), skip evenly numbered objects, etc.
*/

type RandomItem = number | string | boolean

const items: RandomItem[] = [1, 'demo', false, 1.42]

class ReverseIterator {
  private index: number
  constructor(private items: RandomItem[]) {
    this.index = items.length - 1
  }

  public hasNext(): boolean {
    return this.index >= 0
  }

  public next(): RandomItem {
    return this.items[this.index--]
  }
}

const iter = new ReverseIterator(items)

// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.hasNext())
while (iter.hasNext()) {
  console.log(iter.next())
}
