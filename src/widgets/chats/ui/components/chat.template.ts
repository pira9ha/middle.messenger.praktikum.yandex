import s from './chat.module.scss';
// language=hbs
export default `
    {{{ avatar }}}
    
    <div class="${s.chatContent}">
        <span class="${s.chatTitle}">{{ title }}</span>
        <p class="${s.message}">
            {{#if last_message }}
                {{#if isMainMessage }}
                    <em>Вы: </em>
                {{/if}}
                {{ last_message.content }}
            {{/if}}
        </p>
    </div>
    <span class="${s.time}">{{ date }}</span>
    
    {{#if unread_count }}
        <div class="${s.unreadMessages}">{{ unread_count }}</div>
    {{/if}}
`;
