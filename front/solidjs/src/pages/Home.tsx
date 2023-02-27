import { Component, createResource } from "solid-js";
import CitationsList from "../components/CitationsList/CitationsList";
import Menu from "../components/Menu/Menu";

export type Citation = {
  id: string;
  text: string;
  title: string;
  author?: string;
  tags: string[];
  numberOfVotes: number;
};

const HomePage: Component = () => {
  const fetchCitations = async () =>
    (await fetch("http://localhost:3001/citations")).json();
  const [citations] = createResource<Citation[]>(fetchCitations);

  return (
    <main>
      <CitationsList citations={citations()} />
      <Menu citations={citations()} />
    </main>
  );
};

export default HomePage;
