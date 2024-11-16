import { useNavigate } from "react-router-dom";
import * as S from "./styles";

export const Home = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <S.Container>
      <S.Title>Bem-vindo ao Sistema de Atendimento e Matrículas</S.Title>
      <S.ButtonContainer>
        <S.NavigationButton
          color="institutional"
          onClick={() => handleNavigation("/institutional")}
        >
          Visão Institucional
        </S.NavigationButton>
        <S.NavigationButton
          color="student"
          onClick={() => handleNavigation("/student")}
        >
          Visão do Estudante
        </S.NavigationButton>
      </S.ButtonContainer>
    </S.Container>
  );
};
