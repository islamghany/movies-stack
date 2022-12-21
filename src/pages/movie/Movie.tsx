import Container from "@/components/Container";
import Spinner from "@/components/Spinner";
import { Title } from "@/components/Typeo";
import { useMovie } from "@/hooks";
import { useParams } from "react-router-dom";
import MovieOverview from "./elements/MovieOverview";

export function Movie() {
  let { id } = useParams();
  const { data, isLoading, isError, error } = useMovie(id);
  if (isLoading) return <Spinner size="lg" center className="mt-8" />;

  if (isError) {
    let err: any = error;
    return (
      <Title as="h2" className="text-red-500 mt-8 ">
        {err?.message || "Unknown Error"}
      </Title>
    );
  }
  if (data) {
    return (
      <Container className="mt-8">
        <MovieOverview movie={data} />
      </Container>
    );
  }

  return null;
}
