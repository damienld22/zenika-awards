import {
  component$,
  Resource,
  useContext,
  useStylesScoped$,
  useClientEffect$,
} from "@builder.io/qwik";
import type { DocumentHead, RequestHandler } from "@builder.io/qwik-city";
import { useEndpoint } from "@builder.io/qwik-city";
import { storeContext } from "~/root";
import Citation from "../components/citation/citation";
import styles from "./index.css?inline";

interface Citation {
  id: number;
  title: string;
  text: string;
  author: string;
  tags: string[];
  numberOfVotes: number;
}

export const onGet: RequestHandler<Citation[]> = async () => {
  const response = await fetch("http://localhost:3001/citations");
  return await response.json();
};

export default component$(() => {
  useStylesScoped$(styles);
  const store = useContext(storeContext);

  useClientEffect$(
    () => {
      store.headerTitle =
        "Classement des meilleures citations entendues chez Zenika";
    },
    {
      eagerness: "visible", // 'load' | 'visible' | 'idle'
    }
  );

  const citations = useEndpoint<Citation[]>();

  return (
    <Resource
      value={citations}
      onPending={() => <div>Loading...</div>}
      onRejected={() => <div>Error</div>}
      onResolved={(citations) => (
        <main>
          <div id="content" class="section__content">
            <div>
              {citations.map(
                ({ title, text, author, tags, numberOfVotes, id }) => (
                  <Citation
                    key={"citation-" + id}
                    title={title}
                    citation={text}
                    author={author}
                    tags={tags}
                    numberOfVotes={numberOfVotes}
                    id={"citation-" + id}
                  />
                )
              )}
            </div>
          </div>
          <nav id="menu" class="section__nav">
            <h3>Menu</h3>
            <ol>
              <li>
                {citations.map(({ id, title }) => (
                  <a href={"#citation-" + id} key={"menu-" + id}>
                    {title}
                  </a>
                ))}
              </li>
            </ol>
          </nav>
        </main>
      )}
    />
  );
});

export const head: DocumentHead = {
  title: "Bienvenue dans les citations Zenika",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
