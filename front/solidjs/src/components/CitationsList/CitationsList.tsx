import { Component, For, Setter } from "solid-js";
import { Citation, editCitation } from "../../api/api";

type CitationsListProps = {
  citations?: Citation[];
  mutate: Setter<Citation[]>;
};

const CitationsList: Component<CitationsListProps> = (props) => {
  const onIncrement = (citation: Citation) => {
    const updateObject = { numberOfVotes: ++citation.numberOfVotes };
    props.mutate((prev) =>
      prev.map((elt) =>
        elt.id === citation.id ? { ...elt, ...updateObject } : elt
      )
    );
    editCitation(citation.id, updateObject);
  };
  const onDecrement = (citation: Citation) => {
    const updateObject = { numberOfVotes: --citation.numberOfVotes };
    props.mutate((prev) =>
      prev.map((elt) =>
        elt.id === citation.id ? { ...elt, ...updateObject } : elt
      )
    );
    editCitation(citation.id, updateObject);
  };

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
