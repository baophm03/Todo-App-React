import { useState } from "react";
import './InputBar.css';

function InputBar({ onAdd }) {
    const [input, setInput] = useState('');

    const addData = () => {
        if (!input) return;
        onAdd(input);
        setInput('')
    };

    return (
        <div>
            <h2>Thêm ghi chú mới</h2>
            <div className="input">
                <input
                    className="inputbar"
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                />
                <button className="bttadd" onClick={addData}>Add</button>
            </div>
        </div>
    );
}

export default InputBar;
