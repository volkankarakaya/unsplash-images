import React from "react";
import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { greeting } = useGlobalContext();
  console.log(greeting);
  return <div>SearchForm</div>;
};

export default SearchForm;
