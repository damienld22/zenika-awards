import { createRoot, createSignal } from "solid-js";

function createCitationsLength() {
  const [length, setLength] = createSignal(0);

  return { length, setLength };
}

export default createRoot(createCitationsLength);
