import s from './chats.module.scss';

// language=hbs
export default `
    <div class="${s.chatsFeed}">
        {{#each chats }}
            <a href="/chats?chat={{ id }}">
                <div class="${s.chat}" id="{{ id }}" data-active="{{ isActive }}">
                    {{> chatAvatar userAvatar }}
                    
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
                </div>
            </a>
        {{/each}}
    </div>
`;
