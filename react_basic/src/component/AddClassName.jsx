import { useState } from "react";

function AddClassName() {
    const [isAdd, setIsAdd] = useState();
    function handleToggle (){
        setIsAdd(pre => !pre)
    }

    return (
        <div className="container">
            <p className={isAdd ? "active2" : undefined}>Click vào em!</p>
            <button onClick={handleToggle}>Toggle btn</button>
        </div>
    )
}

export default AddClassName;