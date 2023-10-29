import s from './userAvatar.module.scss';

// language=hbs
export default `
    <div class="${s.avatar}">
        <div class="${s.avatarWrapper}">
            <img class="${s.avatarImage}" src="{{ avatar }}" alt="">
            <div class="${s.changeAvatar}">Поменять<br>аватар</div>
        </div>
        {{#if name }}
            <span>{{ name }}</span>
        {{/if}}
    </div>
`;