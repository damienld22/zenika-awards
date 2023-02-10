import type { QwikSubmitEvent } from "@builder.io/qwik";
import { useClientEffect$ } from "@builder.io/qwik";
import { useContext } from "@builder.io/qwik";
import { useStore } from "@builder.io/qwik";
import { useStylesScoped$ } from "@builder.io/qwik";
import { component$, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useNavigate } from "@builder.io/qwik-city";
import { storeContext } from "~/root";
import styles from "./add.css?inline";

export default component$(() => {
  useStylesScoped$(styles);
  const nav = useNavigate();
  const form = useStore({
    title: "",
    text: "",
    author: "",
  });

  const store = useContext(storeContext);

  useClientEffect$(
    () => {
      store.headerTitle = "Ajoutez une citation";
    },
    {
      eagerness: "visible", // 'load' | 'visible' | 'idle'
    }
  );
  /**
   * Permet d'ajouter une citation
   *
   * @param {SubmitEvent} event
   */
  const addCitation = $((event: QwikSubmitEvent<HTMLFormElement>) => {
    event.stopPropagation();

    const { text, title } = form;
    if ((!text || !text.length) && (!title || !title.length)) {
      alert("Le champ citation et titre sont obligatoires");
      return;
    }
    fetch("http://localhost:3001/citations", {
      method: "POST",
      body: JSON.stringify({ ...form, tags: [] }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        alert("Votre citation a été ajoutée");
        nav.path = "/";
      })
      .catch(() => alert("Erreur lors de la création"));
  });

  return (
    <form
      class="form"
      preventdefault:submit
      onSubmit$={(event) => addCitation(event)}
    >
      <h2 class="form__title">Veuillez renseigner les champs ci-dessous</h2>

      <div class="form__field">
        <label for="title">Titre*</label>
        <input
          type="text"
          id="title"
          name="title"
          value={form.title}
          onInput$={(ev) =>
            (form.title = (ev.target as HTMLInputElement).value)
          }
        />
      </div>

      <div class="form__field">
        <label for="text">Citation*</label>
        <textarea
          id="text"
          name="text"
          placeholder="Votre plus belle citation ..."
          value={form.text}
          onInput$={(ev) => (form.text = (ev.target as HTMLInputElement).value)}
        ></textarea>
      </div>

      <div class="form__field">
        <label for="author">Auteur</label>
        <input
          type="text"
          id="author"
          name="author"
          value={form.author}
          onInput$={(ev) =>
            (form.author = (ev.target as HTMLInputElement).value)
          }
        />
      </div>

      <button class="form__button" type="submit">
        Ajouter
      </button>
      <em>* Champs obligatoires</em>
    </form>
  );
});

export const head: DocumentHead = {
  title: "Ajoutez une citation",
  meta: [
    {
      name: "description",
      content: "Ajoutez une citation",
    },
  ],
};
