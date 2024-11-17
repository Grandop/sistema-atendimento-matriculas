import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";

const getOffers = async (): AxiosPromise<void> => {
  const baseUrl = "http://localhost:3000/api";

  const response = await axios.get<void>(`${baseUrl}/institucional/ofertas`);
  return response;
};

export const useTeacherOffersQuery = () => {
  const query = useQuery({
    queryFn: () => getOffers(),
    queryKey: ["get-offers-teacher"],
  });

  return {
    ...query,
    data: query.data?.data,
  };
};
