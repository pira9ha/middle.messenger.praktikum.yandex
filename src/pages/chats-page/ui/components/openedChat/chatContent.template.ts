import s from './chatContent.module.scss';

// language=hbs
export default `
    {{{ header }}}
    
    <div class="${s.messagesWrapper}" data-name="messages">
        <div class="${s.messages}">
            {{#each messages }}
                {{{ this }}}
            {{/each}}
        </div>
    </div>
    
    {{{ messageForm }}}
`;
