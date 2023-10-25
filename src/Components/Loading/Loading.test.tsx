import React from 'react'
import { render, screen } from '@testing-library/react'
import Loading from './Loading'

describe('<Loading /> ', () => {
  test('1. renders loading component', () => {
    render(<Loading />)
    const loadingText = screen.getByText(/Preparing you product.../i)
    expect(loadingText).toBeInTheDocument()
  })
})
