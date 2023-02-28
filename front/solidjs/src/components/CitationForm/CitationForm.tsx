import { useNavigate } from "@solidjs/router";
import { Component } from "solid-js";
import { createStore } from "solid-js/store";
import { addCitation } from "../../api/api";
import "./CitationForm.css";

type CitationForm = {
  title: string;
  text: string;
  author?: string;
};

const CitationForm: Component = () => {
  const navigate = useNavigate();
  const [form, setForm] = createStore<CitationForm>({
    title: "",
    text: "",
    author: "",
  });

  const updateFormField = (field: string) => (event: Event) => {
    const input = event.currentTarget as HTMLInputElement;
    setForm({
      [field]: input.value,
    });
  };

  const handleSubmit = async (event: Event) => {
    event.preventDefault();

    const { text, title } = form;
    if ((!text || !text.length) && (!title || !title.length)) {
      alert("Le champ citation et titre sont obligatoires");
      return;
    }

    try {
      addCitation({ ...form, tags: [] });
      alert("Votre citation a été ajoutée");
      navigate("/");
    } catch {
      alert("Erreur lors de la création");
    }
  };

  return (
    <form class="form" onSubmit={handleSubmit}>
      <h2 class="form__title">Veuillez renseigner les champs ci-dessous</h2>

      <div class="form__field">
        <label for="title">Titre*</label>
        <input
          value={form.title}
          onChange={updateFormField("title")}
          type="text"
          id="title"
          name="title"
        />
      </div>

      <div class="form__field">
        <label for="text">Citation*</label>
        <textarea
          value={form.text}
          onChange={updateFormField("text")}
          id="text"
          name="text"
          rows="4"
          placeholder="Votre plus belle citation ..."
        ></textarea>
      </div>

      <div class="form__field">
        <label for="author">Auteur</label>
        <input
          value={form.author}
          onChange={updateFormField("author")}
          type="text"
          id="author"
          name="author"
        />
      </div>

      <button class="form__button" type="submit">
        Ajouter
      </button>
      <em>* Champs obligatoires</em>
    </form>
  );
};

export default CitationForm;
