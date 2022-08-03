import React, { FunctionComponent, useState, useRef, useEffect } from "react";
import { ChevronDownIcon } from "src/components/icons/chevron-down.component";
import { ChevronUpIcon } from "src/components/icons/chevron-up.component";
import { SelectOption } from "src/components/types/select";

import "./dropdown-select.css";

type DropdownSelectProps = {
  label: string;
  options: SelectOption[];
  activeOptions: SelectOption[];
  type: string;
  onClick: (type, item) => void;
};

const DropdownSelect: FunctionComponent<DropdownSelectProps> = ({
  label,
  type,
  options,
  activeOptions,
  onClick,
}) => {
  const [showSelectMenu, setShowSelectMenu] = useState(false);
  const selectItem = (value) => {
    onClick(type, value);
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
        {label}
        {showSelectMenu ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </button>
      {showSelectMenu && (
        <ul className="select-list">
          {options.map((option, index) => {
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

export default DropdownSelect;
