import Container from "@/components/Container";
import { Title } from "@/components/Typeo";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import MoviesContainer from "./elements/MoviesContainer";

const getSearchParam = (l: string) => new URLSearchParams(l).get("search");
export function Movies() {
  const l = useLocation();
  return (
    <Container className="my-8">
      <Title as="h1">Movies</Title>
      <MoviesContainer keyword={getSearchParam(l.search) || undefined} />
    </Container>
  );

  return null;
}
