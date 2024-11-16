import React from "react";
import * as S from "./styles";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

export const Modal = ({ children, onClose }: ModalProps) => {
  return (
    <S.ModalOverlay>
      <S.ModalContent>
        <S.CloseButton onClick={onClose}>X</S.CloseButton>
        {children}
      </S.ModalContent>
    </S.ModalOverlay>
  );
};
