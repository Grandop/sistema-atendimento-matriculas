import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { GetOffersResponse } from "./types";

const getOffers = async (): AxiosPromise<GetOffersResponse[]> => {
  const baseUrl = "http://localhost:3000/api";

  const response = await axios.get<GetOffersResponse[]>(
    `${baseUrl}/aluno/ofertas`
  );
  return response;
};

export const useStudentOffersQuery = () => {
  const query = useQuery({
    queryFn: () => getOffers(),
    queryKey: ["get-offers-student"],
  });

  return {
    ...query,
    data: query.data?.data,
  };
};
