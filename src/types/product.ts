export interface Product {
  id: string
  name: string
  category: string
  fabric: string
  price: number
  originalPrice?: number
  badge?: string
  gsm: string
  description: string
  colors: string[]
  image: string
}