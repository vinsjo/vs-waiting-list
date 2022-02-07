import { useState, useCallback, useEffect } from 'react';
import InputForm from './components/InputForm';
import NameList from './components/NameList';
import UIFx from 'uifx';
import { db } from './init-firebase';
import {
	set,
	push,
	remove,
	ref,
	onChildAdded,
	onChildRemoved,
} from 'firebase/database';

import './styles/App.css';

import emptyFaviconUrl from './assets/favicon.svg';
import helpFaviconUrl from './assets/favicon.help.svg';
import alertSound from './assets/alert.wav';

const alert = new UIFx(alertSound, { volume: 0.25 });

function App() {
	const userListRef = ref(db, 'users');
	const [startTime] = useState(Date.now());
	const [users, setUsers] = useState({});

	useEffect(() => {
		return onChildAdded(userListRef, data => {
			if (!data || !data.exists() || users[data.key]) return;
			setUsers({ ...users, [data.key]: data.val() });
			if (Date.now() - startTime > 1000) alert.play();
		});
	}, [db, users, setUsers]);

	useEffect(() => {
		return onChildRemoved(userListRef, data => {
			if (!data || !data.exists() || !users[data.key]) return;
			const remaining = { ...users };
			delete remaining[data.key];
			setUsers(remaining);
		});
	}, [db, users, setUsers]);

	useEffect(() => {
		const count = Object.keys(users).length;
		document.title = !count ? 'Waiting List' : `(${count}) - Waiting List`;
		document.querySelector('#favicon').href = !count
			? emptyFaviconUrl
			: helpFaviconUrl;
	}, [users, setUsers]);

	const handleSubmit = useCallback(
		input => {
			const name = input.trim();
			if (!name.length) return;
			set(push(userListRef), {
				name: name,
				timestamp: Date.now(),
			})
				.then(() => {
					console.log('added ', name);
				})
				.catch(e => console.error(e));
		},
		[users, setUsers]
	);

	const handleDelete = useCallback(
		key => {
			if (!key || !users[key]) return;
			remove(ref(db, `users/${key}`))
				.then(() => {
					console.log('removed ', users[key].name);
				})
				.catch(e => console.error(e));
		},
		[users, setUsers]
	);

	return (
		<>
			<InputForm onSubmit={handleSubmit} />
			<NameList users={users} onDelete={handleDelete} />
		</>
	);
}

export default App;
