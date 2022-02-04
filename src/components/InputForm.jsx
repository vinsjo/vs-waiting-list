function InputForm({ value, onInput, onSubmit }) {
	return (
		<form className="input-form" onSubmit={e => onSubmit(e)}>
			<input
				type="text"
				value={value}
				placeholder="Your name"
				onInput={e => onInput(e)}
			/>
			<button type="submit">Help me</button>
		</form>
	);
}

export default InputForm;
