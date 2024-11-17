import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";

const getOffers = async (): AxiosPromise<void> => {
  const baseUrl = "http://localhost:3000/api";

  const response = await axios.get<void>(`${baseUrl}/aluno/ofertas`);
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
