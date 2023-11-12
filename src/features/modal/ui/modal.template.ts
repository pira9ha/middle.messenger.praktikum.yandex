import s from './modal.module.scss';

// language=hbs
export default `
    <div class="${s.modalWrapper}">
        <div class="${s.modalCard}">
            <span class="${s.modalTitle}">{{ title }}</span>
            {{#if formContext }}
                {{{ this }}}
            {{/if}}
            {{#if buttonContext }}
                {{#each buttonContext }}
                    {{{ this }}}
                {{/each}}
            {{/if}}
        </div>
        {{{ overlay }}}
    </div>
`;
