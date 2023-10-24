import { Product } from './Product'

export default interface ProductsResponse {
  success: boolean
  data: Product[]
}
