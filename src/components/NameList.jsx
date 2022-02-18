import { BsFillCheckCircleFill } from 'react-icons/bs';
import ElapsedTime from './ElapsedTime';
import Button from './Button';
import styles from '../styles/modules/NameList.module.css';

function NameList({ users, onDelete }) {
	function createListItem([key, value]) {
		const { name, timestamp } = value;
		return (
			<li key={key} className={styles.listItem}>
				<div className={styles.timer}>
					<ElapsedTime timestamp={timestamp} />
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
			{Object.entries(users)
				.sort((a, b) => a[1].timestamp - b[1].timestamp)
				.map(createListItem)}
		</ul>
	);
}

export default NameList;
