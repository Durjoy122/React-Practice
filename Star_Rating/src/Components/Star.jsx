
import '../App.css'

function Star({filled, hovered, onClick, onMouseEnter, onMouseLeave}) {
  const classNames = ['star'];
  if(filled) classNames.push('filled');
  if(hovered) classNames.push('hovered');

  return (
    <span
      className={classNames.join(' ')}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      ★
    </span>
  )
}

export default Star
