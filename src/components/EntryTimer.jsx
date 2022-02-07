import { useEffect, useState } from 'react';

function EntryTimer({ start }) {
	const [startTime] = useState(start || Date.now());
	const [elapsedTime, setElapsedTime] = useState(
		!startTime ? 0 : Math.max(Date.now() - startTime, 0)
	);
	const [output, setOutput] = useState('');

	function getOutputString(ms) {
		if (!ms) return '';
		function strOutput(val, unit) {
			return `${val} ${unit}${val > 1 ? 's' : ''} ago`;
		}
		const h = Math.floor(ms / 3600000) || 0;
		if (h >= 1) return strOutput(h, 'hour');
		const m = Math.floor(ms / 60000) % 60 || 0;
		if (m >= 1) return strOutput(m, 'minute');
		return 'Less than a minute ago';
	}

	useEffect(
		() => setOutput(getOutputString(elapsedTime)),
		[elapsedTime, setElapsedTime]
	);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setElapsedTime(Math.max(Date.now() - startTime, 0));
		}, 1000);
		return () => clearTimeout(timeout);
	}, [startTime, elapsedTime, setElapsedTime]);

	return <>{output}</>;
}

export default EntryTimer;
