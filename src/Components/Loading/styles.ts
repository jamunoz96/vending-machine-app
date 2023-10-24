import styled from 'styled-components'

export const Container = styled.div`
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 100;
  display: flex;
  flex-direction: column;
  color: #fff;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  top: 0;
`
export const Loader = styled.div`
  width: 48px;
  height: 48px;
  border: 3px solid #fff;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  &::after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    background: #fef8b1;
    width: 16px;
    height: 16px;
    transform: translate(-50%, 50%);
    border-radius: 50%;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
