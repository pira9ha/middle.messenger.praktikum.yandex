import s from './chatPage.module.scss';

// language=hbs
export default `
    {{#> mainLayout }}
        <div class="${s.chatPageLayout}">
            <aside class="${s.chats}">
                {{> link linkContext }}
                {{> input inputContext }}
                {{> chats chatsContext }}
            </aside>

            {{#> chatWrapper}}
                {{#if chatContext }}
                    {{> header chatContext }}
                <div class="${s.messagesWrapper}">
                    {{#each messagesContext }}
                        {{> message this}}
                    {{/each}}
                    
                    <div class="${s.sendInput}">
                        {{> button fileButton }}
                        <textarea
                            class="${s.messageInput}"
                            name="message"
                            placeholder="Сообщение"
                        ></textarea>
                        {{> button sendButton }}
                    </div>
                </div>
                {{ else }}
                    <span class="${s.emptyChat}">Выберите чат чтобы отправить сообщение</span>
                {{/if}}
            {{/chatWrapper}}
        </div>
    {{/mainLayout}}
`;