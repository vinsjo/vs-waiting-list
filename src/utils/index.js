function classNames(...names) {
	return !names || !names.length
		? ''
		: names.filter(name => name && name.length).join(' ');
}

export { classNames };
