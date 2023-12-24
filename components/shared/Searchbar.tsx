"use client";

import { useState } from "react";
import { Combobox } from "@headlessui/react";
import { Search } from "react-feather";

const people = [
  "Durward Reynolds",
  "Kenton Towne",
  "Therese Wunsch",
  "Benedict Kessler",
  "Katelyn Rohan",
];

const iconProps = {
  width: 20,
  strokeWidth: 2,
  className: "cursor-pointer absolute left-2 text-gray-500",
};

const SearchBar = () => {
  const [selectedPerson, setSelectedPerson] = useState([]);
  const [query, setQuery] = useState("");

  const filteredPeople = people.filter((person) =>
    person.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative w-full">
      <Combobox value={selectedPerson} onChange={setSelectedPerson}>
        <div className="relative flex items-center justify-center w-full">
          <Combobox.Input
            onChange={(event) => setQuery(event.target.value)}
            className={
              " w-full bg-ghost-10 p-2 ps-10 rounded-tr-md rounded-tl-md shadow-md px-5 focus:outline-none "
            }
            placeholder="Search..."
          />
          <Search {...iconProps} />
        </div>

        <Combobox.Options
          className={
            "max-h-60 overflow-auto sm:text-sm absolute top-10 left-0 bg-ghost-10 w-full rounded-br-md rounded-bl-md shadow-md  border-2 border-slate-100 flex items-start gap-4 flex-col p-2"
          }
        >
          {filteredPeople.map((person) => (
            <Combobox.Option
              key={person}
              value={person}
              className={
                "relative cursor-default w-full select-none py-2 pl-10 pr-4 text-gray-900 hover:bg-slate-100 rounded-md"
              }
            >
              <span className="block truncate font-normal cursor-pointer ">
                {person}
              </span>
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Combobox>
    </div>
  );
};

export default SearchBar;
