import { MoviesList } from "./MoviesList";
import { useMovies } from "@/hooks";
import Spinner from "@/components/Spinner";
import { Text, Title } from "@/components/Typeo";
import { Fragment, useCallback, useEffect } from "react";
import Button from "@/components/Button";

export default function MoviesContainer({ keyword }: { keyword?: string }) {
  //isMounted
  const {
    data,
    isLoading,
    isError,
    error,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    refetch,
  } = useMovies({
    type: !keyword ? "movie/popular" : "search/movie",
    search: keyword,
  });
  const handleFetchingNextPage = useCallback(() => {
    fetchNextPage();
  }, []);
  useEffect(() => {
    refetch();
  }, [keyword]);
  if (isLoading) return <Spinner size="lg" center className="mt-8" />;

  if (isError) {
    let err: any = error;
    return (
      <Title as="h2" className="text-red-500 mt-8 ">
        {err?.message || "Unknown Error"}
      </Title>
    );
  }

  if (data?.pages?.length)
    return (
      <Fragment>
        <MoviesList movies={data.pages.map((p) => p.results).flat()} />
        <div className="mt-6 flex justify-center w-full">
          {hasNextPage ? (
            <Button
              loading={isFetchingNextPage}
              onClick={handleFetchingNextPage}
            >
              Load More
            </Button>
          ) : (
            <Text> There is no more movies to show</Text>
          )}
        </div>
      </Fragment>
    );

  return null;
}
