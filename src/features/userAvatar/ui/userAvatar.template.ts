import s from './userAvatar.module.scss';

// language=hbs
export default `
    <div class="${s.avatarWrapper}">
        {{{ avatar }}}
        {{{ avatarEdit }}}
    </div>
    {{#if name }}
        <span>{{ name }}</span>
    {{/if}}
`;
