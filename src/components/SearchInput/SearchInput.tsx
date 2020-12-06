import React, { useState, useContext } from "react";
import AppContext from "../../context/AppContext";

type FormElement = React.FormEvent<HTMLFormElement>;

const SearchInput = (): JSX.Element => {
  const { search, isLoading } = useContext(AppContext);

  const [query, setQuery] = useState<string>("");

  const submit = (e: FormElement) => {
    e.preventDefault();
    setQuery("");
    search(query);
  };
  return (
    <form onSubmit={submit}>
      <div className="form">
        <input
          placeholder="Search product by nombre, id, marca, descripcion"
          type="text"
          value={query}
          disabled={isLoading}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button type="submit" disabled={isLoading}>Search</button>
      </div>
    </form>
  );
};
export { SearchInput as default };
