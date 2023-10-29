type TConvertDateProps = {
    date: string | Date;
    format?: 'time' | 'full';
}

type TDateReturn = string

const DAYS = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
const MONTHS = ['Янв', 'Фев', 'Марта', 'Апр', 'Мая', 'Июня', 'Июля', 'Авг', 'Сен', 'Окт', 'Нояб', 'Дек'];
const DAY_TIME = (24 * 3600 + 60 * 60 + 60) * 1000;

function getWeekDay(date: Date): TDateReturn {
	return DAYS[date.getDay()];
}

function getTextDay(date: Date): TDateReturn {
	const currentYear = new Date().getFullYear();
	const year = currentYear !== date.getFullYear() ? '' : date.getFullYear();

	return `${date.getDay()} ${MONTHS[date.getMonth()]} ${year}`;
}

function getCurrentFormatDate(date: Date): TDateReturn {
	const currentTime = Date.now();
	const sendTime = date.getTime();
	const weekTime = DAY_TIME * 7;

	switch (true) {
	case Math.abs(currentTime - sendTime) <= DAY_TIME: {
		return convertDate({ date, format: 'time' });
	}
	case Math.abs(currentTime - sendTime) <= weekTime: {
		return getWeekDay(date);
	}
	default: {
		return getTextDay(date);
	}
	}
}

export function convertDate(params: TConvertDateProps): TDateReturn {
	// debugger
	let { date } = params;
	const format = params?.format ?? 'time';

	if (typeof date === 'string') {
		date = new Date(date);
	}

	switch (format) {
	case 'time': {
		return `${date.getHours()}:${date.getMinutes()}`;
	}
	case 'full': {
		return getCurrentFormatDate(date);
	}
	}
}