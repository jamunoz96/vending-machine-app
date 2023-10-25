/* eslint-disable camelcase */

import { fireEvent, render, screen } from '@testing-library/react'
import Card from './Card'

describe('<Card /> ', () => {
  it('1. should render the product name, unity, icon, and price', () => {
    const product = {
      id: 473,
      name: 'Product 1',
      unity: 5,
      price: 10,
      icon_url: 'https://example.com/product1.png',
    }
    const onBuy = jest.fn()
    const currentBalance = '20'

    render(<Card product={product} onBuy={onBuy} currentBalance={currentBalance} />)

    expect(screen.getByText('Product 1')).toBeInTheDocument()
    expect(screen.getByText('5')).toBeInTheDocument()
    expect(screen.getByAltText('machine')).toHaveAttribute('src', 'https://example.com/product1.png')
    expect(screen.getByText('$ 10')).toBeInTheDocument()
  })

  it('2. should call onBuy function when clicked and balance is sufficient', () => {
    const product = {
      id: 48,
      name: 'Product 1',
      unity: 5,
      price: 10,
      icon_url: 'https://example.com/product1.png',
    }
    const onBuy = jest.fn()
    const currentBalance = '20'
    render(<Card product={product} onBuy={onBuy} currentBalance={currentBalance} />)

    fireEvent.click(screen.getByRole('card-product'))

    expect(onBuy).toHaveBeenCalledWith(product)
  })

  it('3. should display disabled style when balance is insufficient or unity is 0', () => {
    const product = {
      id: 94,
      name: 'Product 1',
      unity: 0,
      price: 10,
      icon_url: 'https://example.com/product1.png',
    }
    const onBuy = jest.fn()
    const currentBalance = '5'
    render(<Card product={product} onBuy={onBuy} currentBalance={currentBalance} />)

    expect(screen.getByRole('card-product')).toHaveClass('disabled')
  })

  it('4. should display alert when balance is insufficient', () => {
    const product = {
      id: 54,
      name: 'Product 1',
      unity: 5,
      price: 10,
      icon_url: 'https://example.com/product1.png',
    }
    const onBuy = jest.fn()
    const currentBalance = '5'
    render(<Card product={product} onBuy={onBuy} currentBalance={currentBalance} />)
    window.alert = jest.fn()

    fireEvent.click(screen.getByRole('card-product'))

    expect(window.alert).toHaveBeenCalledWith('You need coins to buy')
  })

  it('5. should display alert when unity is 0', () => {
    const product = {
      id: 53,
      name: 'Product 1',
      unity: 0,
      price: 10,
      icon_url: 'https://example.com/product1.png',
    }
    const onBuy = jest.fn()
    const currentBalance = '20'
    render(<Card product={product} onBuy={onBuy} currentBalance={currentBalance} />)
    window.alert = jest.fn()

    fireEvent.click(screen.getByRole('card-product'))

    expect(window.alert).toHaveBeenCalledWith('Not available')
  })

  it('6. should display enabled style when balance is sufficient and unity is greater than 0', () => {
    const product = {
      id: 12,
      name: 'Product 1',
      unity: 5,
      price: 10,
      icon_url: 'https://example.com/product1.png',
    }
    const onBuy = jest.fn()
    const currentBalance = '20'
    render(<Card product={product} onBuy={onBuy} currentBalance={currentBalance} />)

    expect(screen.getByRole('card-product')).toHaveClass('enable')
  })
})
