type TClassNamesParams = [
    className: string | undefined,
    additional: Array<string>,
    mods?: Record<string, boolean>,
]

export const classNames = (...params: TClassNamesParams): string => {
	const [className, additional,  mods] = params;
	const result = [className];

	if (mods) {
		Object.entries(mods).forEach(([key, value]) => {
			if (value) {
				result.push(key);
			}
		});
	}

	if (additional && additional.length) {
		result.concat(additional);
	}

	return result.join(' ');
};