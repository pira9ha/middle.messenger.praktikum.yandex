import s from './message.module.scss';

// language=hbs
export default `
    <div class="${s.message} {{ variant }}">
        <p>{{ content }}</p>
        
        <span class="${s.time}">{{ time }}</span>
        {{#if isMainMessage }}
            <span class="${s.isUnread} {{#if isRead }}${s.isRead}{{/if}}"></span>
        {{/if}}
    </div>
`;
