import { useMutation } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { CreateOfferParams } from "./types";

const createOfferMutate = async ({
  nomeTurma,
  nomeProf,
  turno,
}: CreateOfferParams): AxiosPromise<void> => {
  const baseUrl = "http://localhost:3000/api";

  const response = await axios.post<void>(
    `${baseUrl}/institucional/criarofertas`,
    {
      nomeTurma,
      nomeProf,
      turno,
    }
  );
  return response;
};

export const useCreateOfferMutate = () => {
  const query = useMutation({
    mutationFn: (data: CreateOfferParams) => createOfferMutate(data),
    mutationKey: ["create-offer"],
  });

  return {
    ...query,
    data: query.data?.data,
  };
};
