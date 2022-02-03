import { BiXCircle } from 'react-icons/bi';
import EntryTimer from './EntryTimer';
import date from 'date-and-time';

function NameList({ users, onDelete, timeFormat = 'YY-MM-DD HH:mm:ss' }) {
	const formatTime = ts => date.format(new Date(ts), timeFormat);
	return (
		<ul className="name-list">
			{Object.entries(users).map(([key, { name, timestamp }]) => {
				return (
					<li key={key}>
						<EntryTimer start={timestamp} />
						<div className="name">{name}</div>
						<button
							type="button"
							className="delete"
							onClick={() => onDelete(key)}
						>
							<BiXCircle />
						</button>
					</li>
				);
			})}
		</ul>
	);
}

export default NameList;
