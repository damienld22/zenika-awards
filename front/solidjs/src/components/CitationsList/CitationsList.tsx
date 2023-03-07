import { Component, For } from "solid-js";
import { Citation, useCitations } from "../../hooks/useCitations";

type CitationsListProps = {
  citations?: Citation[];
};

const CitationsList: Component<CitationsListProps> = (props) => {
  const { edit, remove } = useCitations();

  const onIncrement = (citation: Citation) => {
    edit(citation.id, { numberOfVotes: ++citation.numberOfVotes });
  };
  const onDecrement = (citation: Citation) => {
    edit(citation.id, { numberOfVotes: --citation.numberOfVotes });
  };

  return (
    <div>
      <For each={props.citations}>
        {(citation) => (
          <section id={`citation-${citation.id}`}>
            <div class="citation-title-container">
              <h2>{citation.title}</h2>
              <p class="close-icon" onClick={() => remove(citation.id)}>
                X
              </p>
            </div>
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
              <button onClick={() => onIncrement(citation)}>👍</button>
              <button onClick={() => onDecrement(citation)}>👎</button>
              <span>{citation.numberOfVotes} points</span>
            </div>
          </section>
        )}
      </For>
    </div>
  );
};

export default CitationsList;
