import s from './notFoundPage.module.scss';

// language=hbs
export default `
    {{#> mainLayout }}
        <div class="${s.page}">
            <div class="${s.contentWrapper}">
                <span class="${s.errorCode}">{{ errorCode }}</span>
                <span>{{ title }}</span>
            </div>
            {{> link link }}
        </div>
    {{/mainLayout}}
`;