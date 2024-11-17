import { useMutation } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { EnrollParams } from "./types";

const enrollMutate = async ({
  idAluno,
  idTurma,
}: EnrollParams): AxiosPromise<void> => {
  const baseUrl = "http://localhost:3000/api";

  const response = await axios.post<void>(`${baseUrl}/aluno/matricular`, {
    idAluno,
    idTurma,
  });
  return response;
};

export const useStudentEnrollMutate = () => {
  const query = useMutation({
    mutationFn: (data: EnrollParams) => enrollMutate(data),
    mutationKey: ["student-enroll"],
  });

  return {
    ...query,
    data: query.data?.data,
  };
};
