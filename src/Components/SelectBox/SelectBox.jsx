    import React, { useEffect, useState, useRef } from "react";
    import "./SelectBox.css";

    const SelectBox = ({ options, onChange, value, id, "aria-label": ariaLabel }) => {
        const [isOpen, setIsOpen] = useState(false);
        const selectRef = useRef(null);

        // Handle click outside to close select
        useEffect(() => {
            const handleClickOutside = (event) => {
                if (selectRef.current && !selectRef.current.contains(event.target)) {
                    setIsOpen(false);
                }
            };

            if (isOpen) {
                document.addEventListener("mousedown", handleClickOutside);
            }

            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [isOpen]);

        // Handle select change
        const handleSelectChange = (e) => {
            onChange(e);
            setIsOpen(false);
        };

        return (
            <div 
                ref={selectRef}
                className="custom-select" 
                onClick={() => setIsOpen(!isOpen)}
                role="combobox"
                aria-expanded={isOpen}
                aria-haspopup="listbox"
            >
                <span
                    className={`icon bx bx-chevron-down ${isOpen ? "active" : ""}`}
                    aria-hidden="true"
                ></span>

                <select
                    id={id}
                    onChange={handleSelectChange}
                    value={value}
                    className={`${isOpen ? "active" : ""}`}
                    aria-label={ariaLabel}
                    onClick={(e) => e.stopPropagation()}
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.option}
                        </option>
                    ))}
                </select>
            </div>
        );
    };

    export default SelectBox;
