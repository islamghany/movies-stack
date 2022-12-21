import { IMovie } from "@/types";
import { MoviesItem } from "./MoviesItem";

export const MoviesList: React.FC<{ movies: IMovie[] }> = ({ movies }) => {
  return (
    <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
      {movies.map((movie) => (
        <MoviesItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
