import s from './profileInfo.module.scss';

// language=hbs
export default `
    <div class="${s.dataWrapper}">
        {{#each info }}
            {{{ this }}}
        {{/each}}
    </div>
        
    {{{ controls }}}
`;
