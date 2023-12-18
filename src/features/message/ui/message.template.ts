import s from './message.module.scss';

// language=hbs
export default `
    <div class="${s.message} {{ variant }}">
        <p class="${s.messageContent}">{{ content }}</p>
        
        <span class="${s.time}">{{ time }}</span>
        {{#if isMainMessage }}
            <span class="${s.isUnread} {{#if is_read }}${s.isRead}{{/if}}"></span>
        {{/if}}
    </div>
`;
