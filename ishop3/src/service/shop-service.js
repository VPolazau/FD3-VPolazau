export default class ShopService {
  _apiBase = 'https://dummyjson.com'

  getResource = async url => {
    const res = await fetch(`${this._apiBase}${url}`)

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`)
    }

    return await res.json()
  }

  getAllProducts = async () => {
    const res = await this.getResource('/products/')
    return res.products.map(this._transformProduct)
  }

  _transformProduct = product => {
    return {
      id: product.id,
      body: {
        title: product.title,
        price: product.price,
        discountPercentage: 1+product.discountPercentage/100,
        imageUrl: product.images[0],
        quantity: product.stock,
      },
    }
  }
}
