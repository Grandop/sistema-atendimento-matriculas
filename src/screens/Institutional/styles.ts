import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
`;

export const NewOfferButton = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
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

export const ModalTitle = styled.h2`
  margin-bottom: 16px;
  font-size: 20px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px 12px;
  margin-bottom: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
`;

export const SaveButton = styled.button`
  padding: 10px 16px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;
