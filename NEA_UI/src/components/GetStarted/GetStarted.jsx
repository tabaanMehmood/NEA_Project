import { useState } from "react";
import TabButton from "../TabButton/TabButton";
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
          onClick={() => {setSelectedTab("GCSE")}}
        />
        <TabButton 
          label="A Level"
          isSelected={selectedTab === "A Level"}
          onClick={() => {setSelectedTab("A Level")}}
        />
        
          {selectedTab === "GCSE" && (
            <div className="subject-options">
              <TabButton label="Maths" />
              <TabButton label="Biology" />
              <TabButton label="Computer Science" />
            </div>
          )}

          {selectedTab === "A Level" && (
            <div className="subject-options">
              <TabButton label="Computer Science" />
              <TabButton label="Economics" />
              <TabButton label="Maths" />
            </div>
          )}
      </div>
    </div>
  );
}