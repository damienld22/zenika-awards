import { Component, createEffect } from "solid-js";
import CitationsList from "../components/CitationsList/CitationsList";
import Menu from "../components/Menu/Menu";
import { useCitations } from "../hooks/useCitations";
import citationsLength from "../stores/citationsLength";

const HomePage: Component = () => {
  const { length, setLength } = citationsLength;
  const { items } = useCitations();

  createEffect(() => setLength(items()?.length || 0));

  return (
    <>
      <p>Number of citations : {length}</p>
      <main>
        <CitationsList citations={items()} />
        <Menu citations={items()} />
      </main>
    </>
  );
};

export default HomePage;
