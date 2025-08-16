import React from "react";
import Item from "./Item";
import './styles/List.css';

function List({ list, onDelete, onToggle, onUpdate }) {
    const size = list.length;
    return (
        <div>
            <h2>Danh sách ghi chú ({size})</h2>
            <ul className="note">
                {list.map((item) => (
                    <li className="elementnote" key={item.id}>
                        <Item
                            item={item}
                            onDelete={onDelete}
                            onToggle={onToggle}
                            onUpdate={onUpdate}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default List;
