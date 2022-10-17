export default class ShopService {
  _apiBase = 'https://dummyjson.com/products'

  getAllProducts = async url => {
    url = url || ''
    const res = await fetch(`${this._apiBase}${url}`)

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`)
    }

    return await res.json()
  }

  getItem = async id => {
    const item = await this.getAllProducts(`/${id}`)
    return this._transformItem(item)
  }

  _transformItem = item => {
    return {
      id: item.id,
      title: item.title,
      price: item.price,
      imageUrl: item.images[0],
      quantity: item.stock,
    }
  }
}
