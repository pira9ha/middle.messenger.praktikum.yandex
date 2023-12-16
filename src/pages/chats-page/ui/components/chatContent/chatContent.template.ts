import s from './chatContent.module.scss';

// language=hbs
export default `
    {{#if isChatOpen }}
        {{{ chat }}}
    {{ else }}
        <span class="${s.emptyChat}">Выберите чат чтобы отправить сообщение</span>
    {{/if}}
`;
