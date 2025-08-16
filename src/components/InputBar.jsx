import { useState } from "react";
import './styles/InputBar.css';

function InputBar({ onAdd }) {
    const [input, setInput] = useState('');

    const addData = () => {
        const text = input.trim();
        if (!text) return;
        onAdd(text);
        setInput('');
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
                    onKeyDown={e => e.key === 'Enter' && addData()}
                />
                <button className="bttadd" onClick={addData}>Add</button>
            </div>
        </div>
    );
}

export default InputBar;
