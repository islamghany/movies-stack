import { QueryClient } from "react-query";

export { useMovies, useMovie } from "./movies.hooks";

const client = new QueryClient();

export default client;
