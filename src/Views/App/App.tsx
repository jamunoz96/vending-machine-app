import React from 'react'
import { Balance, CardContainer, Coins, CoinsContainer, Container, Return, Title } from './styles'
import Card from '../../Components/Card/Card'

function App() {
  return (
    <Container>
      <Title>Vending Machine</Title>
      <CardContainer>
        <Card text='Water' unity={2} price={0.65} icon='https://assets.stickpng.com/images/580b585b2edbce24c47b277f.png' />
        <Card
          text='Juice'
          unity={2}
          price={1.0}
          icon='https://www.pepsicoschoolsource.com/prod/s3fs-public/styles/pepsico_school_source_product_image_style_for_mobile_fallback/public/2021-06/Tropicana%C2%AE%20Orange%20Juice%20-%2010oz..png?itok=vQJcENmA'
        />
        <Card text='Soda' unity={2} price={1.5} icon='https://i.pinimg.com/originals/fe/79/a7/fe79a77d57b98386b8c05706eec0bd84.png' />
      </CardContainer>
      <CoinsContainer>
        <h3>Insert: </h3>
        <Coins type='button'>0.05</Coins>
        <Coins type='button'>0.10</Coins>
        <Coins type='button'>0.25</Coins>
      </CoinsContainer>
      <Balance>$ 0.00</Balance>
      <Return>Return Coin</Return>
    </Container>
  )
}

export default App
