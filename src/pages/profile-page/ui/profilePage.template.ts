import s from './profilePage.module.scss';

// language=hbs
export default `
    {{#> profileLayout }}
        {{> link backButton }}
        
        <div class="${s.profileWrapper}">
            {{> userAvatar avatar }}
            
            {{#if profileContext }}
                {{> profileData profileContext }}
            {{/if}}
    
            {{#if formEditContext }}
                {{> form formEditContext }}
            {{/if}}
    
            {{#if formPasswordContext }}
                {{> form formPasswordContext }}
            {{/if}}
        </div>
    {{/profileLayout}}
`;