import React, { FunctionComponent, useState, useRef, useEffect } from "react";
import { ChevronDownIcon } from "src/components/icons/chevron-down.component";
import { ChevronUpIcon } from "src/components/icons/chevron-up.component";

import "./dropdown-input.css";

type SelectOption = {
  name: string;
  value: string;
};

type DropdownInputProps = {
  label: string;
  options: SelectOption[];
  activeOptions: SelectOption[];
  onClick: (item) => void;
};

const DropdownInput: FunctionComponent<DropdownInputProps> = ({
  label,
  options,
  activeOptions,
  onClick,
}) => {
  const [showSelectMenu, setShowSelectMenu] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState(options);

  const filterList = (e) => {
    console.log(e.target.value);
    const currFilteredOptions = options;
    let newFilteredOptions;

    if (e.target.value) {
      newFilteredOptions = currFilteredOptions.filter((option) =>
        option.value.toLowerCase().includes(e.target.value.toLowerCase())
      );
    } else {
      newFilteredOptions = options;
    }

    setFilteredOptions(newFilteredOptions);
  };

  const selectItem = (value) => {
    onClick(value);
  };

  const toggleShowMenu = () => {
    const currMenuState = showSelectMenu;
    setShowSelectMenu(!currMenuState);
  };

  /**
   * Hook that alerts clicks outside of the passed ref
   */
  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowSelectMenu(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <div className="select-menu" ref={wrapperRef}>
      <button onClick={toggleShowMenu} className="select-menu button">
        <input
          className="select-menu input"
          placeholder={label}
          type="text"
          onChange={filterList}
        />
        {showSelectMenu ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </button>
      {showSelectMenu && filteredOptions.length > 0 && (
        <ul className="select-list">
          {filteredOptions.map((option, index) => {
            const isActive = activeOptions.includes(option); // => figure out why it says array.includes is not a function
            return (
              <li
                key={`select-list-${option.value}-${index}`}
                className={`select-item ${isActive && "active"}`}
              >
                <button onClick={() => selectItem(option)}>
                  {option.name}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default DropdownInput;
