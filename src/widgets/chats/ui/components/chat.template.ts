import s from './chat.module.scss';

// language=hbs
export default `
    {{{ avatar }}}
    
    <div class="${s.chatContent}">
        <span class="${s.chatTitle}">{{ userName }}</span>
        <p class="${s.message}">
            {{#if isMainMessage }}
                <em>Вы: </em>
            {{/if}}
            {{ content }}
        </p>
    </div>
    <span class="${s.time}">{{ time }}</span>
    
    {{#if unread_count }}
        <div class="${s.unreadMessages}">{{ unread_count }}</div>
    {{/if}}
`;
