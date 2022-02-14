import { useEffect, useState } from 'react';

function elapsedTimeString(startTime) {
	if (typeof startTime !== 'number') return '';
	const elapsed = Math.max(Date.now() - startTime, 0);
	function strOutput(val, unit) {
		return `${val} ${unit}${val > 1 ? 's' : ''} ago`;
	}
	const h = Math.floor(elapsed / 3600000) || 0;
	if (h >= 1) return strOutput(h, 'hour');
	const m = Math.floor(elapsed / 60000) % 60 || 0;
	if (m >= 1) return strOutput(m, 'minute');
	return 'Less than a minute ago';
}

function EntryTimer({ start }) {
	const [startTime] = useState(start || Date.now());
	const [text, setText] = useState(() => elapsedTimeString(startTime));
	useEffect(() => {
		const timeout = setTimeout(
			() => setText(elapsedTimeString(startTime)),
			1000
		);
		return () => clearTimeout(timeout);
	}, [startTime, text, setText]);

	return <>{text}</>;
}

export default EntryTimer;
