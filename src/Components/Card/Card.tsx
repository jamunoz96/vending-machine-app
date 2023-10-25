/* eslint-disable camelcase */
import React, { FC } from 'react'
import { Container, Price, Unity } from './styles'
import { Product } from '../../Types/Product'

interface ICard {
  product: Product
  onBuy: (v: Product) => void
  currentBalance: string
}

const Card: FC<ICard> = ({ product, onBuy, currentBalance }) => {
  const { name, unity, price, icon_url } = product
  const disabled = parseFloat(currentBalance) < price
  const handleBuy = () => {
    if (disabled) {
      return alert('You need coins to buy')
    }
    if (unity <= 0) {
      return alert('Not available')
    }
    onBuy(product)
  }

  return (
    <Container role='card-product' onClick={handleBuy} className={disabled || unity <= 0 ? 'disabled' : 'enable'}>
      <h3>{name}</h3>
      <Unity>{unity}</Unity>
      <img width={300} height={300} src={icon_url} alt='machine' />
      <Price>$ {price}</Price>
    </Container>
  )
}

export default Card
