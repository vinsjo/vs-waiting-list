import { classNames } from '../utils';
import styles from '../styles/modules/UI.module.css';

function TextInput({ value, placeholder, className, onChange }) {
	return (
		<input
			type="text"
			value={value || ''}
			placeholder={placeholder || ''}
			className={classNames(styles.input, className)}
			onInput={onChange}
			onChange={onChange}
		/>
	);
}

export default TextInput;
