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
                {{#if isChatOpen }}
                    {{> header chatContext }}
                    <div class="${s.messagesWrapper}">
                        {{#each messagesContext }}
                            {{> message this}}
                        {{/each}}
                        {{> messageInput messageInputContext }}
                    </div>
                {{ else }}
                    <span class="${s.emptyChat}">Выберите чат чтобы отправить сообщение</span>
                {{/if}}
            {{/chatWrapper}}
        </div>
    {{/mainLayout}}
`;
