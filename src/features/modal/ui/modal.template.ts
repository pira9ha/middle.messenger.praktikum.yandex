import s from './modal.module.scss';

// language=hbs
export default `
    <div class="${s.modalWrapper}">
        <div class="${s.modalCard}">
            <span class="${s.modalTitle}">{{ title }}</span>
            {{#if formContext }}
                {{> form formContext }}
            {{/if}}
            {{#if buttonContext }}
                {{#each buttonContext }}
                    {{>button this }}
                {{/each}}
            {{/if}}
        </div>
        <div class="${s.overlay}"></div>
    </div>
`;
