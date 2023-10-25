/* eslint-disable camelcase */
import React from 'react'
import { fireEvent, render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react'
import App from './App'

jest.setTimeout(10000)
global.fetch = jest.fn()
const mockData = {
  success: true,
  data: [
    {
      id: 1,
      name: 'Product 1',
      unity: 10,
      price: 1,
      icon_url: 'https://example.com/product1.png',
    },
    {
      id: 2,
      name: 'Product 2',
      unity: 5,
      price: 2.99,
      icon_url: 'https://example.com/product2.png',
    },
  ],
}

const mockFetchResolved = async () => {
  global.fetch = jest.fn(
    () =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(
            new Response(JSON.stringify(mockData), {
              status: 200,
              statusText: 'OK',
              headers: {
                'Content-Type': 'application/json',
              },
            }),
          )
        }, 1000)
      }),
  )
}

describe('<App /> ', () => {
  beforeEach(() => {
    jest.resetAllMocks()
    mockFetchResolved()
  })

  it('1. should render show loading', async () => {
    render(<App />)
    await waitForElementToBeRemoved(screen.getByRole(/loading/i), { timeout: 3000 })
  })

  it('2. should render the title Vending Machine', () => {
    render(<App />)
    const titleElement = screen.getByText(/Vending Machine/i)
    expect(titleElement).toBeInTheDocument()
  })

  it('3. should render the products fetched from the API', async () => {
    render(<App />)
    await waitFor(() => {
      const product1Element = screen.getByText(/Product 1/i)
      const product2Element = screen.getByText(/Product 2/i)
      expect(product1Element).toBeInTheDocument()
      expect(product2Element).toBeInTheDocument()
    })
  })

  it('4. should allow the user to insert coins', () => {
    render(<App />)
    const coin1 = screen.getByRole('insertc-1')
    fireEvent.click(coin1)
    const balance1 = screen.getByText(/\$ 0.05/i)
    expect(balance1).toBeInTheDocument()

    const coin2 = screen.getByRole('insertc-2')
    fireEvent.click(coin2)
    const balance2 = screen.getByText(/\$ 0.15/i)
    expect(balance2).toBeInTheDocument()

    const coin3 = screen.getByRole('insertc-3')
    fireEvent.click(coin3)
    const balance3 = screen.getByText(/\$ 0.40/i)
    expect(balance3).toBeInTheDocument()
  })

  it('5. should render a loading message while fetching the products', async () => {
    render(<App />)
    waitFor(() => expect(screen.getByText(/Loading products.../i)).toBeInTheDocument())
  })

  it('6. should disable the buy card if the user doesn`t have enough balance', () => {
    render(<App />)
    const firstProduct = screen.getAllByRole('card-product')[0]
    expect(firstProduct).toHaveClass('disabled')
  })

  it('7. should enable the buy card if the user has balance > 0', () => {
    render(<App />)
    const firstProduct = screen.getAllByRole('card-product')[0]
    expect(firstProduct).toHaveClass('disabled')
    const coin = screen.getByRole('insertc-3')
    fireEvent.click(coin)
    fireEvent.click(coin)
    fireEvent.click(coin)
    fireEvent.click(coin)

    expect(firstProduct).not.toHaveClass('disabled')
  })

  it('8. should activate the loader when you click on card buy', () => {
    render(<App />)
    const firstProduct = screen.getAllByRole('card-product')[0]
    const coin = screen.getByRole('insertc-3')
    fireEvent.click(coin)
    fireEvent.click(coin)
    fireEvent.click(coin)
    fireEvent.click(coin)
    fireEvent.click(firstProduct)

    const loader = screen.getByRole('full-loader')
    expect(loader).toBeDefined()
  })
})
