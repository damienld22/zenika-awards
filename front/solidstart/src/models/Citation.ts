export interface Citation {
  id: string;
  title: string;
  text: string;
  author?: string;
  tags: string[];
  numberOfVotes: number;
}