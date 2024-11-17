import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { GetOffersResponse } from "./types";

const getOffers = async (): AxiosPromise<GetOffersResponse[]> => {
  const baseUrl = "http://localhost:3000/api";

  const response = await axios.get<GetOffersResponse[]>(
    `${baseUrl}/institucional/ofertas`
  );
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
