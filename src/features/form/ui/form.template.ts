// language=hbs
export default `
    {{#each fields }}
        {{{ this }}}
    {{/each}}
    {{#if uploadInput }}
        {{{ uploadInput }}}
    {{/if}}
    {{#each buttons }}
        {{{ this }}}
    {{/each}}
    {{#if error }}
        {{{ error }}}
    {{/if}}
`;
