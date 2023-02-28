import { Component, createEffect, createResource } from "solid-js";
import CitationsList from "../components/CitationsList/CitationsList";
import Menu from "../components/Menu/Menu";
import citationsLength from "../stores/citationsLength";

export type Citation = {
  id: string;
  text: string;
  title: string;
  author?: string;
  tags: string[];
  numberOfVotes: number;
};

const HomePage: Component = () => {
  const { length, setLength } = citationsLength;
  const fetchCitations = async () =>
    (await fetch("http://localhost:3001/citations")).json();
  const [citations] = createResource<Citation[]>(fetchCitations);

  createEffect(() => setLength(citations()?.length || 0));

  return (
    <>
      <p>Number of citations : {length}</p>
      <main>
        <CitationsList citations={citations()} />
        <Menu citations={citations()} />
      </main>
    </>
  );
};

export default HomePage;
