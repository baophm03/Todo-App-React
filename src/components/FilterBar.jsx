import React from "react";
import "./styles/FilterBar.css";

const FilterBar = ({ value, onChange, tabs = [] }) => {
    return (
        <div className="filterbar">
            {tabs.map(tab => (
                <button
                    className={`bttfilter ${value === tab ? 'active' : ''}`}
                    key={tab}
                    onClick={() => onChange(tab)}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
};

export default FilterBar;
