import './TabButton.css';

export default function TabButton({ label, onClick }) {
  return (
    <button onClick={onClick} className="tab-button">
      {label}
    </button>
  );
}