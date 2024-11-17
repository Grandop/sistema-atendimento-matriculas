import { useMutation } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { RegisterParams } from "./types";

const loginMutate = async ({
  nome,
  email,
  senha,
  tipo,
}: RegisterParams): AxiosPromise<void> => {
  const baseUrl = "http://localhost:3000/api";

  const response = await axios.post<void>(`${baseUrl}/auth/register`, {
    nome,
    email,
    senha,
    tipo,
  });
  return response;
};

export const useRegisterMutate = () => {
  const query = useMutation({
    mutationFn: loginMutate,
    mutationKey: ["register-user"],
  });

  return {
    ...query,
    data: query.data?.data,
  };
};
