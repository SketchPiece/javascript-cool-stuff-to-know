/*
  What is the Factory design pattern?
  The factory pattern is a creational design pattern that uses factory methods to create objects — rather than by calling a constructor.
*/

type EmployeeType = 'Developer' | 'Tester'

abstract class ITEmployee {
  abstract type: EmployeeType

  constructor(public name: string) {}

  say() {
    console.log(`Hi, I'm ${this.name} and I am a ${this.type}`)
  }
}

class Developer extends ITEmployee {
  type: EmployeeType

  constructor(public name: string) {
    super(name)
    this.type = 'Developer'
  }
}

class Tester extends ITEmployee {
  type: EmployeeType

  constructor(public name: string) {
    super(name)
    this.type = 'Tester'
  }
}

class EmployeeFactory {
  create(name: string, type: 1 | 2): ITEmployee {
    switch (type) {
      case 1:
        return new Developer(name)
      case 2:
        return new Tester(name)
    }
  }
}

const employeeFactory = new EmployeeFactory()
const employees = []

employees.push(employeeFactory.create('John', 1))
employees.push(employeeFactory.create('Patrick', 2))
employees.push(employeeFactory.create('Taylor', 1))

employees.forEach(employee => employee.say())
