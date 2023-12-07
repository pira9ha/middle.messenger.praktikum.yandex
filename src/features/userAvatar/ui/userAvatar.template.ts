import s from './userAvatar.module.scss';

// language=hbs
export default `
    <div class="${s.avatarWrapper}">
        <img src="{{ avatar }}" alt="{{ altText }}" />
        {{{ avatarEdit }}}
    </div>
    {{#if named }}
        <span>{{ name }}</span>
    {{/if}}
`;
