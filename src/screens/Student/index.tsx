import * as S from "./styles";
import { ClassCard } from "../../components/ClassCard";
import { useNavigate } from "react-router-dom";
import { useStudentOffersQuery } from "../../services/student/GetOffers/useGetOffers";
import { useStudentEnrollMutate } from "../../services/student/Enroll/useEnroll";

export const StudentView = () => {
  const navigate = useNavigate();
  const { data: studentOffers, refetch } = useStudentOffersQuery();
  const { mutate: enrollMutate } = useStudentEnrollMutate();
  // const [classes, setClasses] = useState(studentOffers || []);

  const handleEnroll = (id: number) => {
    enrollMutate(
      { idTurma: id.toString() },
      {
        onSuccess: () => {
          console.log("sucesso!");
          refetch();
        },
        onError: (error) => {
          console.error("Erro ao matricular:", error);
        },
      }
    );
  };

  console.log("studentOffers", studentOffers);

  return (
    <S.Container>
      <S.Title>Turmas Disponíveis para Matrícula</S.Title>
      <div>
        {studentOffers?.map((classData) => (
          <ClassCard
            key={classData.id}
            discipline={classData.nomeTurma}
            professor={classData.nomeProf}
            schedule={classData.turno}
            isEnrolled={classData.isEnrolled}
            onEnroll={() => handleEnroll(classData.id)}
          />
        ))}
      </div>
      <S.BackButton onClick={() => navigate("/")}>Voltar</S.BackButton>
    </S.Container>
  );
};
