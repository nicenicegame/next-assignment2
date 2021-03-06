export interface IVariant {
  discount: number
  color: string
  size: string
  price: number
  stock: number
  sku: string
  imageUrl: string
}

export interface IProduct {
  id: string
  brand: string
  description: string
  name: string
  sku: string
  variants: IVariant[]
}

export interface IProducts {
  items: IProduct[]
  count: number
}
