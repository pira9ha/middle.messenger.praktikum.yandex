import s from './profileData.module.scss';

// language=hbs
export default `
    <div class="${s.dataWrapper}">
        {{#each data }}
            <div class="${s.dataField}">
                <span>{{ this.field }}</span>
                <span class="${s.value}">{{ this.value }}</span>
            </div>
        {{/each}}
    </div>
        
    <div class="${s.controlWrapper}">
        {{#each linksContext }}
            {{> link this }}
        {{/each}}

        {{#each buttonsContext }}
            {{> button this }}
        {{/each}}
    </div>
`;
