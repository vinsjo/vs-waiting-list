import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import RelativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(RelativeTime);

function ElapsedTime({ timestamp, interval = 15000 }) {
	const [start] = useState(
		dayjs(timestamp).isValid() ? dayjs(timestamp) : dayjs()
	);
	const [now, setNow] = useState(dayjs());

	useEffect(() => {
		const intervalID = setInterval(() => setNow(dayjs()), interval);
		return () => clearInterval(intervalID);
	}, [interval, now, setNow]);

	return <>{start.from(now)}</>;
}

export default ElapsedTime;
