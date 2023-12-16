import s from './modalContent.module.scss';

// language=hbs
export default `
    <span class="${s.modalTitle}">{{ title }}</span>
    {{#if isCustom }}
        {{{ customForm }}}
    {{/if}}
    {{#if formContext }}
        {{{ form }}}
    {{/if}}
    {{#if buttons }}
        {{#each buttons }}
            {{{ this }}}
        {{/each}}
    {{/if}}
`;
