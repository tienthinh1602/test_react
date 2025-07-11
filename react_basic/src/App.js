// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

import Header from "./component/Header/Header.jsx"
import MainContent from "./component/MainContent/MainContent.jsx"
import TabButton from './component/TabButton/TabButton';
import { myData } from './data.js';
function App() {
    const [selectTopic, setSelectTopic] = useState("Vui long chon");
    const [loiChao, setLoiChao] = useState("hello")



    function handleSelect(handleSelect) {
        setSelectTopic(handleSelect)
    };

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
            <Header />
            <main>
                <TabButton onSelect={handleTime}>cap nhat loi chao</TabButton>
                {loiChao}
                <section id="core-concepts">
                    <h2>Khai niem</h2>
                    <ul>
                        <MainContent {...myData[0]} />
                        <MainContent {...myData[1]} />
                        <MainContent {...myData[2]} />
                        <MainContent {...myData[3]} />
                    </ul>
                </section>
                <section id="examples">
                    <h2>Ex</h2>
                    <menu>
                        <TabButton onSelect={() => { handleSelect('1') }}>1</TabButton>
                        <TabButton onSelect={() => { handleSelect('2') }}>2</TabButton>
                        <TabButton onSelect={() => { handleSelect('3') }}>3</TabButton>
                        <TabButton onSelect={() => { handleSelect('4') }}>4</TabButton>
                    </menu>
                    {selectTopic}
                </section>

            </main>
        </>
    );
}

export default App;
