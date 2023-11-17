import s from './profileInfoField.module.scss';

// language=hbs
export default `
    <span>{{ field }}</span>
    <span class="${s.value}">{{ value }}</span>
`;
