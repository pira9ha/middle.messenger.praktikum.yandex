import s from './profileInfo.module.scss';

// language=hbs
export default `
    <div class="${s.dataWrapper}">
        {{#each info }}
            <div class="${s.dataField}">
                <span>{{ this.field }}</span>
                <span class="${s.value}">{{ this.value }}</span>
            </div>
        {{/each}}
    </div>
        
    {{{ controls }}}
`;
