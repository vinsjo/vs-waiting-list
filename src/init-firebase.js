import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const config = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: `${import.meta.env.VITE_FIREBASE_PROJECT_ID}.firebaseapp.com`,
	databaseURL: `https://${
		import.meta.env.VITE_FIREBASE_PROJECT_ID
	}-default-rtdb.europe-west1.firebasedatabase.app`,
	projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
	storageBucket: `${import.meta.env.VITE_FIREBASE_PROJECT_ID}.appspot.com`,
	messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_FIREBASE_APP_ID,
	measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(config);
const db = getDatabase(app);

export { app, db };
