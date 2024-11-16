import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f4f4f4;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 30px;
  color: #333;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const NavigationButton = styled.button`
  padding: 15px 30px;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: ${(props) =>
    props.color === "student" ? "#4caf50" : "#007bff"};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: ${(props) =>
      props.color === "student" ? "#45a049" : "#0056b3"};
  }
`;
