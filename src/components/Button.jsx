import { classNames } from '../functions/helpers';
import styles from '../styles/modules/UI.module.css';

function Button({ children, className, value, onClick, type = 'button' }) {
	return (
		<button
			type={type}
			className={classNames(styles.button, className)}
			value={value !== undefined ? value : ''}
			onClick={e => onClick && onClick(e)}
		>
			{children}
		</button>
	);
}

export default Button;
