import './TabButton.css';

export default function TabButton({ label, onClick, isSelected }) {
  return (
      <button 
        className={`tab-button ${isSelected ? "active" : ""}`}
        onClick={onClick} 
      >
        {label}
      </button>
  );
}