export type Citation = {
  id: string;
  text: string;
  title: string;
  author?: string;
  tags: string[];
  numberOfVotes: number;
};

export type NewCitation = Omit<Citation, "id" | "numberOfVotes">;

export async function fetchCitations() {
  const res = await fetch("http://localhost:3001/citations");
  return res.json();
}

export async function addCitation(citation: NewCitation) {
  return fetch("http://localhost:3001/citations", {
    method: "POST",
    body: JSON.stringify(citation),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
}
