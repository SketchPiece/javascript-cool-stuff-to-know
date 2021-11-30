/*
  What is the Observer design pattern?
  The Observer pattern is a design pattern that offers a subscription model in which objects (known as 'observers') can subscribe to an event (known as a 'subject') and get notified when the event occurs (or when the subject sends a signal). This pattern is the cornerstone of event driven programming.
*/

type Observer = (data: string) => void

class Subject {
  private observers: Observer[] = []

  public subscribe(observer: Observer) {
    this.observers.push(observer)
  }

  public unsubscribe(observer: Observer) {
    this.observers = this.observers.filter(obs => obs !== observer)
  }

  public notify(data: string = '') {
    this.observers.forEach(observer => observer(data))
  }
}

const subject = new Subject()

const observer1: Observer = data =>
  console.log('Observer 1 Firing! Data:', data)

const observer2: Observer = data =>
  console.log('Observer 2 Firing! Data:', data)

subject.subscribe(observer1)
subject.subscribe(observer2)

subject.notify('Hello World!')
console.log('Unsubscribing Observer 2...')
subject.unsubscribe(observer2)
subject.notify('Hello World!')
