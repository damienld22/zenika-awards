import { Component, createResource, For } from "solid-js";

export type Citation = {
  id: string;
  text: string;
  title: string;
  author?: string;
  tags: string[];
  numberOfVotes: number;
};

const CitationsList: Component = () => {
  const fetchCitations = async () =>
    (await fetch("http://localhost:3001/citations")).json();
  const [citations] = createResource<Citation[]>(fetchCitations);

  return (
    <div>
      <For each={citations()}>
        {(citation) => (
          <section id={`citation-${citation.id}`}>
            <h2>{citation.title}</h2>
            <blockquote>
              <p>{citation.text}</p>
            </blockquote>
            <div>
              <b>- {citation.author || "Auteur inconnu"}</b>
            </div>
            <div id="quote-tags" class="tags">
              <For each={citation.tags}>
                {(tag) => <span class="tag">#{tag}</span>}
              </For>
            </div>
            <div id="quote-buttons" class="buttons">
              <button>👍</button>
              <button>👎</button>
              <span>{citation.numberOfVotes ?? 0} points</span>
            </div>
          </section>
        )}
      </For>
    </div>
  );
};

export default CitationsList;
