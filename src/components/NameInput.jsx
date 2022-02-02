import { Stack, Button, TextField } from '@mui/material';

function NameInput({ value, onChange, onClick }) {
	const handleChange = e => onChange(e);
	const handleClick = e => onClick(e);
	return (
		<Stack direction="row" className="input-container">
			<TextField
				size="small"
				id="name-input"
				type="text"
				value={value}
				label="Enter your name"
				onChange={handleChange}
			/>
			<Button size="small" variant="contained" onClick={handleClick}>
				Submit
			</Button>
		</Stack>
	);
}

export default NameInput;
