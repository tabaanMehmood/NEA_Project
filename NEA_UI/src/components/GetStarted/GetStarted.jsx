import { useState } from "react";
import TabButton from "../TabButton/TabButton";
import SubjectToBoard from "./SubjectToBoard/SubjectToBoard";
import "./GetStarted.css";

export default function GetStarted() {
  const [selectedTab, setSelectedTab] = useState(null);

  return (
    <div className="GetStarted">
      <div className="Qualification">
        <h1>Select Qualification</h1>

        <TabButton 
          label="GCSE"
          isSelected={selectedTab === "GCSE"}
          onClick={() => setSelectedTab("GCSE")}
        />
        <TabButton 
          label="A Level"
          isSelected={selectedTab === "A Level"}
          onClick={() => setSelectedTab("A Level")}
        />
        
        {/* Pass selectedTab as qualification prop */}
        {selectedTab && <SubjectToBoard qualification={selectedTab} />}
      </div>
    </div>
  );
}
