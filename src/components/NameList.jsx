import { BsFillCheckCircleFill } from 'react-icons/bs';
import EntryTimer from './EntryTimer';
import Button from './Button';
import styles from '../styles/modules/NameList.module.css';

function NameList({ users, onDelete }) {
	function createListItem([key, value]) {
		const { name, timestamp } = value;
		return (
			<li key={key} className={styles.listItem}>
				<div className={styles.timer}>
					<EntryTimer timestamp={timestamp} />
				</div>
				<div>{name}</div>
				<Button
					className={styles.check}
					value={key}
					onClick={() => onDelete(key)}
				>
					<BsFillCheckCircleFill />
				</Button>
			</li>
		);
	}

	return (
		<ul className={styles.list}>
			{Object.entries(users).map(createListItem)}
		</ul>
	);
}

export default NameList;
