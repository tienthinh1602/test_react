import { useState } from "react"
import TabButton from "./TabButton"

function Greeting() {
    const [loiChao, setLoiChao] = useState("hello")
    function handleTime() {
        // const currentHour = new Date().getHours()
        const currentHour = 19
        if (currentHour > 5 && currentHour < 12) {
            setLoiChao("Buoi sang")
        }
        else if (currentHour >= 12 && currentHour < 18) {
            setLoiChao("Buoi trua")
        }
        else {
            setLoiChao("Buoi toi")
        }
    };

    return (
        <>
            <TabButton onSelect={handleTime}>cap nhat loi chao</TabButton>
            {loiChao}
        </>

    )
}

export default Greeting;
