import React from "react";
import './List.css';

function List({ list, onDelete, onCheck }) {
    const size = list.length;

    return (
        <div>
            <h2>Danh sách ghi chú ({size})</h2>
            <ul className="note">
                {list.map((n, i) => (
                    <li className="elementnote" key={i}>
                        <div className="element1">
                            <input className="checkbox" type="checkbox" onChange={() => onCheck(i)} />
                            {n}
                        </div>
                        <button className="bttdelete" onClick={() => onDelete(i)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default List;
