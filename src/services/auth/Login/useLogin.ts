import { useMutation } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { LoginParams } from "./types";

const loginMutate = async ({
  email,
  senha,
}: LoginParams): AxiosPromise<void> => {
  const baseUrl = "http://localhost:3000/api";

  const response = await axios.post<void>(`${baseUrl}/auth/login`, {
    email,
    senha,
  });
  return response;
};

export const useLoginMutate = () => {
  const query = useMutation({
    mutationFn: loginMutate,
    mutationKey: ["login"],
  });

  return {
    ...query,
    data: query.data?.data,
  };
};
