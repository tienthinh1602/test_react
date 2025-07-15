// import logo from './logo.svg';
import './App.css';
import { myData, EXAMPLES } from './data.js';
import { useState } from 'react';

import Header from "./component/Header.jsx";
import MainContent from "./component/MainContent.jsx";
import Section from './component/Section.jsx';
import TabsMenu from './component/TabsMenu.jsx'; // ✅ thêm mới

function App() {
  const exampleTabs = Object.entries(EXAMPLES).map(([key, value]) => ({
    id: key,
    label: value.title,
    content: (
      <div className="tab-content">
        <h3>{value.title}</h3>
        <p>{value.desc}</p>
        <pre>
          <code>{value.code}</code>
        </pre>
      </div>
    ),
  }));

  return (
    <>
      <Header />
      <main>
        <Section title="Definition" id="core-concepts">
          <ul>
            {myData.map((item) => (
              <MainContent key={item.title} {...item} />
            ))}
          </ul>
        </Section>

        <Section title="Examples" id="examples">
          <TabsMenu tabs={exampleTabs} autoInterval={3000} />
        </Section>
      </main>
    </>
  );
}

export default App;
