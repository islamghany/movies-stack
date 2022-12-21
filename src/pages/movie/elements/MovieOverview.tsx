import RatingSatrs from "@/components/RatingSatrs";
import { Text, Title } from "@/components/Typeo";
import { IMG_PLACEHOLDER, MOVIE_IMG_URL } from "@/constants/movies.constants";
import { BigMoive } from "@/types/movie.type";

export default function MovieOverview({ movie }: { movie: BigMoive }) {
  return (
    <div className="bg-white">
      <div className="mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-rows-1 lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
          <div className="lg:row-end-1 lg:col-span-4">
            <div className=" overflow-hidden">
              <img
                src={
                  movie.poster_path
                    ? MOVIE_IMG_URL + movie.poster_path
                    : IMG_PLACEHOLDER
                }
                alt={movie.overview}
                className="object-center object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="max-w-2xl mx-auto mt-14 sm:mt-16 lg:max-w-none lg:mt-0 lg:row-end-2 lg:row-span-2 lg:col-span-3">
            <div className="flex flex-col-reverse">
              <div className="mt-4">
                <Title as="h2">{movie.title}</Title>
                {movie.tagline ? (
                  <Title as="h5">
                    <q>{movie.tagline}</q>
                  </Title>
                ) : null}
                <Text className="text-sm text-gray-500 mt-2">
                  Released (
                  <time dateTime={movie.release_date}>
                    {movie.release_date}
                  </time>
                  )
                </Text>
              </div>
              <div className="flex items-center justify-between flex-wrap">
                <div className="space-x-2 flex items-center">
                  <RatingSatrs rating={parseInt(movie.vote_average)} />
                  <Text>{movie.vote_average}</Text>
                </div>
                {movie.adult && (
                  <div className="py-1 px-4 bg-rose-600 rounded-full inline-block">
                    <Text className="font-bold text-white">Adults Only</Text>
                  </div>
                )}
              </div>
            </div>

            <Text className="text-gray-500 mt-6">{movie.overview}</Text>

            <div className="mt-6">
              <Text className="font-bold">Genres:</Text>
              <div className="text-white flex flex-wrap space-x-2 mt-3">
                {movie.genres.map((g) => (
                  <p
                    className="text-sm py-1 px-2 rounded-full bg-slate-500"
                    key={g.id}
                  >
                    {g.name}
                  </p>
                ))}
              </div>
            </div>
            <div className="mt-6">
              <Text className="font-bold">Production Countries:</Text>
              <div className="text-gray-500 ml-2">
                {movie.production_countries.map((g) => (
                  <p className="text-sm" key={g.iso_3166_1}>
                    {g.name}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-6 flex">
              <Text className="font-bold">Runtime:</Text>
              <Text className="text-gray-500 ml-2">{movie.runtime} min</Text>
            </div>
            <div className="mt-6">
              <Text className="font-bold">Spoken Languages:</Text>
              <div className="text-gray-500 ml-2">
                {movie.spoken_languages.map((g) => (
                  <p className="text-sm" key={g.iso_639_1}>
                    {g.english_name}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
