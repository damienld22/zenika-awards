import { createRESTApiHook } from "./createRESTApiHook";

export type Citation = {
  id: string;
  text: string;
  title: string;
  author?: string;
  tags: string[];
  numberOfVotes: number;
};


const { Provider, useRESTApi } = createRESTApiHook<Citation>();

export {
  Provider as CitationsProvider,
  useRESTApi as useCitations
};
