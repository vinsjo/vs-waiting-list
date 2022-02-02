import { useState, useCallback } from 'react';
import date from 'date-and-time';
import { v4 as uuidv4 } from 'uuid';
import InputForm from './components/InputForm';
import NameList from './components/NameList';
import { addEntry, removeEntry } from './functions/initFirebase';
import './App.css';

function App() {
	const [entries, setEntries] = useState([]);
	const [inputValue, setInputValue] = useState('');

	useCallback(() => {}, [entries, setEntries]);

	const onInputChange = useCallback(
		e => setInputValue(e.target.value),
		[inputValue, setInputValue]
	);
	const onNameSubmit = useCallback(() => {
		const value = inputValue.trim();
		if (!value.length) return;
		setEntries([...entries, addEntry(value)]);
		setInputValue('');
	}, [entries, setEntries, inputValue, setInputValue]);

	const onDelete = useCallback(
		uid => {
			const i = entries.findIndex(entry => entry.uid === uid);
			if (i < 0) return;
			const remaining = [...entries];
			removeEntry(remaining.splice(i, 1));
			setEntries(remaining);
		},
		[entries, setEntries]
	);

	return (
		<>
			<InputForm
				value={inputValue}
				onInput={onInputChange}
				onSubmit={onNameSubmit}
			/>
			<NameList entries={entries} onItemDelete={onDelete} />
		</>
	);
}

export default App;
