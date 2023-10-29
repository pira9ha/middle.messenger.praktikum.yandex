import s from './message.module.scss';

// language=hbs
export default `
    <div class="${s.messageWrapper} {{#if isMainMessage }}${s.mainMessage}{{/if}}">
        <div class="${s.message}">
            <p>{{ content }}</p>
            <span class="${s.time}">{{ time }}</span>
            {{#if isMainMessage }}
                <span class="${s.isUnread} {{#if isRead }}${s.isRead}{{/if}}"></span>
            {{/if}}
        </div>
    </div>
`;
