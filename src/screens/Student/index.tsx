import { useState } from "react";
import * as S from "./styles";
import { ClassCard } from "../../components/ClassCard";
import { useNavigate } from "react-router-dom";

export const StudentView = () => {
  const navigate = useNavigate();
  const [classes, setClasses] = useState([
    {
      id: 1,
      title: "Matemática",
      teacher: "João",
      schedule: "21",
      students: 10,
      isEnrolled: false,
    },
    {
      id: 2,
      title: "História",
      teacher: "Maria",
      schedule: "33",
      students: 5,
      isEnrolled: false,
    },
  ]);

  const handleEnroll = (id: number) => {
    setClasses((prevClasses) =>
      prevClasses.map((classData) =>
        classData.id === id
          ? {
              ...classData,
              students: classData.students + 1,
              isEnrolled: true,
            }
          : classData
      )
    );
  };

  return (
    <S.Container>
      <S.Title>Turmas Disponíveis para Matrícula</S.Title>
      <div>
        {classes.map((classData) => (
          <ClassCard
            key={classData.id}
            discipline={classData.title}
            professor={classData.teacher}
            students={`${classData.students} alunos`}
            schedule={classData.schedule}
            isEnrolled={classData.isEnrolled}
            onEnroll={() => handleEnroll(classData.id)}
          />
        ))}
      </div>
      <S.BackButton onClick={() => navigate("/")}>Voltar</S.BackButton>
    </S.Container>
  );
};
