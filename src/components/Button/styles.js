import styled from "styled-components"

export const Button = styled.button`
  background: ${props => props.isBack ? 'transparent' : 'rgba(0, 0, 0, 0.8)'};
  border-radius: 14px;
  border: ${props => props.isBack ? '1px solid #FFFFFF' : 'none'};
  width: 342px;
  height: 74px;
  margin-top: 70px;

  font-weight: 700;
  font-size: 17px;
  line-height: 28px;
  color: #ffffff;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  transition: 0.3s;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }

  img {
    transform: ${ props => props.isBack && 'rotateY(180deg)'};
  }
`;