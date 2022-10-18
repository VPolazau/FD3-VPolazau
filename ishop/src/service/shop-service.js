export default class ShopService {
  _apiBase = 'https://dummyjson.com/products'

  getAllProducts = async () => {
    const res = await fetch(`${this._apiBase}`)

    if (!res.ok) {
      throw new Error(`Could not fetch ${this._apiBase}, received ${res.status}`)
    }

    return await res.json()
  }
}
