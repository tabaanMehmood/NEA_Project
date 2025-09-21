import { useState } from "react";
import TabButton from "../../TabButton/TabButton";
import "../GetStarted.css";

export default function SubjectToBoard({ qualification }) {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedBoard, setSelectedBoard] = useState(null);

  return (
    <div className="SubjectToBoard">
      <div className="Subjects">
        <h1>Select Subject</h1>

        {qualification === "GCSE" && (
          <>
            <TabButton
              label="Physics"
              isSelected={selectedSubject === "Physics"}
              onClick={() => {
                setSelectedSubject("Physics");
                setSelectedBoard(null);
              }}
            />
            <TabButton
              label="Biology"
              isSelected={selectedSubject === "Biology"}
              onClick={() => {
                setSelectedSubject("Biology");
                setSelectedBoard(null);
              }}
            />
            <TabButton
              label="Art"
              isSelected={selectedSubject === "Art"}
              onClick={() => {
                setSelectedSubject("Art");
                setSelectedBoard(null);
              }}
            />
          </>
        )}

        {qualification === "A Level" && (
          <>
            <TabButton
              label="Computer Science"
              isSelected={selectedSubject === "Computer Science"}
              onClick={() => {
                setSelectedSubject("Computer Science");
                setSelectedBoard(null);
              }}
            />
            <TabButton
              label="Economics"
              isSelected={selectedSubject === "Economics"}
              onClick={() => {
                setSelectedSubject("Economics");
                setSelectedBoard(null);
              }}
            />
            <TabButton
              label="Maths"
              isSelected={selectedSubject === "Maths"}
              onClick={() => {
                setSelectedSubject("Maths");
                setSelectedBoard(null);
              }}
            />
          </>
        )}

        {selectedSubject ===  "Computer Science" && (
        <>
        <h1>Select Exam Board</h1>
          <div className="exam-board-options">
            <TabButton
              label="AQA"
              isSelected={selectedBoard === "AQA"}
              onClick={() => setSelectedBoard("AQA")}
            />
            <TabButton
              label="Edexcel"
              isSelected={selectedBoard === "Edexcel"}
              onClick={() => setSelectedBoard("Edexcel")}
            />
            <TabButton
              label="OCR"
              isSelected={selectedBoard === "OCR"}
              onClick={() => setSelectedBoard("OCR")}
            />
          </div>
          </>
        )}

        {selectedSubject ===  "Economics" && (
        <>
        <h1>Select Exam Board</h1>
          <div className="exam-board-options">
            <TabButton
              label="Edexcel A"
              isSelected={selectedBoard === "Edexcel A"}
              onClick={() => setSelectedBoard("Edexcel A")}
            />
            <TabButton
              label="Edexcel B"
              isSelected={selectedBoard === "Edexcel B"}
              onClick={() => setSelectedBoard("Edexcel B")}
            />
            <TabButton
              label="OCR"
              isSelected={selectedBoard === "OCR"}
              onClick={() => setSelectedBoard("OCR")}
            />
          </div>
          </>
        )}
        {selectedSubject ===  "Maths" && (
        <>
        <h1>Select Exam Board</h1>
          <div className="exam-board-options">
            <TabButton
              label="Edexcel"
              isSelected={selectedBoard === "Edexcel"}
              onClick={() => setSelectedBoard("Edexcel")}
            />
            <TabButton
              label="AQA"
              isSelected={selectedBoard === "AQA"}
              onClick={() => setSelectedBoard("AQA")}
            />
            <TabButton
              label="OCR"
              isSelected={selectedBoard === "OCR"}
              onClick={() => setSelectedBoard("OCR")}
            />
          </div>
          </>
        )}
        {selectedSubject ===  "Physics" && (
        <>
        <h1>Select Exam Board</h1>
          <div className="exam-board-options">
            <TabButton
              label="OCR"
              isSelected={selectedBoard === "OCR"}
              onClick={() => setSelectedBoard("OCR")}
            />
            <TabButton
              label="Edexcel"
              isSelected={selectedBoard === "Edexcel"}
              onClick={() => setSelectedBoard("Edexcel")}
            />
            <TabButton
              label="AQA"
              isSelected={selectedBoard === "AQA"}
              onClick={() => setSelectedBoard("AQA")}
            />
          </div>
          </>
        )}
        {selectedSubject ===  "Biology" && (
        <>
        <h1>Select Exam Board</h1>
          <div className="exam-board-options">
            <TabButton
              label="Edexcel"
              isSelected={selectedBoard === "Edexcel"}
              onClick={() => setSelectedBoard("Edexcel")}
            />
            <TabButton
              label="AQA"
              isSelected={selectedBoard === "AQA"}
              onClick={() => setSelectedBoard("AQA")}
            />
            <TabButton
              label="OCR"
              isSelected={selectedBoard === "OCR"}
              onClick={() => setSelectedBoard("OCR")}
            />
          </div>
          </>
        )}
        {selectedSubject ===  "Art" && (
        <>
        <h1>Select Exam Board</h1>
          <div className="exam-board-options">
            <TabButton
              label="AQA"
              isSelected={selectedBoard === "AQA"}
              onClick={() => setSelectedBoard("AQA")}
            />
            <TabButton
              label="Edexcel"
              isSelected={selectedBoard === "Edexcel"}
              onClick={() => setSelectedBoard("Edexcel")}
            />
            <TabButton
              label="OCR"
              isSelected={selectedBoard === "OCR"}
              onClick={() => setSelectedBoard("OCR")}
            />
          </div>
          </>
        )}

      </div>
    </div>
  );
}
