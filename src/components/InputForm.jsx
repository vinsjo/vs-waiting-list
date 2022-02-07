import { useState, useCallback } from 'react';
import Button from './Button';
import TextInput from './TextInput';
import styles from '../styles/modules/InputForm.module.css';

function InputForm({ onSubmit }) {
	const [inputValue, setInputValue] = useState('');

	const handleChange = useCallback(
		e => setInputValue(e.target.value),
		[inputValue, setInputValue]
	);

	const handleSubmit = useCallback(
		e => {
			e.preventDefault();
			onSubmit && onSubmit(inputValue);
			setInputValue('');
		},
		[inputValue, setInputValue]
	);

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<TextInput
				value={inputValue}
				className={styles.input}
				placeholder={'Your name'}
				onChange={handleChange}
			/>
			<Button type="submit" className={styles.submit}>
				Help me
			</Button>
		</form>
	);
}

export default InputForm;
