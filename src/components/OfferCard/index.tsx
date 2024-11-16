import * as S from "./styles";

interface OfferCardProps {
  title: string;
  teacher: string;
  schedule: string;
}

export const OfferCard = ({ title, teacher, schedule }: OfferCardProps) => {
  return (
    <S.Card>
      <S.Title>{title}</S.Title>
      <S.Info>Professor: {teacher}</S.Info>
      <S.Info>Horário/Período: {schedule}</S.Info>
    </S.Card>
  );
};
