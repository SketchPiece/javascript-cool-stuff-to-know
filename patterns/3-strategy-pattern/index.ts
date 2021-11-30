/*
  What is the Strategy design pattern?
  The Strategy pattern is a behavioral design pattern that enables you to define a group (or family) of closely-related algorithms (known as strategies). The strategy pattern allows you to swap strategies in and out for each other as needed at runtime.
*/

abstract class Company {
  abstract calculate(packageCount: number): void
}

class Fedex extends Company {
  calculate(packageCount = 1) {
    // fedex calculations...
    return packageCount * 2.45
  }
}

class UPS extends Company {
  calculate(packageCount = 1) {
    // ups calculations...
    return packageCount * 1.56
  }
}

class USPS extends Company {
  calculate(packageCount = 1) {
    // usps calculations...
    return packageCount * 4.5
  }
}

class Shipping {
  company?: Company
  setStrategy(company: Company) {
    this.company = company
  }

  calculate(packageCount: number) {
    return this.company?.calculate(packageCount)
  }
}

const fedex = new Fedex()
const ups = new UPS()
const usps = new USPS()

const packageCount = 5

// fedex.calculate(packageCount)
// ups.calculate(packageCount)
// usps.calculate(packageCount)

const shipping = new Shipping()
shipping.setStrategy(fedex)
console.log('Fedex:', shipping.calculate(packageCount))
shipping.setStrategy(ups)
console.log('UPS:', shipping.calculate(packageCount))
shipping.setStrategy(usps)
console.log('USPS:', shipping.calculate(packageCount))
