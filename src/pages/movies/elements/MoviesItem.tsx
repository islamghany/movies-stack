import RatingSatrs from "@/components/RatingSatrs";
import { Text, Title } from "@/components/Typeo";
import { MOVIE_IMG_URL, IMG_PLACEHOLDER } from "@/constants/movies.constants";
import { IMovie } from "@/types";
import React from "react";
import { Link } from "react-router-dom";

export const MoviesItem: React.FC<{ movie: IMovie }> = ({ movie }) => {
  return (
    <div>
      <div className="relative">
        <div className="relative w-full h-72 rounded-lg overflow-hidden">
          <img
            src={
              movie.poster_path
                ? MOVIE_IMG_URL + movie.poster_path
                : IMG_PLACEHOLDER
            }
            alt={movie.overview}
            className="w-full h-full object-center object-cover"
          />
        </div>

        <div className="relative mt-4">
          <Link to={`/movies/${movie.id}`}>
            <Title as="h6">{movie.title}</Title>
          </Link>
          <Text className="mt-1 text-sm">{movie.release_date}</Text>
        </div>
        <Link to={`/movies/${movie.id}`}>
          <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute  inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-80"
            />
            <div className="flex relative items-center space-x-2">
              <RatingSatrs rating={parseInt(movie.vote_average)} />

              <p className="relative text-lg font-semibold text-white">
                {movie.vote_average}
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
