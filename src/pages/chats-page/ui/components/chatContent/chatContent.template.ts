import s from './chatContent.module.scss';

// language=hbs
export default `
    {{#if isChatOpen }}
        {{{ header }}}
        <div class="${s.messagesWrapper}">
            {{#each messages }}
                {{{ this }}}
            {{/each}}
            {{{ messageForm }}}
        </div>
    {{ else }}
        <span class="${s.emptyChat}">Выберите чат чтобы отправить сообщение</span>
    {{/if}}
`;
