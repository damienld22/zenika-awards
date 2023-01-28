/**
 * Permet d'ajouter une citation
 * 
 * @param {SubmitEvent} event
 */
addCitation = async (event) => {
    event.preventDefault()
    const { text, author, title } = event.target
    if ((!text?.value || !text?.value.length) && (!title?.value || !title?.value.length)) {
        alert('Le champ citation et titre sont obligatoires')
        return
    }
    fetch("http://localhost:3001/citations", {
        method: 'POST',
        body: JSON.stringify({ text: text.value, author: author.value, title: title.value, tags: [] }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then((data) => {
        alert('Votre citation a été ajoutée')
        window.location.href = window.location.origin + `/#citation-${data.id}`;
    }).catch(() => alert('Erreur lors de la création'))
}

