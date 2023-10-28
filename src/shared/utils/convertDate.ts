type TConvertDateProps = {
    date: string | Date;
    format?: 'time' | 'full';
}

type TDateReturn = string

const DAYS = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
const DAY_TIME = 24 * 3600 + 60 * 60 + 60;

function getWeekDay(date: Date): TDateReturn {
    return DAYS[date.getDay()];
}

function getCurrentFormatDate(date: Date): TDateReturn {
    const currentTime = Date.now();
    const sendTime = date.getTime();
    const weekTime = DAY_TIME * 7;

    switch (true) {
        case sendTime - currentTime <= DAY_TIME: {
            return convertDate({date, format: 'time'});
        }
        case sendTime - currentTime <= weekTime: {
            return getWeekDay(date);
        }
        default: {
            return `${date.getDay()}.${date.getMonth() + 1}.${date.getFullYear()}`;
        }
    }
}

function convertDate(params: TConvertDateProps): TDateReturn {
    let { date } = params;
    const format = params?.format ?? 'time';

    if (typeof date === 'string') {
        date = new Date(date);
    }

    if (format === 'time') {
        return `${date.getHours()}:${date.getMinutes()}`;
    }
    return getCurrentFormatDate(date);
}