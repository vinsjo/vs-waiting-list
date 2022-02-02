import { useState, useCallback } from 'react';

import NameInput from './components/NameInput';
import NameList from './components/NameList';

import './App.css';
function App() {
	const [names, setNames] = useState([]);
	const [inputValue, setInputValue] = useState('');
	const handleInputChange = useCallback(
		e => {
			setInputValue(e.target.value);
		},
		[inputValue, setInputValue]
	);
	const handleNameSubmit = useCallback(
		e => {
			if (inputValue.length) setNames([...names, inputValue]);
			setInputValue('');
		},
		[names, setNames, inputValue, setInputValue]
	);
	const handleNameDelete = useCallback(
		index => {
			const newNames = [...names];
			newNames.splice(index, 1);
			setNames(newNames);
		},
		[names, setNames]
	);

	return (
		<>
			<NameInput
				value={inputValue}
				onChange={handleInputChange}
				onClick={handleNameSubmit}
			/>
			<NameList names={names} onItemDelete={handleNameDelete} />
		</>
	);
}

export default App;
