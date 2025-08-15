import React from "react";
import './List.css';

function List({ list, onDelete, onToggle }) {
    const size = list.length;

    return (
        <div>
            <h2>Danh sách ghi chú ({size})</h2>
            <ul className="note">
                {list.map((item) => (
                    <li className="elementnote" key={item.id}>
                        <div className="element1">
                            <input
                                className="checkbox"
                                type="checkbox"
                                checked={item.done}
                                onChange={() => onToggle(item.id)}
                            />
                            {item.text}
                        </div>
                        <button className="bttdelete" onClick={() => onDelete(item.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default List;
