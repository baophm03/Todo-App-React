import React, { useState } from "react";
import "./styles/Item.css";

function Item({ item, onDelete, onToggle, onUpdate }) {
    const [status, setStatus] = useState(false);
    const [newText, setNewText] = useState(item.text);

    const cancel = () => {
        setStatus(false);
    }
    const edit = () => {
        setStatus(true);
    }

    const save = () => {
        const text = newText.trim();
        if (text == '') {
            alert("Không được để trống")
            return

        } else {
            onUpdate(item.id, text);
            setStatus(false);
        }
    }

    const check = () => {
        onToggle(item.id)
    }
    return (
        <div className="element">
            <input type="checkbox"
                checked={item.done}
                onChange={() => check()}
            />
            <div className="elementchild">
                <div>
                    {status ? (
                        <input
                            className="inputt"
                            value={newText}
                            onChange={e => setNewText(e.target.value)}
                        />

                    ) : (
                        <div>
                            <span onClick={() => edit()}>{item.text}</span>
                        </div>
                    )}
                </div>
                <div>
                    {status ? (
                        <div className="elementbutton">
                            <button className="bttsave" onClick={() => save()}>Save</button>
                            <button className="bttcancel" onClick={() => cancel()}>Cancel</button>
                        </div>

                    ) : (
                        <div className="elementbutton">
                            <button className="bttedit" onClick={() => edit()}>Edit</button>
                            <button className="bttdelete" onClick={() => onDelete(item.id)}>Delete</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Item