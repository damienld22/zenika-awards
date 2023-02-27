import { Component, createResource, For } from "solid-js";
import { Citation } from "../../pages/Home";

type CitationsListProps = {
  citations?: Citation[];
};

const CitationsList: Component<CitationsListProps> = (props) => {
  return (
    <div>
      <For each={props.citations}>
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
