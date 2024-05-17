import {useState} from "react";

export default function Component() {
    const [text, setText] = useState('');
    const [textUpdated, setTextUpdated] = useState('');

    const handleChange = (event) => { 
        setText(event.target.value);
    }

    const handleUpdate = () => { 
        setTextUpdated(text);
    }

    return (
        <div>
            <input type="text" value={text} onChange={handleChange} />
            <button onClick={handleUpdate}>Actualizar</button>
            <p>Texto input: { text }</p>
            <p>Texto actualizado: { textUpdated }</p>
        </div>
    )
}
