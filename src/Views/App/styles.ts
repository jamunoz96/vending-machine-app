import styled from 'styled-components'

export const Container = styled.div`
  text-align: center;
  background-color: #b5bac9;
  width: 100%;
  min-height: 100vh;
  position: relative;
`

export const CardContainer = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`

export const Title = styled.p`
  display: flex;
  top: -10px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  justify-content: center;
  position: relative;
  margin: 0 auto;
  width: 20%;
  color: #fffacc;
  padding: 20px;
  border: 1px dashed #eee;
  font-size: 35px;
  font-weight: bold;
`

export const CoinsContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
`

export const Coins = styled.button`
  padding: 15px;
  border: 1px solid #999;
  border-radius: 50px;
  background: #ffc340;
  margin-left: 5px;
  margin-right: 5px;
  cursor: pointer;
  font-weight: bold;
`

export const Balance = styled.p`
  bottom: -10px;
  left: 40%;
  right: 40%;
  margin: 0;
  position: fixed;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  width: 20%;
  color: #fffacc;
  background: #607d8b;
  padding: 15px;
  font-size: 25px;
  font-weight: bold;
`

export const Return = styled.button`
  bottom: 10px;
  border: 1px solid blue;
  right: 5%;
  font-size: 16px;
  cursor: pointer;
  position: fixed;
  width: 100px;
  border-radius: 50px;
  background: #fffacc;
  padding: 10px;
  border: 1px dashed #eee;
  font-weight: bold;
`
