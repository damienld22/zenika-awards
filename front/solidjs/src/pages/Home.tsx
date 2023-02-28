import { Component, createEffect, createResource } from "solid-js";
import { Citation, fetchCitations } from "../api/api";
import CitationsList from "../components/CitationsList/CitationsList";
import Menu from "../components/Menu/Menu";
import citationsLength from "../stores/citationsLength";

const HomePage: Component = () => {
  const { length, setLength } = citationsLength;
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
