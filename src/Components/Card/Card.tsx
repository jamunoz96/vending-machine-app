import React, { FC } from 'react'
import { Container, Price, Unity } from './styles'

interface ICard {
  text: string
  icon: string
  price: number
  unity: number
}

const Card: FC<ICard> = ({ text, icon, price, unity }) => {
  return (
    <Container>
      <h3>{text}</h3>
      <Unity>{unity}</Unity>
      <img width={300} height={300} src={icon} alt='machine' />
      <Price>$ {price}</Price>
    </Container>
  )
}

export default Card
