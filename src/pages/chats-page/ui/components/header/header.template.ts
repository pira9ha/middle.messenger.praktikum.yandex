import s from './header.module.scss';

// language-hbs
export default `
    <div class="${s.userMeta}">
        {{{ avatar }}}
        {{ chatName }}
    </div>
    {{{ dropdownMenu }}}
`;
