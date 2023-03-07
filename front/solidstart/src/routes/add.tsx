import { createEffect } from 'solid-js';
import { createServerAction$, redirect } from 'solid-start/server';
import './add.css';



export default function Add() {
  const [adding, { Form }] = createServerAction$(async (form: FormData) => {
    if (!form.get('text') || !form.get('title')) {
      return Promise.reject('Le champ citation et titre sont obligatoires')
    }

    await fetch('http://localhost:3001/citations', {
      method: 'post',
      body: JSON.stringify({
        title: form.get('title'),
        text: form.get('text'),
        author: form.get('author'),
        numberOfVotes: 0,
        tags: []
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    return redirect("/")
  });

  createEffect(() => {
    if (adding.error) {
      alert(adding.error);
    }
  })

  return (
    <main>
      <Form class="form">
        <h2 class="form__title">Veuillez renseigner les champs ci-dessous</h2>

        <div class="form__field">
          <label for="title">Titre*</label>
          <input type="text" id="title" name="title" />
        </div>

        <div class="form__field">
          <label for="text">Citation*</label>
          <textarea id="text" name="text" rows="4" placeholder="Votre plus belle citation ..."></textarea>
        </div>

        <div class="form__field">
          <label for="author">Auteur</label>
          <input type="text" id="author" name="author" />
        </div>

        <button class="form__button" type="submit">Ajouter</button>
        <em>* Champs obligatoires</em>
      </Form>
    </main >
  );
}
