import s from './messageInput.module.scss';

// language=hbs
export default `
    <div class="${s.sendInput}">
        {{> button fileButton }}
        <textarea
                class="${s.messageInput}"
                name="message"
                placeholder="Сообщение"
        ></textarea>
        {{> button sendButton }}
    </div>
`;
