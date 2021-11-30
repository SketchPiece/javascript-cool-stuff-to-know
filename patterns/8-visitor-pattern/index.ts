/*
  What is the Visitor pattern?
  The Visitor pattern allows you to add or define new functionality to an object without changing the code for that object. The new logic resides in a external object or function called the 'visitor'.

  Visitors are useful when you are trying to extend the functionality of a library or framework. If the object you want to extend provides some kind of 'accept' method that accepts a visitor object/function, you can grant the visitor object access to the receiving object's internal properties. The visitor can then modify the behavior of the receiving object. This pattern allows you to provide an easy way for clients to implement future extensions to that object.
  
  ? Not quite popular in JavaScript but it's still cool to know
*/

class Employee {
  constructor(public name: string, public salary: number) {}

  getSalary() {
    return this.salary
  }
  setSalary(salary: number) {
    this.salary = salary
  }
  accept(visitorFunction: (obj: Employee) => void) {
    visitorFunction(this)
  }
}

const sketch = new Employee('Sketch', 10000)
console.log(sketch.getSalary())

function ExtraSalary(obj: Employee) {
  obj.setSalary(obj.getSalary() * 1.1)
}

sketch.accept(ExtraSalary)
console.log(sketch.getSalary())
