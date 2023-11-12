import s from './userAvatar.module.scss';

// language=hbs
export default `
    <div class="${s.avatarWrapper}">
        {{{ avatar }}}
        <div class="${s.changeAvatar}">Поменять<br>аватар</div>
    </div>
    {{#if name }}
        <span>{{ name }}</span>
    {{/if}}
`;
