// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

import Header from "./component/Header.jsx"
import MainContent from "./component/MainContent.jsx"
import TabButton from './component/TabButton.jsx';
import { myData, EXAMPLES } from './data.js';
import ActiveButton from './component/ActiveButton.jsx';
import Greeting from './component/Greeting.jsx';
import AddClassName from './component/AddClassName.jsx';
function App() {
    const [selectTopic, setSelectTopic] = useState();

    const a = [10, 20, 30]
    const kq = a.map((currentValue, index, haha) => {
        // console.log("🚀 ~ kq=a.map ~ haha:", haha)
        // console.log("🚀 ~ kq=a.map ~ index:", index)
        // console.log("🚀 ~ kq=a.map ~ currentValue:", currentValue)
        return currentValue / 10;
    })
    console.log("🚀 ~ kq ~ kq:", kq)

    const users = [
        { name: "Alice", role: "admin" },
        { name: "Bob", role: "user" },
        { name: "Charlie", role: "guest" }
    ];

    // Đối tượng cấu hình: ánh xạ role → nhãn hiển thị
    const labelConfig = {
        roleLabels: {
            admin: "Administrator",
            user: "Regular User",
            guest: "Guest Account"
        },
        mapUserToLabel(user) {
            return `${user.name} - ${this.roleLabels[user.role] || "Unknown Role"}`;
        }
    };

    // Dùng map + thisArg để truyền ngữ cảnh cho hàm mapUserToLabel
    const labeledUsers = users.map(labelConfig.mapUserToLabel, labelConfig);

    console.log(labeledUsers);



    let tabContent = "Chọn đi"
    if (selectTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectTopic].title}</h3>
                <p>{EXAMPLES[selectTopic].desc}</p>
                <pre>
                    <code>
                        {EXAMPLES[selectTopic].code}
                    </code>
                </pre>
            </div>
        );
    }
    function handleSelect(handleSelect) {
        setSelectTopic(handleSelect)
    };

    return (
        <>
            <Header />
            <main>
                {/* <Greeting/> */}
                <section id="core-concepts">
                    <h2>Khai niem</h2>
                    <ul>
                        {/* <MainContent {...myData[0]} />
                        <MainContent {...myData[1]} />
                        <MainContent {...myData[2]} />
                        <MainContent {...myData[3]} /> */}
                        {myData.map((item) => (
                            <MainContent key={item.title} {...item} />)
                        )}

                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton isSelected={selectTopic === "components"} onSelect={() => { handleSelect('components') }}>1</TabButton>
                        <TabButton isSelected={selectTopic === "jsx"} onSelect={() => { handleSelect('jsx') }}>2</TabButton>
                        <TabButton isSelected={selectTopic === "props"} onSelect={() => { handleSelect('props') }}>3</TabButton>
                        <TabButton isSelected={selectTopic === "state"} onSelect={() => { handleSelect('state') }}>4</TabButton>
                    </menu>
                    {tabContent}
                </section>
                {/* <ActiveButton/> */}
                {/* <AddClassName/> */}

            </main >
        </>
    );
}

export default App;
