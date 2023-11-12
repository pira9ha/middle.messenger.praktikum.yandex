import s from './statusError.module.scss';

// language=hbs
export default `
    <span class="${s.errorCode}">{{ errorCode }}</span>
    <span>{{ title }}</span>
`;
