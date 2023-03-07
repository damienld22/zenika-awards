import { For } from "solid-js";
import { useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";
import { Citation } from "~/models/Citation";
import './index.css';

export function routeData() {
  return createServerData$(async () => {
    const res = await fetch('http://localhost:3001/citations');
    const data = await res.json();
    return data as Citation[];
  });
}

export default function Home() {
  const citations = useRouteData<typeof routeData>();

  return (
    <>
      <main>
        <div id="content" class="section__content"></div>
        <nav id="menu" class="section__nav">
          <h3>Menu</h3>
          <ol>
            <For each={citations()}>
              {(citation) => (
                <li>
                  <a href={`#citation-${citation.id}`}>{citation.title}</a>
                </li>
              )}
            </For>
          </ol>
        </nav>
      </main>

      <For each={citations()}>
        {(citation) => (
          <section id={`citation-${citation.id}`}>
            <div class="citation-title-container">
              <h2>{citation.title}</h2>
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
              <button onClick={() => { }}>👍</button>
              <button onClick={() => { }}>👎</button>
              <span>{citation.numberOfVotes} points</span>
            </div>
          </section>
        )}
      </For>
    </>
  );
}
