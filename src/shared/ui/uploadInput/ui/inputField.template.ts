import s from './inputField.module.scss';

// language=hbs
export default `
    {{#if file}}
        <div class="${s.file}">{{ file }}</div>
    {{else}}
        {{{ label }}}
    {{/if}}
`;
