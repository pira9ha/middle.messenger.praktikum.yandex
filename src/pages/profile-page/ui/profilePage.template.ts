import s from './profilePage.module.scss';

// language=hbs
export default `
    {{{ link }}}
    
    <div class="${s.profileWrapper}">
        {{{ userAvatar }}}
        
        {{#if profileContext }}
            {{{ profileInfo }}}
        {{/if}}

        {{#if formEditContext }}
            {{{ formEdit }}}
        {{/if}}

        {{#if formPasswordContext }}
            {{{ formPassword }}}
        {{/if}}

        {{#if reset }}
            {{{ reset }}}
        {{/if}}
    </div>
`;
