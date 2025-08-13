import React, { useState } from "react";
import "./FilterBar.css"
const FilterBar = () => {
    const tabs = ['Tất cả', 'Chưa xong', 'Hoàn thành'];
    const [type, setType] = useState('Tất cả');
    return (
        <div className="filterbar">
            {tabs.map(tab => (
                <button className="bttfilter" key={tab} onClick={setType(tab)}>
                    {tab}
                </button>
            ))}
        </div>
    )
}
export default FilterBar