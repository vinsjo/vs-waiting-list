import { BiXCircle } from 'react-icons/bi';

function NameList({ entries, onItemDelete }) {
	return (
		<ul className="name-list">
			{entries.map(({ uid, time, name }) => {
				return (
					<li key={`${uid}`}>
						<div className="time">{time}</div>
						<div className="name">{name}</div>
						<button
							type="button"
							className="delete"
							onClick={() => onItemDelete(uid)}
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
