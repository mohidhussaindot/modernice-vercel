import { LocalStorage } from 'quasar'

export default class JWT {
  constructor(key) {
    this.key = key
  }

  hasToken() {
    return LocalStorage.has(this.key)
  }

  getToken() {
    return LocalStorage.getItem(this.key)
  }

  setToken(token) {
    LocalStorage.set(this.key, token)
    return this
  }

  removeToken() {
    LocalStorage.remove(this.key)
    return this
  }

  clear() {
    LocalStorage.clear()
  }
}
