import React, { useState } from 'react'
import { Balance, CardContainer, Coins, CoinsContainer, Container, Return, Title } from './styles'
import Card from '../../Components/Card/Card'
import useSWR from 'swr'
import fetcher from '../../Services/Fetcher'
import ProductsResponse from '../../Types/ProductsResponse'
import { BASE_API_SERVICE } from '../../Services/const'
import Sender from '../../Services/Sender'
import { Product } from '../../Types/Product'
import Loading from '../../Components/Loading/Loading'

function App() {
  const [balance, setBalance] = useState('0')
  const [isBuying, setIsBuying] = useState(false)
  const { data, error, isLoading, mutate } = useSWR<ProductsResponse>(`${BASE_API_SERVICE}/products`, fetcher)

  const insertCoin = (val: number) => {
    const sum = (parseFloat(String(balance)) + parseFloat(String(val))).toFixed(2)
    setBalance(sum)
  }

  const chargeCoin = (val: number) => {
    const sum = (parseFloat(String(balance)) - parseFloat(String(val))).toFixed(2)
    setBalance(sum)
  }

  const buyProduct = ({ id, price, name }: Product) => {
    setIsBuying(true)
    Sender<ProductsResponse>(`${BASE_API_SERVICE}/products/${id}`, 'PUT')
      .then((res) => {
        chargeCoin(price)
        alert(`Enjoy your ${name}`)
        mutate(res)
      })
      .finally(() => setIsBuying(false))
  }

  const returnCoins = () => {
    setBalance('0')
  }

  if (error) {
    return <p role='failed'>Failed to fetch</p>
  }

  if (isLoading) {
    return <p role='loading'>Loading products...</p>
  }

  return (
    <>
      <Container>
        <Title>Vending Machine</Title>
        <CardContainer>
          {data?.data?.map((product) => <Card key={product.id} currentBalance={balance} onBuy={buyProduct} product={product} />)}
        </CardContainer>
        <CoinsContainer>
          <h3>Insert: </h3>
          <Coins role='insertc-1' onClick={() => insertCoin(0.05)} type='button'>
            0.05
          </Coins>
          <Coins role='insertc-2' onClick={() => insertCoin(0.1)} type='button'>
            0.10
          </Coins>
          <Coins role='insertc-3' onClick={() => insertCoin(0.25)} type='button'>
            0.25
          </Coins>
        </CoinsContainer>
        <Balance>$ {balance}</Balance>
        <Return type='button' onClick={returnCoins}>
          Return Coin
        </Return>
      </Container>
      {isBuying && <Loading />}
    </>
  )
}

export default App
