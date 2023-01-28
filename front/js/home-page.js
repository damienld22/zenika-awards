/**
 * Permet de générer des sections de citation via un template HTML
 * 
 * @param {*} citation 
 */
const insertCitations = (citation) => {
    // On vérifie si le navigateur prend en charge
    // l'élément HTML template en vérifiant la présence
    // de l'attribut content pour l'élément template.
    if ("content" in document.createElement("template")) {

        const template = document.querySelector("#section-template");

        const content = document.querySelector("#content");
        const clone = document.importNode(template.content, true);

        const section = clone.querySelector("section");
        section.id = `citation-${citation.id}`

        const title = clone.querySelector("h2");
        title.innerText = `${citation.title}`

        const blockquote = clone.querySelector("blockquote");
        blockquote.innerHTML = `<p>${citation.text}</p >`

        const caption = clone.querySelector("figcaption");
        caption.innerHTML = `<b>— ${citation.author?.length > 0 ? citation.author : 'Auteur inconnu'}</b>`

        const tags = clone.querySelector("#quote-tags");
        tags.innerHTML = citation.tags.map(t => `<span class="tag">#${t}</span>`).join(' ')

        const buttons = clone.querySelector("#quote-buttons");
        buttons.innerHTML = `<button>👍</button><button>👎</button><span>${citation.numberOfVotes ?? 0} points</span>`

        content.appendChild(clone);

        const li = document.createElement('li')
        li.innerHTML = `<a href="#citation-${citation.id}">${citation.title}</a>`
        document.querySelector("#menu ol").appendChild(li)
    }
}

const fetchCitations = () => fetch('http://localhost:3001/citations')

window.onload = async () => {
    const response = await fetchCitations()
    const data = await response.json()
    data.forEach((citation) => {
        insertCitations(citation)
    })
}
