import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
`;

export const BackButton = styled.button`
  margin-top: 16px;
  padding: 10px 16px;
  font-size: 1rem;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;
