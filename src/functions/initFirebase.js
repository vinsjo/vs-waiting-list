import { initializeApp } from 'firebase/app';
import { v4 as uuidv4 } from 'uuid';
import date from 'date-and-time';
import {
	getDatabase,
	ref,
	set,
	get,
	push,
	remove,
	onChildAdded,
	onChildRemoved,
} from 'firebase/database';

const app = initializeApp({
	apiKey: import.meta.env.VITE_API_KEY,
	authDomain: import.meta.env.VITE_AUTH_DOMAIN,
	databaseURL: import.meta.env.VITE_DB_URL,
	projectId: 'vs-waiting-list',
	storageBucket: 'vs-waiting-list.appspot.com',
	messagingSenderId: '1007126558499',
	appId: '1:1007126558499:web:88cc14ea5a862a1e0b7e96',
	measurementId: 'G-3KX0LLS1B8',
});

const db = getDatabase(app);

const nameListRef = ref(db, 'users');

function addEntry(name) {
	const entry = {
		uid: uuidv4(),
		time: date.format(new Date(), 'HH:mm:ss'),
		name: name.trim(),
	};
	set(push(nameListRef), entry)
		.then(() => {
			console.log(`Added ${name}`);
		})
		.catch(e => {
			console.log(e);
			console.log(`Failed adding ${name}`);
		});
	return entry;
}

async function getEntries() {
	try {
		const snapshot = await get(nameListRef);
		const val = snapshot.val();
		if (!val) throw 'No entries exists';
		return Object.entries(val).reduce(
			(entries, [key, props]) => [...entries, { ...props, key: key }],
			[]
		);
	} catch (e) {
		console.error(e);
		return [];
	}
}

function removeEntry({ key }) {
	remove(ref(db, `users/${key}`));
}

export { app, db, addEntry, getEntries, removeEntry };
