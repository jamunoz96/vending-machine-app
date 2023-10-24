import React, { useState } from 'react'
import { Balance, CardContainer, Coins, CoinsContainer, Container, Return, Title } from './styles'
import Card from '../../Components/Card/Card'
import useSWR from 'swr'
import fetcher from '../../Services/Fetcher'
import ProductsResponse from '../../Types/ProductsResponse'

function App() {
  const [balance, setBalance] = useState('0')
  const { data, error, isLoading } = useSWR<ProductsResponse>('http://localhost:8080/api/v1/products', fetcher)
  const insertCoin = (val: number) => {
    const sum = (parseFloat(String(balance)) + parseFloat(String(val))).toFixed(2)
    setBalance(sum)
  }
  const returnCoins = () => {
    setBalance('0')
  }

  if (error) {
    return <p>Failed to fetch</p>
  }

  if (isLoading) {
    return <p>Loading products...</p>
  }

  return (
    <Container>
      <Title>Vending Machine</Title>
      <CardContainer>
        {data?.data?.map((product) => (
          <Card key={product.id} text={product.name} unity={product.unity} price={product.price} icon={product.icon_url} />
        ))}
      </CardContainer>
      <CoinsContainer>
        <h3>Insert: </h3>
        <Coins onClick={() => insertCoin(0.05)} type='button'>
          0.05
        </Coins>
        <Coins onClick={() => insertCoin(0.1)} type='button'>
          0.10
        </Coins>
        <Coins onClick={() => insertCoin(0.25)} type='button'>
          0.25
        </Coins>
      </CoinsContainer>
      <Balance>$ {balance}</Balance>
      <Return type='button' onClick={returnCoins}>
        Return Coin
      </Return>
    </Container>
  )
}

export default App
