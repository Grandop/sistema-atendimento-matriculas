import * as S from "./styles";

interface ClassCardProps {
  discipline: string;
  professor: string;
  students: string;
  schedule: string;
  isEnrolled: boolean;
  onEnroll: () => void;
}

export const ClassCard = ({
  discipline,
  professor,
  students,
  schedule,
  isEnrolled,
  onEnroll,
}: ClassCardProps) => {
  return (
    <S.Card>
      <S.Title>{discipline}</S.Title>
      <S.Info>Professor: {professor}</S.Info>
      <S.Info>Alunos: {students}</S.Info>
      <S.Info>Horário/Período: {schedule}</S.Info>
      <S.EnrollButton
        onClick={!isEnrolled ? onEnroll : undefined}
        disabled={isEnrolled}
        $isEnrolled={isEnrolled}
      >
        {isEnrolled ? "Matriculado" : "Matricular-se"}
      </S.EnrollButton>
    </S.Card>
  );
};
