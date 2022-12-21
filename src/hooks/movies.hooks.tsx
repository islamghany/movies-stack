import { useInfiniteQuery, useQuery } from "react-query";
import api from "@/api";
import { IMovie, MoviesPayload } from "@/types";
import { buildQuery } from "@/helpers";
import { BigMoive } from "@/types/movie.type";

interface GetMoviesRequestParams {
  type?: string;
  page?: number;
  language?: string;
  search?: string;
}

const configOptions = {
  staleTime: Infinity,
  refetchOnWindowFocus: false,
  retry: false,
};

const getMovies = async ({
  type,
  page = 1,
  language = "en-US",
  search,
}: GetMoviesRequestParams) => {
  let query = "";

  query = buildQuery(query, undefined, type);
  query += buildQuery(query, "api_key", import.meta.env.VITE_API_KEY);
  query += buildQuery(query, "page", page);
  query += buildQuery(query, "query", search);
  query += buildQuery(query, "language", language);
  try {
    const res = await api.get<MoviesPayload>(query);
    return res.data;
  } catch (err: any) {
    throw new Error(
      err?.response?.data?.status_message ||
        "Network Error, please try again later."
    );
  }
};

async function getMovie(id: string | undefined) {
  try {
    const res = await api.get<BigMoive>(
      "/movie/" + id + "?api_key=" + import.meta.env.VITE_API_KEY
    );

    return res.data;
  } catch (err: any) {
    throw new Error(
      err?.response?.data?.status_message ||
        "Network Error, please try again later."
    );
  }
}
export const useMovies = (props: GetMoviesRequestParams) => {
  return useInfiniteQuery(
    ["movies", { perPage: 20 }],
    ({ pageParam = 1 }) =>
      getMovies({
        type: props.type,
        page: pageParam,
        language: props.language,
        search: props.search,
      }),
    {
      ...configOptions,
      getNextPageParam: (lastPage, _) => {
        if (lastPage.page < lastPage.total_pages) return lastPage.page + 1;
        return;
      },
      enabled: false,
    }
  );
};

export const useMovie = (id: string | undefined) => {
  return useQuery(["movie", id], () => getMovie(id), configOptions);
};
