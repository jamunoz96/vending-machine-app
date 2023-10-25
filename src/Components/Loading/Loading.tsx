import React, { FC } from 'react'
import { Container, Loader } from './styles'

const Loading: FC = () => {
  return (
    <Container role='full-loader'>
      <Loader />
      Preparing you product...
    </Container>
  )
}

export default Loading
