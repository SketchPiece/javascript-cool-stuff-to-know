/*
  What is a proxy object?
  A proxy object is an object that acts as an interface (or placeholder) for something else. The proxy could be an interface to anything: an API, a network connection, a large object in memory, or some other resource that is expensive or impossible to duplicate.
*/

type CryptoCoin = 'Bitcoin' | 'Ethereum' | 'Ripple'

// External API Service
class CryptoCurrencyAPI {
  getValue(coin: CryptoCoin): number {
    console.log('Calling External API...')
    switch (coin) {
      case 'Bitcoin':
        return 80000
      case 'Ethereum':
        return 100000
      case 'Ripple':
        return 1000
    }
  }
}

const api = new CryptoCurrencyAPI()

// tons of other api requests...
console.log('Before proxy')
console.log(api.getValue('Bitcoin'))
console.log(api.getValue('Ethereum'))
console.log(api.getValue('Ripple'))
console.log(api.getValue('Bitcoin'))
console.log(api.getValue('Ethereum'))
console.log(api.getValue('Ripple'))

type PartialObjectWithKeys<T extends string> = Partial<Record<T, number>>

class CryptoCurrencyProxy {
  private api: CryptoCurrencyAPI
  private cache: PartialObjectWithKeys<CryptoCoin>
  constructor() {
    this.api = new CryptoCurrencyAPI()
    this.cache = {}
  }

  getValue(coin: CryptoCoin): number {
    const cachedValue = this.cache[coin]
    if (cachedValue === undefined) {
      const value = this.api.getValue(coin)
      this.cache[coin] = value
      return value
    }
    return cachedValue
  }
}

const proxy = new CryptoCurrencyProxy()

console.log('After proxy')
console.log(proxy.getValue('Bitcoin'))
console.log(proxy.getValue('Ethereum'))
console.log(proxy.getValue('Ripple'))
console.log(proxy.getValue('Bitcoin'))
console.log(proxy.getValue('Ethereum'))
console.log(proxy.getValue('Ripple'))
