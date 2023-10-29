import s from './message.module.scss';

// language=hbs
export default `
    <div class="${s.messageWrapper} {{#if isMainMessage }}${s.mainMessage}{{/if}}">
        <div class="${s.message} {{#if isMainMessage }}${s.mainMessage}{{/if}}">
            <p>{{ content }}</p>
            <span class="${s.time}">{{ time }}</span>
        </div>
    </div>
`;