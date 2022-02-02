function InputForm({ value, onInput, onSubmit }) {
	return (
		<form
			className="input-form"
			onSubmit={e => {
				e.preventDefault();
				onSubmit(e);
			}}
		>
			<input
				type="text"
				value={value}
				label="Enter your name"
				onInput={e => onInput(e)}
			/>
			<button type="submit">Submit</button>
		</form>
	);
}

export default InputForm;
