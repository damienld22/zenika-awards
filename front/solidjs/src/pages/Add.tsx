import { Component } from "solid-js";
import CitationForm from "../components/CitationForm/CitationForm";
import citationsLength from "../stores/citationsLength";

const AddPage: Component = () => {
  const { length } = citationsLength;

  return (
    <div>
      <p>Number of citations : {length}</p>
      <CitationForm />
    </div>
  );
};

export default AddPage;
