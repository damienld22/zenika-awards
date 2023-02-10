import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./citation.css?inline";

export default component$(
  ({
    title,
    citation,
    author,
    tags,
    numberOfVotes,
    id,
  }: {
    title: string;
    citation: string;
    author: string;
    tags: string[];
    numberOfVotes: number;
    id: string;
  }) => {
    useStylesScoped$(styles);

    return (
      <div id="section-template">
        <section id={id}>
          <h2>{title}</h2>
          <blockquote>{citation}</blockquote>
          <figcaption>{author}</figcaption>
          <div id="quote-tags" class="tags">
            {tags.map((t) => (
              <span class="tag">#${t}</span>
            ))}
          </div>
          <div id="quote-buttons" class="buttons">
            <button>👍</button>
            <button>👎</button>
            <span>{numberOfVotes ?? 0} points</span>
          </div>
        </section>
      </div>
    );
  }
);
