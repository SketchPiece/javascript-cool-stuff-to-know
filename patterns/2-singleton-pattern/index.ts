/*
  What is the Singleton design pattern?
  The Singleton pattern allows you to limit the number of instances of a particular object to one. This single instance is called the singleton. Singletons reduce the need for global variables which is particularly important in JavaScript because it limits namespace pollution and associated risk of name collisions.
*/

class Process {
  constructor(public state: string) {}
}

const Singleton = (function () {
  class ProcessManager {
    constructor(public numProcesses: number = 1) {}
  }

  let pManager: ProcessManager

  function createProcessManager() {
    pManager = new ProcessManager()
    return pManager
  }

  return {
    getProcessManager: () => {
      if (!pManager) pManager = createProcessManager()
      return pManager
    }
  }
})()

const processManager = Singleton.getProcessManager()
const processManager2 = Singleton.getProcessManager()

console.log('This must be the same object:', processManager === processManager2) // true
