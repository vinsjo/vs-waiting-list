import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const ENV = {
	API_KEY: import.meta.env.VITE_FIREBASE_API_KEY,
	PROJECT_ID: import.meta.env.VITE_FIREBASE_PROJECT_ID,
	MESSAGING_SENDER_ID: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
	APP_ID: import.meta.env.VITE_FIREBASE_APP_ID,
	MEASUREMENT_ID: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const config = {
	apiKey: ENV.VITE_FIREBASE_API_KEY,
	authDomain: `${ENV.PROJECT_ID}.firebaseapp.com`,
	databaseURL: `https://${ENV.PROJECT_ID}-default-rtdb.europe-west1.firebasedatabase.app`,
	projectId: ENV.PROJECT_ID,
	storageBucket: `${ENV.PROJECT_ID}.appspot.com`,
	messagingSenderId: ENV.MESSAGING_SENDER_ID,
	appId: ENV.APP_ID,
	measurementId: ENV.MEASUREMENT_ID,
};

const app = initializeApp(config);
const db = getDatabase(app);

export { app, db };
