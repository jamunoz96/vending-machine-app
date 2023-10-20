import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: #eee;
  padding: 5px;
  cursor: pointer;
  border-radius: 20px;
  transition: all 0.5s;

  &:hover {
    background: #eac2be;
    padding: 10px;
    & img {
      transform: rotateZ(25deg);
    }
  }

  & h3 {
    color: #666f88;
  }
`

export const Price = styled.p`
  font-weight: bold;
`

export const Unity = styled.div`
  align-self: center;
  padding: 10px 15px 10px 15px;
  border-radius: 90px;
  font-weight: bold;
  background: #d2915a;
`
