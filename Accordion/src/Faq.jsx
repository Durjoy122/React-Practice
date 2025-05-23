
function Faq({ question, answer, onToggle, isActive }) {
  return (
    <li>
      <div className="accordion-grid">
        <p className="accordion-question">{question}</p>
        <button onClick={onToggle}> {isActive ? 'Hide' : 'Show'} </button>
      </div>
      {isActive && <p className="accordion-answer">{answer}</p>}
    </li>
  );
}

export default Faq;