import { useState } from "react";

const ImageSearch = ({searchTerm}) => {
    let [text, setText] = useState("");

    function onSubmit(e){
        e.preventDefault();
        searchTerm(text);
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" value={text} onChange={e => setText(e.target.value)}></input>
            <button>Search</button> 
        </form>
    )
}

export default ImageSearch;