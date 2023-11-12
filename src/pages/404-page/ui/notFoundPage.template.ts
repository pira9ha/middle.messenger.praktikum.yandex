import s from './notFoundPage.module.scss';

// language=hbs
export default `
    <div class="${s.page}">
        <div class="${s.contentWrapper}">
            <span class="${s.errorCode}">{{ errorCode }}</span>
            <span>{{ title }}</span>
        </div>
        {{> link link }}
    </div>
`;
