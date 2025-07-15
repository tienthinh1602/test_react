import { useEffect, useState, useRef } from "react";
import TabButton from "./TabButton"; // 🟡 Nhớ import lại
import "./TabsMenu.css";

function TabsMenu({ tabs, autoInterval = 3000 }) {
  const [selectedTab, setSelectedTab] = useState(tabs[0].id);
  const userInteracted = useRef(false);
  const intervalRef = useRef(null);

  const handleTabClick = (id) => {
    userInteracted.current = true;
    clearInterval(intervalRef.current);
    setSelectedTab(id);
  };

  useEffect(() => {
    if (userInteracted.current) return;

    intervalRef.current = setInterval(() => {
      setSelectedTab((prevId) => {
        const currentIndex = tabs.findIndex(tab => tab.id === prevId);
        const nextIndex = (currentIndex + 1) % tabs.length;
        return tabs[nextIndex].id;
      });
    }, autoInterval);

    return () => clearInterval(intervalRef.current);
  }, [tabs, autoInterval]);

  const currentTab = tabs.find(tab => tab.id === selectedTab);

  return (
    <div className="tabs-container">
      <ul className="tabs-header">
        {tabs.map((tab) => (
          <li key={tab.id}>
            <TabButton
              isSelected={selectedTab === tab.id}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </TabButton>
          </li>
        ))}
      </ul>

      <div className="tabs-content">
        {currentTab.content}
      </div>
    </div>
  );
}

export default TabsMenu;
