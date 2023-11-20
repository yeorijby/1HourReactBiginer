import React, {useState} from "react"

const Input = () => {
    const [txtValue, setTextValue] = useState("");

    const Changed = (e) => {
        setTextValue(e.target.value);
    };

    return (
        <div>
            <input type="text" value={txtValue} onChange={Changed}/>
            <br />
            <p>{txtValue}</p>
        </div>
    )
}

export default Input;