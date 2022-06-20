import { FaTimes } from 'react-icons/fa'

function Task({ text, day, reminder, onDelete, id, onToggle }) {
    return (
        <div className={`task ${reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(id)}>
            <h3>{text}
                <FaTimes style={{ color: '#ff844b', cursor: 'pointer' }} onClick={() => onDelete(id)} />
            </h3>
            <p>{day}</p>
        </div>
    )
}

export default Task