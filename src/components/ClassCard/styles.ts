import styled from "styled-components";

export const Card = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 15px;
  margin: 10px 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h3`
  color: #4caf50;
`;

export const Info = styled.p`
  color: #333;
`;

export const EnrollButton = styled.button<{ $isEnrolled: boolean }>`
  padding: 10px 16px;
  border: none;
  border-radius: 5px;
  cursor: ${({ $isEnrolled }) => ($isEnrolled ? "default" : "pointer")};
  background-color: ${({ $isEnrolled }) =>
    $isEnrolled ? "#28a745" : "#ffc107"};
  color: white;
  font-weight: bold;

  &:hover {
    background-color: ${({ $isEnrolled }) =>
      $isEnrolled ? "#28a745" : "#ffc107"};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;
