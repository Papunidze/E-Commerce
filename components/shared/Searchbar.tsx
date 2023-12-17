"use client";

import { useEffect, useState } from "react";
import { Combobox } from "@headlessui/react";
import { Search, X } from "react-feather";
import { motion, AnimatePresence } from "framer-motion";

const iconProps = {
  width: 20,
  strokeWidth: 1,
  className:
    "cursor-pointer absolute transition-transform duration-300 transform hover:scale-110",
};

const people = [
  "Durward Reynolds",
  "Kenton Towne",
  "Therese Wunsch",
  "Benedict Kessler",
  "Katelyn Rohan",
  "Benedict Kessler",
];

const Searchbar = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [query, setQuery] = useState("");
  const [isInputVisible, setIsInputVisible] = useState(false);

  const { width, strokeWidth, className } = iconProps;

  const toggleInputVisibility = () => {
    if (window.innerWidth < 768) {
      setIsInputVisible(true);
    } else {
      setIsInputVisible(!isInputVisible);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsInputVisible(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) =>
          person.toLowerCase().includes(query.toLowerCase())
        );

  return (
    <div className="flex items-center relative w-full cursor-default rounded-lg py-2 bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
      {!isInputVisible ? (
        <Search
          width={width}
          strokeWidth={strokeWidth}
          className={`${className} -right-2`}
          onClick={toggleInputVisibility}
        />
      ) : (
        <X
          width={width}
          strokeWidth={strokeWidth}
          className={`${className} right-3`}
          onClick={toggleInputVisibility}
        />
      )}

      <AnimatePresence>
        {isInputVisible && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Combobox value={selectedPerson} onChange={setSelectedPerson}>
              <Combobox.Input
                onChange={(event) => setQuery(event.target.value)}
                className="w-full border-none pl-3 pr-10 text-base-regular text-light-4  leading-5 text-gray-900 focus:ring-0 focus:outline-none"
                id="search-input"
                placeholder="Search..."
                aria-labelledby="search-input-label"
              />

              {query.length > 1 && (
                <Combobox.Options className="absolute md:mt-1 max-h-60 w-full overflow-auto bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm top-9 rounded-md mt-2">
                  {filteredPeople.length === 0 && (
                    <span className="block truncate font-normal p-2 text-xs-regular text-light-4">
                      Not Found
                    </span>
                  )}
                  {filteredPeople.map((person) => (
                    <Combobox.Option
                      key={person}
                      value={person}
                      className="cursor-pointer relative select-none py-2 pl-10 pr-4 text-black bg-white transition-colors hover:bg-gray-100"
                    >
                      <span className="block truncate font-normal text-base">
                        {person.toLowerCase().includes(query.toLowerCase()) ? (
                          <>
                            {person.substring(
                              0,
                              person.toLowerCase().indexOf(query.toLowerCase())
                            )}
                            <span className="font-semibold">{query}</span>
                            {person.substring(
                              person
                                .toLowerCase()
                                .indexOf(query.toLowerCase()) + query.length
                            )}
                          </>
                        ) : (
                          person
                        )}
                      </span>
                    </Combobox.Option>
                  ))}
                </Combobox.Options>
              )}
            </Combobox>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Searchbar;
