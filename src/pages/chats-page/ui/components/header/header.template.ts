import s from './header.module.scss';

// language-hbs
export default `
    <header class="${s.chatHeader}">
        <div class="${s.userMeta}">
            {{> chatAvatar avatar=avatar }}
            {{ userName }}
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="3" height="16" viewBox="0 0 3 16" fill="none">
            <circle cx="1.5" cy="2" r="1.5" fill="#99B800"/>
            <circle cx="1.5" cy="8" r="1.5" fill="#99B800"/>
            <circle cx="1.5" cy="14" r="1.5" fill="#99B800"/>
        </svg>
    </header>
`;