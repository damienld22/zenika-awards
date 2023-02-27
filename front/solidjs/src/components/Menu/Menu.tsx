import { Component, For } from "solid-js";
import { Citation } from "../../pages/Home";

type MenuProps = {
  citations?: Citation[];
};

const Menu: Component<MenuProps> = (props) => {
  return (
    <>
      <nav id="menu" class="section__nav">
        <h3>Menu</h3>
        <ol>
          <For each={props.citations}>
            {(citation) => (
              <li>
                <a href={`#citation-${citation.id}`}>{citation.title}</a>
              </li>
            )}
          </For>
        </ol>
      </nav>
    </>
  );
};

export default Menu;
