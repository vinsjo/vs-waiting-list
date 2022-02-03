import { useState, useCallback, useEffect } from 'react';
import InputForm from './components/InputForm';
import NameList from './components/NameList';
import { db } from './init-firebase';
import {
	set,
	push,
	remove,
	ref,
	onChildAdded,
	onChildRemoved,
} from 'firebase/database';
import './App.css';

function App() {
	const userListRef = ref(db, 'users');
	const [users, setUsers] = useState({});
	const [inputValue, setInputValue] = useState('');

	useEffect(
		() =>
			onChildAdded(userListRef, data => {
				if (!data || !data.exists() || users[data.key]) return;
				setUsers({ ...users, [data.key]: data.val() });
			}),
		[db, users, setUsers]
	);

	useEffect(
		() =>
			onChildRemoved(userListRef, data => {
				if (!data || !data.exists() || !users[data.key]) return;
				const remaining = { ...users };
				delete remaining[data.key];
				setUsers(remaining);
			}),
		[db, users, setUsers]
	);

	const handleInput = useCallback(
		e => setInputValue(e.target.value),
		[inputValue, setInputValue]
	);

	const handleSubmit = useCallback(() => {
		const name = inputValue.trim();
		setInputValue('');
		if (!name.length) return;
		set(push(userListRef), {
			name: name,
			timestamp: Date.now(),
		})
			.then(() => {
				console.log('added ', name);
			})
			.catch(e => console.error(e));
	}, [inputValue, setInputValue]);

	const handleDelete = useCallback(
		key => {
			if (!users[key]) return;
			const user = users[key];
			remove(ref(db, `users/${key}`))
				.then(() => {
					console.log('removed ', user.name);
				})
				.catch(e => console.error(e));
		},
		[users, setUsers]
	);

	return (
		<>
			<InputForm
				value={inputValue}
				onInput={handleInput}
				onSubmit={handleSubmit}
			/>
			<NameList users={users} onDelete={handleDelete} />
		</>
	);
}

export default App;
