import {
  createContext,
  createResource,
  Resource,
  JSXElement,
  useContext,
} from "solid-js";

interface ProviderProps {
  baseURL: string;
  children: JSXElement;
}


export function createRESTApiHook<T>() {
  interface ContextValue {
    items: Resource<T[]>;
    add: (item: Omit<T, "id">) => Promise<boolean>;
    edit: (itemId: string, item: Partial<T>) => Promise<boolean>;
    remove: (itemId: string) => Promise<boolean>;
    refetch: () => void;
  }

  const context = createContext<ContextValue>();


  function Provider(props: ProviderProps) {
    const [items, { mutate, refetch }] =
      createResource<T[]>(fetchItems);
  
    async function fetchItems() {
      const res = await fetch(props.baseURL);
      return res.json();
    }
  
    async function add(item: Omit<T, "id">) {
      try {
        const res = await fetch(props.baseURL, {
          method: "POST",
          body: JSON.stringify(item),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const addedItem = await res.json();
        mutate((prev) => (prev ? [...prev, addedItem] : [addedItem]));
        return true;
      } catch (err) {
        console.error(err);
        return false;
      }
    }
  
    async function edit(itemId: string, item: Partial<T>) {
      try {
        const res = await fetch(`${props.baseURL}/${itemId}`, {
          method: "PATCH",
          body: JSON.stringify(item),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const updatedItem = await res.json();
        mutate((prev) =>
          prev?.map((elt: any) => (elt.id === itemId ? updatedItem : elt))
        );
        return true;
      } catch (err) {
        console.error(err);
        return false;
      }
    }
  
    async function remove(itemId: string) {
      try {
        await fetch(`${props.baseURL}/${itemId}`, {
          method: "DELETE",
        });
        mutate((prev) => prev?.filter((elt: any) => elt.id !== itemId));
        return true;
      } catch (err) {
        console.error(err);
        return false;
      }
    }
  
    const value: ContextValue = {
      items,
      add,
      edit,
      remove,
      refetch,
    };
  
    return <context.Provider value={value}>{props.children}</context.Provider>;
  }
  
  function useRESTApi() {
    const ctx = useContext(context);
  
    if (!ctx) {
      throw new Error("useRESTApi must be used within a RestAPIProvider");
    }
  
    return ctx;
  }

  return {
    Provider,
    useRESTApi
  }
}












