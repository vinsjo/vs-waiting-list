import { BiXCircle } from 'react-icons/bi';
import EntryTimer from './EntryTimer';

function NameList({ users, onDelete }) {
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
