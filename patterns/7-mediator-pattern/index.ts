/*
  What is the Mediator pattern?
  The Mediator pattern provides central authority over a group of objects by controlling how these objects interact with each other. The "central" object is known as the 'mediator'. The mediator pattern is useful in scenarios where every object needs to be aware of any state change in any other object in the group.
*/

class Member {
  public chatroom?: Chatroom
  constructor(public name: string) {}

  public send(msg: string, toMember: Member) {
    if (this.chatroom) this.chatroom.send(msg, this, toMember)
  }

  public receive(msg: string, fromMember: Member) {
    console.log(`${fromMember.name} to ${this.name}: ${msg}`)
  }
}

class Chatroom {
  public members: any = {}

  addMember(member: Member) {
    this.members[member.name] = member
    member.chatroom = this
  }

  send(msg: string, fromMember: Member, toMember: Member) {
    toMember.receive(msg, fromMember)
  }
}

const chat = new Chatroom()

const bob = new Member('Bob')
const alice = new Member('Alice')
const john = new Member('John')

chat.addMember(bob)
chat.addMember(alice)
chat.addMember(john)

bob.send('Hi Alice', alice)
alice.send('Hi Bob', bob)
john.send("Hey! I'm also here!", alice)
